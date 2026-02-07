import { motion } from 'framer-motion';
import eventsData from '../data/eventsData';
import EventCard from '../components/Activities/EventCard';

const Activities: React.FC = () => {
  

  return (
    <div className="min-h-screen bg-black cursor-none">
      

      {/* Page Title */}
      <motion.h1
        className="text-4xl sm:text-5xl font-bold mb-6 text-center text-white pt-24"
        style={{ fontFamily: "'Poppins', sans-serif" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        Our Events and Activities
      </motion.h1>

      {/* Events Grid */}
      <div className="container mx-auto px-4 sm:px-8 mt-12 pb-16">
        <div className="flex flex-wrap justify-center items-start gap-8 w-full">
          {eventsData.map((event, index) => (
            <motion.div
              key={event.title}
              className="flex justify-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >
              <EventCard
                title={event.title}
                image={event.img}
                desc={event.desc}
                link={event.link}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;
