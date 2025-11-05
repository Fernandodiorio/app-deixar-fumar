# 💳 Configuração do Stripe - RespiraPT

Este guia mostra como configurar o Stripe para pagamentos no RespiraPT.

## 📋 Pré-requisitos

1. Conta no Stripe (crie em https://stripe.com se não tiver)
2. Projeto Next.js configurado
3. Variáveis de ambiente configuradas

---

## 🔑 Passo 1: Obter as Chaves do Stripe

### 1.1. Dashboard do Stripe

1. Acesse: https://dashboard.stripe.com
2. Certifique-se de estar em **"Test mode"** (modo de teste) para desenvolvimento
3. No menu lateral, clique em **"Developers"** → **"API keys"**

### 1.2. Chaves de API

Você verá duas chaves:

- **Publishable key** (chave pública) - Começa com `pk_test_...` ou `pk_live_...`
- **Secret key** (chave secreta) - Começa com `sk_test_...` ou `sk_live_...`

⚠️ **IMPORTANTE**: 
- Use `pk_test_` e `sk_test_` para desenvolvimento
- Use `pk_live_` e `sk_live_` apenas em produção

### 1.3. Adicionar ao .env.local

Adicione as seguintes variáveis ao arquivo `.env.local`:

```env
# Stripe Keys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxx
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxxxxxxx

# Stripe Price ID (veja Passo 2)
STRIPE_PRICE_ID=price_xxxxxxxxxxxxxxxxxxxxx

# URL da aplicação (para redirects)
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Stripe Webhook Secret (veja Passo 3)
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxxxxxxxxxx
```

---

## 💰 Passo 2: Criar Produto e Preço no Stripe

### 2.1. Criar Produto

1. No Stripe Dashboard, clique em **"Products"** no menu lateral
2. Clique em **"Add product"**
3. Preencha:
   - **Name**: `RespiraPT Premium`
   - **Description**: `Plano premium do RespiraPT com acesso completo`
   - **Pricing model**: `Standard pricing`
   - **Price**: `9.99` (ou o valor que preferir)
   - **Currency**: `EUR` (ou sua moeda)
   - **Billing period**: `Monthly` (mensal) ou `One time` (único)

4. Clique em **"Save product"**

### 2.2. Copiar Price ID

Após criar o produto, você verá um **Price ID** (começa com `price_...`). Copie este ID e adicione ao `.env.local`:

```env
STRIPE_PRICE_ID=price_xxxxxxxxxxxxxxxxxxxxx
```

---

## 🔔 Passo 3: Configurar Webhook

### 3.1. Criar Webhook Endpoint

1. No Stripe Dashboard, clique em **"Developers"** → **"Webhooks"**
2. Clique em **"Add endpoint"**
3. Preencha:
   - **Endpoint URL**: 
     - Desenvolvimento (usando Stripe CLI): `http://localhost:4242/api/webhook`
     - Produção: `https://seu-dominio.com/api/webhook`
   - **Description**: `RespiraPT Payment Webhook`
   - **Events to send**: Selecione:
     - `checkout.session.completed`
     - `customer.subscription.deleted`
     - `customer.subscription.updated`

4. Clique em **"Add endpoint"**

### 3.2. Obter Webhook Secret

1. Após criar o endpoint, clique nele para abrir os detalhes
2. Copie o **"Signing secret"** (começa com `whsec_...`)
3. Adicione ao `.env.local`:

```env
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxxxxxxxxxx
```

---

## 🧪 Passo 4: Testar Localmente (Desenvolvimento)

### 4.1. Instalar Stripe CLI

**Windows:**
```powershell
# Baixe o instalador em: https://github.com/stripe/stripe-cli/releases
# Ou use Scoop:
scoop install stripe
```

**Mac:**
```bash
brew install stripe/stripe-cli/stripe
```

**Linux:**
```bash
# Baixe de: https://github.com/stripe/stripe-cli/releases
```

### 4.2. Login no Stripe CLI

```bash
stripe login
```

### 4.3. Forward Webhooks

Em um terminal separado, execute:

```bash
stripe listen --forward-to localhost:3000/api/webhook
```

Isso vai mostrar um webhook secret. Use este secret no `.env.local` para desenvolvimento local.

---

## 🚀 Passo 5: Instalar Dependências

No diretório do projeto:

```bash
npm install
```

Isso vai instalar:
- `stripe` - SDK do Stripe para Node.js
- `@stripe/stripe-js` - SDK do Stripe para frontend

---

## ✅ Passo 6: Testar o Fluxo Completo

1. Inicie o servidor:
   ```bash
   npm run dev
   ```

2. Se estiver usando webhook local, inicie o Stripe CLI em outro terminal:
   ```bash
   stripe listen --forward-to localhost:3000/api/webhook
   ```

3. Teste o fluxo:
   - Crie uma conta
   - Complete o onboarding
   - Será redirecionado para `/checkout`
   - Clique em "Começar Agora"
   - Use o cartão de teste: `4242 4242 4242 4242`
   - Use qualquer data futura para expiração
   - Use qualquer CVC de 3 dígitos

4. Após o pagamento, será redirecionado para `/checkout/success`
5. Verifique se o usuário foi atualizado para `premium: true` no Supabase

---

## 📝 Cartões de Teste do Stripe

Para testar diferentes cenários:

| Cartão | Cenário |
|--------|---------|
| `4242 4242 4242 4242` | Pagamento bem-sucedido |
| `4000 0000 0000 0002` | Cartão recusado |
| `4000 0025 0000 3155` | Requer autenticação 3D Secure |

Use qualquer data futura e qualquer CVC de 3 dígitos.

---

## 🔒 Passo 7: Produção

### 7.1. Usar Chaves de Produção

1. No Stripe Dashboard, mude para **"Live mode"**
2. Copie as chaves **live** (`pk_live_...` e `sk_live_...`)
3. Atualize o `.env.local` (ou variáveis de ambiente na Vercel/outro host)

### 7.2. Configurar Webhook de Produção

1. Crie um novo webhook endpoint com a URL de produção
2. Use o signing secret do webhook de produção
3. Adicione ao `.env.local` ou variáveis de ambiente

### 7.3. Deploy

Certifique-se de adicionar todas as variáveis de ambiente no seu provedor de hosting (Vercel, etc.)

---

## 🐛 Resolução de Problemas

### Erro: "Stripe não inicializado"
- Verifique se `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` está no `.env.local`
- Reinicie o servidor após adicionar variáveis

### Erro: "No signature" no webhook
- Verifique se o webhook secret está correto
- Para desenvolvimento local, use o secret do `stripe listen`

### Pagamento não atualiza premium
- Verifique se o webhook está configurado corretamente
- Verifique os logs do webhook no Stripe Dashboard
- Certifique-se de que o `userId` está sendo passado corretamente

---

## 📚 Recursos

- [Documentação do Stripe](https://stripe.com/docs)
- [Stripe Checkout](https://stripe.com/docs/payments/checkout)
- [Stripe Webhooks](https://stripe.com/docs/webhooks)

---

## ✨ Pronto!

Agora o Stripe está configurado e funcionando! 🎉

Qualquer dúvida, consulte a documentação do Stripe ou entre em contato.
