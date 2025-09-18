# Templates de Prompts Efetivos para Chat Modes

Este guia fornece templates de prompts testados e otimizados para cada persona, ajudando a obter resultados de alta qualidade mesmo sem expertise específica na área.

---

## 🎯 **Product Manager**

### Template Base:
```
@Product Manager
Contexto: [Descrição do projeto/feature]
Objetivo: [O que queremos alcançar]
Constraints: [Limitações técnicas, tempo, orçamento]
Stakeholders: [Quem são os usuários finais]

Preciso de:
- [ ] Análise de mercado e concorrentes
- [ ] User personas e user stories
- [ ] Definição de MVP vs roadmap completo
- [ ] Critérios de aceitação técnicos
- [ ] Métricas de sucesso
```

### Exemplo Prático:
```
@Product Manager
Contexto: Sistema de IA para análise de exames médicos em hospitais brasileiros
Objetivo: Acelerar diagnósticos e reduzir erros médicos
Constraints: Compliance LGPD, integração com sistemas legados, orçamento limitado
Stakeholders: Médicos radiologistas, técnicos em radiologia, administradores hospitalares

Preciso de um PRD completo incluindo análise de concorrentes internacionais, 
personas detalhadas dos usuários médicos, e roadmap priorizando funcionalidades 
por valor clínico vs complexidade técnica.
```

---

## 🏗️ **Architect**

### Template Base:
```
@Architect
Contexto: [Tipo de sistema e domínio]
Scale: [Volume esperado, usuários, dados]
Constraints: [Performance, segurança, compliance]
Integration: [Sistemas existentes, APIs, protocolos]
Technology Stack: [Preferências/restrições tecnológicas]

Preciso de:
- [ ] Arquitetura de alto nível (C4 model)
- [ ] Decisões arquiteturais com justificativas
- [ ] Análise de riscos técnicos
- [ ] Estratégia de dados e storage
- [ ] APIs e contratos de integração
```

### Exemplo Prático:
```
@Architect
Contexto: Plataforma de IA médica para análise de imagens DICOM
Scale: 10.000 exames/dia, 50 hospitais, crescimento 200%/ano
Constraints: Latência <2s, disponibilidade 99.9%, LGPD compliance
Integration: PACS existentes, sistemas HIS via HL7 FHIR
Technology Stack: Python/TensorFlow preferencial, cloud AWS/Azure

Analise o codebase atual e projete evolução arquitetural que suporte 
escala enterprise mantendo performance e adicionando capacidades de 
retreino automático de modelos.
```

---

## 💻 **Developer**

### Template Base:
```
@Developer
Feature: [Descrição da funcionalidade]
Tech Spec: [Especificação técnica disponível]
Dependencies: [Bibliotecas, APIs, serviços]
Quality Gates: [Testes necessários, performance]
Timeline: [Prazo e prioridade]

Implemente:
- [ ] Código funcional e testável
- [ ] Testes unitários e integração
- [ ] Documentação de código
- [ ] Error handling robusto
- [ ] Logging e observabilidade
```

### Exemplo Prático:
```
@Developer
Feature: API de upload e processamento de exames DICOM
Tech Spec: Endpoint REST que recebe arquivos DICOM, extrai metadados, 
           aplica modelo de IA, retorna relatório estruturado
Dependencies: pydicom, tensorflow, FastAPI, PostgreSQL
Quality Gates: Cobertura >90%, latência <2s, handle arquivos até 500MB
Timeline: Sprint atual (2 semanas)

Examine o codebase atual e implemente seguindo padrões existentes, 
incluindo validação DICOM, processamento assíncrono, e API documentation.
```

---

## 🔍 **QA Tester**

### Template Base:
```
@QA Tester
System: [Sistema ou componente a testar]
Scope: [Funcionalidades específicas]
Risk Areas: [Áreas de maior risco]
Test Environment: [Ambiente e dados de teste]
Acceptance Criteria: [Critérios específicos]

Execute:
- [ ] Testes funcionais completos
- [ ] Testes de performance e load
- [ ] Testes de segurança
- [ ] Testes de usabilidade
- [ ] Validação de compliance
```

### Exemplo Prático:
```
@QA Tester
System: Sistema de IA para diagnóstico de pneumonia
Scope: Upload DICOM, processamento IA, geração de relatórios
Risk Areas: Falsos positivos/negativos, performance com arquivos grandes
Test Environment: Staging com dataset de 1000 exames reais anonimizados
Acceptance Criteria: Acurácia >95%, tempo resposta <2s, zero vazamentos de dados

Crie suite de testes abrangente incluindo casos edge, 
validação médica com especialistas, e testes de stress.
```

---

## 🔒 **Security**

### Template Base:
```
@Security
System: [Sistema a analisar]
Data Classification: [Tipos de dados sensíveis]
Threat Model: [Principais ameaças]
Compliance: [Regulamentações aplicáveis]
Integration Points: [APIs, terceiros, legacy]

Implemente:
- [ ] Análise de ameaças (STRIDE)
- [ ] Controles de segurança
- [ ] Auditoria e logging
- [ ] Políticas de acesso
- [ ] Procedimentos de incident response
```

---

## 🚀 **DevOps**

### Template Base:
```
@DevOps
Application: [Aplicação a deployar]
Infrastructure: [Cloud provider, recursos]
Environments: [Dev, staging, prod requirements]
Scale Requirements: [Load esperado, auto-scaling]
Monitoring: [Métricas críticas, alertas]

Configure:
- [ ] Pipeline CI/CD completo
- [ ] Infraestrutura como código
- [ ] Monitoramento e alertas
- [ ] Backup e disaster recovery
- [ ] Security scanning automático
```

---

## 📊 **Data Engineer**

### Template Base:
```
@Data Engineer
Data Sources: [Origens dos dados]
Volume: [Quantidade e frequência]
Processing: [Transformações necessárias]
Storage: [Requisitos de armazenamento]
Quality: [Validações e limpeza]

Construa:
- [ ] Pipeline de ingestão
- [ ] Transformações ETL/ELT
- [ ] Data quality monitoring
- [ ] Catalog e lineage
- [ ] APIs de acesso aos dados
```

---

## 🎨 **UX Designer**

### Template Base:
```
@UX Designer
Users: [Personas e contexto de uso]
Goals: [Objetivos dos usuários]
Constraints: [Limitações técnicas/negócio]
Current State: [Sistema atual, se houver]
Success Metrics: [Como medir sucesso UX]

Projete:
- [ ] User journey maps
- [ ] Wireframes e protótipos
- [ ] Design system/components
- [ ] Testes de usabilidade
- [ ] Documentação de interação
```

---

## 🔧 **Debugger**

### Template Base:
```
@Debugger
Problem: [Descrição do problema]
Symptoms: [Como se manifesta]
Environment: [Onde ocorre]
Logs: [Logs disponíveis]
Impact: [Criticidade e usuários afetados]

Investigue:
- [ ] Root cause analysis
- [ ] Reprodução do problema
- [ ] Solução imediata
- [ ] Prevenção futura
- [ ] Postmortem documentation
```

---

## 📚 **Como Usar os Templates**

### 1. **Copie o template** da persona relevante
### 2. **Preencha os campos** com informações do seu contexto
### 3. **Adicione especificidades** do seu projeto
### 4. **Itere conforme necessário** com base nos resultados

### **Dica Pro:** 
Combine múltiplas personas em prompts sequenciais:
```
@Product Manager: [Seu prompt]
→ Com base no resultado do PM...
@Architect: [Prompt informado pelo PM]
→ Com base na arquitetura...
@Developer: [Prompt informado pela arquitetura]
```

---

**Estes templates garantem prompts estruturados e efetivos mesmo sem expertise específica na área!** 🎯