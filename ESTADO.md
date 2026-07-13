# ESTADO — Jarastraining

<!-- Estado: backlog | en-curso | code-listo | desplegado | ✅ validado | 🚫 bloqueado -->
**Última sesión:** 2026-07-09. Auditoría completa del sitio web y del CRM (3 hallazgos, 1 reparado). Diseñé el programa bianual de perfeccionamiento de brigada para GASCO (propuesta 40-26, base OSHA/NFPA). Consolidé toda la info del curso 17-jul (Fundamentos Bombas 8h): 11/20 inscritos, pero la **OC al relator quedó anulada** — bloquea el pago del anticipo antes del curso. Detalle completo de la sesión en BITACORA.

## 🔴 Bloqueante urgente (antes del 17-jul)
- **OC del relator (Hidrolink) ANULADA** por Leslie Gatica: debe reemitirse explícitamente a nombre de **"Jaras Training"** (ella emite default a "Jaras Diesel") — resolver con Leslie/José Luis Saez antes de poder pagar el anticipo.

## Tablero
| ID | Tarea | Estado | Bloqueo |
|----|-------|--------|---------|
| T25 | Curso **viernes 24-jul, 10:00–18:30** (movido desde 17-jul) Fundamentos Bombas 8h | en-curso — 11/20 cupos; web en Pages ✔, CRM actualizado ✔ | 🚫 OC relator anulada (ver arriba) · Eugenio envía correos de cambio de fecha · falta subir ZIP a BanaHosting |
| T26 | GASCO — Programa bianual perfeccionamiento brigada (40-26) | code-listo (programa diseñado) | falta adaptar cálculo económico (15 pers. × 8 jornadas) |
| T27 | 5 prospectos con ficha enviada sin responder (Afiansso, Extingue Llamas, Syncore, Asprevención, OHLA) | backlog · texto de seguimiento redactado | falta enviar |
| T28 | Chamilo (Aula Virtual) caído — host BD no responde | backlog | falta identificar cPanel de Chamilo y re-whitelistear IP `64.176.15.118` |
| T18 | Presentación comercial Codelco | desplegado (enviada) | esperando respuesta Codelco |
| T21 | Seguimiento a Francisco Ortega (prop. 38-26) | backlog | — |
| T17 | Catálogo de cursos (6 cursos) | desplegado a Pages | pendiente validación Eugenio |
| T14 | WhatsApp CRM vía Meta Cloud API | ✅ validado | prod pleno: falta plantilla propia + publicar app |
| T15 | `/admin/perfil.php` | desplegado y probado | pendiente validación Eugenio |
| T16 | Temario SENCE 8h + checklist práctica | code-listo (checklist grupal 1 hoja creado) | falta Área SENCE + Vigencia 11-06-2030; validación Eugenio |
| T19 | Formulario inscripción dinámico | desplegado a Pages | pendiente validación Eugenio |
| T20 | 6 fichas PDF Fundamentos Bombas 8h | enviadas 06-jul | solo Netbee avanzó a pago (ver T27) |
| T23 | CRM badge inscripciones nuevas | code-listo, local | falta desplegar a vultr |
| T12 | Enviar propuestas 38/39/41/42 desde info@ | borradores listos | manual de Eugenio |
| T13 | SQM (Paulina): cotización NFPA 10-20-25 | 🚫 esperando N° personas por turno | — |
| T5 | Inscripción Bombas → CRM (BanaHosting) | desplegado a Pages | 🚫 falta subir ZIP fresco a BanaHosting (política + nombre SENCE desactualizados) |

## Reglas de contenido comercial (aprendidas — aplicar SIEMPRE)
- Jaras Training **solo hace cursos**: nada de puesta en marcha, comisionamiento, mantención, servicio técnico ni repuestos.
- Decir siempre **"Clarke Fire"**, nunca "el fabricante".
- Docs: texto justificado, sin negritas en párrafos, precios con "Exento de IVA" debajo.
- Correlativo de ofertas `NN-26`: registrar SIEMPRE en `7.2 Comercial/Control de ofertas.xlsx` al crear una propuesta nueva — se desactualizó una vez (35-42 nunca se anotaron) y causó el salto/duda del 40.

## Sitio y CRM (resumen vigente)
- Web = GitHub Pages (auto con `git push`, código y Pages siempre correctos); `jarastraining.cl` BanaHosting = subida manual, recurrentemente desactualizado (ver T5).
- CRM crm.sercloud.cl: deploy `git pull` root vía SSH `vultr`, webroot `/var/www/jaras-crm`, BD accesible vía `.env` (`CRM_DB_*`, no es parse_ini_file-compatible). Auditor: auditor@sercloud.cl (clave `~/.orquestador/jaras-auditor.pw`).
- **`info@jarastraining.cl` se gestiona vía Gmail** (`emoyae@gmail.com`, alias), NO Outlook. Outlook (`eugenio.moya@jarasdiesel.com`) es buzón interno aparte (OC/administración con Leslie Gatica / José Luis Saez).
- Campaña de email marketing: cron OK bajo `www-data`, funciona por diseño (ventana 10-12h Chile, ~100/día máx.) — no confundir con bug si se ve "fuera de horario".

## Preguntas / pendientes abiertas
- ¿Cómo se sube a jarastraining.cl (FTP/cPanel BanaHosting)? — bloquea T5 y la política de calidad.
- ¿En qué cPanel/hosting vive Chamilo? — necesario para resolver T28 (whitelist IP).
- T16: ¿repongo campo Área SENCE + Vigencia 11-06-2030? ¿armo diseño PR-18-F001 8h con infraestructura/EPP reales?
- ¿Se reactiva el curso Fundamentos Bombas en el catálogo si se amplía de 6 cursos?
- WhatsApp Meta: ¿Paso 3 verificación del negocio + publicar app para producción plena?
- Acreditación SENCE relator: ¿investigo planes formativos SENCE de contra incendios/emergencias?

---
*Infra → INFRA_SERVER.md · Historia → BITACORA.md · CRM acceso → memoria acceso-crm-auditor*
