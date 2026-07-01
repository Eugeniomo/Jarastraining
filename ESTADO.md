# ESTADO — Jarastraining

<!-- Estado: backlog | en-curso | code-listo | desplegado | ✅ validado | 🚫 bloqueado -->
**Última sesión:** 2026-06-30 (tarde) · Rehecho el **catálogo de cursos** (`cursos.html` + `cursos-data.json`): dejado en **6 cursos**, quitado submenú "Calendario Cursos" del nav (4 páginas), quitados filtros de estado y nota NFPA, títulos sin recorte, y **foto propia distinta por curso** (generadas por IA, optimizadas con `sips`). Todo desplegado a GitHub Pages.

## Catálogo de cursos — REHECHO (2026-06-30 tarde) — desplegado a Pages
- **6 cursos finales** (antes había 14): 1) Detección Internacional (JDT-DETINT) · 2) Operación Salas de Bomba 8h (JDT-OSB8) · 3) Operación e **Inspección** Salas de Bomba 16h (JDT-OSB16, antes "y Mantenimiento" — se quitó "mantenimiento" a pedido) · 4) Formación de Brigada (JDT-BRIG-FORM, 8h) · 5) Especialización de Brigada (JDT-BRIG-ESP, **40h**) · 6) Uso y Manejo de Extintores (JDT-EXT, 4h).
- **Eliminados** (recuperables por git): Clarke, NFPA 25 Inspección, Corporativo, Espuma, Rociadores, Seguridad Electrónica, Notificación Internacional y **Fundamentos Bombas SENCE** (el del temario T16, tenía inscripción con pago — ¡ojo si se quiere reactivar!).
- Cambios UI en `cursos.html`: quitado submenú "Calendario Cursos" (index/nosotros/contacto/politica), quitados botones filtro Todos/Planificado/Finalizado, quitada nota "No incluye certificación NFPA", quitado `-webkit-line-clamp` del título, categoría "Operación y Mantenimiento" → "Salas de Bomba".
- **Fotos:** 4 generadas por IA (Eugenio las creó con prompts que le pasé; CLI `gemini` quedó sin auth `IneligibleTierError`, MCP gemini-design no hace fotos). Archivos: `curso-deteccion.jpg`, `curso-brigada-formacion.jpg`, `curso-brigada-especializacion.jpg`, `curso-extintores.jpg` (campo `imagen` por curso). Salas de bomba usan `sala-bombas-general.jpg` y `capacitacion-practica.jpg`.
- Último commit desplegado: `b45ea3b`. **Pendiente validación de Eugenio.**

## WhatsApp del CRM — DIAGNÓSTICO CERRADO (2026-06-30)
- El número **+56 9 8131 9416 NO se vincula a Evolution/Baileys**: WhatsApp manda **logout 401 al emparejar** (probado con QR y con código de 8 dígitos). Causa: el número está registrado como **WhatsApp Business en Meta Business Manager ("Aprobada")**, y Meta bloquea clientes no oficiales.
- **No se arregla reintentando.** Decisión: **migrar al driver oficial `meta` (Cloud API)** — el CRM ya lo soporta (`api/wasap_send_meta.php`, `api/whatsapp_webhook_meta.php`).
- **Ya configurado en `/var/www/jaras-crm/.env`:** `META_VERIFY_TOKEN=jaras_b08b5351b79a5193`. Webhook a registrar en Meta: `https://crm.sercloud.cl/api/whatsapp_webhook_meta.php` (suscribir `messages`).
- **FALTA (manual de Eugenio en panel de Meta):** sacar `META_PHONE_NUMBER_ID` + `META_WA_TOKEN` (token permanente de Usuario del Sistema, permisos `whatsapp_business_messaging` + `whatsapp_business_management`). Cuando los traiga: agregar al `.env`, cambiar `WHATSAPP_DRIVER=evolution` → `meta`. Paso a paso entregado en el chat.
- (Menor) En `/opt/evolution-jaras/.env` quedó `CONFIG_SESSION_PHONE_VERSION=2.3000.1035194821` — no resolvió, pero es inocuo.

## Tablero
| ID | Tarea | Estado | Bloqueo |
|----|-------|--------|---------|
| T17 | Catálogo de cursos rehecho (6 cursos + fotos propias) | desplegado a Pages (`b45ea3b`) | pendiente validación Eugenio |
| T14 | WhatsApp CRM vía Meta Cloud API | code-listo (driver) | 🚫 falta Phone Number ID + token permanente de Eugenio |
| T15 | `/admin/perfil.php` (datos + foto + cambio de clave) | desplegado y probado por mí (Playwright) | pendiente validación Eugenio |
| T16 | Temario SENCE 8h "Fundamentos de Bombas de Incendio" (docx+pdf) | code-listo | pendiente validación Eugenio |
| T12 | Enviar propuestas 38/39/41/42 desde info@ (adjuntar PDF a borradores) | borradores listos | manual de Eugenio |
| T13 | SQM (Paulina): cotización NFPA 10-20-25, 2 grupos | 🚫 esperando N° personas por turno | — |
| T5 | Inscripción Bombas → CRM | desplegado a Pages | 🚫 falta BanaHosting FTP |
| T6/T7/T8 | Catálogo/Formularios/Textos SENCE | desplegado a Pages | pendiente validación |
| T11 | PA-01: tabla distribución de contenidos | code-listo | pendiente validación Eugenio |

## Temario 8h Bombas (SENCE) — sesión 2026-06-30
- Base: ficha SENCE **solicitud 1941225** ("Copia de Curso sence 1238095641.pdf"). Curso 8h (4 teóricas + 4 prácticas), 3 AE, asistencia 75%, eval. teórica 40% (mín 60%) + práctica 60% (mín 70%), relator Anton Ziller.
- Generado con formato Jaras (PR-18-F002). Guardado docx+pdf en:
  `OneDrive…/Cursos/Curso OPERACIÓN SALA BOMBA SCI/8 horas/` (la carpeta estaba vacía).
- **Pendiente:** presentación de 8h (solo existe la de 16h) — ofrecí adaptarla, Eugenio no respondió.

## Sitio (GitHub Pages — https://eugeniomo.github.io/Jarastraining/)
- Cambios viven SOLO en Pages. `jarastraining.cl` (BanaHosting) sube MANUAL — Claude sin FTP/cPanel. Bloqueante recurrente.

## CRM (crm.sercloud.cl — deploy git pull root por SSH `vultr`, webroot /var/www/jaras-crm)
- Login auditor: auditor@sercloud.cl (clave en `~/.orquestador/jaras-auditor.pw`). `wasap_pairing.php` requiere rol admin (auditor no entra).

## Preguntas / pendientes abiertas
- **Eugenio → falta traer** `META_PHONE_NUMBER_ID` + token permanente de Meta para terminar WhatsApp.
- ¿Adaptar la presentación de 16h a 8h? (sin respuesta)
- ¿Cómo se sube a jarastraining.cl (FTP/cPanel BanaHosting)? — bloquea publicación real.
- RUT de Sergio (Afiansso) para propuesta 37-26.
- Validar en Pages: T6, T7, T8, **T17 (catálogo 6 cursos)**. Validar perfil.php (T15) y temario 8h (T16).
- ⚠️ El curso **Fundamentos Bombas SENCE** (tenía inscripción con pago) salió del catálogo al reducir a 6 — ¿se reactiva o queda fuera? (T16 depende de esto).

---
*Infra → INFRA_SERVER.md · Historia → BITACORA.md · CRM acceso → memoria acceso-crm-auditor*
