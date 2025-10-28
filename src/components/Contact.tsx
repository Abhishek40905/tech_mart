import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Particle Vortex Background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: `hsl(${(189 + i * 5) % 360} 100% 50%)`,
              left: `${50 + Math.cos(i * 0.5) * 40}%`,
              top: `${50 + Math.sin(i * 0.5) * 40}%`,
            }}
            animate={{
              x: [0, Math.cos(i * 0.5) * 100],
              y: [0, Math.sin(i * 0.5) * 100],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.05,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-audiowide mb-6 glow-text">
            <span className="gradient-text">Join the Celebration</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            Be a part of the revolution — collaborate, participate, and celebrate the future
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-cyan px-8 py-6 text-lg font-orbitron group"
            >
              Join Now
              <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground shadow-glow-magenta px-8 py-6 text-lg font-orbitron"
            >
              Volunteer
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground shadow-glow-gold px-8 py-6 text-lg font-orbitron"
            >
              Collaborate
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            <div className="flex flex-col items-center gap-3 p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
              <Mail className="w-8 h-8 text-primary" />
              <h3 className="font-orbitron text-foreground">Email</h3>
              <p className="text-muted-foreground">hello@techmart2025.com</p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
              <Phone className="w-8 h-8 text-primary" />
              <h3 className="font-orbitron text-foreground">Phone</h3>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
              <MapPin className="w-8 h-8 text-primary" />
              <h3 className="font-orbitron text-foreground">Location</h3>
              <p className="text-muted-foreground">Tech Campus, Innovation City</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
