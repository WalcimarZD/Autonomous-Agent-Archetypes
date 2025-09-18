# Prompts Específicos: IA para Análise de Exames

Templates de prompts otimizados especificamente para o projeto "IA para Análise de Exames".

---

## 🏥 **Contexto do Projeto**
- **Domínio**: Saúde digital, diagnóstico por imagem
- **Usuários**: Médicos radiologistas, técnicos em radiologia
- **Tecnologia**: IA/ML para análise de imagens médicas
- **Compliance**: LGPD, CFM, ANVISA

---

## 📋 **Prompts Prontos para Usar**

### **Fase 1: Discovery**
```
@Product Manager
Analise o mercado brasileiro de telemedicina e IA médica. Crie PRD completo para plataforma de análise automática de exames por IA, considerando:
- Regulamentação CFM e ANVISA para IA em medicina
- Concorrentes: Zebra Medical, Aidoc, Arterys
- Usuários: radiologistas em hospitais privados/públicos brasileiros
- MVP: detecção de pneumonia em raio-X torácico
- Roadmap: expansão para TC, RM, outros diagnósticos

Incluir análise de ROI para hospitais e modelo de precificação.
```

### **Fase 2: UX Research**
```
@UX Designer
Projete interface para radiologistas analisarem exames com assistência de IA:
- Workflow: upload DICOM → processamento IA → revisão médica → laudo final
- Usuários: radiologistas com 15+ anos experiência, resistentes a tecnologia
- Ambiente: salas de laudos com monitores médicos calibrados
- Requisitos: visualização DICOM nativa, anotações, comparação temporal
- Compliance: rastreabilidade de decisões médicas

Criar protótipos de alta fidelidade e plano de testes com médicos reais.
```

### **Fase 3: Arquitetura Técnica**
```
@Architect
Projete arquitetura enterprise para plataforma de IA médica:
- Scale: 50 hospitais, 10.000 exames/dia, crescimento 200%/ano
- Latência: <2s para inferência, <30s para processamento completo
- Compliance: LGPD, auditoria CFM, logs imutáveis
- Integração: PACS (DICOM), HIS (HL7 FHIR), RIS existentes
- IA: modelos TensorFlow/PyTorch, retreino automático, A/B testing
- Infraestrutura: Cloud híbrida (dados sensíveis on-premise)

Incluir disaster recovery e estratégia de backup para dados médicos.
```

### **Fase 4: Implementação**
```
@Developer
Implemente API core para processamento de exames:
- Endpoint: POST /api/v1/exams/analyze
- Input: arquivo DICOM + metadados paciente anonimizados
- Processing: validação DICOM → preprocessamento → inferência IA → pós-processamento
- Output: relatório estruturado JSON + overlays visuais
- Performance: handle arquivos 500MB+, processamento assíncrono
- Error handling: falhas de rede, corrupted DICOM, model timeout

Seguir padrões médicos IHE e integrar com PACS workflow existente.
```

### **Fase 5: Quality Assurance**
```
@QA Tester
Execute validação completa do sistema de IA médica:
- Dataset: 10.000 exames reais anonimizados com ground truth
- Métricas: Sensibilidade >95%, Especificidade >90%, AUC >0.95
- Performance: <2s latência, 99.9% uptime, 0% data loss
- Security: penetration testing, OWASP compliance
- Usability: testes com 10 radiologistas em ambiente real
- Regulatory: validação CFM para software médico classe II

Documentar todos os testes para submissão ANVISA.
```

### **Fase 6: Segurança e Compliance**
```
@Security
Implemente controles de segurança para dados médicos sensíveis:
- Criptografia: AES-256 at rest, TLS 1.3 in transit
- Acesso: RBAC médico (médico/técnico/admin), 2FA obrigatório
- Auditoria: logs imutáveis de acesso a exames, trilha completa
- Anonimização: remoção automática de PII de DICOM headers
- Network: segmentação hospitalar, VPN site-to-site
- Backup: encrypted offsite, retention 20 anos (CFM)

Compliance LGPD completo + procedimentos de breach notification.
```

### **Fase 7: DevOps e Deploy**
```
@DevOps
Configure infraestrutura para ambiente médico crítico:
- Kubernetes: cluster HA com 3 masters, auto-scaling por demanda
- CI/CD: validação de modelos ML, testes automáticos, deploy gradual
- Monitoring: Prometheus/Grafana para métricas médicas específicas
- Alerting: falhas de IA, latência alta, anomalias em diagnósticos
- Backup: estratégia 3-2-1 para dados médicos, RTO <4h
- Compliance: logs de deployment, rollback automático

Zero downtime deployments com blue/green strategy.
```

### **Fase 8: Dados e ML**
```
@Data Engineer
Construa pipeline de dados para IA médica:
- Ingestão: DICOM files via HL7 FHIR, batch e real-time
- Storage: Data lake DICOM + metadata normalizado
- ETL: anonimização automática, validação qualidade imagem
- Training: pipeline MLOps com Kubeflow, dataset versioning
- Serving: modelo serving com TensorFlow Serving, A/B testing
- Monitoring: drift detection, performance degradation alerts

Compliance com padrões médicos IHE e DICOM workflow.
```

### **Troubleshooting Comum**
```
@Debugger
Investigue problema: "IA gerando falsos positivos em exames noturnos"
Sintomas: Taxa erro 2x maior entre 22h-6h vs período diurno
Environment: Produção, hospital XYZ, técnicos plantonistas
Logs: [anexar logs específicos]
Impact: 200 pacientes/semana afetados, questionamento médicos

Análise completa: qualidade imagem noturna, bias no dataset, 
diferença equipamentos, fadiga operadores, variações de protocolo.
```

---

## 💡 **Dicas de Uso**

1. **Sempre inclua contexto médico** específico
2. **Mencione compliance** obrigatório (LGPD, CFM, ANVISA)
3. **Defina métricas** médicas relevantes (sensibilidade, especificidade)
4. **Considere workflows** hospitalares reais
5. **Especifique volumes** e performance esperados

**Com estes prompts, você obtém resultados profissionais mesmo sem expertise médica específica!** 🏥🚀