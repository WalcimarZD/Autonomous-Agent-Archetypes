# Arquitetura — {nome_do_projeto}

**Versão:** 1.0  
**Data:** {yyyy-mm-dd}  
**Autor:** {nome}

## 1. Visão geral

Breve resumo (2-3 linhas) do propósito do sistema.

## 2. Domínios / Bounded Contexts

- Contexto A: responsabilidades principais
- Contexto B: responsabilidades principais

## 3. Diagrama lógico (texto)

- Serviços: ServiceA -> ServiceB (HTTP/gRPC)
- Banco: SQL Server (replicação read-only)

## 4. Contratos públicos / API

- `GET /v1/resource` — descrição, auth, principais headers, códigos de resposta

## 5. Restrições e requisitos não-funcionais

- SLA: 99.9% uptime
- Latência máxima: 200ms p/ p95
- Segurança: TLS, OWASP top10 mitigations

## 6. Data model (resumo)

- Entidade: Campos principais, índices críticos

## 7. Observability & Operações

- Métricas principais (latency, error_rate, throughput)
- Tracing: Jaeger
- Logs: ELK/EFK

## 8. Deploy & Infra

- Estratégia: Blue/Green ou Canary
- IaC: Terraform modules listados

## 9. Roadmap de migração (se aplicável)

- Passo 1: extrair read model
- Passo 2: ... etc

## 10. Riscos e trade-offs

- Risco X: impacto e mitigação

## 11. Artefatos anexos

- Links para diagramas (ex.: Figma, draw.io), scripts de provisionamento

---
