import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Leadership = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // 👑 Vice Chancellor
  const viceChancellor = [
    { name: "Prof Vinay Kr Pathak", role: "Vice Chancellor", image: "/images/leadership/vc.jpg" },
  ];

  // 💡 Visionaries
  const visionaries = [
    { name: "Dr. Alok Kumar", role: "Director UIET", image: "/images/leadership/alok_kumar.jpg" },
    { name: "Dr. Mamta Tiwari", role: "Convener", image: "/images/leadership/mamta_tiwari.png" },
  ];

  // 🎓 Faculty Members
  const faculty = [
    { name: "Dr. Ramendra niranjan", role: "Faculty Mentor", image: "/images/leadership/ramendra.jpeg" },
    { name: "Dr. Parul awasthi", role: "Treasurer", image: "/images/leadership/parul_awasthi.jpeg" },
  ];

  return (
    <section ref={ref} className="relative py-32 overflow-hidden flex justify-center" id="leadership">
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
              left: `${15 + i * 15}%`,
              top: `${10 + i * 12}%`,
            }}
            animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* 🌐 Main Content */}
      <div className="relative container mx-auto px-6 flex flex-col items-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-orbitron mb-6">
            <span className="gradient-text">Our Leadership</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet the guiding minds behind our vision — leaders who drive innovation,
            nurture creativity, and inspire excellence at every step.
          </p>
        </motion.div>

        {/* 👑 Vice Chancellor */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-24 text-center w-full flex justify-center"
        >
          <div>
            <h3 className="text-4xl md:text-5xl font-orbitron mb-10 gradient-text text-center">
              Vice Chancellor
            </h3>
            <div className="flex justify-center flex-wrap gap-10">
              {viceChancellor.map((person) => (
                <motion.div
                  key={person.name}
                  whileHover={{ scale: 1.05 }}
                  className="text-center w-64 sm:w-72"
                >
                  <div className="relative overflow-hidden rounded-2xl border border-border shadow-lg hover:shadow-glow-cyan transition-all duration-300">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-72 sm:h-80 object-cover object-top rounded-2xl"
                    />
                  </div>
                  <h4 className="text-2xl font-semibold mt-4 text-foreground">{person.name}</h4>
                  <p className="text-muted-foreground">{person.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 💡 Visionaries */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-24 w-full"
        >
          <h3 className="text-4xl md:text-5xl font-orbitron mb-10 text-center gradient-text">
            Visionaries
          </h3>
          <div className="flex flex-wrap justify-center gap-10">
            {visionaries.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center w-60 sm:w-64 md:w-72"
              >
                <div className="relative overflow-hidden rounded-2xl border border-border shadow-lg hover:shadow-glow-cyan transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 sm:h-72 object-cover rounded-2xl"
                  />
                </div>
                <h4 className="text-xl font-semibold mt-4 text-foreground">{member.name}</h4>
                <p className="text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 🎓 Faculty Members */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full"
        >
          <h3 className="text-4xl md:text-5xl font-orbitron mb-10 text-center gradient-text">
            Faculty Members
          </h3>
          <div className="flex flex-wrap justify-center gap-10">
            {faculty.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center w-56 sm:w-64 md:w-72"
              >
                <div className="relative overflow-hidden rounded-2xl border border-border shadow-lg hover:shadow-glow-cyan transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-60 sm:h-72 object-cover rounded-2xl"
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

export default Leadership;
