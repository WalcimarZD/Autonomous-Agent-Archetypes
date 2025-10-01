# Modes Registry: Capabilities & Specifications

Este arquivo serve como fonte única de verdade sobre as capabilities, tools e especialidades de cada chat mode disponível.

**🔄 Última atualização**: Otimização de checkpoints e créditos (v2.1)
**📊 Modos ativos**: 5 (anteriormente 12)
**📁 Modos arquivados**: 7 (mantidos para referência futura)
**⚡ Otimizações v2.1**: Redução de max_iterations, checkpoints de progresso, comunicação concisa

---

## 🎯 **Active Modes** (Optimized)

### **Software Developer**

```yaml
file: "Software Developer.chatmode.md"
version: 2.1
tier: Core
specialization: Software Implementation & Basic Data Operations
description: "Especialista em implementação, desenvolvimento, coding e operações básicas de dados"

optimizations_v2_1:
  max_iterations: 2 (previously 3)
  checkpoint_strategy: "Incremental with confirmation after Phase 1"
  communication: "Concise, high-density outputs"
  credit_efficiency: "Optimized for single-request completeness"

tools:
  [
    "runCommands",
    "runTasks",
    "edit",
    "runNotebooks",
    "search",
    "new",
    "extensions",
    "usages",
    "vscodeAPI",
    "think",
    "problems",
    "changes",
    "testFailure",
    "openSimpleBrowser",
    "fetch",
    "githubRepo",
    "todos",
  ]

capabilities:
  - Code implementation and development
  - Basic database operations (SQL, queries, schema design)
  - Unit and integration testing
  - Code review and refactoring
  - Debugging and issue resolution
  - API development and integration
  - Data integration and basic validation
  - Quality assurance protocols and simplicity controls

ideal_for:
  - Feature implementation
  - Code refactoring and optimization
  - Bug fixing and debugging
  - API development
  - Testing implementation
  - Basic data operations and database queries

prompt_patterns:
  - Include technical specifications
  - Define quality gates and test requirements
  - Specify performance constraints and simplicity limits
  - Include error handling requirements
  - Define logging and monitoring needs
  - Specify data requirements and database operations
```

### **Software Architect**

```yaml
file: "Software Architect.chatmode.md"
version: 2.1
tier: Core
specialization: System Architecture & Technical Design
description: "Especialista em arquitetura de sistemas, design patterns e soluções técnicas com foco em simplicidade"

optimizations_v2_1:
  max_iterations: 2 (previously 3)
  checkpoint_strategy: "Design-first with incremental validation"
  communication: "Focus on decisions, reference templates"
  credit_efficiency: "Defer details, confirm before proceeding"

tools:
  [
    "runCommands",
    "runTasks",
    "edit",
    "runNotebooks",
    "search",
    "new",
    "extensions",
    "usages",
    "vscodeAPI",
    "think",
    "problems",
    "changes",
    "testFailure",
    "openSimpleBrowser",
    "fetch",
    "githubRepo",
    "todos",
  ]

capabilities:
  - System architecture design with simplicity principles
  - Technology stack recommendations and evaluations
  - Scalability and performance planning
  - Integration strategy and API design
  - Risk assessment and mitigation
  - Codebase analysis and refactoring recommendations
  - Implementation phases and progressive enhancement
  - Architectural decision documentation

ideal_for:
  - System design and architecture planning
  - Technology selection and evaluation
  - Legacy system modernization
  - Performance optimization strategy
  - Integration planning with simplicity focus

prompt_patterns:
  - Include scale requirements (users, data, requests)
  - Specify non-functional requirements
  - Define integration constraints and complexity limits
  - Include existing technology stack
  - Mention compliance and simplicity requirements
```

### **Quality Assurance Engineer**

```yaml
file: "Quality Assurance Engineer.chatmode.md"
version: 2.1
tier: Core
specialization: Testing, Quality Assurance & Debugging
description: "Especialista em estratégias de teste, garantia de qualidade e debugging integrado"

optimizations_v2_1:
  max_iterations: 2 (previously 3)
  checkpoint_strategy: "Test-first incremental delivery"
  communication: "Test code over theory, concise results"
  credit_efficiency: "Batch test creation, template references"

tools:
  [
    "runCommands",
    "runTasks",
    "edit",
    "runNotebooks",
    "search",
    "new",
    "extensions",
    "usages",
    "vscodeAPI",
    "think",
    "problems",
    "changes",
    "testFailure",
    "openSimpleBrowser",
    "fetch",
    "githubRepo",
    "todos",
  ]

capabilities:
  - Comprehensive testing strategies and implementation
  - Automated testing frameworks and test suites
  - Bug investigation and systematic debugging
  - Root cause analysis and fix implementation
  - Performance, security, and accessibility testing
  - Quality gates and metrics establishment
  - Test documentation and guidelines
  - Prevention measures and solution validation

ideal_for:
  - Test planning and strategy
  - Test automation implementation
  - Quality validation and bug resolution
  - Performance and security testing
  - Systematic problem investigation

prompt_patterns:
  - Include acceptance criteria and quality requirements
  - Specify test environments and coverage expectations
  - Define quality metrics and bug severity levels
  - Include risk areas and edge cases
  - Specify debugging context and error symptoms
```

### **Operations Engineer**

```yaml
file: "Operations Engineer.chatmode.md"
version: 2.1
tier: Core
specialization: DevOps, Site Reliability & Security Operations
description: "Especialista em CI/CD, infraestrutura, monitoramento, segurança e operações integradas"

optimizations_v2_1:
  max_iterations: 2 (previously 4)
  checkpoint_strategy: "Phased delivery with confirmation"
  communication: "Deliverables over explanations, template usage"
  credit_efficiency: "Most aggressive optimization (4→2 iterations)"

tools:
  [
    "runCommands",
    "runTasks",
    "edit",
    "runNotebooks",
    "search",
    "new",
    "extensions",
    "usages",
    "vscodeAPI",
    "think",
    "problems",
    "changes",
    "testFailure",
    "openSimpleBrowser",
    "fetch",
    "githubRepo",
    "todos",
  ]

capabilities:
  - CI/CD pipeline design and implementation
  - Infrastructure as code and environment management
  - Comprehensive monitoring, logging, and alerting
  - Security controls and vulnerability management
  - Service Level Objectives (SLOs) and error budgets
  - Incident response and automated recovery
  - Capacity planning and performance optimization
  - Compliance and security operations integration

ideal_for:
  - Pipeline automation and infrastructure setup
  - Deployment and monitoring implementation
  - Security automation and compliance
  - Incident response and reliability engineering
  - Performance optimization and capacity planning

prompt_patterns:
  - Include infrastructure and deployment requirements
  - Specify monitoring, security, and compliance needs
  - Define deployment frequency and reliability targets
  - Include incident response and recovery requirements
  - Specify security and performance constraints
```

### **UX UI Designer**

```yaml
file: "UX UI Designer.chatmode.md"
version: 2.1
tier: Core
specialization: User Experience & Interface Design
description: "Especialista em experiência do usuário, design de interfaces e validação com usuários"

optimizations_v2_1:
  max_iterations: 3 (previously 4)
  checkpoint_strategy: "Research→Design→Handoff with confirmations"
  communication: "Visual outputs over text, design decisions focus"
  credit_efficiency: "Incremental feedback loops"

tools:
  [
    "runCommands",
    "runTasks",
    "edit",
    "runNotebooks",
    "search",
    "new",
    "extensions",
    "usages",
    "vscodeAPI",
    "think",
    "problems",
    "changes",
    "testFailure",
    "openSimpleBrowser",
    "fetch",
    "githubRepo",
    "todos",
  ]

capabilities:
  - User research and behavior analysis
  - Interface design with simplicity principles
  - Wireframing, prototyping, and design specifications
  - Design systems and visual consistency
  - Usability testing and user feedback validation
  - Accessibility compliance (WCAG 2.1 AA)
  - Cross-device and responsive design
  - Design iteration and improvement based on feedback

ideal_for:
  - User experience design and research
  - Interface design and prototyping
  - User testing and validation
  - Design system creation and maintenance
  - Accessibility optimization

prompt_patterns:
  - Include user personas and context
  - Define user goals and pain points
  - Specify platform and device constraints
  - Include accessibility and simplicity requirements
  - Define iteration and feedback expectations
```

---

## 🏗️ **Quality & Operations Modes**

### **DevOps**

```yaml
file: "DevOps.chatmode.md"
tier: Quality
specialization: CI/CD & Infrastructure
description: "Especialista em automação, deploy e infraestrutura"

tools:
  [
    "codebase",
    "search",
    "runCommands",
    "runTasks",
    "editFiles",
    "problems",
    "changes",
    "fetch",
    "vscodeAPI",
    "terminalSelection",
  ]

capabilities:
  - CI/CD pipeline design and implementation
  - Infrastructure as Code (Terraform, CloudFormation)
  - Container orchestration (Kubernetes, Docker)
  - Monitoring and alerting setup
  - Security scanning automation
  - Deployment strategies (blue/green, canary)
  - Backup and disaster recovery

ideal_for:
  - Pipeline automation
  - Infrastructure setup
  - Deployment optimization
  - Monitoring implementation
  - Security automation

prompt_patterns:
  - Include infrastructure requirements
  - Specify deployment frequency and strategy
  - Define monitoring and alerting needs
  - Include security and compliance requirements
```

### **QA Tester**

```yaml
file: "QA Tester.chatmode.md"
tier: Quality
specialization: Testing & Quality Assurance
description: "Especialista em estratégias de teste e garantia de qualidade"

tools:
  [
    "codebase",
    "search",
    "usages",
    "runTasks",
    "runCommands",
    "problems",
    "changes",
    "testFailure",
    "fetch",
    "runNotebooks",
  ]

capabilities:
  - Test strategy and planning
  - Test case design and execution
  - Automated testing implementation
  - Performance and load testing
  - Security testing
  - Usability testing
  - Quality metrics and reporting

ideal_for:
  - Test planning and strategy
  - Test automation implementation
  - Quality validation
  - Performance testing
  - Security testing

prompt_patterns:
  - Include acceptance criteria
  - Specify test environments and data
  - Define quality metrics and thresholds
  - Include risk areas and edge cases
```

### **UX Designer**

```yaml
file: "UX Designer.chatmode.md"
tier: Quality
specialization: User Experience Design
description: "Especialista em experiência do usuário e design de interfaces"

tools:
  [
    "codebase",
    "search",
    "fetch",
    "searchResults",
    "openSimpleBrowser",
    "problems",
    "changes",
  ]

capabilities:
  - User research and persona development
  - User journey mapping
  - Wireframing and prototyping
  - Design system creation
  - Usability testing planning
  - Accessibility compliance
  - Design validation and iteration

ideal_for:
  - User experience design
  - Interface design and prototyping
  - User research and validation
  - Design system creation
  - Accessibility optimization

prompt_patterns:
  - Include user personas and context
  - Define user goals and pain points
  - Specify platform and device constraints
  - Include accessibility requirements
```

---

## 📋 **Process & Governance Modes**

### **Scrum Master**

```yaml
file: "Scrum Master.chatmode.md"
tier: Process
specialization: Agile Facilitation
description: "Especialista em processos ágeis e facilitação de equipes"

tools: ["codebase", "search", "fetch", "problems", "changes", "vscodeAPI"]

capabilities:
  - Sprint planning and facilitation
  - Retrospective facilitation
  - Impediment removal strategies
  - Team performance optimization
  - Agile process implementation
  - Stakeholder communication
  - Metrics and reporting

ideal_for:
  - Process optimization
  - Team facilitation
  - Sprint planning
  - Retrospective facilitation
  - Agile implementation

prompt_patterns:
  - Include team context and dynamics
  - Define process challenges and goals
  - Specify stakeholder requirements
  - Include timeline and constraints
```

### **Security**

```yaml
file: "Security.chatmode.md"
tier: Process
specialization: Security & Compliance
description: "Especialista em segurança da informação e compliance"

tools:
  [
    "codebase",
    "search",
    "usages",
    "editFiles",
    "problems",
    "changes",
    "fetch",
    "vscodeAPI",
    "runCommands",
  ]

capabilities:
  - Security architecture design
  - Threat modeling (STRIDE)
  - Security controls implementation
  - Compliance validation (GDPR, HIPAA, etc.)
  - Security testing and auditing
  - Incident response planning
  - Security policy development

ideal_for:
  - Security architecture design
  - Compliance validation
  - Security testing
  - Threat assessment
  - Incident response

prompt_patterns:
  - Include data classification and sensitivity
  - Specify compliance requirements
  - Define threat landscape and risks
  - Include integration points and attack surface
```

### **Technical Writer**

```yaml
file: "Technical Writer.chatmode.md"
tier: Process
specialization: Documentation & Communication
description: "Especialista em documentação técnica e comunicação"

tools:
  [
    "codebase",
    "search",
    "editFiles",
    "fetch",
    "problems",
    "changes",
    "vscodeAPI",
  ]

capabilities:
  - Technical documentation creation
  - API documentation and guides
  - User manuals and tutorials
  - Process documentation
  - Knowledge base organization
  - Documentation strategy and standards
  - Content review and editing

ideal_for:
  - Technical documentation creation
  - Process documentation
  - User guide creation
  - API documentation
  - Knowledge management

prompt_patterns:
  - Include target audience and expertise level
  - Define documentation scope and format
  - Specify technical depth required
  - Include maintenance and update requirements
```

---

## 🚀 **Advanced & Specialized Modes**

### **SRE**

```yaml
file: "SRE.chatmode.md"
tier: Advanced
specialization: Site Reliability Engineering
description: "Especialista em confiabilidade, performance e observabilidade"

tools:
  [
    "codebase",
    "search",
    "runCommands",
    "runTasks",
    "problems",
    "changes",
    "fetch",
    "vscodeAPI",
    "terminalSelection",
  ]

capabilities:
  - SLI/SLO definition and monitoring
  - Reliability engineering practices
  - Incident management and postmortems
  - Performance optimization
  - Capacity planning
  - Chaos engineering
  - Observability implementation

ideal_for:
  - Reliability improvements
  - Performance optimization
  - Monitoring and alerting
  - Incident response
  - Capacity planning

prompt_patterns:
  - Include SLA/SLO requirements
  - Specify scale and performance targets
  - Define critical user journeys
  - Include failure scenarios and impact
```

### **Data Engineer**

```yaml
file: "Data Engineer.chatmode.md"
tier: Advanced
specialization: Data Pipelines & Analytics
description: "Especialista em pipelines de dados, ETL e analytics"

tools:
  [
    "codebase",
    "search",
    "editFiles",
    "runCommands",
    "runTasks",
    "runNotebooks",
    "problems",
    "changes",
    "fetch",
    "usages",
  ]

capabilities:
  - Data pipeline design and implementation
  - ETL/ELT process development
  - Data warehouse and lake architecture
  - Data quality and validation
  - Stream processing implementation
  - Analytics and reporting
  - Data governance and lineage

ideal_for:
  - Data pipeline implementation
  - ETL process development
  - Data architecture design
  - Analytics implementation
  - Data quality assurance

prompt_patterns:
  - Include data sources and formats
  - Specify volume and frequency requirements
  - Define transformation and business rules
  - Include quality and governance requirements
```

---

## 👤 **Personal & Learning Modes**

### **Learning Tutor**

```yaml
file: "Learning Tutor.chatmode.md"
tier: Personal
specialization: Education & Skill Development
description: "Especialista em aprendizado personalizado e desenvolvimento de habilidades"

tools:
  [
    "codebase",
    "search",
    "fetch",
    "openSimpleBrowser",
    "runNotebooks",
    "problems",
    "changes",
  ]

capabilities:
  - Personalized learning path creation
  - Skill assessment and gap analysis
  - Educational content development
  - Progress tracking and feedback
  - Adaptive learning strategies
  - Certification guidance
  - Knowledge validation

ideal_for:
  - Skill development planning
  - Learning path creation
  - Knowledge validation
  - Training content development
  - Educational guidance

prompt_patterns:
  - Include current skill level and background
  - Define learning objectives and timeline
  - Specify preferred learning methods
  - Include validation and certification requirements
```

### **Personal Assistant**

```yaml
file: "Personal Assistant.chatmode.md"
tier: Personal
specialization: Personal Productivity & Organization
description: "Especialista em organização pessoal e otimização de produtividade"

tools: ["search", "fetch", "openSimpleBrowser", "editFiles", "problems"]

capabilities:
  - Personal productivity optimization
  - Time management and scheduling
  - Goal setting and tracking
  - Decision support and analysis
  - Routine optimization
  - Personal project management
  - Life organization strategies

ideal_for:
  - Personal productivity improvement
  - Time management optimization
  - Goal planning and tracking
  - Decision support
  - Life organization

prompt_patterns:
  - Include personal context and constraints
  - Define goals and priorities
  - Specify time and resource limitations
  - Include personal preferences and style
```

---

## 🎯 **Quick Reference: Mode Selection Guide**

### **By Project Phase:**

- **Discovery**: Product Manager, UX Designer
- **Design**: Architect, Security, UX Designer
- **Implementation**: Developer, Data Engineer
- **Quality**: QA Tester, Security
- **Operations**: DevOps, SRE
- **Documentation**: Technical Writer
- **Process**: Scrum Master

### **By Problem Type:**

- **Requirements unclear**: Product Manager
- **Technical design needed**: Architect
- **Implementation challenges**: Developer
- **Bugs/Issues**: Debugger
- **Performance problems**: SRE
- **Data problems**: Data Engineer
- **Security concerns**: Security
- **Process issues**: Scrum Master
- **Documentation gaps**: Technical Writer
- **User experience issues**: UX Designer
- **Infrastructure needs**: DevOps
- **Testing strategy**: QA Tester
- **Learning needs**: Learning Tutor
- **Personal productivity**: Personal Assistant
- **Complex/Unknown**: Beast Mode

### **By Tools Needed:**

- **File editing**: Developer, Technical Writer, Security
- **Terminal/Commands**: DevOps, SRE, Developer, Debugger
- **Research/Web**: All modes have 'fetch' except Personal Assistant
- **Testing**: QA Tester, Developer, Debugger
- **Notebooks**: Beast Mode, Developer, Data Engineer, Learning Tutor

---

---

## 📁 **Archived Modes** (Available for Future Use)

### **Data Engineer** 🗃️

```yaml
file: "archived/Data Engineer.chatmode.md"
status: Archived - Basic data operations integrated into Software Developer
specialization: Advanced Data Pipelines & Analytics
reason: Current needs covered by basic SQL/data operations in Software Developer

restore_when:
  - Complex data processing requirements emerge
  - Need for advanced analytics and ML pipelines
  - Large-scale data transformation projects
```

### **Product Manager, Scrum Master, Technical Writer** 🗃️

```yaml
files: "archived/[Product Manager|Scrum Master|Technical Writer].chatmode.md"
status: Archived - Removed due to human interaction/coordination dependency
reason: Require stakeholder interaction, meeting facilitation, or reduced priority

restore_when:
  - Need automated analysis without human coordination
  - Specific documentation strategy requirements
  - Process optimization analysis needs
```

### **Debugger, DevOps Engineer, Site Reliability Engineer, Security Engineer** 🗃️

```yaml
files: "archived/[Debugger|DevOps Engineer|Site Reliability Engineer|Security Engineer].chatmode.md"
status: Archived - Merged into unified modes
reason: Capabilities integrated into Quality Assurance Engineer and Operations Engineer

restore_when:
  - Need highly specialized focus in specific area
  - Complex projects requiring dedicated expertise
  - Separation of concerns for large-scale operations
```

---

## 🎯 **Quick Reference: Optimized Mode Selection**

### **By Project Phase:**

- **Discovery & Requirements**: UX UI Designer (user research)
- **Design & Architecture**: Software Architect, UX UI Designer
- **Implementation**: Software Developer
- **Quality & Testing**: Quality Assurance Engineer
- **Operations & Deployment**: Operations Engineer

### **By Problem Type:**

- **Technical design needed**: Software Architect
- **Implementation challenges**: Software Developer
- **Bugs/Issues/Testing**: Quality Assurance Engineer
- **Performance/Infrastructure/Security**: Operations Engineer
- **User experience issues**: UX UI Designer
- **Data operations (basic SQL, queries)**: Software Developer
- **Complex data pipelines**: Consider restoring Data Engineer from archive

### **Key Optimizations:**

- **Reduced Complexity**: 5 active modes vs. previous 12
- **Integrated Capabilities**: Related functions merged (e.g., DevOps + SRE + Security)
- **Simplicity Controls**: All modes include anti-over-engineering measures
- **Iteration Support**: All modes support multi-cycle workflows with handoff
- **Quality Integration**: Built-in quality protocols and documentation standards
- **Agent-Friendly Outputs**: Hybrid narrative + structured data formats

**Este registry otimizado serve como base de conhecimento para seleção eficiente de modos.** 📚
