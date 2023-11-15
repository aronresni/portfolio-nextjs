"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Sobre");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Sobre mi</SectionHeading>
      <p className="mb-3">
        Despues de graduarme en {" "}
        <span className="font-medium">Henry como desarrollador Full-Stack</span>,Decidi comenzar a trabajar como desarrollador freelancer en donde aprendi y pude tomar trabajos para ganar experiencia.{" "}
        <span className="italic">Mi parte favorita de programar</span> es la resolucion de problemas.
        <span className="font-medium">
         Mi stack principal es React, Next.js, Node.js, and PostgreeSQL. {" "}
        </span>
      Estoy constantemente aprendiendo nuevos lenguahes. Actualmente estoy buscando{" "}
        <span className="font-medium">un posicion full-time</span> como desarrollador Trainee/Junior!
      </p>
    </motion.section>
  );
}
