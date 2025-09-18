
# GitHub Copilot Personas Usage Guide

This guide provides detailed instructions on how to activate and interact with the AI personas available in this repository. For English users, see the summary below. For Portuguese, continue reading.

---

# Guia de Utilização das Personas para GitHub Copilot

Este guia fornece instruções detalhadas sobre como ativar e interagir com as personas de IA disponíveis neste repositório.

## Requisitos

- Visual Studio Code instalado
- GitHub Copilot habilitado
- Permissão para carregar chat modes personalizados
- Sistema operacional compatível (Windows, macOS, Linux)

## Instalação e Ativação

1. Clone ou baixe este repositório.
2. Navegue até a pasta `modes/`.
3. Escolha o arquivo `.chatmode.md` da persona desejada (veja tabela abaixo).
4. No GitHub Copilot Chat, use o comando:
    - `/load ./modes/<nome_do_arquivo>.chatmode.md`
    - *Exemplo:* `/load "./modes/Product Manager.chatmode.md"`
    - *Exemplo:* `/load "./modes/Beast Mode.chatmode.md"`
5. Aguarde a confirmação do Copilot.

## Tabela de Personas Disponíveis

| Persona no Copilot           | Arquivo                              | Descrição Rápida                       |
|------------------------------|--------------------------------------|----------------------------------------|
| **Prompt Advisor**           | Prompt Advisor.chatmode.md           | **Otimização de prompts para outras personas** |
| Beast Mode                   | Beast Mode.chatmode.md               | Agente universal completo              |
| Product Manager              | Product Manager.chatmode.md          | Requisitos, pesquisa de mercado        |
| UX Designer                  | UX Designer.chatmode.md              | Experiência do usuário, protótipos     |
| Architect                    | Architect.chatmode.md                | Solução técnica, análise de codebase   |
| Security                     | Security.chatmode.md                 | Segurança, controles e revisão         |
| Developer                    | Developer.chatmode.md                | Implementação, desenvolvimento         |
| QA Tester                    | QA Tester.chatmode.md                | Validação, qualidade                   |
| DevOps                       | DevOps.chatmode.md                   | Deploy, automação, monitoramento       |
| Technical Writer             | Technical Writer.chatmode.md         | Documentação técnica                   |
| SRE                          | SRE.chatmode.md                      | Confiabilidade, performance            |
| Data Engineer                | Data Engineer.chatmode.md            | Pipelines, análise de dados            |
| Debugger                     | Debugger.chatmode.md                 | Resolução de problemas                 |
| Scrum Master                 | Scrum Master.chatmode.md             | Facilitação ágil                       |
| Learning Tutor               | Learning Tutor.chatmode.md           | Tutoria personalizada                  |
| Personal Assistant           | Personal Assistant.chatmode.md       | Organização pessoal                    |
| Data Engineer                | data-engineer.chatmode.md            | Pipelines, análise de dados            |
| Problem Solver               | problem-solver.chatmode.md           | Diagnóstico, resolução de problemas    |
| Scrum Master                 | scrum-master.chatmode.md             | Facilitação ágil, remoção de impedimentos |
| AI Learning Tutor            | ai-learning-tutor.chatmode.md        | Tutoria personalizada, aprendizado     |
| Personal Life Assistant      | personal-assistant.chatmode.md       | Gestão de vida, produtividade          |

## Como Interagir

- Forneça prompts claros e objetivos.
- Use comandos específicos para tarefas desejadas.
- Analise as respostas e planos fornecidos pela persona.
- Dê feedback para ajustar o comportamento quando necessário.

## Princípios de Interação com as Personas
...existing code...

## Ativando uma Persona

Para ativar uma persona no GitHub Copilot Chat:

1.  **Localize o arquivo:** Navegue até a pasta `modes/` e escolha o arquivo `.chatmode.md` da persona que deseja usar (ex: `product-manager.chatmode.md`).
2.  **Carregue a Persona:** No seu ambiente GitHub Copilot Chat, utilize o comando para carregar um chat mode. A sintaxe exata pode variar dependendo da sua versão do Copilot, mas geralmente é `/load <caminho_do_arquivo_completo_da_persona>.chatmode.md`.
    *   *Exemplo:* `/load ./modes/product-manager.chatmode.md`
3.  **Confirmação:** Após o comando, o Copilot deve confirmar que a persona foi carregada e está pronta para interagir.

## Princípios de Interação com as Personas

As personas operam com um **fluxo de trabalho autônomo e iterativo**, buscando completar suas tarefas até a validação final.

*   **Comunicação Clara:** Forneça prompts claros e objetivos. A persona responderá explicando sua abordagem e o progresso, usando os `Communication Guidelines` definidos em sua programação.
*   **Uso de Ferramentas:** As personas utilizarão ferramentas como `fetch`, `codebase`, `runCommands`, `editFiles`, `search`, etc., conforme configurado em seu `description`. Observe como elas invocam e interpretam os resultados.
*   **Ciclo Iterativo:** A persona continuará seu processo (investigação, design, implementação, validação) até que os critérios de conclusão (`Autonomous Workflow`) sejam atendidos. Permita que ela execute suas fases e intervenha se precisar redirecionar.
*   **Listas de Tarefas e Checkpoints:** Muitas personas mantêm listas de tarefas (`Todo Lists`) e checkpoints para rastrear o progresso e garantir a conclusão.

## Fluxos de Trabalho Integrados (Exemplos)

As personas podem ser usadas em conjunto para cobrir todo o ciclo de vida de desenvolvimento de software e áreas de aprendizado/gestão pessoal.

*   **Exemplo: Desenvolvimento de uma Nova Funcionalidade:**
    1.  **Product Manager:** Define requisitos, pesquisa mercado, valida viabilidade (`product-manager.chatmode.md`).
    2.  **UX Designer:** Cria a experiência do usuário, protótipos e valida com usuários (`ux-designer.chatmode.md`).
    3.  **Architect:** Projeta a solução técnica, analisa o codebase existente (`architect.chatmode.md`).
    4.  **Security Engineer:** Revisa a arquitetura, implementa controles de segurança (`security-engineer.chatmode.md`).
    5.  **Implementer:** Desenvolve o código seguindo as especificações e testes (`implementer.chatmode.md`).
    6.  **QA Engineer:** Valida a funcionalidade, desempenho e segurança (`qa-engineer.chatmode.md`).
    7.  **DevOps Engineer:** Automatiza o deploy e monitora a infraestrutura (`devops-engineer.chatmode.md`).
    8.  **Technical Writer:** Documenta a funcionalidade e os processos (`technical-writer.chatmode.md`).
    9.  **SRE:** Garante a confiabilidade e performance em produção (`site-reliability-engineer.chatmode.md`).
    10. **Data Engineer:** Implementa pipelines para coleta e análise de dados (`data-engineer.chatmode.md`).
    11. **Problem Solver:** Investiga e resolve quaisquer problemas que surjam durante o ciclo (`problem-solver.chatmode.md`).
    12. **Scrum Master:** Facilita todo o processo, otimiza o fluxo de trabalho e remove impedimentos (`scrum-master.chatmode.md`).

*   **Exemplo: Aprendizado Contínuo e Gestão Pessoal:**
    1.  **AI Learning Tutor:** Avalia o conhecimento, cria um plano de aprendizado personalizado, explica conceitos complexos (`ai-learning-tutor.chatmode.md`).
    2.  **Personal Life Assistant:** Agenda o tempo de estudo, gerencia distrações, otimiza rotinas diárias para apoiar o aprendizado (`personal-assistant.chatmode.md`).


## Dicas para Otimizar o Uso

- **Seja Específico:** Quanto mais detalhado for seu pedido, melhor a persona poderá contextualizar e agir.
- **Permita a Autonomia:** Deixe a persona seguir seu fluxo de trabalho. Intervenha para refinar ou redirecionar, não para microgerenciar.
- **Analise as Respostas:** As personas fornecem resumos de suas ações e planos. Use isso para entender o progresso.
- **Valide:** Para as personas de desenvolvimento, sempre revise o código e as especificações. Para as pessoais, revise planos e recomendações.
- **Feedback:** Se uma persona não estiver no caminho certo, forneça feedback claro para que ela possa ajustar sua abordagem.

## FAQ

**Como desativar uma persona?**
> Basta iniciar um novo chat ou carregar outro chat mode.

**O comando não funciona, o que fazer?**
> Verifique se o caminho do arquivo está correto e se o Copilot Chat está atualizado.

**Posso criar minha própria persona?**
> Sim! Use um dos arquivos existentes como modelo e siga o padrão de ferramentas/metodologia.

**Como atualizar uma persona?**
> Edite o arquivo correspondente em `modes/` e recarregue no Copilot Chat.

## Contribuindo

Contribuições são bem-vindas! Para adicionar ou melhorar personas:

1. Fork o repositório e crie uma branch.
2. Adicione ou edite arquivos em `modes/` ou `DOCS/`.
3. Abra um Pull Request com uma descrição clara das mudanças.
4. Siga o padrão de autonomia, ferramentas e metodologia das personas existentes.

## Links Úteis

- [Documentação Oficial do GitHub Copilot](https://docs.github.com/en/copilot)
- [Repositório GitHub Copilot Personas](https://github.com/)
- Exemplos de uso e tutoriais (em breve)

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## Suporte e Comunidade

Para dúvidas, sugestões ou suporte, abra uma issue no repositório ou participe da comunidade.