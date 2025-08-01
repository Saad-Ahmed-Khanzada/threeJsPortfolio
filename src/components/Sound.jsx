"use client";

import React, { useEffect, useRef, useState } from "react";
import {motion} from 'framer-motion'
import { Volume2, VolumeX } from "lucide-react";
import { createPortal } from "react-dom";

const Modal=({onClose,toggle})=>{
    return createPortal(
        <div className="fixed inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px]
            py-8 px-6 xs:px-10 sm:px-16 rounded shadow-glass-inset text-center space-y-8">

                <p className="font-light">Do you like to play the background music?</p>

                <div className="flex items-center justify-center space-x-4 ">
                    <button 
                        onClick={toggle} 
                        className="mr-2 px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded transition-colors hover:border-accent/50"
                    >
                        Yes
                    </button>
                    <button 
                        onClick={onClose} 
                        className="mr-2 px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded transition-colors hover:border-accent/50"
                    >
                        No
                    </button>
                </div>
            </div>
        </div>,
        document.getElementById("my-modal")
    )
}

const Sound = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [hasUserInteracted, setHasUserInteracted] = useState(false);

    // Check if user has made a choice before
    const hasUserMadeChoice = () => {
        const consent = localStorage.getItem("musicConsent");
        const consentTime = localStorage.getItem("consentTime");
        
        // If no consent data exists, user hasn't made a choice
        if (!consent || !consentTime) {
            return false;
        }
        
        // Check if consent is still valid (30 days)
        const consentDate = new Date(consentTime);
        const now = new Date();
        const daysDifference = (now - consentDate) / (1000 * 60 * 60 * 24);
        
        return daysDifference < 30; // Valid for 30 days
    };

    // Save user choice to localStorage
    const saveUserChoice = (choice) => {
        localStorage.setItem("musicConsent", String(choice));
        localStorage.setItem("consentTime", new Date().toISOString());
    };

    // Handle first user interaction to play audio
    const handleFirstUserInteraction = () => {
        if (!hasUserInteracted) {
            setHasUserInteracted(true);
            const musicConsent = localStorage.getItem("musicConsent");
            
            if (musicConsent === "true" && !isPlaying && audioRef.current) {
                audioRef.current.play().catch(console.error);
                setIsPlaying(true);
            }

            // Remove event listeners after first interaction
            ["click", "keydown", "touchstart"].forEach((event) =>
                document.removeEventListener(event, handleFirstUserInteraction)
            );
        }
    };

    // Initialize component
    useEffect(() => {
        if (hasUserMadeChoice()) {
            // User has made a choice before, don't show modal
            const consent = localStorage.getItem("musicConsent");
            setIsPlaying(consent === "true");
            
            if (consent === "true") {
                // Set up event listeners for auto-play after user interaction
                ["click", "keydown", "touchstart"].forEach((event) =>
                    document.addEventListener(event, handleFirstUserInteraction)
                );
            }
        } else {
            // User hasn't made a choice, show modal
            setShowModal(true);
        }

        // Cleanup function
        return () => {
            ["click", "keydown", "touchstart"].forEach((event) =>
                document.removeEventListener(event, handleFirstUserInteraction)
            );
        };
    }, []);

    // Handle user selecting "Yes" from modal
    const handleYesChoice = () => {
        setIsPlaying(true);
        setShowModal(false);
        saveUserChoice(true);
        
        // Try to play immediately, but set up auto-play listener if it fails
        if (audioRef.current) {
            audioRef.current.play().then(() => {
                setHasUserInteracted(true);
            }).catch(() => {
                // Auto-play blocked, wait for user interaction
                ["click", "keydown", "touchstart"].forEach((event) =>
                    document.addEventListener(event, handleFirstUserInteraction)
                );
            });
        }
    };

    // Handle user selecting "No" from modal
    const handleNoChoice = () => {
        setIsPlaying(false);
        setShowModal(false);
        saveUserChoice(false);
    };

    // Toggle music on/off (from the button)
    const toggle = () => {
        const newState = !isPlaying;
        setIsPlaying(newState);

        if (audioRef.current) {
            if (newState) {
                audioRef.current.play().catch(console.error);
            } else {
                audioRef.current.pause();
            }
        }

        // Update the saved preference
        saveUserChoice(newState);
    };

    return (
        <div className="fixed top-4 right-2.5 xs:right-4 z-50 group">
            {/* Show modal only if user hasn't made a choice */}
            {showModal && (
                <Modal 
                    onClose={handleNoChoice} 
                    toggle={handleYesChoice} 
                />
            )}

            <audio ref={audioRef} loop preload="metadata">
                <source src={"/audio/birds39-forest-20772.mp3"} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>

            <motion.button
                onClick={toggle}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 }}
                className="w-10 h-10 xs:w-14 xs:h-14 text-foreground rounded-full flex items-center justify-center cursor-pointer z-50 p-2.5 xs:p-4 custom-bg hover:shadow-glass-sm transition-all"
                aria-label={isPlaying ? "Mute background music" : "Play background music"}
                title={isPlaying ? "Mute music" : "Play music"}
            >
                {isPlaying ? (
                    <Volume2 className="w-full h-full text-foreground group-hover:text-accent transition-colors" strokeWidth={1.5}/>
                ) : (
                    <VolumeX className="w-full h-full text-foreground group-hover:text-accent transition-colors" strokeWidth={1.5}/>
                )}
            </motion.button>
        </div>
    );
};

export default Sound;