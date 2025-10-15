"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaFileAlt } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState<null | string>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setFeedback(null);

    try {
      await emailjs.send(
        "service_umsrzyx",
        "template_4ol027s",
        {
          from_name: formData.name,
          from_email: formData.email,
          time: new Date(),
          subject: formData.subject,
          message: formData.message,
        },
        "9yo-tU8LmNwMvrxxT"
      ).then(
        (res) => {
          console.log(res)
        }
      );

      setFeedback("✅ Mensagem enviada com sucesso!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error(error);
      setFeedback("❌ Ocorreu um erro ao enviar. Tente novamente.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="bg-gray-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12 sm:mb-16">
          {t('ShallWe')}
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="lg:w-2/3 bg-gray-800 p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold text-white mb-6">
              {t('SendMessage')}
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  {t('FullName')}
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  {t('BestEmailAddress')}
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="email@exemplo.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                  {t('Subject')}
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Ex: Proposta de Projeto Full-Stack"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  {t('Message')}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                  placeholder="Descreva brevemente o projeto ou a oportunidade..."
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full sm:w-auto bg-teal-500 text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-teal-400 transition-colors shadow-lg text-lg disabled:opacity-70"
              >
                {isSending ? "Enviando..." : t('SendEmail')}
              </button>

              {feedback && (
                <p
                  className={`mt-4 font-medium ${
                    feedback.includes("✅") ? "text-teal-400" : "text-red-400"
                  }`}
                >
                  {feedback}
                </p>
              )}
            </form>
          </div>

          <div className="lg:w-1/3 space-y-10">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">{t('Information')}</h3>
              <div className="space-y-4">
                <Link
                  href="mailto:lincon.dev@gmail.com"
                  className="flex items-center text-gray-300 hover:text-teal-400 transition-colors"
                >
                  <FiMail size={24} className="mr-3 text-teal-400" />
                  <span>lincon.dev@gmail.com</span>
                </Link>

                <Link
                  href="https://wa.me/554196500130?text=Ol%C3%A1%20Lincon%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar!"
                  target="_blank"
                  className="flex items-center text-gray-300 hover:text-teal-400 transition-colors"
                >
                  <FiPhone size={24} className="mr-3 text-teal-400" />
                  <span>+55 41 9650-0130</span>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Mídias Profissionais</h3>
              <div className="flex space-x-6">
                <Link
                  href="https://www.linkedin.com/in/lincon-fernandes-bb497613b/"
                  target="_blank"
                  aria-label="LinkedIn Profile"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  <FaLinkedinIn size={32} />
                </Link>

                <Link
                  href="https://github.com/lincon-fernandes-dev"
                  target="_blank"
                  aria-label="GitHub Profile"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  <FaGithub size={32} />
                </Link>

                <Link
                  href="/curriculo-lincon.pdf"
                  target="_blank"
                  aria-label="Download CV"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  <FaFileAlt size={32} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}