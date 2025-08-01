"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ProfilePhoto = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-10">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          delay: 0.5, 
          duration: 0.8,
          type: "spring",
          stiffness: 100 
        }}
        className="relative group cursor-pointer"
      >
        {/* Outer Glow Ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/30 via-accent/20 to-accent/30 animate-pulse scale-110 group-hover:scale-125 transition-transform duration-500"></div>
        
        {/* Inner Ring */}
        <div className="absolute inset-2 rounded-full bg-gradient-to-r from-accent/50 to-accent/30 group-hover:from-accent/70 group-hover:to-accent/50 transition-all duration-300"></div>
        
        {/* Photo Container */}
        <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-accent/40 group-hover:border-accent/70 transition-all duration-300">
          <Image
            src="/edited-picaai.png" // You'll need to add your photo here
            alt="Saad Ahmed Khanzada"
            fill
            className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
            priority
          />
          
          {/* Overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Floating Name Badge */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 custom-bg px-4 py-2 rounded-full border border-accent/30"
        >
          <p className="text-foreground font-medium text-sm md:text-base whitespace-nowrap">
            Saad Ahmed Khanzada
          </p>
        </motion.div>

        {/* Title Badge */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-accent/10 border border-accent/20 px-3 py-1 rounded-full"
        >
          <p className="text-accent font-medium text-xs md:text-sm whitespace-nowrap">
            Frontend Developer
          </p>
        </motion.div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-accent/40 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-10, 10, -10],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProfilePhoto;