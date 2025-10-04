"use client";
import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaFileAlt } from "react-icons/fa"; // Ícones para Links
import { FiMail, FiPhone } from "react-icons/fi"; // Ícones para Contato
import React from "react"; // Necessário se você usar 'useState' para o formulário

export default function ContactPage() {
  return (
    <section
      id="contact"
      className="bg-gray-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12 sm:mb-16">
          Vamos Construir Algo Juntos?
        </h2>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="lg:w-2/3 bg-gray-800 p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Envie-me uma mensagem
            </h3>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Seu Melhor E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="email@exemplo.com"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Ex: Proposta de Projeto Full-Stack"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                  placeholder="Descreva brevemente o projeto ou a oportunidade..."
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto bg-teal-500 text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-teal-400 transition-colors shadow-lg text-lg"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
          <div className="lg:w-1/3 space-y-10">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Informações
              </h3>
              <div className="space-y-4">
                <Link
                  href="mailto:lincon.dev@gmail.com"
                  className="flex items-center text-gray-300 hover:text-teal-400 transition-colors"
                >
                  <FiMail size={24} className="mr-3 text-teal-400" />
                  <span>lincon.dev@gmail.com</span>
                </Link>
                <Link
                  href="tel:+55 41 987291433"
                  className="flex items-center text-gray-300 hover:text-teal-400 transition-colors"
                >
                  <FiPhone size={24} className="mr-3 text-teal-400" />
                  <span>+55 (41) 98729-1433</span>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Mídias Profissionais
              </h3>
              <div className="flex space-x-6">
                <Link
                  href={
                    "https://www.linkedin.com/in/lincon-fernandes-bb497613b/"
                  }
                  target="_blank"
                  aria-label="LinkedIn Profile"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  <FaLinkedinIn size={32} />
                </Link>

                <Link
                  href={"https://github.com/lincon-fernandes-dev"}
                  target="_blank"
                  aria-label="GitHub Profile"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  <FaGithub size={32} />
                </Link>

                <Link
                  href={"/curriculo.pdf"}
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