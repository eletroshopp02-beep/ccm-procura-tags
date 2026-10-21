# Manutenção Pro Industrial

Aplicativo web progressivo (PWA) em português para uso de manutenção industrial, Android e iPhone. Interface de alto contraste preto/grafite/branco, botões com relevo, módulos técnicos e navegação adaptada para celular.

## Módulos
- Busca de TAG por código completo, sufixo numérico, descrição, área e CCM.
- Catálogo embarcado em \`tags-base.js\` e catálogo compartilhado Supabase atualizado manualmente.
- Consulta técnica WEG CFW11, falhas e procedimentos de segurança.
- Calculadora de corrente nominal/medida/configurada, estimativa trifásica e referências dos parâmetros 156/157/158.
- Ensaio de resistência entre fases com micro-ohmímetro e cálculo da variação relativa máxima.
- Ensaio com megômetro, unidades MΩ/GΩ, tensão de ensaio e comparação opcional com limite informado.
- Assistência técnica guiada e integração com a função Manutenção Pro IA.
- Fechamentos didáticos de motores, histórico local, relatórios, exportação/importação de backup e compartilhamento nativo.
- Uso offline com cache PWA. Atualização do catálogo é manual e não exige login.

## Publicar
GitHub → Settings → Pages → Deploy from a branch → main → /(root). Após publicar em HTTPS:
- Android: Chrome → Instalar app.
- iPhone: Safari → Compartilhar → Adicionar à Tela de Início.

## Dados e sincronização
O catálogo compartilhado de TAGs e áreas é consultado no projeto Supabase separado **Manutencao Pro Industrial**. O botão Atualizar baixa as informações e tenta publicar novas TAGs locais pendentes, sem autenticação de usuário. Os ensaios e o histórico ficam locais por padrão; para transferir registros entre aparelhos, use Compartilhar relatório ou Exportar/Importar backup JSON. Não se usa chave secreta/service-role no cliente.

## Segurança técnica
As rotinas fornecem cálculos e referências, não uma autorização de intervenção. Confirme sempre placa, firmware, manual do fabricante e procedimento de manutenção da fábrica. Os limites de aceitação não são universais. As ilustrações de ligação são didáticas e não substituem diagramas do motor.

## Desenvolvimento
A lógica de interface fica em \`app.js\`, estilos e estrutura em \`index.html\`, catálogo embarcado em \`tags-base.js\` e cache/offline em \`sw.js\`.
