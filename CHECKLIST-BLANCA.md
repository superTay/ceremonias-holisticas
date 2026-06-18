# Checklist legal para Blanca — antes de publicar

> La web ya cumple a nivel técnico (cookies, fuentes, páginas legales, claims).
> Pero **hay datos que solo tú puedes aportar**. Hasta completarlos, los textos
> legales muestran marcas `[A COMPLETAR]`. Repasa esta lista y pásame los datos
> (o edítalos tú en `src/i18n/resources/es.js` y `en.js`, sección `legal`).
>
> ⚠️ Estos textos son un **modelo orientativo conforme**, no un dictamen jurídico.
> Para máxima tranquilidad, conviene que un abogado les dé un último repaso.

## 1. Datos de identificación fiscal (obligatorio · LSSI art. 10 y RGPD)
Aparecen en el **Aviso Legal** y la **Política de Privacidad**:

- [ ] **Nombre y apellidos** o **razón social** del titular del negocio.
- [ ] **NIF / CIF**.
- [ ] **Domicilio fiscal** (dirección completa).
- [ ] ¿Estás dada de alta como **autónoma**? ¿Epígrafe **IAE** de la actividad? (recomendable indicarlo).
- [ ] Confirmar que **oolexpriences@gmail.com** y **+34 665 17 55 56** son los datos de contacto definitivos (hoy son provisionales según el HANDOFF).

## 2. Reservas, pagos y cancelación (Términos)
En la página **Términos & Cancelación**:

- [ ] Confirmar el **depósito**: ¿25 % por Bizum? ¿Número Bizum de cobro?
- [ ] Definir la **política de cancelación**: ¿cuántos días de antelación dan derecho a devolución del depósito? ¿Y con menos antelación?
- [ ] Confirmar si los **precios incluyen impuestos** (IVA / exención).

## 3. Proveedores y datos (Privacidad)
Para confirmar que la lista de "encargados del tratamiento" es correcta:

- [ ] **Cal.eu (Cal.com)** — sí lo usamos para reservas. ✔️ (ya incluido)
- [ ] **Google Calendar** — ¿la cuenta sincronizada es tuya? ✔️ (ya incluido)
- [ ] ¿Usas algún otro servicio que reciba datos de clientes (Mailchimp, CRM, hoja de cálculo compartida, etc.)? Si es así, hay que añadirlo.
- [ ] Idealmente, firmar/aceptar el **contrato de encargado del tratamiento (DPA)** que ofrecen Cal.com, Google y Vercel.

## 4. Testimonios (publicidad · verificación humana)
Los testimonios de la web (Paulina M., Lucía & Marc, Sofía R.) deben ser **reales**:

- [ ] Confirmar que cada testimonio corresponde a una persona real.
- [ ] Tener su **consentimiento** para publicar la cita (aunque sea con nombre abreviado).
- [ ] Si alguno es ilustrativo/compuesto, hay que retirarlo o marcarlo claramente.
- *(Ya se añadió el aviso "algunos nombres se han abreviado por privacidad".)*

## 5. Claims y trayectoria (revisar coherencia)
Ya se suavizaron los claims de salud más sensibles. Revisa que estás cómoda con:

- [ ] "+22 años de trayectoria" vs "+10 años diseñando ceremonias" (coherente: total vs ceremonias).
- [ ] Mención de **Reiki, Flores de Bach, kobido, cosmetología** como formación (no como tratamiento médico). ✔️
- [ ] "Numerología terapéutica" en el Coaching — lleva el disclaimer "nunca como tratamiento médico". ¿Te encaja o prefieres "numerología"?
- [ ] **Recortes de prensa** (The Playa Times, Novedades Quintana Roo): confirmar que tienes derecho a reproducirlos.

## 6. Pendiente técnico opcional
- [ ] Si en el futuro se añade **analítica** (Google Analytics, Meta Pixel, etc.), habrá que ampliar el banner y la Política de Cookies. Hoy **no hay** ninguno (mejor para la privacidad).

---

**Dónde se editan los textos:** `src/i18n/resources/es.js` y `src/i18n/resources/en.js`, objeto `legal`. Busca `[A COMPLETAR]` / `[TO COMPLETE]` y sustitúyelo.
