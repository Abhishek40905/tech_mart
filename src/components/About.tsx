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
    { name: "Vishal Singh", role: "ECE", image: "/images/organizers/vishal.jpeg" },
    { name: "Nav Srijan", role: "CSE-AI", image: "/images/organizers/nav.jpeg" },
    { name: "Mohd Athar", role: "B.Design", image: "/images/organizers/athar.jpeg" },
    { name: "Shivam Pal", role: "CHE", image: "/images/organizers/shivam.jpeg" },
    { name: "Shivani Shukla", role: "IT", image: "/images/organizers/shivani.jpeg" },
    { name: "Divyaraaj Tomar", role: "MEE", image: "/images/organizers/divyaraaj.jpeg" },
    { name: "Sanskriti Srivastava", role: "B.Voc", image: "/images/organizers/sanskriti.jpeg" }
  ];

  const menuItems = [
    { name: "Institutions", id: "/#institutions" },
    { name: "Sponsors", id: "/#sponsors" },
    { name: "Competitions", id: "/#competitions" },
    { name: "Schedule", id: "/#schedule" },
    { name: "About", id: "/about" },
  ];

  return (
    <section ref={ref} className="relative py-32 overflow-hidden" id="about">
      {/* 🌈 Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 rounded-full"
            style={{
              background: `radial-gradient(circle, ${
                i % 2 === 0
                  ? "hsla(189, 100%, 50%, 0.08)"
                  : "hsla(312, 100%, 50%, 0.08)"
              } 0%, transparent 70%)`,
              left: `${10 + i * 18}%`,
              top: `${8 + i * 12}%`,
            }}
            animate={{ x: [0, 40, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 12 + i * 2, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* 🧭 Navbar */}
      <div className="absolute top-4 left-0 right-0 flex justify-between items-center px-6 z-20">
        <h2 className="font-audiowide text-2xl sm:text-3xl text-primary drop-shadow-lg">
          <a href="/">TechMart</a>
        </h2>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg bg-background/50 backdrop-blur-lg border border-primary/20 hover:bg-background/70 transition"
        >
          {menuOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-primary" />}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-lg font-orbitron text-foreground/90">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={item.id}
              className="hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      {/* 📱 Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="absolute top-16 left-4 right-4 z-20 bg-background/80 backdrop-blur-lg border border-primary/20 rounded-2xl p-6 shadow-lg md:hidden"
          >
            <ul className="flex flex-col items-center gap-4 text-lg font-orbitron text-foreground">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.id}
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

      {/* 🧾 Main Content */}
      <div className="relative container mx-auto px-6 text-center">
        {/* Section Headers */}
        {[
          {
            title: "About TechMart",
            text: `TechMart is not just a fest — it's a multidimensional experience blending innovation, imagination, and inspiration. Dive into a world of futuristic technology, artistic brilliance, and boundless creativity.`,
          },
          {
            title: "About CSJMU",
            text: `Chhatrapati Shahu Ji Maharaj University (CSJMU), formerly Kanpur University, is a major public state university in Uttar Pradesh, established in 1966. It serves as an affiliating body for hundreds of colleges, offering over 400 courses across disciplines, recognized by UGC.`,
          },
          {
            title: "About UIET",
            text: `The University Institute of Engineering and Technology (UIET), established in 1996, is CSJMU’s flagship engineering college. Offering B.Tech, MCA, and Diploma programs, UIET fosters innovation and excellence through world-class education and research.`,
          },
        ].map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            className="mb-24 max-w-5xl mx-auto"
          >
            <h2 className="text-5xl md:text-7xl font-orbitron mb-6 gradient-text">
              {section.title}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {section.text}
            </p>
          </motion.div>
        ))}

        {/* 🧠 Organizers */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-24"
        >
          <h3 className="text-4xl md:text-5xl font-orbitron mb-10 gradient-text">Organizers</h3>
          <div className="flex flex-wrap justify-center gap-10">
            {topManagement.map((member, index) => (
              <motion.div
                key={member.name}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="text-center w-64"
              >
                <div className="relative overflow-hidden rounded-2xl border border-border shadow-lg hover:shadow-glow-cyan transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-72 object-cover object-top rounded-2xl"
                  />
                </div>
                <h4 className="text-2xl font-semibold mt-4 text-foreground">{member.name}</h4>
                <p className="text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 👥 Organizing Members */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-24"
        >
          <h3 className="text-4xl md:text-5xl font-orbitron mb-10 gradient-text">Team Members</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 justify-items-center">
            {organizingTeam.map((member, index) => (
              <motion.div
                key={member.name}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="text-center"
              >
                <div className="relative overflow-hidden rounded-2xl border border-border shadow-lg hover:shadow-glow-cyan transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover object-top rounded-2xl"
                  />
                </div>
                <h4 className="text-xl font-semibold mt-4 text-foreground">{member.name}</h4>
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
