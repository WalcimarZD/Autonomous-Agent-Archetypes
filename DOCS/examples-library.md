# Examples Library: Proven Prompt Patterns

Esta biblioteca contém exemplos testados e padrões de prompts que comprovadamente geram resultados de alta qualidade.

---

## 🎯 **Exemplos por Categoria**

### **🚀 Iniciação de Projetos**

#### **Exemplo 1: Novo Projeto Web App**
```
Contexto: Criar aplicação web para gestão de inventário
Objetivo: MVP funcional em 4 semanas
Personas envolvidas: Product Manager → Architect → Developer

@Product Manager
"Analise o mercado de sistemas de inventário para pequenas empresas brasileiras. 
Crie PRD completo para MVP de gestão de inventário incluindo:
- Análise concorrentes (TradeGecko, Zoho Inventory, sistemas nacionais)
- Personas: pequenos varejistas, distribuidores, e-commerce
- User stories priorizadas por valor vs esforço
- Critérios de aceitação técnicos
- Roadmap MVP (4 semanas) vs versão completa
- Modelo de precificação SaaS brasileiro"

Resultado: PRD estruturado, 15 user stories priorizadas, análise competitiva completa
```

#### **Exemplo 2: Migração de Sistema Legacy**
```
@Architect
"Analise sistema legacy PHP/MySQL e projete estratégia de migração para arquitetura moderna:
- Sistema atual: monolito PHP 5.6, MySQL 5.7, 50.000 usuários ativos
- Requisitos: manter funcionalidades, melhorar performance 5x, reduzir custos
- Constraints: zero downtime, migração gradual, team PHP inexperiente em microserviços
- Timeline: 12 meses, 4 fases
- Budget: moderado, preferência cloud nacional

Inclua: análise de riscos, estratégia de dados, plano de rollback, métricas de sucesso"

Resultado: Estratégia completa de migração, 4 fases detalhadas, análise de riscos
```

### **💻 Implementação e Desenvolvimento**

#### **Exemplo 3: API REST com Autenticação**
```
@Developer
"Implemente API REST para e-commerce com autenticação JWT:
- Endpoints: auth, produtos, pedidos, pagamentos
- Autenticação: JWT + refresh tokens, roles (customer, admin, seller)
- Database: PostgreSQL, migrations, seeders
- Validation: request validation, rate limiting
- Documentation: OpenAPI/Swagger automático
- Testing: cobertura >90%, testes de integração
- Performance: cache Redis, queries otimizadas

Stack: Node.js/Express, PostgreSQL, Redis, Jest
Examine codebase atual e siga padrões estabelecidos."

Resultado: API completa, 47 endpoints, documentação automática, 95% test coverage
```

#### **Exemplo 4: Dashboard Analytics React**
```
@Developer
"Desenvolva dashboard analytics responsivo:
- Componentes: charts (Chart.js), tabelas filtráveis, KPIs em tempo real
- Estado: Redux Toolkit, RTK Query para API calls
- UI: Material-UI, tema dark/light, responsive design
- Performance: lazy loading, virtualization para grandes datasets
- Testing: React Testing Library, Storybook para componentes
- Accessibility: WCAG 2.1 compliance

Integre com API existente (/api/analytics) e mantenha consistência visual."

Resultado: Dashboard completo, 12 componentes reutilizáveis, performance otimizada
```

### **🔍 Debugging e Resolução**

#### **Exemplo 5: Performance Issue Investigation**
```
@Debugger
"Investigue problema de performance no checkout:
- Sintomas: timeout 30s+ no pagamento, taxa abandono 45%
- Environment: produção, 1000+ usuários simultâneos
- Logs: [anexar logs específicos do erro]
- Stack: React SPA + Node.js API + PostgreSQL
- Reprodução: consistente em horário pico (19h-22h)
- Impacto: R$ 50k/dia perdas estimadas

Análise necessária: frontend, backend, database, network, third-party integrations"

Resultado: Root cause identificado (N+1 queries), solução implementada, performance melhorou 80%
```

#### **Exemplo 6: Production Bug Investigation**
```
@Debugger
"Sistema reportando falha na integração de pagamento:
- Error: 'Payment gateway timeout' intermitente
- Frequency: 15% das transações (antes era <1%)
- Started: deploy v2.1.3 (3 dias atrás)
- Environment: AWS ECS, Load Balancer, RDS
- Logs: gateway responde em 30s+ (timeout=25s)
- Impact: clientes frustrados, chargebacks aumentando

Preciso: root cause, hotfix imediato, solução definitiva, prevenção"

Resultado: Timeout identificado em nova configuração, hotfix deployado, monitoramento aprimorado
```

### **🏗️ Arquitetura e Design**

#### **Exemplo 7: Microserviços Strategy**
```
@Architect
"Projete decomposição de monolito e-commerce em microserviços:
- Monolito atual: Rails 800k LOC, 200 endpoints, 50 developers
- Domains: users, products, orders, payments, shipping, analytics
- Scale: 1M users, 10k orders/day, crescimento 300%/ano
- Constraints: zero downtime, gradual migration, data consistency
- Technology: containerized, Kubernetes, event-driven architecture
- Timeline: 18 meses, 6 fases

Defina: bounded contexts, data strategy, event choreography, migration roadmap"

Resultado: 8 microserviços definidos, estratégia de migração, event sourcing design
```

#### **Exemplo 8: Real-time Chat Architecture**
```
@Architect
"Arquitetura para sistema de chat em tempo real:
- Scale: 100k usuários simultâneos, 1M mensagens/dia
- Features: 1:1 chat, grupos, file sharing, typing indicators
- Platform: web + mobile apps
- Requirements: latência <100ms, 99.9% uptime, end-to-end encryption
- Technology stack: Node.js preferencial, WebSockets, cloud AWS

Considere: message ordering, offline sync, scalability, monitoring"

Resultado: Arquitetura WebSocket + Redis, estratégia de sharding, offline-first design
```

### **📊 Dados e Analytics**

#### **Exemplo 9: Data Pipeline Implementation**
```
@Data Engineer
"Construa pipeline de dados para analytics de e-commerce:
- Sources: PostgreSQL transacional, logs Nginx, eventos frontend
- Volume: 1GB/dia crescendo para 10GB/ano
- Processing: ETL diário + streaming para real-time KPIs
- Destinations: data warehouse (BigQuery), dashboards (Looker)
- Quality: validação automática, alertas de anomalias
- Schedule: batch diário 2AM, streaming contínuo

Stack: Apache Airflow, Apache Kafka, dbt, BigQuery"

Resultado: Pipeline completo, 15 DAGs Airflow, data quality framework
```

### **🛡️ Segurança e Compliance**

#### **Exemplo 10: LGPD Compliance Implementation**
```
@Security
"Implemente compliance LGPD completo para SaaS B2B:
- Dados: PII de funcionários de empresas clientes (50k+ registros)
- Processing: onboarding, analytics, comunicação
- Geographic: Brasil + alguns clientes internacionais
- Current state: minimal privacy controls, audit trail básico
- Requirements: consent management, data portability, right to erasure
- Timeline: 3 meses para compliance completo

Preciso: gap analysis, implementação técnica, processos, documentação"

Resultado: Framework LGPD completo, consent manager, data anonymization pipeline
```

### **☁️ DevOps e Infrastructure**

#### **Exemplo 11: Kubernetes Migration**
```
@DevOps
"Migre aplicação para Kubernetes com zero downtime:
- Current: 5 VMs bare metal, deployment manual
- Application: Node.js cluster + Redis + PostgreSQL
- Traffic: 10k RPM pico, seasonal spikes 5x
- Requirements: auto-scaling, blue-green deployments, monitoring
- Timeline: 2 meses, gradual migration
- Budget: cloud costs <50% aumento vs atual

Configure: IaC, CI/CD, monitoring, backup, security"

Resultado: Cluster EKS, Helm charts, CI/CD pipeline, monitoramento completo
```

---

## 🎨 **Padrões de Colaboração Multi-Persona**

### **Padrão 1: Feature Completa End-to-End**
```
Sprint Goal: Implementar sistema de notificações push

@Product Manager (Day 1):
"Define requisitos para sistema de notificações push mobile/web considerando..."

@UX Designer (Day 2):
"Com base no PRD do PM, projete UX para preferências de notificação..."

@Architect (Day 3):
"Baseado em requisitos e UX, arquitete sistema de notificações escalável..."

@Developer (Days 4-8):
"Implemente sistema seguindo arquitetura definida..."

@QA Tester (Days 6-10):
"Teste sistema de notificações incluindo edge cases..."

@DevOps (Day 9):
"Configure pipeline e deploy do sistema de notificações..."
```

### **Padrão 2: Crisis Response Coordenado**
```
Incident: "Database master crashed, site offline"

@SRE (Immediate):
"Execute disaster recovery para database master crash..."

@DevOps (Parallel):
"Investigate infrastructure root cause while SRE handles recovery..."

@Developer (Supporting):
"Analyze application logs for data consistency issues post-recovery..."

@Product Manager (Communication):
"Draft customer communication and impact assessment..."
```

### **Padrão 3: Research-Implementation Loop**
```
Challenge: "Implement ML recommendation engine"

@Data Engineer:
"Analyze user behavior data for recommendation patterns..."

@Architect:
"Design ML pipeline architecture based on data analysis..."

@Developer:
"Implement recommendation API following architecture..."

@QA Tester:
"Test recommendation accuracy and performance..."

Iterate: Based on results, loop back for improvements
```

---

## 📈 **Métricas de Sucesso dos Prompts**

### **Exemplos de Resultados Mensuráveis:**

| Persona | Prompt Type | Success Metric | Achieved Result |
|---------|-------------|----------------|-----------------|
| Product Manager | Market Research | Time to PRD | 2 days vs 2 weeks manual |
| Architect | System Design | Architecture Quality | 0 major revisions vs usual 3-4 |
| Developer | Feature Implementation | Code Quality | 95% test coverage, 0 bugs in production |
| QA Tester | Test Strategy | Bug Detection | 40% more bugs found in staging |
| DevOps | Pipeline Setup | Deployment Frequency | 10x more deployments, 95% success rate |
| Security | Compliance | Audit Results | 100% compliance vs 60% previous |

---

## 🚫 **Anti-Patterns: O que NÃO fazer**

### **❌ Prompts Genéricos e Vagos**
```
BAD: "@Developer: Crie uma API"
GOOD: "@Developer: Implemente API REST para gestão de usuários com autenticação JWT, 
      validação de entrada, rate limiting, testes unitários >90% coverage, 
      seguindo padrões OpenAPI..."
```

### **❌ Falta de Contexto**
```
BAD: "@Architect: Desenhe arquitetura para sistema"
GOOD: "@Architect: Projete arquitetura para sistema de e-commerce B2B, 
      100k usuários, 1M transações/mês, integração ERP/CRM existente,
      compliance PCI-DSS, alta disponibilidade 99.9%..."
```

### **❌ Personas Inadequadas para a Tarefa**
```
BAD: "@UX Designer: Configure servidor de produção"
GOOD: "@DevOps: Configure servidor de produção com load balancer..."
```

### **❌ Sem Critérios de Qualidade**
```
BAD: "@QA Tester: Teste a aplicação"
GOOD: "@QA Tester: Execute testes funcionais, performance (<2s response), 
      security (OWASP), usability (5 usuários), automation coverage >80%..."
```

---

## 🎯 **Templates Quick-Start por Cenário**

### **Cenário: Bug Crítico em Produção**
```
@Debugger: "Sistema [nome] apresentando [sintoma] afetando [impacto]. 
Occurred: [quando], Environment: [prod/staging], Logs: [anexar], 
Recent changes: [deploys/configs]. Preciso: root cause + hotfix + prevenção."
```

### **Cenário: Nova Feature Request**
```
@Product Manager: "Stakeholder [nome] solicitou [funcionalidade] para [objetivo]. 
Users: [perfil], Timeline: [prazo], Budget: [limitação]. 
Preciso: viabilidade + especificação + priorização vs backlog atual."
```

### **Cenário: Performance Optimization**
```
@SRE: "Sistema [nome] com performance degradada: [métricas atuais] vs [target]. 
Load: [usuários/requests], Infrastructure: [specs], Monitoring: [ferramentas]. 
Preciso: bottleneck analysis + otimizações + monitoramento preventivo."
```

### **Cenário: Security Review**
```
@Security: "Review de segurança para [sistema/feature]. Data: [classificação], 
Users: [externos/internos], Compliance: [LGPD/HIPAA/etc], 
Integration: [APIs/terceiros]. Preciso: threat model + controles + audit trail."
```

---

**Esta biblioteca serve como referência para o Prompt Advisor sugerir padrões comprovados.** 📚✨