"use client";

import React, { useState } from "react";
import Image from "next/image";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

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
    <div id="contact" className="w-full max-w-5xl mx-auto px-4 py-12 md:py-16">
      <h2 className="text-3xl md:text-4xl font-light text-white text-center mb-10">
        Contact
      </h2>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
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

        {status === "success" && (
          <p className="text-green-400 text-center">
            Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-400 text-center">
            Failed to send message. Try again.
          </p>
        )}
      </form>
    </div>
  );
};

export default Contact;
