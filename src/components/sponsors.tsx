import { useEffect, useRef, useState } from 'react';

export default function Sponsors() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Poppins:wght@300;400;600&display=swap');

      @keyframes infiniteScroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      @keyframes infiniteScrollReverse {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0); }
      }
      @keyframes floatUpDown {
        0%,100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }
      @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }

      .sponsor-title {
        font-family: 'Orbitron', sans-serif;
        background: linear-gradient(135deg, #00E6FF 0%, #FF00C8 50%, #FFD700 100%);
        background-size: 300% 300%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: gradientShift 8s ease infinite;
        letter-spacing: 4px;
        text-transform: uppercase;
      }

      .scroll-container {
        display: flex;
        overflow: hidden;
        position: relative;
        mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
        -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
      }

      .scroll-track {
        display: flex;
        animation: infiniteScroll 40s linear infinite;
      }

      .scroll-track-reverse {
        animation: infiniteScrollReverse 35s linear infinite;
      }

      .sponsor-card {
        flex-shrink: 0;
        width: 220px;
        height: 140px;
        margin: 0 1.5rem;
        padding: 2rem;
        background: linear-gradient(135deg, rgba(0, 230, 255, 0.08), rgba(255, 0, 200, 0.08));
        border: 2px solid rgba(0, 230, 255, 0.3);
        border-radius: 20px;
        backdrop-filter: blur(15px);
        transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
      }

      .sponsor-card:hover {
        transform: scale(1.1) translateY(-8px);
        border-color: rgba(0, 230, 255, 0.8);
        box-shadow:
          0 15px 40px rgba(0, 230, 255, 0.4),
          0 0 60px rgba(255, 0, 200, 0.3);
      }

      .sponsor-logo {
        filter: grayscale(100%) brightness(0.6);
        transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }

      .sponsor-card:hover .sponsor-logo {
        filter: grayscale(0%) brightness(1.2) drop-shadow(0 0 20px rgba(0, 230, 255, 0.8));
      }

      @media (max-width: 768px) {
        .sponsor-card {
          width: 180px;
          height: 120px;
          margin: 0 1rem;
          padding: 1.5rem;
        }
      }

      @media (max-width: 480px) {
        .sponsor-card {
          width: 140px;
          height: 100px;
          margin: 0 0.75rem;
          padding: 1rem;
        }
      }
    `;
    document.head.appendChild(style);

    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.head.removeChild(style);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const sponsors = [
    '/sponsors/logo1.png',
    '/sponsors/logo2.png',
    '/sponsors/logo3.png',
    '/sponsors/logo4.png',
    '/sponsors/logo5.png',
    '/sponsors/logo6.png',
    '/sponsors/logo7.png',
    '/sponsors/logo8.png',
    '/sponsors/logo9.png',
    '/sponsors/logo10.png',
  ];

  const renderSponsorCard = (src: string, index: number) => (
    <div key={index} className="sponsor-card">
      <img src={src} alt={`Sponsor ${index}`} className="sponsor-logo" />
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-4 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, rgba(0, 0, 5, 1) 0%, rgba(5, 5, 20, 0.95) 50%, rgba(0, 0, 5, 1) 100%)',
      }}
      id='sponsors'
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 rounded-full" style={{
          left: mousePos.x - 192,
          top: mousePos.y - 192,
          background: 'radial-gradient(circle, rgba(255, 0, 200, 0.1), transparent 70%)',
          filter: 'blur(70px)',
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="sponsor-title text-4xl md:text-6xl lg:text-7xl font-black mb-4">
            Our Sponsors
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white/70 font-poppins max-w-2xl mx-auto">
            Powering the future of innovation together
          </p>
        </div>

        {/* Infinite Scrolling Rows */}
        <div className="space-y-12">
          <div className="scroll-container py-8">
            <div className="scroll-track">
              {[...sponsors, ...sponsors].map((src, index) => renderSponsorCard(src, index))}
            </div>
          </div>
          {/* <div className="scroll-container py-8">
            <div className="scroll-track scroll-track-reverse">
              {[...sponsors, ...sponsors].map((src, index) => renderSponsorCard(src, index))}
            </div>
          </div> */}
        </div>

        <div className="text-center mt-16">
          <p className="text-sm md:text-base text-white/60 font-poppins">
            Want to collaborate?{' '}
            <a href="#contact" className="text-cyan-400 hover:text-pink-400 transition-colors duration-300 font-semibold">
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
