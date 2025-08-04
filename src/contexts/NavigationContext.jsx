"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

// Create navigation context
const NavigationContext = createContext();

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within NavigationProvider");
  }
  return context;
};

// Navigation Provider Component
export const NavigationProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Enhanced loading detection
  useEffect(() => {
    let timeoutId;

    const startLoading = () => {
      setIsLoading(true);
      // Auto-hide loader after maximum time
      timeoutId = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };

    const stopLoading = () => {
      setIsLoading(false);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };

    // Listen for navigation clicks on internal links
    const handleLinkClick = (e) => {
      const target = e.target.closest('a');
      if (target) {
        const href = target.getAttribute('href');
        // Check if it's an internal navigation link
        if (href && href.startsWith('/') && !href.startsWith('http') && href !== pathname) {
          startLoading();
        }
      }
    };

    // Listen for programmatic navigation
    const originalPush = router.push;
    const originalReplace = router.replace;

    router.push = (...args) => {
      startLoading();
      return originalPush.apply(router, args);
    };

    router.replace = (...args) => {
      startLoading();
      return originalReplace.apply(router, args);
    };

    // Add event listeners
    document.addEventListener('click', handleLinkClick);

    // Stop loading when route changes
    stopLoading();

    return () => {
      document.removeEventListener('click', handleLinkClick);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      // Restore original router methods
      router.push = originalPush;
      router.replace = originalReplace;
    };
  }, [pathname, router]);

  const value = {
    isLoading,
    startLoading: () => setIsLoading(true),
    stopLoading: () => setIsLoading(false),
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
      <NavigationLoader isLoading={isLoading} />
    </NavigationContext.Provider>
  );
};

// Enhanced Navigation Loader Component
const NavigationLoader = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/95 backdrop-blur-lg"
        >
          {/* Main Loader Container */}
          <div className="flex flex-col items-center space-y-6">
            
            {/* Elegant Spinner */}
            <div className="relative">
              {/* Outer Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 border-2 border-accent/20 rounded-full"
              />
              
              {/* Inner Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 border-2 border-transparent border-t-accent border-r-accent rounded-full"
              />
              
              {/* Center Dot */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 1, repeat: Infinity }}
                className="absolute inset-1/2 w-2 h-2 -ml-1 -mt-1 bg-accent rounded-full"
              />
            </div>

            {/* Clean Loading Text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-foreground font-medium tracking-wider text-sm"
              >
                LOADING
              </motion.p>
            </motion.div>

            {/* Minimal Progress Bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              className="h-0.5 bg-accent/30 rounded-full overflow-hidden"
            >
              <motion.div
                animate={{ 
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="h-full w-20 bg-accent rounded-full"
              />
            </motion.div>
          </div>

          {/* Subtle Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 0.3, 0],
                  scale: [0, 1, 0],
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
                className="absolute w-1 h-1 bg-accent rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavigationProvider;