import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Code, Zap, ShieldCheck, BookOpen, Activity, X, Sparkles } from "lucide-react";

interface Event {
  title: string;
  description: string;
  format: string;
  duration: string;
  platform?: string;
  scoring: string[];
  rules: string[];
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
  glow?: string;
}

const EVENTS: Event[] = [
  {
    title: "AlgoRift (Programming Contest)",
    description:
      "A 3-hour ICPC-style competitive coding round — algorithmic problems, speed & accuracy matter.",
    format: "Individual",
    duration: "3 hours",
    platform: "CodeChef / Codeforces / Self-hosted",
    scoring: [
      "Problems with varying difficulty and point values",
      "Based on number of correct solves",
      "Time (faster solves score higher in tie-breaks)",
      "Ties broken by fewer incorrect submissions",
    ],
    rules: [
      "No pre-written templates / code snippets",
      "Internet restricted to contest platform & official docs",
      "Plagiarism or collaboration = disqualification",
      "Mimics ICPC-style rules",
    ],
    icon: Code,
    color: "from-cyan-500 to-blue-500",
    glow: "shadow-glow-cyan",
  },
  {
    title: "WebGenesis (Web Development Hackathon)",
    description:
      "Teams build a website on a revealed theme. Judges score on creativity, functionality and theme fit.",
    format: "Teams of 3–4",
    duration: "3 hours build + 2 hours showcase",
    platform: "Local / Browser-based",
    scoring: [
      "Creativity & originality",
      "Resemblance to the theme",
      "Functionality & responsiveness",
      "Overall polish (UX & visuals)",
    ],
    rules: ["AI & internet allowed", "Theme revealed at start of event"],
    icon: Zap,
    color: "from-purple-500 to-pink-500",
    glow: "shadow-glow-magenta",
  },
  {
    title: "CipherConquest (CTF Challenge)",
    description:
      "Capture-the-Flag style cybersecurity challenges across multiple domains.",
    format: "Individual / Team (TBD)",
    duration: "3 hours",
    platform: "CTF platform (scoreboard)",
    scoring: ["Number of flags solved", "Time to solve (faster solves rank higher)"],
    rules: ["AI & internet allowed", "Sharing flags between teams prohibited"],
    icon: ShieldCheck,
    color: "from-amber-500 to-orange-500",
    glow: "shadow-glow-gold",
  },
  {
    title: "TechWhiz (CS Fundamentals Quiz)",
    description:
      "A live quiz testing computer science fundamentals with automatic leaderboard scoring.",
    format: "Individual",
    duration: "1 hour",
    platform: "Quiz platform / Live system",
    scoring: ["Correct answers + time taken", "Faster correct answers rank higher"],
    rules: ["No googling or external help", "No sharing of answers"],
    icon: BookOpen,
    color: "from-cyan-500 to-teal-500",
    glow: "shadow-glow-cyan",
  },
  {
    title: "TypeMatrix (Typing Test)",
    description:
      "60-second typing rounds testing speed and accuracy. Highest WPM with accuracy wins.",
    format: "Individual",
    duration: "1 hour (sessions)",
    platform: "Browser-based typing tool",
    scoring: ["60s timed test", "Higher WPM while maintaining accuracy wins"],
    rules: ["Accuracy matters — mistakes reduce effective score"],
    icon: Activity,
    color: "from-green-400 to-teal-500",
    glow: "shadow-glow-green",
  },
];

const Events: React.FC = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null ? "hidden" : "";
  }, [selectedIndex]);

  const openEvent = (index: number) => setSelectedIndex(index);
  const closeEvent = () => setSelectedIndex(null);

  return (
    <section ref={ref as any} className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/6 to-transparent pointer-events-none" />

      <div className="relative container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-orbitron mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Events & Competitions
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto px-2">
            A curated lineup of coding, security, web, quiz, and typing events — built to challenge and inspire.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {EVENTS.map((event, idx) => {
            const Icon = event.icon;
            return (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.55, delay: idx * 0.08 }}
                whileHover={{ scale: 1.03 }}
                className="flex"
              >
                <button
                  onClick={() => openEvent(idx)}
                  className={`group relative flex flex-col justify-between w-full h-full text-left rounded-2xl p-6 bg-gradient-to-b from-gray-900/60 to-gray-900/40 border border-gray-800 hover:border-cyan-500 transition-all duration-300 ${event.glow}`}
                >
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity ${event.color}`}
                    style={{ mixBlendMode: "screen" }}
                  />

                  {/* Card Content */}
                  <div className="relative z-10 flex flex-col gap-3">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-gradient-to-br from-white/5 to-white/3 ring-1 ring-white/5">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-300" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">{event.title}</h3>
                    <p className="text-gray-400 text-sm sm:text-base flex-1">{event.description}</p>
                  </div>

                  {/* Tags / Badges */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="text-[11px] sm:text-xs px-2 py-1 bg-white/3 rounded-full text-white/90">
                      {event.format}
                    </span>
                    <span className="text-[11px] sm:text-xs px-2 py-1 bg-white/3 rounded-full text-white/90">
                      {event.duration}
                    </span>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6"
            onClick={closeEvent}
          >
            {/* backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* modal card */}
            <motion.div
              initial={{ y: 30, scale: 0.98, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 30, scale: 0.98, opacity: 0 }}
              transition={{ type: "spring", stiffness: 250, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 w-full max-w-3xl bg-gray-900/95 border border-cyan-500/30 rounded-2xl shadow-2xl p-5 sm:p-8 max-h-[90vh] overflow-y-auto"
            >
              {/* Close button */}
              <button
                onClick={closeEvent}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-gray-800/60 border border-gray-700 hover:bg-gray-800/80 transition"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-300" />
              </button>

              {/* Content */}
              <div className="grid gap-5 sm:gap-6">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-white/5 to-white/3 flex items-center justify-center border border-white/5 flex-shrink-0">
                    {React.createElement(EVENTS[selectedIndex].icon, {
                      className: "w-8 h-8 sm:w-9 sm:h-9 text-cyan-300",
                    })}
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">
                      {EVENTS[selectedIndex].title}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-400 mt-1">
                      {EVENTS[selectedIndex].description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2 justify-center sm:justify-start">
                      <span className="text-[11px] sm:text-xs px-2 py-1 bg-white/3 rounded-full text-white/90">
                        {EVENTS[selectedIndex].format}
                      </span>
                      <span className="text-[11px] sm:text-xs px-2 py-1 bg-white/3 rounded-full text-white/90">
                        {EVENTS[selectedIndex].duration}
                      </span>
                      {EVENTS[selectedIndex].platform && (
                        <span className="text-[11px] sm:text-xs px-2 py-1 bg-white/3 rounded-full text-white/90">
                          Platform: {EVENTS[selectedIndex].platform}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Scoring</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm sm:text-base">
                      {EVENTS[selectedIndex].scoring.map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Rules</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm sm:text-base">
                      {EVENTS[selectedIndex].rules.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer */}
                <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row gap-3 sm:gap-0 items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-cyan-300">
                    <Sparkles className="w-4 h-4" />
                    <span>Get ready to compete & innovate!</span>
                  </div>
                  <button
                    onClick={() =>
                      alert(`Registration link for: ${EVENTS[selectedIndex].title}`)
                    }
                    className="px-5 py-2 rounded-lg bg-cyan-500/90 hover:bg-cyan-500 text-black font-semibold transition text-sm sm:text-base"
                  >
                    Register
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Events;
