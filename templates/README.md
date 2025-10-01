# Templates Library

Esta pasta contém templates padronizados que devem ser utilizados pelos diferentes modes para garantir consistência e interoperabilidade nos outputs gerados.

## 📁 Templates Disponíveis

### `architecture.md`

- **Usado por**: Software Architect
- **Propósito**: Documentação técnica de arquitetura seguindo padrões C4 Model/TOGAF
- **Seções obrigatórias**: Visão geral, contextos, APIs, observabilidade, riscos

### `ci.yml`

- **Usado por**: Operations Engineer
- **Propósito**: Pipeline CI/CD seguindo GitHub Actions best practices
- **Configurações**: Multi-ambiente, testes automatizados, segurança

### `runbook.md`

- **Usado por**: Operations Engineer
- **Propósito**: Procedimentos operacionais seguindo SRE/ITIL
- **Seções**: Indicadores, contenção rápida, rollback, contatos

### `review_report.md`

- **Usado por**: Quality Assurance Engineer
- **Propósito**: Relatórios de revisão seguindo guidelines do Google/GitHub
- **Formato**: Severidade classificada, patches sugeridos, recomendações

### `test.example.js` / `TestExample.cs`

- **Usado por**: Software Developer, Quality Assurance Engineer
- **Propósito**: Templates de testes automatizados
- **Cobertura**: Happy path, edge cases, error handling

## 🔄 Uso dos Templates

1. **Obrigatório**: Todos os modes devem seguir a estrutura dos templates relevantes
2. **Placeholders**: Substitua `{nome_do_projeto}`, `{service_name}`, etc. com valores reais
3. **Seções completas**: Não deixe seções vazias ou com placeholders não preenchidos
4. **Validação**: Verifique se todos os campos obrigatórios foram preenchidos

## 🎯 Benefícios

- **Consistência**: Outputs padronizados e previsíveis
- **Interoperabilidade**: Um mode pode facilmente consumir output de outro
- **Agent-friendly**: Formatos estruturados para parsing automático
- **Qualidade**: Baseados em práticas reconhecidas da indústria

## 📝 Manutenção

Templates devem ser atualizados quando:

- Novos padrões da indústria são adotados
- Feedback de uso indica melhorias necessárias
- Novos requirements de interoperabilidade surgem
- Mudanças nas ferramentas base (GitHub Actions, etc.)

---

_Última atualização: 2025-09-30_
