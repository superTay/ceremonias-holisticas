# 08 · Reservas — Configuración de Cal.com

> Estado operativo de la cuenta de reservas. **Esta configuración vive en el panel
> de Cal.com, no en el código.** El código solo la referencia desde
> `src/data/shared.js`. Última actualización: 2026-07.

## Cuenta

| Dato | Valor |
|---|---|
| Instancia | **cal.com** (global, EE. UU.) — *no* cal.eu |
| Usuario público | `cal.com/oolexperiences` |
| Nombre público | OoL Experiences |
| Correo (notificaciones) | `oolexperiencesinfo@gmail.com` |
| Google Calendar | Conectado (predeterminado) → sincroniza reservas confirmadas |
| Zona horaria | Europe/Madrid |
| DPA (Art. 28 RGPD) | **Firmado** (Documenso, 2026-07) entre Blanca Coutiño Torres y Cal.com, Inc. |

> **Cuenta antigua** `cal.eu/blanca-coutino`: dada de baja de uso. La web ya **no** la
> referencia. Puede conservarse como respaldo o cerrarla.

## Disponibilidad

Horario predeterminado "Horas laborables": **todos los días (L–D)** con dos franjas:
- **08:00 – 10:00**
- **18:30 – 20:30**

## Eventos (tipos de reserva)

| Ceremonia | Slug | Duración | Confirmación | Estado |
|---|---|---|---|---|
| Baby Blessing — Tramuntana Baby Soul Ritual | `baby-blessing` | 120m | Requiere | Visible |
| Picnic & Oráculo — El Festín de las Alas | `picnic-oraculo` | 180m | Requiere | Visible |
| Coaching Ritual — El Retorno a la Luz | `coaching` | 90m | Requiere | Visible |
| Taller Alquímico — Alquimia de las 3 Aguas | `taller-alquimico` | 120m | Requiere | Visible |
| Despedida de Soltera — El Círculo de Ixchel | `despedida` | 180m | Requiere | **Oculto** (vía WhatsApp) |
| ~~Llamada de diseño~~ | ~~`llamada-diseno`~~ | — | — | **Oculta** (ya no se ofrece; contacto por WhatsApp) |

> Los slugs deben coincidir con `EVENT_SLUGS` en `src/data/shared.js`. Solo las 4
> primeras (`baby`, `picnic`, `retorno`→coaching, `alquimia`) se reservan desde la web;
> el resto va por WhatsApp.

## Modelo de reserva (por evento)

- **Requiere confirmación → Siempre.** La reserva queda PENDIENTE hasta que Blanca la
  aprueba/rechaza desde el email de aviso (a `oolexperiencesinfo@gmail.com`).
- **Aviso mínimo: 2 días (48 h).**
- **Ubicación:** presencial — "Mallorca · lugar a convenir con Blanca".
- **Depósito 25 % por Bizum** (instrucciones en la descripción del evento). El resto se
  abona el día de la ceremonia.

## Formulario de reserva

Además de los campos por defecto (Nombre, Email, Notas, Invitados), las ceremonias de
grupo piden un campo **obligatorio**:
- **Número de personas** (tipo Number) — en Baby Blessing, Picnic, Taller y Despedida.
- *Coaching (1‑a‑1) no lo lleva.*

Cada descripción de evento incluye un **disclaimer de desplazamiento** bilingüe:
*"Las ceremonias se realizan en Santa Ponça; fuera de la zona se aplica un coste
adicional por desplazamiento…"*

## Notificaciones

El propio ajuste "Requiere confirmación" dispara el email a Blanca para aprobar cada
reserva. No hace falta workflow adicional.

## Cómo lo consume la web

`src/data/shared.js`:
- `CAL_USERNAME` = `oolexperiences` (o env var `VITE_CAL_USERNAME` en Vercel).
- `EVENT_SLUGS` = mapa id-ceremonia → slug.
- `booking.calOrigin` / `booking.embedJsUrl` = `app.cal.com` (fijan la instancia).

**Cambiar de cuenta Cal.com en el futuro** = cambiar `CAL_USERNAME` (una línea o env var),
siempre que la cuenta nueva tenga los mismos slugs. Si cambia de región (cal.com ↔ cal.eu),
ajustar también `calOrigin` y `embedJsUrl`. No hacen falta email ni contraseña de Cal.
