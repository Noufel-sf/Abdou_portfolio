import React, { memo } from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "../lib/utils";
import { MapPin, Calendar, Coffee } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, x: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

const About: React.FC = memo(() => {
  return (
    <div className="w-full min-h-full md:h-full flex flex-col items-center  p-6 md:p-12 overflow-visible">
      <div className="w-full max-w-3xl flex flex-col items-center mt-4 md:mt-0 px-4 md:px-12">
        <motion.div
          className="flex flex-col items-center text-center z-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
        >
          <motion.div variants={itemVariants} className="mb-4 md:mb-4 relative">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-tight">
              About
              <div className="relative inline-block ml-3">
                <span className="font-designer font-normal relative z-10">
                  Me
                </span>
                <svg
                  className="absolute w-[120%] -left-[10%] h-[40%] bottom-[10%] -z-10"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                  style={{ overflow: "visible" }}
                >
                  <motion.path
                    d="M 5 5 Q 50 10 95 5"
                    fill="none"
                    stroke="#FCDD00"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mix-blend-multiply opacity-80"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                  />
                </svg>
              </div>
            </h2>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="prose prose-lg text-gray-400 mb-6 md:mb-6"
          >
            <p className="text-lg md:text-xl leading-relaxed font-medium text-gray-200 mb-4 md:mb-4">
              My experience spans wholesale and retail trade, supermarkets,
              construction sites, sales, food service, and digital fields such
              as{" "}
              <span className="bg-yellow-500/20 px-1 rounded-md text-yellow-300">
                graphic design
              </span>{" "}
              and   <span className="bg-cyan-500/20 px-1 rounded-md text-cyan-300">content creation</span>. These roles built my adaptability,
              discipline, and ability to work effectively with all types of
              people.
             
            </p>
            <p className="leading-relaxed text-base md:text-lg text-gray-400">
              Alongside my studies, I maintain a focused lifestyle, value
              growth, and build meaningful professional relationships. I am also
               <span className="bg-cyan-500/20 px-1 rounded-md text-cyan-300">
              the founder of Brotherly Thinking, </span> a digital services company
              providing brand building, website development, and marketing
              solutions. I bring a sharp mindset, strong work ethic, and the
              ability to perform both in the field and in the digital world.
              Arab/English Dz 🇩🇿😁
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 md:gap-6 pt-6 md:pt-6 border-t border-white/10 w-full"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-cyan-500/20 rounded-full text-cyan-400">
                <Calendar size={18} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                  Experience
                </p>
                <p className="font-bold text-white text-sm">3+ Years</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-500/20 rounded-full text-orange-400">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                  Location
                </p>
                <p className="font-bold text-white text-sm">Algeria, Boumerdes</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-500/20 rounded-full text-yellow-400">
                <Coffee size={18} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                  Available For 
                </p>
                <p className="font-bold text-white text-sm">work</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
});

About.displayName = "About";

export default About;
