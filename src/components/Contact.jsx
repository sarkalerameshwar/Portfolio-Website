"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) errors.subject = "Subject is required";
    if (!formData.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:5000/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      alert("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      alert("Error sending message: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const shakeVariant = {
    error: { x: [-4, 4, -4, 4, 0], transition: { duration: 0.4 } },
    normal: { x: 0 },
  };

  return (
    <section id="contact" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's collaborate and create something amazing together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <motion.input
                  key={formErrors.name ? "name-error" : "name"}
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-800/50 border ${
                    formErrors.name ? "border-red-500" : "border-gray-700/50"
                  } rounded-lg focus:border-cyan-500 focus:outline-none transition-colors text-white placeholder-gray-400`}
                  variants={shakeVariant}
                  animate={formErrors.name ? "error" : "normal"}
                  whileFocus={{ scale: 1.02 }}
                />
                {formErrors.name && (
                  <motion.p
                    className="text-red-500 text-sm mt-1"
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {formErrors.name}
                  </motion.p>
                )}
              </div>

              <div>
                <motion.input
                  key={formErrors.email ? "email-error" : "email"}
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-800/50 border ${
                    formErrors.email ? "border-red-500" : "border-gray-700/50"
                  } rounded-lg focus:border-cyan-500 focus:outline-none transition-colors text-white placeholder-gray-400`}
                  variants={shakeVariant}
                  animate={formErrors.email ? "error" : "normal"}
                  whileFocus={{ scale: 1.02 }}
                />
                {formErrors.email && (
                  <motion.p
                    className="text-red-500 text-sm mt-1"
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {formErrors.email}
                  </motion.p>
                )}
              </div>
            </div>

            <div>
              <motion.input
                key={formErrors.subject ? "subject-error" : "subject"}
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-gray-800/50 border ${
                  formErrors.subject ? "border-red-500" : "border-gray-700/50"
                } rounded-lg focus:border-cyan-500 focus:outline-none transition-colors text-white placeholder-gray-400`}
                variants={shakeVariant}
                animate={formErrors.subject ? "error" : "normal"}
                whileFocus={{ scale: 1.02 }}
              />
              {formErrors.subject && (
                <motion.p
                  className="text-red-500 text-sm mt-1"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {formErrors.subject}
                </motion.p>
              )}
            </div>

            <div>
              <motion.textarea
                key={formErrors.message ? "message-error" : "message"}
                rows={6}
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-gray-800/50 border ${
                  formErrors.message ? "border-red-500" : "border-gray-700/50"
                } rounded-lg focus:border-cyan-500 focus:outline-none transition-colors resize-none text-white placeholder-gray-400`}
                variants={shakeVariant}
                animate={formErrors.message ? "error" : "normal"}
                whileFocus={{ scale: 1.02 }}
              />
              {formErrors.message && (
                <motion.p
                  className="text-red-500 text-sm mt-1"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {formErrors.message}
                </motion.p>
              )}
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
