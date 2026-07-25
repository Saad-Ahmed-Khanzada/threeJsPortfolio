"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const fieldClass = `
  w-full rounded-lg border border-accent/25 bg-background/50 px-3.5 py-2.5
  text-sm text-foreground placeholder:text-muted/70 backdrop-blur-sm
  transition-colors focus:border-accent/60 focus:outline-none
  focus:ring-2 focus:ring-accent/40
`;

const errorClass = "mt-1.5 block text-xs font-medium text-red-400";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Local pending state so the submit button can be disabled — the previous
  // version let you fire the request repeatedly while it was in flight.
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (params) => {
    const toastId = toast.loading("Sending your message…");
    setIsSending(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        params,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          limitRate: { throttle: 5000 },
        }
      )
      .then(() => {
        toast.success(
          "Message received — I'll get back to you within 24 hours.",
          { id: toastId }
        );
        reset();
      })
      .catch((error) => {
        console.error("Email send failed:", error);
        toast.error(
          "That didn't send. Please email me directly at saadkhanzada1@gmail.com.",
          { id: toastId }
        );
      })
      .finally(() => setIsSending(false));
  };

  const onSubmit = (data) => {
    sendEmail({
      to_name: "Saad Ahmed Khanzada",
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    });
  };

  return (
    <>
      <Toaster richColors theme="dark" position="bottom-center" />

      <motion.form
        variants={container}
        initial="hidden"
        animate="show"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="flex w-full flex-col gap-4"
      >
        <motion.div variants={item}>
          <label
            htmlFor="contact-name"
            className="mb-1.5 block text-xs font-medium text-foreground/80"
          >
            Your name
          </label>
          <input
            id="contact-name"
            type="text"
            placeholder="Jane Doe"
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            {...register("name", {
              required: "Please tell me your name.",
              minLength: {
                value: 3,
                message: "Name should be at least 3 characters.",
              },
            })}
            className={fieldClass}
          />
          {errors.name && (
            <span id="contact-name-error" role="alert" className={errorClass}>
              {errors.name.message}
            </span>
          )}
        </motion.div>

        <motion.div variants={item}>
          <label
            htmlFor="contact-email"
            className="mb-1.5 block text-xs font-medium text-foreground/80"
          >
            Email address
          </label>
          <input
            id="contact-email"
            type="email"
            placeholder="you@company.com"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            {...register("email", {
              required: "I need an email address to reply to.",
              pattern: {
                // Basic shape check — catches typos without rejecting valid addresses.
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "That doesn't look like a valid email address.",
              },
            })}
            className={fieldClass}
          />
          {errors.email && (
            <span id="contact-email-error" role="alert" className={errorClass}>
              {errors.email.message}
            </span>
          )}
        </motion.div>

        <motion.div variants={item}>
          <label
            htmlFor="contact-message"
            className="mb-1.5 block text-xs font-medium text-foreground/80"
          >
            Message
          </label>
          <textarea
            id="contact-message"
            rows={6}
            placeholder="The role or project, the stack, and the timeline you're working to."
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
            {...register("message", {
              required: "Please include a short message.",
              minLength: {
                value: 30,
                message: "A little more detail would help — 30 characters minimum.",
              },
              maxLength: {
                value: 1000,
                message: "Please keep it under 1000 characters.",
              },
            })}
            className={`${fieldClass} resize-y`}
          />
          {errors.message && (
            <span id="contact-message-error" role="alert" className={errorClass}>
              {errors.message.message}
            </span>
          )}
        </motion.div>

        <motion.button
          variants={item}
          type="submit"
          disabled={isSending}
          className="btn-primary mt-1 w-full disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSending ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              <Send className="h-4 w-4" aria-hidden="true" />
              Send message
            </>
          )}
        </motion.button>
      </motion.form>
    </>
  );
}
