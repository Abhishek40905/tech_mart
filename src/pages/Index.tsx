import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Events from '@/components/Events';
import Schedule from '@/components/Schedule';
import Contact from '@/components/Contact';
import CustomCursor from '@/components/CustomCursor';

const Index = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative">
      <CustomCursor />
      <Hero />
      
      <Events />
      <Schedule />
      <About />
      <Contact />
      
      {/* Footer */}
      <footer className="relative border-t border-border py-12 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground font-orbitron mb-2">
            TechMart 2025
          </p>
          <p className="text-sm text-muted-foreground/70">
            Where Innovation Meets Celebration
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
