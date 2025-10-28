import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
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

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* 🌈 Animated Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
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
