"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import emailjs from "@emailjs/browser";

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formState.name,
          from_email: formState.email,
          message: formState.message,
          title: "Portfolio Contact",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setIsSubmitting(false);
          setIsSubmitted(true);
          setFormState({ name: "", email: "", message: "" });
        },
        (error) => {
          setIsSubmitting(false);
          console.error("EmailJS Error:", error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center px-6 md:px-24 py-20 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto w-full z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-blue-500 text-xs font-bold uppercase tracking-wider">Get In Touch</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Let's Build Something <span className="text-blue-500">Incredible</span> Together
          </h2>

          <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
            Whether you have an upcoming project, a challenging visual concept, or just want to chat about creative frontend code, feel free to drop me a line.
          </p>

          <div className="space-y-3 pt-4 text-zinc-400 text-sm">
            <p className="flex items-center space-x-3">
              <span className="text-blue-500 font-bold">📩 Email:</span>
              <a href="mailto:ibrahimxdev7@gmail.com" className="hover:text-blue-400 transition-colors">
                ibrahimxdev7@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Card container */}
          <div className="p-8 rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-md relative overflow-hidden">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12 space-y-4"
              >
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                <p className="text-zinc-400 text-sm max-w-xs leading-relaxed">
                  Thank you for reaching out. I have received your message and will get back to you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors uppercase tracking-widest"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-widest text-zinc-500 font-bold">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zinc-950/60 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-200"
                    placeholder="What's your good name?"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-zinc-500 font-bold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zinc-950/60 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-200"
                    placeholder="What's your web address?"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-widest text-zinc-500 font-bold">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zinc-950/60 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-200 resize-none"
                    placeholder="What you want to say?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-3 bg-blue-600 hover:bg-blue-500 text-white py-3.5 rounded-lg font-semibold shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all disabled:opacity-55"
                >
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  {!isSubmitting && <Send className="w-4 h-4" />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}