# GitHub Copilot Autonomous Agent Archetypes v2.1

## 🚀 Advanced AI Chat Modes for Complete Software Development Lifecycle

Este repositório contém **5 chat modes otimizados e autônomos** para GitHub Copilot, projetados para maximizar produtividade e eficiência de créditos através de estratégias de checkpoint e comunicação inteligente.

**✨ Versão 2.1**: Otimizações de token limit e credit management

---

## 🎯 O Que São Chat Modes?

Chat modes são **personas especializadas de IA** que estendem as capacidades do GitHub Copilot com:

- **Autonomia**: Trabalham independentemente até completar tarefas
- **Ferramentas Específicas**: Acesso às tools certas para cada função
- **Metodologia Estruturada**: Workflows iterativos com checkpoints
- **Pesquisa Ativa**: Buscam informações atualizadas e best practices
- **Comunicação Otimizada**: Outputs concisos e de alta densidade

---

## 📊 Modes Ativos (v2.1)

### 🔧 **Software Developer**

```yaml
Especialização: Implementação e desenvolvimento de código
Max Iterations: 2 (otimizado)
Ideal Para:
  - Feature implementation
  - Bug fixing e debugging
  - API development
  - Basic data operations (SQL, queries)
  - Testing implementation
```

### 🏗️ **Software Architect**

```yaml
Especialização: Arquitetura de sistemas e design técnico
Max Iterations: 2 (otimizado)
Ideal Para:
  - System design e architecture planning
  - Technology selection
  - Integration strategy
  - Performance optimization
  - Simplicity-first approach
```

### ✅ **Quality Assurance Engineer**

```yaml
Especialização: Testing, QA e debugging
Max Iterations: 2 (otimizado)
Ideal Para:
  - Test strategy e implementation
  - Bug investigation e root cause analysis
  - Performance/security/accessibility testing
  - Quality gates establishment
```

### ⚙️ **Operations Engineer**

```yaml
Especialização: DevOps, SRE e Security (unified)
Max Iterations: 2 (mais agressivamente otimizado)
Ideal Para:
  - CI/CD pipeline implementation
  - Infrastructure as Code
  - Monitoring e alerting
  - Security controls
  - Incident response
```

### 🎨 **UX UI Designer**

```yaml
Especialização: User experience e interface design
Max Iterations: 3
Ideal Para:
  - User research e persona development
  - Wireframing e prototyping
  - Design system creation
  - Accessibility compliance (WCAG 2.1 AA)
  - Usability testing
```

---

## ⚡ Otimizações v2.1

### **Checkpoint Strategy**

Cada mode implementa checkpoints de progresso:

```
✅ Phase 1 Complete:
- Key accomplishment 1
- Key accomplishment 2
- Next: Phase 2 - [brief description]

Continue to next phase? (Implicit: yes, unless user stops)
```

### **Credit Efficiency**

| Mode                | v2.0 Iterations | v2.1 Iterations | Saving   |
| ------------------- | --------------- | --------------- | -------- |
| Software Developer  | 3               | 2               | -33%     |
| Software Architect  | 3               | 2               | -33%     |
| Quality Assurance   | 3               | 2               | -33%     |
| Operations Engineer | 4               | 2               | **-50%** |
| UX UI Designer      | 4               | 3               | -25%     |

**Média de redução**: ~35% menos iterações

### **VS Code Configuration**

```json
// .vscode/settings.json (incluído)
{
  "chat.editor.maxOutputTokens": 8192, // Dobro do default
  "chat.agent.maxRequests": 3, // Mantido
  "chat.agent.editRequests": 5, // Aumentado
  "github.copilot.chat.manageOverages": false // Protege budget
}
```

---

## 📁 Estrutura do Repositório

```
Autonomous-Agent-Archetypes/
├── .vscode/
│   └── settings.json                    # ⚙️ VS Code optimizations
├── DOCS/
│   ├── checkpoint-optimizations.md      # 📊 v2.1 changes explained
│   ├── credit-management-guide.md       # 💰 Complete credit guide
│   ├── modes-registry.md                # 📚 Mode capabilities
│   ├── examples-library.md              # 💡 Usage examples
│   └── troubleshooting-guide.md         # 🔧 Common issues
├── modes/
│   ├── Software Developer.chatmode.md
│   ├── Software Architect.chatmode.md
│   ├── Quality Assurance Engineer.chatmode.md
│   ├── Operations Engineer.chatmode.md
│   ├── UX UI Designer.chatmode.md
│   └── archived/                        # 🗃️ 7 archived modes
├── templates/
│   ├── architecture.md                  # 🏗️ Architecture doc template
│   ├── ci.yml                          # ⚙️ CI/CD pipeline template
│   ├── runbook.md                      # 📖 Operations runbook
│   ├── review_report.md                # ✅ PR review template
│   ├── test.example.js                 # 🧪 Jest test example
│   ├── TestExample.cs                  # 🧪 xUnit test example
│   └── README.md                       # 📚 Template usage guide
├── GUIDE.md                            # 🚀 Quick start guide
└── README.md                           # 📄 This file
```

---

## 🚀 Quick Start

### 1. **Clone o Repositório**

```bash
git clone https://github.com/WalcimarZD/Autonomous-Agent-Archetypes.git
cd Autonomous-Agent-Archetypes
```

### 2. **Abra no VS Code**

```bash
code-insiders .
```

As configurações em `.vscode/settings.json` serão aplicadas automaticamente.

### 3. **Use um Mode**

```
# No GitHub Copilot Chat (Ctrl+Alt+I):
@workspace /mode Software Developer

"Implementar autenticação JWT com:
- PostgreSQL storage
- Express.js backend
- Refresh token rotation
- RBAC (admin, user)
- Rate limiting (100 req/min)"
```

### 4. **Observe os Checkpoints**

```
✅ Phase 1 Complete:
- User model created (id, email, passwordHash, role)
- JWT token generation implemented
- Auth middleware with role checking
- Basic tests (15 unit, 3 integration)
Next: Phase 2 - Refresh token rotation + rate limiting

Continue to next phase?
```

---

## 📚 Documentação

### **Essencial**

- [**GUIDE.md**](./GUIDE.md): Installation and usage guide
- [**modes-registry.md**](./DOCS/modes-registry.md): Complete mode capabilities
- [**checkpoint-optimizations.md**](./DOCS/checkpoint-optimizations.md): v2.1 changes

### **Otimização**

- [**credit-management-guide.md**](./DOCS/credit-management-guide.md): Complete credit optimization guide
- [**examples-library.md**](./DOCS/examples-library.md): Usage examples and patterns
- [**troubleshooting-guide.md**](./DOCS/troubleshooting-guide.md): Common issues and solutions

---

## 🎯 Seleção de Mode

### **Por Fase do Projeto**

| Fase                     | Mode Recomendado                    |
| ------------------------ | ----------------------------------- |
| Discovery & Requirements | UX UI Designer (user research)      |
| Design & Architecture    | Software Architect + UX UI Designer |
| Implementation           | Software Developer                  |
| Testing & Quality        | Quality Assurance Engineer          |
| Operations & Deployment  | Operations Engineer                 |

### **Por Tipo de Problema**

| Problema                            | Mode                       |
| ----------------------------------- | -------------------------- |
| Technical design needed             | Software Architect         |
| Implementation challenges           | Software Developer         |
| Bugs/Issues/Testing                 | Quality Assurance Engineer |
| Performance/Infrastructure/Security | Operations Engineer        |
| User experience issues              | UX UI Designer             |
| Basic SQL/data operations           | Software Developer         |

---

## 🏗️ Templates Disponíveis

Todos os modes referenciam templates padronizados:

| Template           | Usado Por              | Propósito                                 |
| ------------------ | ---------------------- | ----------------------------------------- |
| `architecture.md`  | Software Architect     | Documentação de arquitetura (11 seções)   |
| `ci.yml`           | Operations Engineer    | GitHub Actions CI/CD pipeline             |
| `runbook.md`       | Operations Engineer    | Operational runbook com health indicators |
| `review_report.md` | Quality Assurance      | PR review com severity levels             |
| `test.example.js`  | Software Developer, QA | Jest test template                        |
| `TestExample.cs`   | Software Developer, QA | xUnit test template                       |

**Veja**: `templates/README.md` para usage guide

---

## 🗃️ Modes Arquivados (7)

Os seguintes modes foram consolidados mas estão disponíveis em `modes/archived/`:

- **Data Engineer**: Operações básicas integradas no Software Developer
- **Debugger**: Merged into Quality Assurance Engineer
- **DevOps Engineer**: Merged into Operations Engineer
- **Site Reliability Engineer**: Merged into Operations Engineer
- **Security Engineer**: Merged into Operations Engineer
- **Product Manager**: Removido (depende de interação humana)
- **Scrum Master**: Removido (facilitação de meetings)
- **Technical Writer**: Removido (prioridade reduzida)

**Quando restaurar**: Para projetos complexos que exigem especialização dedicada

---

## 💡 Best Practices

### **1. Prompts Completos**

❌ **Evitar**:

```
"Implementar autenticação"
[Multiple clarifying requests needed]
```

✅ **Preferir**:

```
"Use Software Developer mode.
Implementar autenticação JWT com:
- PostgreSQL storage
- Express.js backend
- Refresh token rotation
- RBAC (admin, user)
- Rate limiting (100 req/min)
Siga templates disponíveis."
```

### **2. Usar Templates**

❌ **Evitar**:

```
"Criar CI/CD pipeline"
[Generic output without context]
```

✅ **Preferir**:

```
"Use Operations Engineer mode.
Base em templates/ci.yml para criar pipeline Node.js com:
- Lint (ESLint), Test (Jest 80%+)
- Security (npm audit, Snyk)
- Deploy AWS Elastic Beanstalk
- Staging + Production envs"
```

### **3. Aproveitar Checkpoints**

```
✅ Revisar Phase 1 output
✅ Confirmar approach está correto
✅ Prosseguir para Phase 2
✅ Evitar retrabalho e waste de créditos
```

---

## 📈 Monitoramento de Uso

### **GitHub Settings**

```
github.com → Settings → Copilot → Usage
```

- Visualize requests diários/mensais
- Identifique padrões de alto consumo
- Planeje otimizações

### **VS Code**

```
Ctrl+Shift+P → "GitHub Copilot: View Usage"
```

- Estatísticas locais
- Sessions que consumiram mais

---

## 🤝 Contribuindo

Contribuições são bem-vindas!

1. **Fork** o repositório
2. **Crie** branch: `git checkout -b feature/nova-otimizacao`
3. **Commit**: `git commit -m 'Add: nova otimização X'`
4. **Push**: `git push origin feature/nova-otimizacao`
5. **Abra** Pull Request

**Guias**:

- Mantenha princípios de simplicidade
- Documente mudanças em DOCS/
- Teste com prompts reais
- Atualize modes-registry.md

---

## 📜 Licença

MIT License - veja [LICENSE](./LICENSE) para detalhes

---

## 🔗 Links Úteis

- [GitHub Copilot](https://github.com/features/copilot)
- [Copilot Documentation](https://docs.github.com/en/copilot)
- [VS Code Copilot Settings](https://code.visualstudio.com/docs/copilot/copilot-settings)
- [Copilot Pricing](https://github.com/features/copilot#pricing)

---

## 📊 Stats

- **Modes Ativos**: 5 (otimizados para credit efficiency)
- **Modes Arquivados**: 7 (disponíveis para restore)
- **Templates**: 6 (padronizados e documentados)
- **Redução Média de Iterações**: ~35% (v2.0 → v2.1)
- **VS Code Settings**: Incluídas e otimizadas

---

**Versão**: 2.1  
**Data**: October 2025  
**Manutenção**: Ativa  
**Comunidade**: Open Source

Se desejar contribuir com traduções, exemplos ou otimizações, abra uma issue ou PR! 🚀
