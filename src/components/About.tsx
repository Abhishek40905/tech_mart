import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useRef, useState } from "react";

const About = () => {
  const ref = useRef(null);
   const [menuOpen, setMenuOpen] = useState(false);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // 🧠 Top Management
  const topManagement = [
    { name: "Nikil", role: "IT", image: "/images/organizers/nikhil.jpeg" },
    { name: "Shikhar Dwivedi", role: "CSE", image: "/images/organizers/shikhar.jpeg" },
    { name: "Jatin Gupta", role: "MCA", image: "/images/organizers/jatin.jpeg" }
  ];

  // 👥 Organizing Members
  const organizingTeam = [
    { name: "Vishal singh", role: "ECE", image: "/images/organizers/vishal.jpeg" },
    { name: "Nav srijan", role: "CSE-AI", image: "/images/organizers/nav.jpeg" },
    { name: "Mohd Athar ", role: "B.Deisgn", image: "/images/organizers/athar.jpeg" },
    { name: "Shivam pal", role: "CHE", image: "/images/organizers/shivam.jpeg" },
    { name: "Shivani shukla", role: "IT", image: "/images/organizers/shivani.jpeg" },
    { name: "Divyaraaj Tomar", role: "MEE", image: "/images/organizers/divyaraaj.jpeg" },
    { name: "Sanskriti srivastava", role: "B. voc", image: "/images/organizers/sanskriti.jpeg" }
  ];

  // 🎓 Faculty Members
  const faculty = [
    { name: "Dr. Ramesh Iyer", role: "Faculty Coordinator", image: "/images/faculty/iyer.jpg" },
    { name: "Prof. Neha Singh", role: "Mentor", image: "/images/faculty/neha.jpg" },
  ];
    const menuItems = [
    { name: 'Institutions', id: '/#institutions' },
    { name: 'Sponsors', id: '/#sponsors' },
    { name: 'Competitions', id: '/#competitions' },
    { name: 'Schedule', id: '/#schedule' },
    { name: 'About', id: '/about' },
  ];


  return (
    <section ref={ref} className="relative py-32 overflow-hidden" id="about">
      {/* 🌈 Animated Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
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
                    href={`#${item.id}`}
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
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 rounded-full"
            style={{
              background: `radial-gradient(circle, ${
                i % 2 === 0
                  ? "hsla(189 100% 50% / 0.1)"
                  : "hsla(312 100% 50% / 0.1)"
              } 0%, transparent 70%)`,
              left: `${20 + i * 20}%`,
              top: `${10 + i * 15}%`,
            }}
            animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* 🌐 Main Content */}
      <div className="relative container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-orbitron mb-6">
            <span className="gradient-text">About TechMart</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            TechMart is not just a fest — it's a multidimensional experience
            blending innovation, imagination, and inspiration. Dive into a world
            of futuristic technology, artistic brilliance, and boundless creativity.
          </p>
        </motion.div>

        {/* 🧠 Top Management */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-24"
        >
          <h3 className="text-4xl md:text-5xl font-orbitron mb-10 text-center gradient-text">
            organizers
          </h3>
          <div className="flex flex-wrap justify-center gap-10">
            {topManagement.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.05 }}
                className="text-center w-64"
              >
                <div className="relative overflow-hidden rounded-2xl border border-border shadow-lg hover:shadow-glow-cyan transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-72 object-cover object-top rounded-2xl"
                  />
                </div>
                <h4 className="text-2xl font-semibold mt-4 text-foreground">
                  {member.name}
                </h4>
                <p className="text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 👥 Organizing Members */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-24"
        >
          {/* <h3 className="text-4xl md:text-5xl font-orbitron mb-10 text-center gradient-text">
            Organizing Members
          </h3> */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 justify-items-center">
            {organizingTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="relative overflow-hidden rounded-2xl border border-border shadow-lg hover:shadow-glow-cyan transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover object-top rounded-2xl"
                  />
                </div>
                <h4 className="text-2xl font-semibold mt-4 text-foreground">
                  {member.name}
                </h4>
                <p className="text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 🎓 Faculty Mentors */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="text-4xl md:text-5xl font-orbitron mb-10 text-center gradient-text">
            Faculty Mentors
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
            {faculty.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="relative overflow-hidden rounded-2xl border border-border shadow-lg hover:shadow-glow-pink transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                </div>
                <h4 className="text-2xl font-semibold mt-4 text-foreground">
                  {member.name}
                </h4>
                <p className="text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
