"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useTranslations } from "next-intl";

export default function AboutMeDetailComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations();
  return (
    <div className="max-w-4xl mx-auto text-gray-300 px-6 md:px-0">
      <h2 className="text-4xl font-bold text-white text-center mb-10">
        {t('About')} <span className="text-teal-400">Lincon Pietrochinski Fernandes</span>
      </h2>

      <div className="space-y-6 text-lg leading-relaxed text-justify">
        <p>
         {t('AboutFirstParagraph')}
        </p>

        <p>
          {t('AboutSecondParagraph')}
        </p>

        <p>
          {t('AboutThirdParagraph')}
        </p>

        <p>
          {t('AboutFourthParagraph')}
        </p>
      </div>

      <div className="text-center mt-12">
        <button
          onClick={() => setIsOpen(true)}
          className="inline-block bg-teal-500 text-gray-900 font-bold py-3 px-8 rounded-lg hover:bg-teal-400 transition-colors shadow-xl text-lg"
        >
          {t('SeeCv')}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full mx-4 relative"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              <X size={28} />
            </button>

            <div className="p-4 h-[80vh]">
              <iframe
                src="/curriculo-lincon.pdf"
                className="w-full h-full rounded-lg border border-gray-700"
              />
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}