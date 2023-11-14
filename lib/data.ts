import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import accesbank from "@/public/acces-bank.png";
import listopllevar from "@/public/pedido.png";
import canchasya from "@/public/canchaya.png"
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Sobre",
    hash: "#about",
  },
  {
    name: "Proyectos",
    hash: "#projects",
  },
  {
    name: "Habilidades",
    hash: "#skills",
  },
  {
    name: "Experiencia",
    hash: "#experience",
  },
  {
    name: "Contacto",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Carrera de Desarrollo Front-end React",
    location: "Argentina",
    description:
      "",
    icon: React.createElement(LuGraduationCap),
    date: "2022 Mayo - 2023 Enero",
  },
  {
    title: "Bootcamp Full-Stack Henry",
    location: "Argentina",
    description:"",
    icon: React.createElement(LuGraduationCap),
    date: "2022 Marzo - 2023 Noviembre",
  },
  {
    title: "Desarrollador Full-Stack No-Country",
    location: "Remoto, Argentina",
    description:
      "Contrato de practicas en No-Country donde soy desarrollador full-stack, trabajando con tecnologias como React en el front-end y Node.js en el back-end.",
    icon: React.createElement(FaReact),
    date: "2023 Mayo - 2023 Noviembre",
  },
] as const;

export const projectsData = [
  {
    title: "Access Bank",
    description:
      "AccessBank es un banco totalmente digital que ofrece servicios financieros e innovadores.",
    tags: ["React","Redux", "Express", "Sequelize", "PostgreSQL", "Tailwind"],
    imageUrl: accesbank,
    url:"https://github.com/No-Country/c12-41-m-react-agregarback",
  },
  {
    title: "Listo para llevar",
    description:
      "Listo para Llevar es una aplicación web destinada a conectar negocios con excedentes alimentarios.",
    tags: ["React", "Redux", "PHP", "Laravel", "Tailwind"],
    imageUrl: listopllevar,
    url:"https://github.com/No-Country/s10-10-m-php-react-amazon",
  },
  {
    title: "Canchas Ya",
    description:
      "Proyecto final de Henry, aplicación para crear, alquilar y reseñar canchas de diferentes deportes en distintas ciudades",
    tags: ["React", "Redux","Express", "SQL", "Tailwind", "Mercado Pago"],
    imageUrl: canchasya,
    url:"https://github.com/CanchaYAPF/CanchaYA",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Git",
  "Tailwind",
  "Boostrap",
  "Redux",
  "Express",
  "Sequelize",
  "PostgreSQL",
  "Figma",
  "Framer Motion",
] as const;
