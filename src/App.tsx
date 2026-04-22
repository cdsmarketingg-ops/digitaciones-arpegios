/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Infinity, 
  Instagram, 
  Facebook, 
  ChevronDown,
  Play,
  Star,
  Lock,
  Music,
  ArrowRight,
  Gift,
  Ear,
  RefreshCw,
  Handshake,
  MoveHorizontal
} from 'lucide-react';

// --- Components ---

const Button = ({ children, className = "", primary = false, onClick, href }: { children: React.ReactNode, className?: string, primary?: boolean, onClick?: () => void, href?: string }) => {
  const content = (
    <>
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      <div className="absolute inset-0 bg-white/20 translate-y-full md:group-hover:translate-y-0 transition-transform duration-300" />
    </>
  );

  const classes = `relative group px-8 py-5 rounded-full font-black text-xl transition-all shadow-2xl overflow-hidden inline-block text-center ${
    primary 
      ? "bg-premium-red text-white shadow-premium-red/30" 
      : "bg-premium-gold text-black shadow-premium-gold/30"
  } ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileTap={{ scale: 0.95 }}
        className={classes}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={classes}
    >
      {content}
    </motion.button>
  );
};

interface AccordionProps {
  question: string;
  answer: string;
}

const AccordionItem: React.FC<AccordionProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
      >
        <span className="text-base md:text-lg font-bold text-white group-hover:text-premium-gold transition-colors uppercase tracking-tight">{question}</span>
        <ChevronDown className={`text-premium-red transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-400 leading-relaxed text-sm md:text-base">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const scrollToOffer = () => {
    const element = document.getElementById('oferta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/1b23d824-f7d5-46ac-8edc-700038ffb33d/players/69dfda7a31321021b9c43edb/v4/player.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-premium-black text-white font-sans selection:bg-premium-gold selection:text-black overflow-x-hidden">
      
      {/* --- Header --- */}
      <header className="py-4 md:py-8 px-6 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center text-center"
        >
          <div className="w-10 h-10 md:w-16 md:h-16 mb-2 md:mb-3 flex items-center justify-center">
            <Music className="text-premium-gold w-full h-full" strokeWidth={1.5} />
          </div>
          <h1 className="text-sm md:text-2xl font-serif font-bold tracking-[0.2em] md:tracking-[0.3em] text-premium-gold uppercase leading-tight">
            Digitaciones y Arpegios
          </h1>
          <p className="text-[7px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] text-gray-500 uppercase mt-0.5">
            Eliab Campos Teclas
          </p>
        </motion.div>
      </header>

      {/* --- Hero Section --- */}
      <section className="relative px-6 pt-4 pb-24 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1 rounded-full border border-premium-red/50 bg-premium-red/10 text-premium-red text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6"
          >
            Entrenamiento Premium Exclusivo
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] mb-8 tracking-tight"
          >
            TRANSFORMA TU MANERA DE TOCAR Y <span className="text-premium-red italic">DALE VIDA</span> A TUS CANCIONES
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
          >
            ¿Llevas años tocando y sigues sonando como principiante? El problema no eres tú — son las digitaciones y arpegios que nadie te explicó bien.
          </motion.p>

          {/* Vertical Video Container */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, type: "spring", damping: 20 }}
            className="relative mx-auto mb-16 rounded-[2rem] md:rounded-[3rem] overflow-hidden border-4 border-premium-red/20 shadow-[0_0_80px_rgba(139,0,0,0.2)] bg-black aspect-[9/16] max-w-[300px] md:max-w-[400px] flex items-center justify-center"
          >
            <div 
              className="w-full h-full"
              dangerouslySetInnerHTML={{ 
                __html: `<vturb-smartplayer id="vid-69dfda7a31321021b9c43edb" style="display: block; margin: 0 auto; width: 100%; height: 100%; max-width: 400px;"></vturb-smartplayer>` 
              }} 
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-xl md:text-3xl font-serif mb-10 text-gray-200 max-w-2xl">
              Domina esta técnica única y comienza a tocar como siempre soñaste 🎹✨
            </h3>
            
            <div className="flex flex-col items-center gap-6 w-full max-w-md">
              <div className="flex flex-col items-center">
                <span className="text-gray-500 line-through text-lg">De U$47,00</span>
                <div className="text-5xl md:text-7xl font-black text-premium-gold">
                  U$13,<span className="text-white">99</span>
                </div>
              </div>
              
              <Button primary className="w-full py-6 text-xl md:text-2xl" onClick={scrollToOffer}>
                ¡QUIERO ACCESO INMEDIATO! <ArrowRight size={24} />
              </Button>
              
              <div className="flex items-center gap-3 text-xs text-gray-500 uppercase tracking-widest font-bold">
                <Lock size={14} className="text-premium-red" /> Pago 100% Seguro
                <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                Acceso Vitalicio
              </div>

              {/* Subtle Authority Snippet for Cold Traffic */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="mt-8 pt-8 border-t border-white/5 flex items-center gap-4 text-left max-w-sm mx-auto"
              >
                <div className="relative shrink-0">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-premium-gold shadow-2xl relative z-10">
                    <img 
                      src="https://eliabcamposteclas.com/wp-content/uploads/2025/02/PERFIL-ELIAB.jpeg" 
                      alt="Eliab Campos"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-premium-gold text-black rounded-full p-1 z-20 shadow-lg">
                    <CheckCircle2 size={12} fill="currentColor" className="text-black" />
                  </div>
                </div>
                <div>
                  <p className="text-[10px] text-premium-gold font-black uppercase tracking-[0.2em] mb-1">Autoridad en el tema</p>
                  <p className="text-sm text-gray-400 font-medium leading-tight">
                    <span className="text-white font-bold">Eliab Campos:</span> +15 años de experiencia y más de 2.500 alumnos transformados con este método.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10">
          <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-premium-red/10 blur-[150px] rounded-full" />
          <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-premium-gold/5 blur-[120px] rounded-full" />
        </div>
      </section>

      {/* --- Trust Bar --- */}
      <section className="bg-white/5 border-y border-white/10 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { icon: <ShieldCheck size={32} />, title: "Pago Seguro", desc: "Ambiente 100% protegido y encriptado." },
            { icon: <Zap size={32} />, title: "Acceso Inmediato", desc: "Recibe todo en tu email al instante." },
            { icon: <Infinity size={32} />, title: "Acceso Vitalicio", desc: "Estudia a tu ritmo, para siempre." },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left gap-4 group">
              <div className="w-16 h-16 rounded-2xl bg-premium-red/10 flex items-center justify-center text-premium-red group-hover:bg-premium-red group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <div>
                <h4 className="font-black text-lg uppercase tracking-tight mb-1">{item.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Who is it for? --- */}
      <section className="py-32 px-6 bg-gradient-to-b from-premium-black to-premium-red/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-premium-red font-black uppercase tracking-[0.3em] text-xs mb-4 block">Transformación</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold uppercase tracking-tighter">
              ¿PARA QUIÉN ES ESTE <span className="text-premium-red">ENTRENAMIENTO</span>?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Tecladistas que se sienten estancados y quieren subir de nivel.",
              "Quienes buscan ganar agilidad y fluidez real en sus manos.",
              "Músicos que desean un sonido profesional y sofisticado.",
              "Tecladistas que quieren crear arpegios hermosos e impresionantes."
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-5 p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-premium-red/40 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-premium-red/20 flex items-center justify-center text-premium-red shrink-0 group-hover:scale-110 transition-transform">
                  <CheckCircle2 size={20} />
                </div>
                <p className="text-gray-200 font-bold text-lg leading-tight">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- What you get --- */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-premium-gold font-black uppercase tracking-[0.3em] text-xs mb-4 block">Contenido</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold uppercase tracking-tighter">
              ¿QUÉ VAS A <span className="text-premium-gold">RECIBIR</span>?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="relative group p-10 rounded-[3rem] bg-gradient-to-br from-premium-red/20 to-transparent border border-premium-red/30 overflow-hidden flex flex-col">
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-premium-red flex items-center justify-center mb-8 shadow-2xl shadow-premium-red/40">
                  <Play className="text-white fill-current" size={32} />
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">Pack de Video Lecciones</h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  Un súper paquete de clases en alta definición con varios arpegios y punteos explicados paso a paso para que no te pierdas nada.
                </p>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-premium-red/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            </div>
            
            <div className="relative group p-10 rounded-[3rem] bg-gradient-to-br from-premium-gold/20 to-transparent border border-premium-gold/30 overflow-hidden flex flex-col">
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-premium-gold flex items-center justify-center mb-8 shadow-2xl shadow-premium-gold/40">
                  <Star className="text-black fill-current" size={32} />
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter text-premium-gold">Soporte Individual</h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  Acceso directo al profesor para resolver todas tus dudas. No estarás solo en este proceso de aprendizaje.
                </p>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-premium-gold/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            </div>

            <div className="relative group p-10 rounded-[3rem] bg-gradient-to-br from-white/10 to-transparent border border-white/20 overflow-hidden flex flex-col">
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8 border border-white/20">
                  <Lock className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">Área de Miembros Premium</h3>
                <p className="text-gray-400 text-base leading-relaxed mb-8">
                  Acceso exclusivo a nuestra plataforma premium donde encontrarás todo el material organizado y materiales complementarios.
                </p>
                <div className="mt-auto rounded-2xl overflow-hidden border border-white/10 aspect-video">
                  <img 
                    src="https://eliabcamposteclas.com/wp-content/uploads/2026/04/ChatGPT-Image-15-de-abr.-de-2026-14_16_55.jpg" 
                    alt="Área de Miembros" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Bonuses Section --- */}
      <section className="py-32 px-6 relative overflow-hidden bg-black">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-premium-red/20 border border-premium-red/50 text-premium-red text-xs font-black uppercase tracking-[0.2em] mb-6"
            >
              <Gift size={14} className="animate-bounce" />
              Súper Bono
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold uppercase tracking-tighter mb-6">
              REGALOS <span className="text-premium-gold italic">EXCLUSIVOS</span> PARA TI
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
              Al inscribirte hoy, no solo te llevas el curso completo, sino también estos bonos diseñados para acelerar tu maestría en el teclado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Bonus 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-premium-red/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[3rem]"></div>
              <div className="relative p-10 md:p-12 rounded-[3rem] bg-[#0A0A0A] border border-white/5 group-hover:border-premium-red/30 transition-all duration-500 flex flex-col h-full shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-premium-red to-red-900 flex items-center justify-center shadow-lg shadow-premium-red/20">
                    <Ear className="text-white" size={32} />
                  </div>
                  <span className="text-4xl font-serif italic text-white/10 font-black group-hover:text-premium-red/20 transition-colors">01</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-black mb-6 uppercase tracking-tighter leading-tight">
                  El Secreto de los <span className="text-premium-red">Grandes Músicos</span> para Tocar de Oído
                </h3>
                
                <p className="text-gray-400 text-lg leading-relaxed mb-auto">
                  Aquí voy a revelar el secreto que los músicos profesionales guardan bajo siete llaves y usan para desbloquear la independencia auditiva.
                </p>

                <div className="mt-10 pt-10 border-t border-white/5 flex items-center gap-6">
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full bg-premium-red/10 border border-premium-red/30 flex items-center justify-center">
                      <Lock size={16} className="text-premium-red" />
                    </div>
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-premium-red">Contenido Reservado</span>
                </div>
              </div>
            </motion.div>

            {/* Bonus 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-premium-gold/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[3rem]"></div>
              <div className="relative p-10 md:p-12 rounded-[3rem] bg-[#0A0A0A] border border-white/5 group-hover:border-premium-gold/30 transition-all duration-500 flex flex-col h-full shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-premium-gold to-yellow-900 flex items-center justify-center shadow-lg shadow-premium-gold/20">
                    <RefreshCw className="text-black" size={32} />
                  </div>
                  <span className="text-4xl font-serif italic text-white/10 font-black group-hover:text-premium-gold/20 transition-colors">02</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-black mb-6 uppercase tracking-tighter leading-tight">
                  Actualizaciones <span className="text-premium-gold">Gratuitas</span> de por Vida
                </h3>
                
                <p className="text-gray-400 text-lg leading-relaxed mb-auto">
                  Cada vez que se actualice el contenido con nuevos sonidos y nuevas clases, los recibirás de forma gratuita en tu área de miembros. Siempre estarás a la vanguardia.
                </p>

                <div className="mt-10 pt-10 border-t border-white/5 flex items-center gap-6">
                  <div className="flex -space-x-4">
                    <div className="w-10 h-10 rounded-full bg-premium-gold/10 border border-premium-gold/30 flex items-center justify-center">
                      <Handshake size={16} className="text-premium-gold" />
                    </div>
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-premium-gold">Acceso Ilimitado</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-premium-red/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-premium-gold/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </section>

      {/* --- Social Proof Carousel --- */}
      <section className="py-24 overflow-hidden bg-black/50 border-y border-white/5 relative">
        <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-premium-red font-black uppercase tracking-[0.3em] text-xs mb-4 block">Resultados Reales</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold uppercase tracking-tighter">
              LO QUE DICEN NUESTROS <span className="text-premium-gold italic">ALUMNOS</span>
            </h2>
          </motion.div>
        </div>

        <div className="relative flex">
          {/* Draggable and Auto-scrolling Track */}
          <motion.div 
            className="flex gap-6 px-6 cursor-grab active:cursor-grabbing shrink-0 animate-scroll-infinite pause-animation"
            drag="x"
            dragConstraints={{ left: -3000, right: 0 }}
            whileTap={{ cursor: "grabbing" }}
          >
            {/* Duplicate images to create a seamless loop */}
            {[...Array(6)].map((_, i) => (
              <React.Fragment key={i}>
                {[
                  "https://eliabcamposteclas.com/wp-content/uploads/2026/04/PROVA-1.jpg",
                  "https://eliabcamposteclas.com/wp-content/uploads/2026/04/PROVA-2.jpg",
                  "https://eliabcamposteclas.com/wp-content/uploads/2026/04/PROVA-3.jpg"
                ].map((src, index) => (
                  <div 
                    key={`${i}-${index}`}
                    className="w-[340px] md:w-[400px] shrink-0 rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative"
                  >
                    <img 
                      src={src} 
                      alt={`Testimonio ${index + 1}`}
                      className="w-full h-auto object-cover pointer-events-none"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  </div>
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>

        {/* Gradient Overlays for smooth edges */}
        <div className="absolute top-0 left-0 w-20 md:w-40 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-20 md:w-40 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        {/* Subtle Drag Indicator */}
        <div className="mt-12 flex justify-center items-center gap-3 text-gray-500/50">
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-gray-500/30"></div>
          <div className="flex items-center gap-2 text-[10px] uppercase font-black tracking-[0.3em] animate-pulse">
            <MoveHorizontal size={14} />
            <span>Desliza para explorar</span>
          </div>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-gray-500/30"></div>
        </div>
      </section>

      {/* --- Offer Section --- */}
      <section id="oferta" className="py-24 px-6 bg-premium-black relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 p-12 md:p-20 rounded-[3rem] shadow-2xl">
            <span className="text-premium-gold font-black uppercase tracking-[0.3em] text-xs mb-6 block">Oferta Especial</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 uppercase tracking-tighter">
              TODO ESTO POR UN <span className="text-premium-gold italic">PRECIO ÚNICO</span>
            </h2>
            
            <div className="flex flex-col items-center gap-8 mb-12">
              <div className="space-y-4 text-left max-w-md mx-auto">
                {[
                  "Acceso Vitalicio al Curso",
                  "Pack de Video Lecciones HD",
                  "Soporte Individual con Eliab",
                  "Actualizaciones Gratuitas"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="text-premium-gold" size={20} />
                    <span className="font-bold text-lg">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="h-px w-full bg-white/10"></div>
              
              <div className="flex flex-col items-center">
                <span className="text-gray-500 line-through text-xl">De U$47,00</span>
                <div className="text-6xl md:text-8xl font-black text-white">
                  U$13,<span className="text-premium-gold">99</span>
                </div>
              </div>
            </div>
            
            <Button 
              primary 
              className="w-full max-w-md py-8 text-2xl" 
              href="https://pay.hotmart.com/Q98272388S?checkoutMode=10&hideBillet=1"
            >
              ¡SÍ, QUIERO MI ACCESO! <ArrowRight size={28} />
            </Button>
            
            <p className="mt-8 text-gray-500 text-sm font-medium uppercase tracking-widest">
              Únete a más de 2,500 alumnos hoy mismo
            </p>
          </div>
        </div>
        
        {/* Background Accents */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-premium-red/5 blur-[120px] rounded-full -z-10"></div>
      </section>

      {/* --- Guarantee --- */}
      <section className="py-32 px-6 bg-white text-premium-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
          <div className="flex-1">
            <div className="inline-block px-4 py-1 rounded-full bg-premium-red text-white text-[10px] font-bold uppercase tracking-widest mb-6">
              Riesgo Cero
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 uppercase tracking-tighter leading-none">
              ¿AÚN TIENES <span className="text-premium-red">DUDAS</span>?
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
              <p>Sin dudas, este curso va a cambiar tu realidad. La prueba de esto son los miles de estudiantes con resultados increíbles que transformaron la calidad de su sonido.</p>
              <p>Pero si aún tienes alguna duda, te dejo probar durante <span className="text-premium-red font-black border-b-2 border-premium-red">7 días</span>. Si no te gusta o no ves resultados, solo envíame un correo y te reembolsaré el valor total.</p>
              <p className="font-serif italic text-2xl text-premium-black font-bold">"El único riesgo que corres es no intentarlo."</p>
            </div>
          </div>
          
          <motion.div 
            animate={{ rotate: [0, 2, -2, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="relative shrink-0"
          >
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-[12px] border-premium-gold flex flex-col items-center justify-center text-center p-10 bg-premium-black text-white shadow-[0_20px_60px_rgba(212,175,55,0.3)]">
              <span className="text-7xl md:text-9xl font-black text-premium-gold leading-none">7</span>
              <span className="text-2xl md:text-3xl font-black uppercase tracking-[0.2em] -mt-2">Días</span>
              <div className="h-1 w-24 bg-premium-gold my-4"></div>
              <span className="text-sm md:text-base uppercase font-black tracking-tighter text-gray-400">Satisfacción Garantizada</span>
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-premium-red rounded-full flex items-center justify-center text-white font-black text-xs uppercase text-center p-2 shadow-xl rotate-12">
              Garantía Total
            </div>
          </motion.div>
        </div>
        
        {/* Decorative Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-gray-100/50 pointer-events-none -z-0 select-none">
          GUARANTEE
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-premium-red font-black uppercase tracking-[0.3em] text-xs mb-4 block">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold uppercase tracking-tighter">PREGUNTAS <span className="text-premium-red">FRECUENTES</span></h2>
          </div>
          
          <div className="space-y-2">
            {[
              { q: "¿EL ACCESO ES VITALICIO?", a: "Sí, una vez que te inscribes, el acceso es para siempre, incluyendo todas las actualizaciones futuras." },
              { q: "¿EL CURSO SE IMPARTE A TRAVÉS DE VIDEO LECCIONES?", a: "Exactamente. Son videos de alta definición organizados de forma lógica para que aprendas paso a paso." },
              { q: "¿CÓMO TENDRÉ ACCESO AL CURSO?", a: "Inmediatamente después de la confirmación del pago, recibirás un correo electrónico con tus datos de acceso." },
              { q: "¿DÓNDE PUEDO ACCEDER AL CURSO?", a: "En cualquier dispositivo con internet: smartphone, tablet o computadora." },
              { q: "¿EL CURSO INCLUYE SOPORTE?", a: "Sí, tendrás soporte directo para asegurar que resuelvas todas tus dudas y progreses rápidamente." }
            ].map((faq, i) => (
              <AccordionItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* --- Final CTA --- */}
      <section className="py-32 px-6 text-center bg-gradient-to-t from-premium-red/30 to-transparent relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex justify-center gap-8 mb-16">
            <motion.a whileHover={{ scale: 1.2, color: '#D4AF37' }} href="#" className="text-gray-500 transition-colors">
              <Instagram size={32} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2, color: '#D4AF37' }} href="#" className="text-gray-500 transition-colors">
              <Facebook size={32} />
            </motion.a>
          </div>
          
          <h2 className="text-4xl md:text-7xl font-serif font-bold mb-10 uppercase tracking-tighter leading-none">
            ¿LISTO PARA EL <span className="text-premium-gold italic">SIGUIENTE NIVEL</span>?
          </h2>
          
          <div className="flex flex-col items-center gap-8">
            <Button className="px-16 py-8 text-2xl md:text-3xl" onClick={scrollToOffer}>
              ¡INSCRIBIRME AHORA! <ArrowRight size={32} />
            </Button>
            
            <div className="flex flex-col items-center">
              <p className="text-gray-500 uppercase tracking-widest text-sm font-bold mb-2">Oferta por tiempo limitado</p>
              <p className="text-premium-gold font-black text-5xl md:text-6xl">U$13,99</p>
            </div>
          </div>
        </div>
        
        {/* Background Accents */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-premium-red/20 to-transparent -z-10"></div>
      </section>

      {/* --- Biography Section --- */}
      <section className="py-24 px-6 bg-white/5">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-64 h-64 md:w-80 md:h-80 shrink-0 rounded-[3rem] overflow-hidden border-4 border-premium-gold/30 shadow-2xl"
          >
            <img 
              src="https://eliabcamposteclas.com/wp-content/uploads/2025/02/PERFIL-ELIAB.jpeg" 
              alt="Eliab Campos" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 text-center md:text-left"
          >
            <span className="text-premium-gold font-black uppercase tracking-[0.3em] text-xs mb-4 block">El Instructor</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 uppercase tracking-tighter">Eliab Campos</h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
              Tecladista y profesor de piano con más de 15 años de experiencia, decidí crear un método diferente para que todos puedan desbloquearse en el teclado y comenzar a tocar como un verdadero profesional.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-12 border-t border-white/10 text-center px-6">
        <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-[0.4em] font-medium">
          Eliab Campos Teclas – @Todos los derechos reservados 2025
        </p>
      </footer>

    </div>
  );
}
