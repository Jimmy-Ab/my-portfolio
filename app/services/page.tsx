// "use client";

// import { BsArrowDownRight } from "react-icons/bs";
// import { motion } from "framer-motion";
// import { FiArrowUpRight } from "react-icons/fi";

// const services = [
//   {
//     num: "01",
//     title: "Web Development",
//     description: "I provide expert services in designing elegant web experiences, utilizing my extensive knowledge in cutting-edge web development tools and techniques.",
//     href: "",
//   },
//   {
//     num: "02",
//     title: "UI/UX Design",
//     description: "I design intuitive and engaging user interfaces that focus on usability and aesthetics, making sure your website or app is both functional and visually appealing.",
//     href: "",
//   },
//   {
//     num: "03",
//     title: "Logo Design",
//     description: "I provide logo design services that focus on developing impactful and unique logos that capture the core values of your brand. I craft designs that are both aesthetically pleasing and meaningful.",
//     href: "",
//   },
//   {
//     num: "04",
//     title: "SEO",
//     description: "I offer SEO solutions that enhance your website's performance, ensuring higher rankings and increased engagement from potential customers.",
//     href: "",
//   },
// ];

// const Services = () => {
//    const container = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.3
//       }
//     }
//   };

//   const item = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.5, ease: "easeOut" }
//     }
//   };

//   return (
//     <section className="relative py-12 xl:py-10"> {/* Reduced padding */}
//       {/* Background elements */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute top-1/2 left-1/2 w-[120%] h-[120%] bg-gradient-to-br from-[#0a0a0a] to-[#1a1a2e] transform -translate-x-1/2 -translate-y-1/2"></div>
//         <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-float"></div>
//         <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-[#4f46e5]/10 blur-3xl animate-float-delay"></div>
//       </div>

//       <div className="container mx-auto px-6">
//         {/* Section header */}
//         <motion.div 
//           className="text-center mb-8"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             My <span className="text-accent">Services</span>
//           </h2>
//           <p className="text-white/70 max-w-2xl mx-auto">
//             Comprehensive solutions tailored to bring your digital vision to life
//           </p>
//         </motion.div>

//         {/* Services grid */}
//         <motion.div
//           className="grid grid-cols-1 lg:grid-cols-2 gap-8"
//           variants={container}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//         >
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               className="group relative p-8 rounded-2xl bg-gradient-to-br from-[#ffffff08] to-[#ffffff03] border border-white/10 hover:border-accent/30 transition-all duration-500 overflow-hidden"
//               variants={item}
//               whileHover={{ y: -10 }}
//             >
//               {/* Glow effect */}
//               <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              
//               {/* Number */}
//               <div className="text-7xl font-bold text-outline text-transparent absolute top-4 right-4 opacity-20 group-hover:opacity-30 group-hover:text-accent/20 transition-all duration-500">
//                 {service.num}
//               </div>

//               {/* Content */}
//               <div className="relative z-10">
//                 <div className="flex justify-between items-start mb-6">
//                   <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors duration-500">
//                     {service.title}
//                   </h3>
//                   <motion.a
//                     href={service.href}
//                     className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 group-hover:bg-accent transition-all duration-500"
//                     whileHover={{ scale: 1.1 }}
//                   >
//                     <FiArrowUpRight className="text-xl text-white group-hover:rotate-45 transition-transform duration-500" />
//                   </motion.a>
//                 </div>

//                 <p className="text-white/70 mb-6 leading-relaxed">
//                   {service.description}
//                 </p>

//                 <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-accent/50 transition-all duration-500"></div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Services;

"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "I provide expert services in designing elegant web experiences, utilizing my extensive knowledge in cutting-edge web development tools and techniques.",
    href: "",
    active: true
  },
  {
    num: "02",
    title: "IT Consultation",
    description: "I offer strategic IT consulting to help businesses optimize their technology infrastructure, implement efficient solutions, and drive digital transformation for sustainable growth.",
    href: "",
    active: true
  },
  {
    num: "03",
    title: "UI/UX Design",
    description: "I design intuitive and engaging user interfaces that focus on usability and aesthetics, making sure your website or app is both functional and visually appealing.",
    href: "",
    active: false
  },
  {
    num: "04",
    title: "SEO",
    description: "I offer SEO solutions that enhance your website's performance, ensuring higher rankings and increased engagement from potential customers.",
    href: "",
    active: false
  },
];

const Services = () => {
   const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="relative py-12 xl:py-10">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 w-[120%] h-[120%] bg-gradient-to-br from-[#0a0a0a] to-[#1a1a2e] transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-[#4f46e5]/10 blur-3xl animate-float-delay"></div>
      </div>

      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-accent">Services</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Comprehensive solutions tailored to bring your digital vision to life
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`group relative p-8 rounded-2xl border transition-all duration-500 overflow-hidden ${
                service.active 
                  ? "bg-gradient-to-br from-[#ffffff08] to-[#ffffff03] border-white/10 hover:border-accent/30 cursor-pointer" 
                  : "bg-gradient-to-br from-[#ffffff03] to-[#ffffff01] border-white/5 cursor-not-allowed opacity-60"
              }`}
              variants={item}
              whileHover={service.active ? { y: -10 } : {}}
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 transition-opacity duration-500 -z-10 ${
                service.active ? "group-hover:opacity-100" : ""
              }`}></div>
              
              {/* Number */}
              <div className={`text-7xl font-bold text-outline text-transparent absolute top-4 right-4 opacity-20 transition-all duration-500 ${
                service.active ? "group-hover:opacity-30 group-hover:text-accent/20" : ""
              }`}>
                {service.num}
              </div>

              {/* Inactive overlay */}
              {!service.active && (
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] rounded-2xl z-20 flex items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                    <span className="text-white/80 text-sm font-medium">Coming Soon</span>
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <h3 className={`text-2xl font-bold transition-colors duration-500 ${
                    service.active ? "text-white group-hover:text-accent" : "text-white/60"
                  }`}>
                    {service.title}
                  </h3>
                  {service.active ? (
                    <motion.a
                      href={service.href}
                      className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 group-hover:bg-accent transition-all duration-500"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FiArrowUpRight className="text-xl text-white group-hover:rotate-45 transition-transform duration-500" />
                    </motion.a>
                  ) : (
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 opacity-50">
                      <FiArrowUpRight className="text-xl text-white/60" />
                    </div>
                  )}
                </div>

                <p className={`mb-6 leading-relaxed ${
                  service.active ? "text-white/70" : "text-white/50"
                }`}>
                  {service.description}
                </p>

                <div className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent transition-all duration-500 ${
                  service.active ? "via-white/10 to-transparent group-hover:via-accent/50" : "via-white/5 to-transparent"
                }`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Availability notice */}
        <motion.div 
          className="text-center mt-8 p-4 rounded-lg bg-white/5 border border-white/10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-white/60 text-sm">
            Currently focusing on <span className="text-accent font-semibold">Web Development</span> and <span className="text-accent font-semibold">IT Consultation</span>. Other services will be available soon!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;