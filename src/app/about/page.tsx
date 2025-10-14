"use client"
import AboutMeDetailComponent from "@/components/Banner/AboutMeDetail"; 
import { motion } from "framer-motion";
import { Code2, Cloud, Database, Rocket, Mail } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-300">
      <section className="pt-24 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto px-6"
        >
          <h1 className="text-5xl font-extrabold text-white mb-4">
            Lincon Pietrochinski Fernandes
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            Desenvolvedor <span className="text-teal-400">Full Stack</span> apaixonado por criar soluções robustas e bem arquitetadas.
          </p>

          <motion.img
            src="/Profile.png"
            alt="Foto de Lincon Pietrochinski Fernandes"
            className="w-32 h-32 mx-auto rounded-full border-4 border-teal-500 shadow-lg object-cover mb-6"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>
      </section>

      <section className="pb-24">
        <AboutMeDetailComponent />
      </section>

      <section className="pb-24 bg-gray-900 border-t border-gray-800">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-10">
            Principais Competências
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-gray-800 shadow-lg"
            >
              <Code2 className="w-10 h-10 mx-auto mb-4 text-teal-400" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Backend & Arquitetura
              </h3>
              <p className="text-gray-400">
                C#, ASP.NET Core, Clean Architecture, CQRS, testes automatizados, APIs REST.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-gray-800 shadow-lg"
            >
              <Database className="w-10 h-10 mx-auto mb-4 text-teal-400" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Banco de Dados
              </h3>
              <p className="text-gray-400">
                SQL Server, PostgreSQL, EF Core, otimização de queries e modelagem de dados.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-gray-800 shadow-lg"
            >
              <Cloud className="w-10 h-10 mx-auto mb-4 text-teal-400" />
              <h3 className="text-xl font-semibold text-white mb-2">
                DevOps & Cloud
              </h3>
              <p className="text-gray-400">
                Docker, CI/CD, AWS, Azure, deploy automatizado e pipelines de integração.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 text-center bg-gray-950">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-2xl mx-auto px-6"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Vamos construir algo incrível juntos?
          </h2>
          <p className="text-gray-400 mb-8">
            Estou aberto a oportunidades como desenvolvedor backend ou full-stack — remoto ou presencial.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-teal-500 text-gray-900 font-semibold py-3 px-8 rounded-lg hover:bg-teal-400 transition-colors shadow-xl"
          >
            <Mail size={20} />
            Entre em contato
          </Link>
        </motion.div>
      </section>
    </div>
  );
}