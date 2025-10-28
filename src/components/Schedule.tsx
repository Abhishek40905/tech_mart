import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Clock } from 'lucide-react';

const Schedule = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const schedule = [
    { day: "Day 1", date: "March 15", events: [
      { time: "09:00 AM", title: "Opening Ceremony", venue: "Main Auditorium" },
      { time: "11:00 AM", title: "Hackathon Begins", venue: "Tech Lab" },
      { time: "02:00 PM", title: "Tech Talk: Future of AI", venue: "Hall A" },
      { time: "06:00 PM", title: "Cultural Night", venue: "Open Arena" },
    ]},
    { day: "Day 2", date: "March 16", events: [
      { time: "10:00 AM", title: "Robo Wars Quarter Finals", venue: "Arena B" },
      { time: "01:00 PM", title: "AI Art Contest", venue: "Exhibition Hall" },
      { time: "04:00 PM", title: "Startup Pitching", venue: "Innovation Center" },
      { time: "08:00 PM", title: "DJ Night", venue: "Main Stage" },
    ]},
    { day: "Day 3", date: "March 17", events: [
      { time: "10:00 AM", title: "Hackathon Presentations", venue: "Tech Lab" },
      { time: "02:00 PM", title: "Robo Wars Finals", venue: "Main Arena" },
      { time: "05:00 PM", title: "Award Ceremony", venue: "Main Auditorium" },
      { time: "07:00 PM", title: "Closing Celebration", venue: "Campus Grounds" },
    ]},
  ];

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <Calendar className="w-16 h-16 mx-auto mb-6 text-primary animate-float" />
          <h2 className="text-5xl md:text-7xl font-orbitron mb-6">
            <span className="gradient-text">Fest Schedule</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three days of non-stop innovation, competition, and celebration
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {schedule.map((day, dayIndex) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: dayIndex * 0.2 }}
              className="relative"
            >
              <div className="sticky top-4">
                <div className="bg-card/80 backdrop-blur-sm border-2 border-border rounded-2xl p-6 glow-border hover:shadow-glow-cyan transition-all duration-300">
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                    <h3 className="text-3xl font-orbitron text-primary">{day.day}</h3>
                    <span className="text-muted-foreground font-medium">{day.date}</span>
                  </div>

                  <div className="space-y-4">
                    {day.events.map((event, eventIndex) => (
                      <motion.div
                        key={eventIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.4, delay: dayIndex * 0.2 + eventIndex * 0.1 }}
                        whileHover={{ x: 10 }}
                        className="relative pl-8 pb-4 border-l-2 border-primary/30 hover:border-primary transition-colors duration-300"
                      >
                        <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-primary shadow-glow-cyan -translate-x-[7px]" />
                        
                        <div className="flex items-start gap-2 mb-2">
                          <Clock className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                          <span className="text-sm font-orbitron text-accent">{event.time}</span>
                        </div>
                        
                        <h4 className="font-semibold text-foreground mb-1">{event.title}</h4>
                        <p className="text-sm text-muted-foreground">{event.venue}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
