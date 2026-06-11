# ESTADO — Jarastraining

<!-- Estado: backlog | en-curso | code-listo | desplegado | ✅ validado | 🚫 bloqueado -->
**Última sesión:** 2026-06-11 · Catálogo de cursos: nuevos cursos, NFPA, CRM

## Tablero
| ID | Tarea | Estado | Bloqueo |
|----|-------|--------|---------|
| T1 | Fix URL webhook CRM (jt.grupoabante.com → crm.sercloud.cl) | desplegado | — |
| T2 | Cursos vencidos → Finalizado | desplegado | — |
| T3 | Landing diseimpdet.html para Google Ads (revisión) | desplegado | pendiente validación Eugenio |
| T4 | Catálogo: nuevos cursos + NFPA + CRM (esta sesión) | desplegado | pendiente fechas/precios |

## Cambios sesión 2026-06-11 (todo en GitHub `main`, GitHub Pages activo)
GitHub Pages: https://eugeniomo.github.io/Jarastraining/cursos.html (deploy auto ~1 min)
- **diseimpdet.html**: fechas agosto, precio exento de IVA, quité nombre docente "Francisco Sobarzo"
- **inscripcion.html**: fechas NFPA72 (10,13,17,20 ago), IVA exento (cursos no pagan IVA — corregido en nota factura + payload CRM)
- **cursos.html**: botón "Ver detalle" (data-driven, campo `paginaDetalle`), aclaración chica "No incluye certificación NFPA" en barra de resultados, menú 2 estados (Planificado/Finalizado)
- **cursos-data.json** (11 cursos):
  - +Operación Salas de Bomba 8h y 16h (categoría "Operación y Mantenimiento")
  - +Fundamentos de Sistemas de Bombas de Incendio (8h, NFPA 25, Planificado)
  - Rociadores/Seguridad Electrónica/Notificación → Finalizado
  - Categoría "Certificación NFPA" → "Normas NFPA"; cert NFPA 25 → "Jaras Training"
  - 2 cursos Planificado: Detección + Fundamentos
- **contacto.html**: envía `curso_interes` al CRM cuando viene `?curso=`

## Hallazgos clave (no perder)
- **CRM distingue curso**: inscripcion.html (campo `curso_interes` ✓), contacto.html vía botón Consultar (✓ ahora), home (✗ genérico). Webhook: `crm.sercloud.cl/api/formulario.php`.
- **Temarios salas de bomba** (OneDrive: .../Cursos/OPERACIÓN SALA BOMBA SCI/16 Horas/): el vigente es `PR-18-F002 Temario Operación SCI` (4-mar-2026, el más nuevo + exportado a PDF). El de "Operación y Mantenimiento" (6-feb) es obsoleto. Carpeta "8 horas" VACÍA — no existe temario de 8h oficial; el del sitio lo derivé del Día 1. Evaluación oficial: `PR-10-F003 Evaluación Curso OSBSCI`.
- **Curso 16h en vivo**: Eugenio lo dicta 12 y 13 de junio 2026.

## Próximos pasos
1. Eugenio valida cambios en GitHub Pages (T3, T4)
2. Definir **fechas y precios** de: Operación Salas de Bomba (8h/16h) y Fundamentos
3. Pendiente deploy a BanaHosting (jarastraining.cl) — GitHub Pages ya refleja todo

## Preguntas abiertas
- ¿Llenar carpeta "8 horas" con temario oficial, o dejar el derivado del Día 1?
- ¿Curso Clarke mantiene "Clarke Fire Oficial" (es cert de fabricante, no NFPA)? — lo dejé así.

---
*Infra → INFRA_SERVER.md · Historia → git log*
