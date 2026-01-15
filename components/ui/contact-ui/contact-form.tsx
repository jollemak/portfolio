import React from 'react'
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });
    const [status, setStatus] = useState<
      "idle" | "loading" | "success" | "error"
      >("idle");
  
  useEffect(() => {
    if (status === "success") {
      toast.success("Message sent successfully!");
    } else if (status === "error") {
      toast.error("Failed to send message. Please try again.");
    }
  }, [status]);

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setStatus("loading");

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setStatus("success");
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setStatus("idle"), 2000);
        } else {
          setStatus("error");
          setTimeout(() => setStatus("idle"), 2000);
        }
      } catch (error) {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 2000);
      }
    };
    return (
      <form onSubmit={handleSubmit} className="space-y-6">
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          toastOptions={{
            // Default options
            duration: 4000,
            style: {
              background: "gray-800", // gray-800
              color: "#fff",
            },
            // Success toast style
            success: {
              duration: 3000,
              style: {
                background: "#272727ff", // green-600
              },
            },
            // Error toast style
            error: {
              duration: 4000,
              style: {
                background: "#272727ff", // red-600
              },
            },
          }}
        />
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-gray-800 text-white rounded border border-gray-700 focus:border-orange-500 focus:outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-gray-800 text-white rounded border border-gray-700 focus:border-orange-500 focus:outline-none"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 bg-gray-800 text-white rounded border border-gray-700 focus:border-orange-500 focus:outline-none resize-none"
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full px-6 py-3 bg-orange-500 text-neutral-200 font-medium rounded hover:bg-orange-700 disabled:opacity-50"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
      </form>
    );
}

export default ContactForm