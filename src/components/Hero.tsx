import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sparkles, Rocket, Menu, X } from 'lucide-react';
import { useState } from 'react';

const AnimatedSphere = () => {
  return (
    <Sphere args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color="#00E6FF"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Menu items with corresponding section IDs
  const menuItems = [
    { name: 'Institutions', id: '#institutions' },
    { name: 'Sponsors', id: '#sponsors' },
    { name: 'Competitions', id: '#competitions' },
    { name: 'Schedule', id: '#schedule' },
    { name: 'About', id: '/about' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center overflow-hidden text-center px-4 sm:px-6 lg:px-8 scroll-smooth"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-40">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} color="#FF00C8" intensity={1} />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-glow animate-pulse-glow" />

      {/* Navbar */}
      <div className="absolute top-4 left-0 right-0 flex justify-between items-center px-6 z-20">
        <h2 className="font-audiowide text-2xl sm:text-3xl text-primary drop-shadow-lg cursor-pointer">
          <a href="#hero">TechMart</a>
        </h2>

        {/* Hamburger for Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg bg-background/40 backdrop-blur-md border border-primary/20 hover:bg-background/60 transition"
        >
          {menuOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-primary" />}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-lg font-orbitron text-foreground/90">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`${item.id}`}
              className="hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-4 right-4 z-20 bg-background/80 backdrop-blur-lg border border-primary/20 rounded-2xl p-6 shadow-lg md:hidden"
          >
            <ul className="flex flex-col items-center gap-4 text-lg font-orbitron text-foreground">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`${item.id}`}
                    className="hover:text-primary transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-center space-y-6 sm:space-y-8 lg:space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="w-full"
        >
          <motion.div
            className="inline-block mb-4 sm:mb-6"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <Sparkles className="w-12 h-12 sm:w-16 sm:h-16 text-primary" />
          </motion.div>

          <h1 className="font-audiowide text-4xl sm:text-6xl md:text-8xl lg:text-9xl mb-4 sm:mb-6 glow-text leading-tight">
            <span className="gradient-text block sm:inline">TechMart</span>{' '}
            <span className="text-accent block sm:inline ml-0 sm:ml-4">2025</span>
          </h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-muted-foreground font-light px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            Where Innovation Meets Celebration
          </motion.p>

          <motion.p
            className="text-sm sm:text-base md:text-lg mb-10 sm:mb-12 max-w-3xl mx-auto text-foreground/80 px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Experience technology, creativity, and culture converge in an immersive multidimensional celebration.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-cyan px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-orbitron w-full sm:w-auto"
            >
              <Rocket className="mr-2" />
              Register Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground shadow-glow-magenta px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-orbitron w-full sm:w-auto"
            >
              Explore the Universe
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-primary rounded-full flex justify-center">
          <motion.div
            className="w-1 h-1 bg-primary rounded-full mt-1 sm:mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
