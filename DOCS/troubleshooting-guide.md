# Troubleshooting Guide: Common Prompt Issues & Solutions

Este guia diagnostica e resolve problemas comuns ao usar chat modes, oferecendo soluções práticas e padrões de recuperação.

---

## 🚨 **Problemas Mais Comuns**

### **1. Resultados Genéricos ou Superficiais**

#### **Sintomas:**
- Respostas muito genéricas e básicas
- Falta de especificidade técnica
- Soluções que não consideram contexto real
- Output parece "copy-paste" de documentação

#### **Causas Raízes:**
```
❌ Prompt muito vago: "@Developer: Crie uma API"
❌ Falta de contexto: Não menciona stack, requisitos, constraints
❌ Sem critérios de qualidade: Não define o que é "sucesso"
❌ Persona inadequada: Usando mode genérico para tarefa específica
```

#### **Soluções:**
```yaml
✅ Adicione contexto específico:
  - Stack tecnológico atual
  - Constraints e limitações
  - Volume/scale esperado
  - Critérios de aceitação

✅ Use templates estruturados:
  - "Contexto: [situação atual]"
  - "Objetivo: [resultado esperado]"
  - "Constraints: [limitações]"
  - "Success criteria: [como medir sucesso]"

✅ Inclua informações técnicas relevantes:
  - Versões de tecnologias
  - Ambiente (dev/staging/prod)
  - Recursos disponíveis
  - Timeline e prioridades
```

#### **Exemplo de Recuperação:**
```
ANTES (genérico):
"@Developer: Crie autenticação para o sistema"

DEPOIS (específico):
"@Developer: Implemente autenticação JWT para API REST Node.js/Express:
- Endpoints: login, refresh, logout, forgot-password
- Database: PostgreSQL com Prisma ORM
- Security: bcrypt hashing, rate limiting, 2FA opcional
- Testing: Jest, coverage >90%
- Integration: sistema existing users table
- Deadline: 1 semana
Examine codebase atual em /src/auth/ e siga padrões estabelecidos."
```

---

### **2. Persona Escolhe Soluções Inadequadas**

#### **Sintomas:**
- Solução tecnicamente correta mas inadequada para contexto
- Over-engineering para problema simples
- Under-engineering para problema complexo
- Ignora constraints de budget/tempo

#### **Causas Raízes:**
```
❌ Não especificou constraints reais
❌ Não incluiu contexto de negócio
❌ Falta de informação sobre recursos disponíveis
❌ Persona não entende prioridades
```

#### **Soluções:**
```yaml
✅ Sempre inclua constraints:
  - Budget disponível
  - Timeline realistic
  - Team skills e experience
  - Infrastructure existente

✅ Contextualize business needs:
  - Stage da empresa (startup vs enterprise)
  - Criticidade do sistema
  - Volume de usuários real
  - Growth expectations

✅ Especifique trade-offs aceitos:
  - Performance vs development speed
  - Cost vs reliability
  - Security vs usability
  - Maintainability vs time-to-market
```

#### **Exemplo de Recuperação:**
```
PROBLEMA: @Architect sugeriu microserviços para MVP startup

CAUSA: Prompt não especificou stage da empresa e constraints

SOLUÇÃO:
"@Architect: Reanalise considerando contexto startup (3 developers, 6 meses runway):
- MVP para validar product-market fit
- Budget limitado, prefer managed services
- Team: 2 fullstack junior, 1 senior
- Scale inicial: <1000 usuários
- Priority: speed to market > perfect architecture
Sugira arquitetura simples que pode evoluir futuramente."
```

---

### **3. Persona Não Consegue Acessar Informações Necessárias**

#### **Sintomas:**
- "Não consigo acessar o arquivo X"
- "Preciso mais informações sobre Y"
- Pede informações que você sabe que estão no codebase
- Resultado incompleto por falta de dados

#### **Causas Raízes:**
```
❌ Persona não tem tools adequadas para a tarefa
❌ Arquivos estão fora do workspace
❌ Prompt não orienta onde encontrar informações
❌ Informações estão em formato não acessível
```

#### **Diagnóstico Rápido:**
```yaml
Verifique tools da persona:
- @Developer tem 'codebase'? ✅
- @UX Designer tem 'codebase'? ❌ (só 'search')
- @DevOps tem 'runCommands'? ✅
- @Personal Assistant tem 'fetch'? ❌

Confirme localização dos dados:
- Arquivos estão no workspace? 
- Informações estão em documentação acessível?
- APIs/endpoints estão disponíveis para teste?
```

#### **Soluções por Tipo:**

**Problema: Files não encontrados**
```yaml
✅ Verifique se arquivos estão no workspace atual
✅ Use paths relativos ao workspace root
✅ Para configs externos, copie conteúdo relevante no prompt
✅ Use personas com 'codebase' tool para análise de código
```

**Problema: Persona não tem tools adequadas**
```yaml
✅ @UX Designer precisa analisar código? → Use @Architect primeiro
✅ @Product Manager precisa ver implementação? → Forneça resumo técnico
✅ @Personal Assistant precisa dados externos? → Use @Beast Mode
```

#### **Exemplo de Recuperação:**
```
PROBLEMA: @Security não consegue analisar código de autenticação

DIAGNÓSTICO: @Security tem 'codebase' tool ✅

SOLUÇÃO:
"@Security: Analise implementação de autenticação no codebase atual.
Examine especificamente:
- /src/auth/ (implementação JWT)
- /src/middleware/auth.js (validação)
- /config/security.js (configurações)
- /tests/auth/ (casos de teste)
Identifique vulnerabilidades e gaps de segurança."
```

---

### **4. Output Técnico Demais ou Simples Demais**

#### **Sintomas:**
- Resposta muito técnica para sua audiência
- Ou muito básica para problema complexo
- Falta de balance entre teoria e prática
- Não atende nível de detalhe necessário

#### **Causas Raízes:**
```
❌ Não especificou audiência target
❌ Não definiu nível de detalhe desejado
❌ Persona não entende contexto de quem vai usar
```

#### **Soluções:**
```yaml
✅ Especifique audiência:
  - "Para team junior/senior"
  - "Para apresentar a stakeholders business"
  - "Para documentação técnica"
  - "Para implementação imediata"

✅ Defina formato de output:
  - "Executive summary + detalhes técnicos"
  - "Step-by-step implementation guide"
  - "High-level architecture + decision rationale"
  - "Code examples + explanations"

✅ Inclua contexto de uso:
  - "Para revisão de arquitetura"
  - "Para onboarding de novos devs"
  - "Para compliance audit"
  - "Para troubleshooting em produção"
```

#### **Exemplo de Recuperação:**
```
PROBLEMA: @Architect deu resposta muito técnica para apresentar ao CEO

AJUSTE:
"@Architect: Reformate a arquitetura proposta para apresentação executiva:
- Executive summary (2 min read)
- Business benefits e ROI
- Risk mitigation
- Timeline e milestones
- Investment required
- Appendix com detalhes técnicos
Audience: CEO e Board, background business não técnico."
```

---

### **5. Persona "Trava" ou Não Progride**

#### **Sintomas:**
- Fica pedindo mais informações infinitamente
- Não consegue tomar decisões
- Resposta incompleta que não resolve problema
- "Preciso analisar mais antes de prosseguir"

#### **Causas Raízes:**
```
❌ Problema mal definido ou ambíguo
❌ Muitas variáveis em aberto
❌ Falta de critérios de priorização
❌ Persona inadequada para tipo de decisão
```

#### **Diagnóstico e Soluções:**

**Se persona pede muita informação:**
```yaml
✅ Defina escopo específico e limitado
✅ Priorize informações essenciais vs nice-to-have
✅ Dê exemplos concretos
✅ Estabeleça assumptions razoáveis
```

**Se não consegue decidir:**
```yaml
✅ Forneça critérios de decisão claros
✅ Defina trade-offs aceitáveis
✅ Use constraints para limitar opções
✅ Peça análise com prós/contras
```

#### **Exemplo de Recuperação:**
```
PROBLEMA: @Product Manager ficou pedindo mais research infinitamente

RECOVERY PROMPT:
"@Product Manager: Com informações disponíveis hoje, crie PRD mínimo viável:
- Assume: target market = PMEs brasileiras
- Budget constraint: R$ 100k desenvolvimento
- Timeline: 3 meses para MVP
- Competition: analyze top 3 competitors only
- Features: limit to core value proposition
- Research: use publicly available data only
Focus on decision-making com informação atual, não pesquisa perfeita."
```

---

### **6. Integração Entre Personas Falha**

#### **Sintomas:**
- Uma persona não considera output da anterior
- Contradições entre recomendações
- Handoff information lost
- Retrabalho desnecessário

#### **Causas Raízes:**
```
❌ Não referenciou output da persona anterior
❌ Context switching sem transferir knowledge
❌ Personas com assumptions conflitantes
❌ Falta de definição de entregáveis padronizados
```

#### **Soluções:**
```yaml
✅ Reference explícito de outputs anteriores:
  "Com base no PRD do @Product Manager..."
  "Considerando arquitetura definida pelo @Architect..."
  "Usando especificações do @UX Designer..."

✅ Handoff estruturado:
  - Defina format padrão de entregáveis
  - Include decision rationale
  - Specify assumptions e constraints
  - Document trade-offs made

✅ Cross-validation:
  "@Developer: Review arquitetura do @Architect e identifique gaps"
  "@Security: Validate compliance da solução proposta"
```

#### **Exemplo de Integração Bem-Sucedida:**
```
SEQUÊNCIA INTEGRADA:

1. @Product Manager: "Create PRD for user management system..."
   Output: PRD with user stories, acceptance criteria

2. @UX Designer: "Based on PRD from PM (copy key sections), design UX..."
   Output: Wireframes, user flows

3. @Architect: "Using PRD and UX designs, create technical architecture..."
   Output: System design, API specifications

4. @Developer: "Implement user management following architecture and UX specs..."
   Output: Working implementation

5. @QA Tester: "Test implementation against PRD acceptance criteria..."
   Output: Test results, bug reports
```

---

## 🛠️ **Tools de Diagnóstico Rápido**

### **Checklist de Qualidade de Prompt:**
```yaml
📋 Context Complete?
  - [ ] Domain/industry specified
  - [ ] Current state described  
  - [ ] Constraints listed
  - [ ] Success criteria defined

📋 Technical Details?
  - [ ] Stack/technology mentioned
  - [ ] Scale/volume specified
  - [ ] Performance requirements
  - [ ] Integration points

📋 Scope Bounded?
  - [ ] Timeline realistic
  - [ ] Deliverables specific
  - [ ] Out-of-scope clarified
  - [ ] Dependencies identified

📋 Persona Appropriate?
  - [ ] Has required tools
  - [ ] Matches expertise needed
  - [ ] Can access necessary information
  - [ ] Right level of abstraction
```

### **Quick Fixes por Tipo de Problema:**

| Problema | Quick Fix Template |
|----------|-------------------|
| Muito genérico | Adicione: stack, scale, constraints, success criteria |
| Não funciona | Verifique: tools da persona, access a arquivos, workspace |
| Muito complexo | Adicione: "for [audience]", "focus on practical implementation" |
| Muito simples | Adicione: "enterprise-grade", "production-ready", "scalable" |
| Não integra | Use: "Based on output from @[Previous Persona]..." |
| Não decide | Adicione: "make decision with current info", "assume [X]" |

---

## 🚀 **Recovery Patterns Testados**

### **Pattern 1: Context Enrichment**
```
Se resultado for superficial:
"@[Persona]: Expand your analysis considering:
- [missing context 1]
- [missing context 2]  
- [missing context 3]
Focus on actionable recommendations for [specific situation]."
```

### **Pattern 2: Scope Refinement**
```
Se muito amplo ou complexo:
"@[Persona]: Simplify approach focusing only on:
- [priority 1] 
- [priority 2]
- [priority 3]
Defer [complex items] to future phases."
```

### **Pattern 3: Integration Bridge**
```
Para conectar personas:
"@[Persona 2]: Building on @[Persona 1]'s [deliverable], 
now address [next phase] while maintaining consistency with:
- [key decision from P1]
- [constraint from P1]
- [assumption from P1]"
```

### **Pattern 4: Decision Forcing**
```
Se persona não decide:
"@[Persona]: Given constraints [X, Y, Z], make recommendation choosing between:
Option A: [pros/cons]
Option B: [pros/cons]
Justify decision based on [priority criteria]."
```

---

## 📞 **Emergency Recovery Commands**

### **When All Else Fails:**
```
@Beast Mode: "Previous prompt to @[Persona] didn't work as expected. 
The issue was [describe problem]. Please:
1. Analyze why the prompt failed
2. Rewrite optimized prompt for same goal
3. Suggest alternative persona if needed
4. Provide backup approach
Context: [original goal and constraints]"
```

### **Multi-Persona Coordination Crisis:**
```
@Beast Mode: "Coordinate resolution of [problem] using appropriate personas:
- Current state: [situation]
- Goal: [objective]  
- Constraints: [limitations]
- Timeline: [urgency]
Generate sequence of optimized prompts for relevant personas."
```

---

**Este guide serve como referência rápida para resolver 90% dos problemas com prompts.** 🔧✨