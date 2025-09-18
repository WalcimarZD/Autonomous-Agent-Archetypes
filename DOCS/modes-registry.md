# Modes Registry: Capabilities & Specifications

Este arquivo serve como fonte única de verdade sobre as capabilities, tools e especialidades de cada chat mode disponível.

---

## 🎯 **Core Modes**

### **Beast Mode**
```yaml
file: "Beast Mode.chatmode.md"
tier: Core
specialization: Universal Development Agent
description: "Agente completo para desenvolvimento, com todas as ferramentas e metodologia robusta"

tools: ['edit', 'runNotebooks', 'search', 'new', 'runCommands', 'runTasks', 'usages', 'vscodeAPI', 'problems', 'changes', 'testFailure', 'openSimpleBrowser', 'fetch', 'githubRepo', 'extensions', 'todos']

capabilities:
  - Full codebase investigation and analysis
  - Research-driven development with mandatory web search
  - Complete project implementation from start to finish
  - Quality gates and testing validation
  - Todo list management and progress tracking
  - Extension management and VS Code API usage
  - Terminal operations and debugging
  - Documentation and learning

ideal_for:
  - Complex multi-phase projects
  - When you need maximum autonomy
  - Learning and exploration tasks
  - Full-stack implementation
  - Crisis resolution and debugging

prompt_patterns:
  - Always include research requirements
  - Specify quality gates and completion criteria
  - Include context about existing codebase
  - Define scope and constraints clearly
```

### **Product Manager**
```yaml
file: "Product Manager.chatmode.md"
tier: Core
specialization: Product Strategy & Requirements
description: "Especialista em requisitos de produto, pesquisa de mercado e estratégia"

tools: ['codebase', 'search', 'usages', 'fetch', 'searchResults', 'problems', 'changes', 'vscodeAPI']

capabilities:
  - Market research and competitive analysis
  - User persona development
  - PRD (Product Requirements Document) creation
  - User story writing with acceptance criteria
  - Feature prioritization and roadmap planning
  - Stakeholder analysis
  - MVP definition and scope

ideal_for:
  - Project initiation and scoping
  - Feature definition and prioritization
  - Market analysis and validation
  - Stakeholder communication
  - Business case development

prompt_patterns:
  - Include target users and market context
  - Define business objectives and constraints
  - Specify competitive landscape
  - Include technical feasibility requirements
```

### **Architect**
```yaml
file: "Architect.chatmode.md"
tier: Core
specialization: System Architecture & Design
description: "Especialista em arquitetura de sistemas, design patterns e soluções técnicas"

tools: ['codebase', 'search', 'usages', 'extensions', 'fetch', 'searchResults', 'problems', 'changes', 'vscodeAPI']

capabilities:
  - System architecture design (C4 model, ADRs)
  - Technology stack recommendations
  - Scalability and performance planning
  - Integration strategy and API design
  - Risk assessment and mitigation
  - Codebase analysis and refactoring recommendations
  - Design pattern application

ideal_for:
  - System design and architecture planning
  - Technology selection and evaluation
  - Legacy system modernization
  - Performance optimization strategy
  - Integration planning

prompt_patterns:
  - Include scale requirements (users, data, requests)
  - Specify non-functional requirements
  - Define integration constraints
  - Include existing technology stack
  - Mention compliance requirements
```

### **Developer**
```yaml
file: "Developer.chatmode.md"
tier: Core
specialization: Software Implementation
description: "Especialista em implementação, desenvolvimento e coding"

tools: ['codebase', 'search', 'usages', 'editFiles', 'runTasks', 'runCommands', 'problems', 'changes', 'testFailure', 'terminalSelection', 'terminalLastCommand', 'fetch', 'runNotebooks', 'new']

capabilities:
  - Code implementation and development
  - Unit and integration testing
  - Code review and refactoring
  - Debugging and issue resolution
  - API development and integration
  - Database design and implementation
  - Performance optimization

ideal_for:
  - Feature implementation
  - Code refactoring and optimization
  - Bug fixing and debugging
  - API development
  - Testing implementation

prompt_patterns:
  - Include technical specifications
  - Define quality gates and test requirements
  - Specify performance constraints
  - Include error handling requirements
  - Define logging and monitoring needs
```

### **Debugger**
```yaml
file: "Debugger.chatmode.md"
tier: Core
specialization: Problem Solving & Debugging
description: "Especialista em debugging, resolução de problemas e investigação"

tools: ['codebase', 'search', 'problems', 'usages', 'changes', 'testFailure', 'terminalSelection', 'terminalLastCommand', 'runCommands', 'runTasks', 'editFiles', 'fetch', 'vscodeAPI']

capabilities:
  - Root cause analysis
  - Systematic debugging methodology
  - Log analysis and investigation
  - Performance troubleshooting
  - Error reproduction and isolation
  - Preventive solution design
  - Postmortem documentation

ideal_for:
  - Bug investigation and resolution
  - Performance issues
  - System failures and errors
  - Code quality problems
  - Integration issues

prompt_patterns:
  - Include error symptoms and reproduction steps
  - Provide relevant logs and error messages
  - Specify environment and context
  - Define impact and urgency
  - Include recent changes or deployments
```

---

## 🏗️ **Quality & Operations Modes**

### **DevOps**
```yaml
file: "DevOps.chatmode.md"
tier: Quality
specialization: CI/CD & Infrastructure
description: "Especialista em automação, deploy e infraestrutura"

tools: ['codebase', 'search', 'runCommands', 'runTasks', 'editFiles', 'problems', 'changes', 'fetch', 'vscodeAPI', 'terminalSelection']

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

tools: ['codebase', 'search', 'usages', 'runTasks', 'runCommands', 'problems', 'changes', 'testFailure', 'fetch', 'runNotebooks']

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

tools: ['codebase', 'search', 'fetch', 'searchResults', 'openSimpleBrowser', 'problems', 'changes']

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

tools: ['codebase', 'search', 'fetch', 'problems', 'changes', 'vscodeAPI']

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

tools: ['codebase', 'search', 'usages', 'editFiles', 'problems', 'changes', 'fetch', 'vscodeAPI', 'runCommands']

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

tools: ['codebase', 'search', 'editFiles', 'fetch', 'problems', 'changes', 'vscodeAPI']

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

tools: ['codebase', 'search', 'runCommands', 'runTasks', 'problems', 'changes', 'fetch', 'vscodeAPI', 'terminalSelection']

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

tools: ['codebase', 'search', 'editFiles', 'runCommands', 'runTasks', 'runNotebooks', 'problems', 'changes', 'fetch', 'usages']

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

tools: ['codebase', 'search', 'fetch', 'openSimpleBrowser', 'runNotebooks', 'problems', 'changes']

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

tools: ['search', 'fetch', 'openSimpleBrowser', 'editFiles', 'problems']

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

**Este registry serve como base de conhecimento para o Prompt Advisor otimizar suas recomendações.** 📚