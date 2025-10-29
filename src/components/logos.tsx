import { useEffect, useRef, useState } from 'react';

export default function PartnerInstitutions() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const logosRef = useRef<HTMLDivElement[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Poppins:wght@300;400;600&display=swap');

      @keyframes floatingParticles {
        0%, 100% {
          transform: translate(0, 0) rotate(0deg);
          opacity: 0.3;
        }
        25% {
          transform: translate(100px, -50px) rotate(90deg);
          opacity: 0.6;
        }
        50% {
          transform: translate(50px, -100px) rotate(180deg);
          opacity: 0.4;
        }
        75% {
          transform: translate(-50px, -75px) rotate(270deg);
          opacity: 0.7;
        }
      }

      @keyframes pulseGlow {
        0%, 100% {
          filter: drop-shadow(0 0 20px rgba(0, 230, 255, 0.4)) drop-shadow(0 0 40px rgba(255, 0, 200, 0.3));
        }
        50% {
          filter: drop-shadow(0 0 40px rgba(0, 230, 255, 0.8)) drop-shadow(0 0 60px rgba(255, 0, 200, 0.6));
        }
      }

      @keyframes slideInUp {
        from {
          opacity: 0;
          transform: translateY(80px) scale(0.9);
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }

      @keyframes rotateGradient {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }

      @keyframes scanline {
        0% {
          transform: translateY(-100%);
        }
        100% {
          transform: translateY(100%);
        }
      }

      @keyframes neonBorder {
        0%, 100% {
          box-shadow:
            0 0 20px rgba(0, 230, 255, 0.4),
            0 0 40px rgba(0, 230, 255, 0.2),
            inset 0 0 20px rgba(0, 230, 255, 0.1);
        }
        50% {
          box-shadow:
            0 0 40px rgba(255, 0, 200, 0.6),
            0 0 80px rgba(255, 0, 200, 0.3),
            inset 0 0 40px rgba(255, 0, 200, 0.2);
        }
      }

      @keyframes holographicShift {
        0% {
          background-position: 0% 0%;
        }
        100% {
          background-position: 200% 200%;
        }
      }

      .partner-section-container {
        animation: slideInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1);
      }

      .partner-title {
        font-family: 'Orbitron', sans-serif;
        background: linear-gradient(
          135deg,
          #00E6FF 0%,
          #FF00C8 25%,
          #FFD700 50%,
          #00E6FF 75%,
          #FF00C8 100%
        );
        background-size: 300% 300%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: rotateGradient 6s ease infinite, pulseGlow 3s ease-in-out infinite;
        letter-spacing: 4px;
        text-transform: uppercase;
      }

      .partner-subtitle {
        font-family: 'Poppins', sans-serif;
        color: rgba(255, 255, 255, 0.7);
        text-shadow: 0 0 10px rgba(0, 230, 255, 0.3);
      }

      .logo-card {
        position: relative;
        padding: 2.5rem;
        background: linear-gradient(
          135deg,
          rgba(0, 230, 255, 0.05),
          rgba(255, 0, 200, 0.05),
          rgba(255, 215, 0, 0.03)
        );
        border: 2px solid rgba(0, 230, 255, 0.2);
        border-radius: 24px;
        backdrop-filter: blur(10px);
        transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        animation: neonBorder 4s ease-in-out infinite;
        overflow: hidden;
      }

      .logo-card::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: linear-gradient(
          45deg,
          transparent 30%,
          rgba(0, 230, 255, 0.1) 50%,
          transparent 70%
        );
        animation: holographicShift 3s linear infinite;
      }

      .logo-card::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: linear-gradient(90deg, transparent, rgba(0, 230, 255, 0.8), transparent);
        animation: scanline 3s linear infinite;
      }

      .logo-card:hover {
        transform: translateY(-20px) scale(1.1) rotateY(5deg);
        border-color: rgba(0, 230, 255, 0.8);
        background: linear-gradient(
          135deg,
          rgba(0, 230, 255, 0.15),
          rgba(255, 0, 200, 0.15),
          rgba(255, 215, 0, 0.1)
        );
        box-shadow:
          0 30px 60px rgba(0, 230, 255, 0.4),
          0 0 100px rgba(255, 0, 200, 0.3),
          inset 0 0 60px rgba(0, 230, 255, 0.2);
      }

      .logo-image {
        filter: grayscale(100%) brightness(0.7) contrast(1.2);
        transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        position: relative;
        z-index: 2;
      }

      .logo-card:hover .logo-image {
        filter: grayscale(0%) brightness(1.2) contrast(1.1) drop-shadow(0 0 20px rgba(0, 230, 255, 0.8));
      }

      .particle {
        position: absolute;
        width: 6px;
        height: 6px;
        background: radial-gradient(circle, rgba(0, 230, 255, 0.8), transparent);
        border-radius: 50%;
        animation: floatingParticles 8s ease-in-out infinite;
        pointer-events: none;
      }

      .grid-overlay {
        position: absolute;
        inset: 0;
        background-image:
          linear-gradient(rgba(0, 230, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 230, 255, 0.03) 1px, transparent 1px);
        background-size: 50px 50px;
        pointer-events: none;
      }

      .corner-decoration {
        position: absolute;
        width: 40px;
        height: 40px;
        border: 2px solid rgba(0, 230, 255, 0.5);
        transition: all 0.5s ease;
      }

      .corner-tl {
        top: -2px;
        left: -2px;
        border-right: none;
        border-bottom: none;
      }

      .corner-tr {
        top: -2px;
        right: -2px;
        border-left: none;
        border-bottom: none;
      }

      .corner-bl {
        bottom: -2px;
        left: -2px;
        border-right: none;
        border-top: none;
      }

      .corner-br {
        bottom: -2px;
        right: -2px;
        border-left: none;
        border-top: none;
      }

      .logo-card:hover .corner-decoration {
        width: 60px;
        height: 60px;
        border-color: rgba(255, 0, 200, 0.8);
        box-shadow: 0 0 20px rgba(255, 0, 200, 0.5);
      }

      .cosmic-bg {
        position: absolute;
        inset: 0;
        background:
          radial-gradient(circle at 20% 30%, rgba(0, 230, 255, 0.15) 0%, transparent 40%),
          radial-gradient(circle at 80% 70%, rgba(255, 0, 200, 0.12) 0%, transparent 40%),
          radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 10% 80%, rgba(0, 230, 255, 0.1) 0%, transparent 35%),
          radial-gradient(circle at 90% 20%, rgba(255, 0, 200, 0.1) 0%, transparent 35%);
        opacity: 0.8;
      }

      .glow-orb {
        position: absolute;
        width: 300px;
        height: 300px;
        border-radius: 50%;
        filter: blur(80px);
        pointer-events: none;
        animation: floatingParticles 10s ease-in-out infinite;
      }

      .orb-1 {
        top: 10%;
        left: 15%;
        background: radial-gradient(circle, rgba(0, 230, 255, 0.3), transparent);
      }

      .orb-2 {
        bottom: 20%;
        right: 10%;
        background: radial-gradient(circle, rgba(255, 0, 200, 0.25), transparent);
        animation-delay: -3s;
      }

      .orb-3 {
        top: 50%;
        left: 50%;
        background: radial-gradient(circle, rgba(255, 215, 0, 0.2), transparent);
        animation-delay: -6s;
      }

      @media (max-width: 768px) {
        .logo-card {
          padding: 1.5rem;
        }
      }
    `;
    document.head.appendChild(style);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    logosRef.current.forEach((logo, index) => {
      if (logo) {
        setTimeout(() => {
          logo.style.opacity = '1';
          logo.style.transform = 'translateY(0) scale(1)';
        }, 200 + index * 150);
      }
    });

    return () => {
      document.head.removeChild(style);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const logos = [
    { src: '/logos/college_logo.png', alt: 'Quantum Institute', color: 'cyan' },
    { src: '/logos/naac.png', alt: 'Neural Labs', color: 'pink' },
    { src: '/logos/aatmoday.png', alt: 'Tech Nexus', color: 'cyan' },
    { src: '/logos/code_vidya.png', alt: 'Cyber Academy', color: 'gold' }
    
  ];

  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 8,
    duration: 8 + Math.random() * 4,
  }));

  return (
    <section
      ref={sectionRef}
      className="partner-section-container relative min-h-screen py-32 px-4 md:px-8 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at center, rgba(5, 5, 20, 0.95), rgba(0, 0, 5, 1))',
      }}
    >
      <div className="cosmic-bg" />
      <div className="grid-overlay" />
      <div className="glow-orb orb-1" />
      <div className="glow-orb orb-2" />
      <div className="glow-orb orb-3" />

      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}

      <div
        className="absolute w-96 h-96 rounded-full pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: mousePos.x - 192,
          top: mousePos.y - 192,
          background: 'radial-gradient(circle, rgba(0, 230, 255, 0.08), transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="partner-title text-5xl md:text-7xl font-black mb-6">
            Institutions
          </h2>
          <div className="h-1 w-32 mx-auto mb-8 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
               style={{ boxShadow: '0 0 20px rgba(0, 230, 255, 0.5)' }} />
          <p className="partner-subtitle text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            The visionaries who make TechNova 2025 possible
          </p>
        </div>

        <div
  className="
    flex flex-wrap justify-center items-center 
    gap-8 md:gap-10
    max-w-6xl mx-auto
  "
>

          {logos.map((logo, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) logosRef.current[index] = el;
              }}
              className="logo-card opacity-0"
              style={{
                transform: 'translateY(40px) scale(0.9)',
                transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <div className="corner-decoration corner-tl" />
              <div className="corner-decoration corner-tr" />
              <div className="corner-decoration corner-bl" />
              <div className="corner-decoration corner-br" />

              <div className="relative h-32 flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="logo-image w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      const placeholder = document.createElement('div');
                      placeholder.className = 'w-full h-full flex items-center justify-center';
                      placeholder.innerHTML = `
                        <div class="text-center">
                          <div class="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-cyan-500/30 to-pink-500/30 flex items-center justify-center border-2 border-cyan-400/50" style="box-shadow: 0 0 20px rgba(0, 230, 255, 0.4)">
                            <svg class="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                          </div>
                          <span class="text-cyan-400 font-bold text-sm tracking-wider" style="font-family: 'Orbitron', sans-serif; text-shadow: 0 0 10px rgba(0, 230, 255, 0.5)">${logo.alt}</span>
                        </div>
                      `;
                      parent.appendChild(placeholder);
                    }
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
