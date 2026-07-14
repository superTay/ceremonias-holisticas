import React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

/* =========================================================
   PromoReel · OoL Experiences
   Promo reel autocontenido · ~35 s · 7 escenas · 16:9 · bucle
   Todo el texto editable aquí:
   ========================================================= */

const TEXTOS = {
  escena1: "Ool — corazón, en maya",
  escena2: "Ceremonias que honran tus raíces, tu historia y tu energía",
  escena3: "Rituales a medida en Mallorca",
  escena4: ["Bodas", "Baby Blessing", "Oráculo de Ángeles", "Despedidas"],
  escena5a: "La precisión de un hotel de lujo.",
  escena5b: "La profundidad de lo ancestral.",
  escena6cita: "«Nuestra boda no fue un evento, fue un viaje.»",
  escena6autor: "Lucía & Marc",
  escena6prueba: "+22 años · México · Francia · España",
  escena7cta: "Diseñemos tu ceremonia",
  escena7contacto: "oolexperience.com · WhatsApp +34 665 17 55 56",
  replay: "Volver a reproducir",
};

const IMAGENES = {
  logoMark: "/logo-mark.webp",
  hero: "/blanca-hero.webp",
  espuma: "/album-04-espuma-cristales.webp",
  cards: ["/card-bodas.webp", "/card-baby-blessing.webp", "/card-picnic.webp", "/card-despedidas.webp"],
  retrato: "/blanca-portrait.webp",
  boda: "/album-10-boda-lazo.webp",
};

const C = {
  crema: "#F5F2E9",
  secundaria: "#E8E4D8",
  profunda: "#2D2926",
  oro: "#7D6B3D",
  cacao: "#5C3A21",
  clay: "#B8865B",
  terracota: "#B8623F",
};

const SERIF = "'Playfair Display', Georgia, serif";
const SANS = "'Inter', system-ui, -apple-system, sans-serif";

const DUR = [3, 5, 5, 7, 6, 5, 4]; // segundos por escena · total 35
const TOTAL = DUR.reduce((a, b) => a + b, 0);
const INICIO = DUR.map((_, i) => DUR.slice(0, i).reduce((a, b) => a + b, 0));
const EASE = [0.33, 0, 0.2, 1];
const XFADE = 1.2; // crossfade entre escenas

const GRANO =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)'/%3E%3C/svg%3E\")";

const lleno = { position: "absolute", inset: 0 };
const centro = {
  position: "absolute", inset: 0, display: "flex", flexDirection: "column",
  alignItems: "center", justifyContent: "center", textAlign: "center",
  padding: "6%", boxSizing: "border-box",
};

/* Imagen con Ken Burns lento (4–6%) */
function Foto({ src, dur, reduced, hasta = 1.05 }) {
  return (
    <motion.img
      src={src}
      alt=""
      draggable={false}
      initial={{ scale: reduced ? 1 : 1.0 }}
      animate={{ scale: reduced ? 1 : hasta }}
      transition={{ duration: dur + XFADE + 0.8, ease: "linear" }}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
    />
  );
}

/* Texto con entrada suave */
function Texto({ children, delay = 0, reduced, style }) {
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, delay: reduced ? 0 : delay, ease: EASE }}
      style={style}
    >
      {children}
    </motion.div>
  );
}

function PromoReel({ assetBase = "" }) {
  const reduced = useReducedMotion();
  const [frame, setFrame] = React.useState({ escena: 0, sub: 0 });
  const [vuelta, setVuelta] = React.useState(0);
  const [activo, setActivo] = React.useState(true); // reproduce solo cuando está a la vista
  const elapsed = React.useRef(0);
  const last = React.useRef(null);
  const barra = React.useRef(null);
  const raiz = React.useRef(null);
  const enPantalla = React.useRef(true);
  const b = assetBase;

  // Pausa el reel cuando no se ve (scroll fuera de viewport) o la pestaña está
  // en segundo plano. Ahorra CPU/batería y evita animar de fondo sin sentido.
  React.useEffect(() => {
    const el = raiz.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => {
        enPantalla.current = entry.isIntersecting;
        setActivo(entry.isIntersecting && !document.hidden);
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    const onVis = () => setActivo(enPantalla.current && !document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  React.useEffect(() => {
    if (!activo) return; // congelado en el fotograma actual mientras no se ve
    let raf;
    last.current = null; // reanuda sin salto de tiempo
    const tick = (t) => {
      if (last.current == null) last.current = t;
      elapsed.current = (elapsed.current + (t - last.current) / 1000) % TOTAL;
      last.current = t;
      const e = elapsed.current;
      let esc = DUR.length - 1;
      for (let i = 0; i < DUR.length; i++) {
        if (e < INICIO[i] + DUR[i]) { esc = i; break; }
      }
      const local = e - INICIO[esc];
      let sub = 0;
      if (esc === 3) sub = Math.min(3, Math.floor(local / (DUR[3] / 4)));
      if (esc === 4) sub = local > 2.6 ? 1 : 0;
      setFrame((f) => (f.escena === esc && f.sub === sub ? f : { escena: esc, sub }));
      if (barra.current) barra.current.style.transform = "scaleX(" + e / TOTAL + ")";
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [vuelta, activo]);

  const repetir = () => {
    elapsed.current = 0;
    last.current = null;
    setFrame({ escena: 0, sub: 0 });
    setVuelta((v) => v + 1);
  };

  const renderEscena = (i, sub) => {
    switch (i) {
      case 0: // Glifo + "corazón, en maya"
        return (
          <div style={{ ...centro, background: C.crema, gap: "clamp(16px, 4vh, 32px)" }}>
            <motion.img
              src={b + IMAGENES.logoMark}
              alt=""
              draggable={false}
              initial={reduced ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: EASE }}
              style={{ height: "22%", maxHeight: 140, width: "auto", objectFit: "contain" }}
            />
            <Texto reduced={reduced} delay={0.8} style={{
              fontFamily: SANS, color: C.oro, letterSpacing: "0.24em",
              textTransform: "uppercase", fontWeight: 500,
              fontSize: "clamp(9px, 1.1vw, 14px)",
            }}>
              {TEXTOS.escena1}
            </Texto>
          </div>
        );

      case 1: // Hero + titular
        return (
          <div style={{ ...lleno, background: C.profunda }}>
            <Foto src={b + IMAGENES.hero} dur={DUR[1]} reduced={reduced} hasta={1.06} />
            <div style={{ ...lleno, background: "linear-gradient(180deg, rgba(45,41,38,0.12) 30%, rgba(45,41,38,0.58) 100%)" }} />
            <div style={{ ...centro, justifyContent: "flex-end", paddingBottom: "9%" }}>
              <Texto reduced={reduced} delay={0.5} style={{
                fontFamily: SERIF, color: C.crema, fontWeight: 500,
                fontSize: "clamp(19px, 3.4vw, 52px)", lineHeight: 1.18,
                maxWidth: "26ch", textWrap: "balance",
              }}>
                {TEXTOS.escena2}
              </Texto>
            </div>
          </div>
        );

      case 2: // Espuma + subtítulo
        return (
          <div style={{ ...lleno, background: C.profunda }}>
            <Foto src={b + IMAGENES.espuma} dur={DUR[2]} reduced={reduced} hasta={1.05} />
            <div style={{ ...lleno, background: "rgba(45,41,38,0.30)" }} />
            <div style={{ ...centro, gap: "clamp(12px, 2.4vh, 22px)" }}>
              <Texto reduced={reduced} delay={0.4} style={{ width: 36, height: 1, background: C.crema, opacity: 0.7 }}> </Texto>
              <Texto reduced={reduced} delay={0.6} style={{
                fontFamily: SERIF, color: C.crema, fontWeight: 500,
                fontSize: "clamp(18px, 2.8vw, 42px)", lineHeight: 1.2,
              }}>
                {TEXTOS.escena3}
              </Texto>
            </div>
          </div>
        );

      case 3: // Montaje de ceremonias
        return (
          <div style={{ ...lleno, background: C.profunda }}>
            <AnimatePresence>
              <motion.div
                key={sub}
                initial={reduced ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reduced ? 0 : 0.9, ease: EASE }}
                style={lleno}
              >
                <Foto src={b + IMAGENES.cards[sub]} dur={DUR[3] / 4} reduced={reduced} hasta={1.045} />
              </motion.div>
            </AnimatePresence>
            <div style={{ ...lleno, background: "linear-gradient(180deg, transparent 52%, rgba(45,41,38,0.55) 100%)" }} />
            <div style={{ ...centro, justifyContent: "flex-end", paddingBottom: "8%" }}>
              <div style={{ position: "relative", width: "100%", height: "clamp(34px, 9vh, 60px)" }}>
                <AnimatePresence>
                  <motion.div
                    key={sub}
                    initial={reduced ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: reduced ? 0 : 0.8, ease: EASE }}
                    style={{
                      position: "absolute", inset: 0, display: "flex",
                      alignItems: "flex-end", justifyContent: "center",
                      fontFamily: SERIF, color: C.crema, fontWeight: 500,
                      fontSize: "clamp(20px, 3vw, 42px)",
                    }}
                  >
                    {TEXTOS.escena4[sub]}
                  </motion.div>
                </AnimatePresence>
              </div>
              <div style={{
                marginTop: "clamp(8px, 1.6vh, 14px)", fontFamily: SANS,
                color: "rgba(245,242,233,0.7)", letterSpacing: "0.26em",
                fontSize: "clamp(8px, 0.9vw, 11px)",
              }}>
                {"0" + (sub + 1) + " / 04"}
              </div>
            </div>
          </div>
        );

      case 4: // Retrato + texto en dos tiempos
        return (
          <div style={{ ...lleno, background: C.profunda }}>
            <Foto src={b + IMAGENES.retrato} dur={DUR[4]} reduced={reduced} hasta={1.055} />
            <div style={{ ...lleno, background: "rgba(45,41,38,0.42)" }} />
            <div style={{ ...lleno, background: "radial-gradient(ellipse 70% 55% at 50% 50%, rgba(45,41,38,0.45), transparent 75%)" }} />
            <div style={{ ...centro, gap: "clamp(10px, 2vh, 18px)" }}>
              <Texto reduced={reduced} delay={0.5} style={{
                fontFamily: SERIF, color: C.crema, fontWeight: 500,
                fontSize: "clamp(18px, 2.7vw, 40px)", lineHeight: 1.25,
                textShadow: "0 1px 24px rgba(45,41,38,0.6)",
              }}>
                {TEXTOS.escena5a}
              </Texto>
              {(sub >= 1 || reduced) && (
                <Texto reduced={reduced} style={{
                  fontFamily: SERIF, fontStyle: "italic", color: C.crema,
                  fontSize: "clamp(18px, 2.7vw, 40px)", lineHeight: 1.25,
                  textShadow: "0 1px 24px rgba(45,41,38,0.6)",
                }}>
                  {TEXTOS.escena5b}
                </Texto>
              )}
            </div>
          </div>
        );

      case 5: // Cita + prueba social
        return (
          <div style={{ ...lleno, background: C.profunda }}>
            <Foto src={b + IMAGENES.boda} dur={DUR[5]} reduced={reduced} hasta={1.05} />
            <div style={{ ...lleno, background: "rgba(45,41,38,0.48)" }} />
            <div style={{ ...lleno, background: "radial-gradient(ellipse 72% 58% at 50% 48%, rgba(45,41,38,0.5), transparent 75%)" }} />
            <div style={{ ...centro, gap: "clamp(12px, 2.4vh, 22px)" }}>
              <Texto reduced={reduced} delay={0.4} style={{
                fontFamily: SERIF, fontStyle: "italic", color: C.crema,
                fontWeight: 500, fontSize: "clamp(17px, 2.6vw, 38px)",
                lineHeight: 1.3, maxWidth: "30ch", textWrap: "balance",
                textShadow: "0 1px 24px rgba(45,41,38,0.65)",
              }}>
                {TEXTOS.escena6cita}
              </Texto>
              <Texto reduced={reduced} delay={0.9} style={{
                fontFamily: SANS, color: "rgba(245,242,233,0.85)",
                letterSpacing: "0.16em", fontSize: "clamp(9px, 1vw, 13px)", fontWeight: 500,
              }}>
                {"— " + TEXTOS.escena6autor}
              </Texto>
            </div>
            <Texto reduced={reduced} delay={1.5} style={{
              position: "absolute", left: 0, right: 0, bottom: "7%",
              textAlign: "center", fontFamily: SANS,
              color: "rgba(245,242,233,0.65)", textTransform: "uppercase",
              letterSpacing: "0.24em", fontSize: "clamp(8px, 0.85vw, 11px)",
            }}>
              {TEXTOS.escena6prueba}
            </Texto>
          </div>
        );

      default: // CTA final
        return (
          <div style={{ ...centro, background: C.crema, gap: "clamp(14px, 3vh, 26px)" }}>
            <motion.img
              src={b + IMAGENES.logoMark}
              alt=""
              draggable={false}
              initial={reduced ? false : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.3, ease: EASE }}
              style={{ height: "16%", maxHeight: 100, width: "auto", objectFit: "contain" }}
            />
            <Texto reduced={reduced} delay={0.5} style={{
              fontFamily: SERIF, color: C.profunda, fontWeight: 500,
              fontSize: "clamp(22px, 3.4vw, 50px)", lineHeight: 1.15,
            }}>
              {TEXTOS.escena7cta}
            </Texto>
            <Texto reduced={reduced} delay={1.0} style={{
              fontFamily: SANS, color: C.oro, letterSpacing: "0.12em",
              fontSize: "clamp(9px, 1.05vw, 14px)", fontWeight: 500,
            }}>
              {TEXTOS.escena7contacto}
            </Texto>
          </div>
        );
    }
  };

  return (
    <div
      ref={raiz}
      aria-label="Vídeo promocional OoL Experiences"
      style={{
        position: "relative", width: "100%", aspectRatio: "16 / 9",
        overflow: "hidden", background: C.crema, fontFamily: SANS,
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <AnimatePresence>
        <motion.div
          key={vuelta + "-" + frame.escena}
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0 : XFADE, ease: EASE }}
          style={lleno}
        >
          {renderEscena(frame.escena, frame.sub)}
        </motion.div>
      </AnimatePresence>

      {/* Grano sutil */}
      <div style={{
        ...lleno, backgroundImage: GRANO, backgroundSize: "180px 180px",
        opacity: 0.06, mixBlendMode: "overlay", pointerEvents: "none",
      }} />
      {/* Viñeta ligera */}
      <div style={{
        ...lleno, pointerEvents: "none",
        background: "radial-gradient(ellipse at center, transparent 58%, rgba(45,41,38,0.24) 100%)",
      }} />

      {/* Volver a reproducir */}
      <button
        type="button"
        onClick={repetir}
        aria-label={TEXTOS.replay}
        title={TEXTOS.replay}
        style={{
          position: "absolute", right: "clamp(10px, 1.6%, 20px)",
          bottom: "clamp(12px, 2.4%, 24px)", width: 34, height: 34,
          borderRadius: "50%", border: "1px solid rgba(245,242,233,0.35)",
          background: "rgba(45,41,38,0.32)", backdropFilter: "blur(6px)",
          color: C.crema, cursor: "pointer", display: "flex",
          alignItems: "center", justifyContent: "center", padding: 0,
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 11a8 8 0 1 1 2.4 6.2" />
          <path d="M4 17v-6h6" />
        </svg>
      </button>

      {/* Barra de progreso */}
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 2, background: "rgba(45,41,38,0.14)" }}>
        <div ref={barra} style={{
          height: "100%", width: "100%", background: C.oro,
          transform: "scaleX(0)", transformOrigin: "left",
        }} />
      </div>
    </div>
  );
}

export default PromoReel;
export { PromoReel };
