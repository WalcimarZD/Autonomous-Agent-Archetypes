# Runbook — {service_name}

**Última atualização:** {yyyy-mm-dd}

## Sumário

- Escopo
- Como reproduzir
- Indicadores de saúde
- Passos de mitigação
- Rollback

## Indicadores de saúde

- 5xx rate > 1% em 5m
- queue length > 1000

## Como reproduzir

Passo a passo para reproduzir um problema comum.

## Contenção rápida

1. Identificar instância problemática: comandos
2. Reiniciar serviço: `systemctl restart {service}`
3. Ativar fallback: toggle feature flag

## Rollback

- Versão: {previous_version}
- Comando: `kubectl rollout undo deployment/{app}`

## Contatos

- On-call: +55 9xxxxxxx (Slack: @oncall)
