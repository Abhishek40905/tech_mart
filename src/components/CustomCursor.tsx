import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-[10000] mix-blend-screen"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div className="w-10 h-10 rounded-full border-2 border-primary bg-primary/10 backdrop-blur-sm" />
      </motion.div>

      <motion.div
        className="fixed pointer-events-none z-[10000]"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 40,
        }}
      >
        <div className="w-1 h-1 rounded-full bg-primary shadow-glow-cyan" />
      </motion.div>

      {/* Trail particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed pointer-events-none z-[9999] w-2 h-2 rounded-full bg-primary/30"
          animate={{
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            opacity: [0.5, 0],
            scale: [1, 0],
          }}
          transition={{
            duration: 0.5,
            delay: i * 0.05,
            ease: "easeOut",
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
