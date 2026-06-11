# ESTADO — Jarastraining

<!-- Estado: backlog | en-curso | code-listo | desplegado | ✅ validado | 🚫 bloqueado -->
**Última sesión:** 2026-06-10 · Fechas NFPA72 confirmadas + fix webhook CRM

## Tablero
| ID | Tarea | Estado | Bloqueo |
|----|-------|--------|---------|
| T1 | Confirmar fechas NFPA72 con cliente | ✅ validado | — |
| T2 | Fix webhook CRM: `.catch()` silencioso → `console.error` | code-listo | pendiente deploy |

## Cambios sesión 2026-06-10
- `diseimpdet.html`: fechas curso Detección Incendios → 10, 13, 17 y 20 de agosto 2026 (chip hero + CTA)
- `cursos-data.json`: fechaInicio/Fin/observaciones actualizadas al mismo rango
- `index.html` / `inscripcion.html`: `.catch(() => {})` del fetch al CRM → `console.error('[CRM]', err)`

## Preguntas abiertas
*(ninguna)*

---
*Infra → CLAUDE.md del proyecto · Historia → git log*
