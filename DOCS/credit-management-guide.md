# GitHub Copilot Credit Management & Configuration Guide

## 🎯 Objetivo

Otimizar o uso de créditos do GitHub Copilot através de configurações estratégicas e práticas de uso eficiente.

---

## ⚙️ Configurações do VS Code

### 1. **chat.editor.maxOutputTokens**

**Descrição**: Controla o número máximo de tokens que o Copilot pode retornar em uma única resposta.

**Valores Possíveis**:

- Mínimo: 1024
- Default: 4096
- Máximo: 16384

**Recomendação v2.1**: `8192` (dobro do default)

**Justificativa**:

```yaml
Vantagens:
  - Permite respostas mais completas e self-contained
  - Reduz necessidade de múltiplos requests para mesma tarefa
  - Melhor para outputs estruturados (código, arquivos de config)
  - Suporta os checkpoints implementados nos modes v2.1

Desvantagens de valores muito altos (16384):
  - Maior consumo de créditos por request
  - Risco de respostas excessivamente verbosas
  - Possível waste se mode não usar todo o espaço disponível

Desvantagens de valores muito baixos (2048):
  - Respostas fragmentadas e incompletas
  - Necessidade de múltiplos requests (pior eficiência)
  - Frustração com "response hit the length limit"
```

**Como Aplicar**:

```json
// .vscode/settings.json
{
  "chat.editor.maxOutputTokens": 8192
}
```

---

### 2. **chat.agent.maxRequests**

**Descrição**: Número máximo de requests que o Copilot pode fazer em uma única sessão de chat.

**Valores Possíveis**:

- Mínimo: 1
- Default: 3
- Máximo: 10+

**Recomendação v2.1**: `3` (manter default)

**Justificativa**:

```yaml
Por que manter em 3:
  - Força os modes a entregar valor em poucas iterações
  - Alinha com max_iterations reduzidos (2-3) nos modes v2.1
  - Previne loops excessivos de refinamento
  - Incentiva planejamento e outputs bem estruturados

Quando aumentar para 5:
  - Projetos complexos com múltiplas fases bem definidas
  - Debugging iterativo de problemas difíceis
  - Desenvolvimento com muitas dependências e integrações
  - Trade-off consciente: mais créditos por melhor resultado
```

**Como Aplicar**:

```json
// .vscode/settings.json
{
  "chat.agent.maxRequests": 3
}
```

---

### 3. **chat.agent.editRequests**

**Descrição**: Número máximo de edições de arquivo que o Copilot pode fazer em uma única sessão.

**Valores Possíveis**:

- Mínimo: 1
- Default: 3
- Máximo: 10+

**Recomendação v2.1**: `5` (aumentar para implementação)

**Justificativa**:

```yaml
Por que aumentar para 5:
  - Software Developer pode precisar editar: model, controller, service, test, config
  - Operations Engineer pode criar: ci.yml, runbook.md, monitoring scripts, security config
  - Quality Assurance pode gerar: múltiplos test files, test fixtures, config
  - Permite batch de edições relacionadas em single request

Quando aumentar para 8-10:
  - Refactoring large-scale (múltiplos arquivos relacionados)
  - Setup de novo módulo (models, views, controllers, tests, configs)
  - Migration de código (atualizar muitos arquivos simultaneamente)
```

**Como Aplicar**:

```json
// .vscode/settings.json
{
  "chat.agent.editRequests": 5
}
```

---

### 4. **github.copilot.chat.manageOverages**

**Descrição**: Controla se o Copilot pode exceder os limites do plano e gerar cobranças adicionais.

**Valores Possíveis**:

- `false` (default): Bloqueia overages, previne cobranças extras
- `true`: Permite overages, pode gerar custos adicionais

**Recomendação v2.1**: `false` (bloquear overages)

**Justificativa**:

```yaml
Por que bloquear:
  - Previne surpresas no billing
  - Força uso consciente e planejado de créditos
  - Incentiva otimização dos modes e prompts
  - Protege contra loops acidentais de requests

Quando permitir (true):
  - Deadlines críticos onde custo não é limitante
  - Projetos de alta prioridade
  - Uso corporativo com budget aprovado
  - Sempre com monitoramento ativo de consumo
```

**Como Aplicar**:

```json
// .vscode/settings.json
{
  "github.copilot.chat.manageOverages": false
}
```

---

## 📊 Planos do GitHub Copilot (Referência)

### **Copilot Individual** ($10/mês ou $100/ano)

- Completions ilimitadas
- Chat ilimitado
- CLI access
- Mobile app

### **Copilot Business** ($19/usuário/mês)

- Tudo do Individual
- Organization-level policies
- IP indemnity
- Enterprise-grade security

### **Copilot Enterprise** ($39/usuário/mês)

- Tudo do Business
- Personalized chat (codebase context)
- Documentation Q&A
- Pull request summaries
- Fine-tuned models

**Nota**: A partir de 2024, os planos Individual e Business têm uso ilimitado, mas com rate limits para prevenir abuse. Enterprise tem limites mais altos.

---

## 🎯 Estratégias de Otimização de Créditos

### 1. **Prompts Bem Estruturados**

**❌ Evitar** (gera múltiplos requests):

```
Usuário: "Preciso implementar autenticação"
Copilot: "Pode me dar mais detalhes sobre..."
Usuário: "É com JWT"
Copilot: "Qual banco de dados..."
Usuário: "PostgreSQL"
[3 requests gastos só em clarificação]
```

**✅ Preferir** (1 request eficiente):

```
Usuário: "Implementar autenticação JWT com:
- PostgreSQL como storage
- Express.js backend
- Refresh token rotation
- Role-based access control (admin, user)
- Rate limiting (100 req/min)

Use Software Developer mode e siga templates disponíveis."
```

### 2. **Uso de Templates e Context**

**❌ Evitar** (Copilot recria tudo do zero):

```
"Crie um CI/CD pipeline para Node.js"
[Copilot gera pipeline genérico sem contexto do projeto]
```

**✅ Preferir** (leverage templates):

```
"Use Operations Engineer mode.
Base no templates/ci.yml para criar pipeline Node.js com:
- Lint (ESLint)
- Test (Jest, coverage 80%+)
- Security scan (npm audit, Snyk)
- Deploy to AWS Elastic Beanstalk
- Staging + Production environments"
```

### 3. **Checkpoints Estratégicos**

**Como Funciona nos Modes v2.1**:

```
Iteration 1:
✅ Core implementation (modelos, endpoints principais)
⚠️ CHECKPOINT: "Phase 1 complete. Continue to Phase 2?"
[User pode revisar e ajustar antes de continuar]

Iteration 2:
✅ Polish (edge cases, testes, docs)
[Entrega final completa]
```

**Benefício**:

- Permite correção de rumo antes de gastar créditos em direção errada
- Evita retrabalho (re-requests)
- Mantém controle sobre o progresso

### 4. **Mode Selection Eficiente**

**Use o mode certo para cada tarefa**:

| Tarefa                | Mode Correto              | Créditos Esperados |
| --------------------- | ------------------------- | ------------------ |
| Implementação feature | Software Developer        | 1-2 requests       |
| Design arquitetura    | Software Architect        | 2 requests         |
| Setup CI/CD           | Operations Engineer       | 2 requests         |
| Criação de testes     | Quality Assurance         | 1-2 requests       |
| Design UX             | UX UI Designer            | 2-3 requests       |
| Bug investigation     | Quality Assurance (debug) | 1-2 requests       |

**❌ Evitar usar mode errado**:

```
Software Developer para design de arquitetura
→ Resultado subótimo, necessidade de refazer (desperdício)

Software Architect para implementação de código
→ Arquiteto gera specs, não código final (precisa passar para Developer)
```

---

## 📈 Monitoramento de Uso

### **Como Verificar Consumo**

1. **GitHub Settings**:

   ```
   GitHub.com → Settings → Copilot → Usage
   ```

   - Visualize requests diários/mensais
   - Identifique padrões de uso
   - Planeje otimizações

2. **VS Code Extension**:

   ```
   Command Palette (Ctrl+Shift+P) → "GitHub Copilot: View Usage"
   ```

   - Veja estatísticas locais
   - Identifique sessions que consumiram mais

3. **Métricas a Observar**:
   - Requests por dia
   - Tokens consumidos por request
   - Taxa de requests bem-sucedidos vs. rejeitados
   - Tempo médio de resposta

---

## 🎯 Configuração Recomendada v2.1

### **Para Uso Geral (Balanced)**

```json
// .vscode/settings.json
{
  "chat.editor.maxOutputTokens": 8192,
  "chat.agent.maxRequests": 3,
  "chat.agent.editRequests": 5,
  "github.copilot.chat.manageOverages": false
}
```

**Profile**: Desenvolvedor individual com projeto médio
**Consumo esperado**: 50-100 requests/dia
**Adequado para**: Desenvolvimento diário, features normais, debugging comum

---

### **Para Projetos Complexos (High-Output)**

```json
// .vscode/settings.json
{
  "chat.editor.maxOutputTokens": 12288,
  "chat.agent.maxRequests": 5,
  "chat.agent.editRequests": 8,
  "github.copilot.chat.manageOverages": false
}
```

**Profile**: Arquiteto ou tech lead em projeto grande
**Consumo esperado**: 100-200 requests/dia
**Adequado para**: Refactoring large-scale, setup de infraestrutura, migrations

---

### **Para Economizar Créditos (Budget-Conscious)**

```json
// .vscode/settings.json
{
  "chat.editor.maxOutputTokens": 4096,
  "chat.agent.maxRequests": 2,
  "chat.agent.editRequests": 3,
  "github.copilot.chat.manageOverages": false
}
```

**Profile**: Uso ocasional ou budget limitado
**Consumo esperado**: 20-50 requests/dia
**Adequado para**: Consultas pontuais, pequenas features, code review

---

## ✅ Checklist de Otimização

### **Setup Inicial**

- [ ] Configurar `.vscode/settings.json` com valores recomendados
- [ ] Definir `manageOverages: false` para prevenir surpresas
- [ ] Testar com prompt simples para validar configurações

### **Uso Diário**

- [ ] Preparar prompts completos com todo contexto necessário
- [ ] Selecionar mode apropriado para cada tarefa
- [ ] Aproveitar templates disponíveis (ci.yml, architecture.md, etc.)
- [ ] Revisar checkpoints antes de continuar próxima fase

### **Monitoramento**

- [ ] Verificar usage semanal no GitHub Settings
- [ ] Identificar patterns de alto consumo
- [ ] Ajustar configurações baseado em necessidade real
- [ ] Documentar prompts eficientes para reuso

### **Otimização Contínua**

- [ ] Manter modes atualizados (v2.1+)
- [ ] Usar feedback dos checkpoints para melhorar prompts
- [ ] Compartilhar best practices com equipe
- [ ] Revisar configurações mensalmente

---

## 🔄 Comparação: Antes vs. Depois (v2.1)

### **Cenário: Implementação de Feature Completa**

#### **Antes (v2.0, sem otimizações)**

```
Software Developer mode:
- max_iterations: 3
- maxOutputTokens: 4096 (default)
- maxRequests: 3 (default)

Resultado:
Request 1: Implementação inicial (hit length limit)
Request 2: Completar implementação
Request 3: Testes
Request 4: Fixes e polish (precisa mais requests!)
Request 5: Documentação

Total: 5 requests, ~20,000 tokens
Problema: Ultrapassou maxRequests (3), precisou reiniciar session
```

#### **Depois (v2.1, otimizado)**

```
Software Developer mode v2.1:
- max_iterations: 2
- maxOutputTokens: 8192 (configurado)
- maxRequests: 3 (suficiente)
- editRequests: 5 (configurado)

Resultado:
Request 1 (Iteration 1): Core implementation + basic tests
  ✅ Modelos, controllers, basic tests
  ⚠️ CHECKPOINT: "Phase 1 complete. Continue?"

Request 2 (Iteration 2): Polish + validation
  ✅ Edge cases, comprehensive tests, docs
  ✅ All deliverables complete

Total: 2 requests, ~14,000 tokens
Sucesso: Dentro de limits, output completo, menos créditos gastos
```

### **Economia Calculada**

- **Requests**: 5 → 2 (-60%)
- **Tokens**: ~20,000 → ~14,000 (-30%)
- **Sessions**: 2 → 1 (não precisou reiniciar)
- **Créditos**: ~5x → ~2x (melhor ROI)

---

## 🚀 Próximos Passos

1. **Aplicar configurações**:

   ```bash
   # As configurações já estão em .vscode/settings.json
   # Reiniciar VS Code para aplicar
   ```

2. **Testar com prompt real**:

   - Use Software Developer mode com feature pequena
   - Observe checkpoints e consumo
   - Ajuste se necessário

3. **Monitorar por 1 semana**:

   - Verificar GitHub Settings → Usage
   - Identificar patterns
   - Refinar configurações

4. **Documentar learnings**:
   - Prompts que funcionaram bem
   - Configurações ideais para seu workflow
   - Share com equipe

---

## 📚 Referências

- [GitHub Copilot Pricing](https://github.com/features/copilot#pricing)
- [VS Code Copilot Settings](https://code.visualstudio.com/docs/copilot/copilot-settings)
- [Copilot Usage Dashboard](https://github.com/settings/copilot)
- [Modes Registry v2.1](./modes-registry.md)
- [Checkpoint Optimizations v2.1](./checkpoint-optimizations.md)

---

**Versão**: 2.1  
**Data**: October 2025  
**Autor**: AI Agent (based on VS Code limitations and credit optimization needs)
