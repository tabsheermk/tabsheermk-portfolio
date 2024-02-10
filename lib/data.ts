import sageImg from "@/public/corpcomment.png";
import jotionImg from "@/public/rmtdev.png";
import React from "react";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduating",
    location: "MNRCET, Sangareddy, Telangana",
    description:
      "I will be graduating with a bachelor's degree in Computer Science and Engineering from Jawaharlal Nehru Technological University.",
    icon: React.createElement(LuGraduationCap),
    date: "June 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Sage",
    description:
      "I built a Full-stack application using OpenAI API for Text, Code, Audio, Video Generation.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "shadcn-ui", "Prisma"],
    imageUrl: sageImg,
  },
  {
    title: "Jotion",
    description:
      "A personal note taking app built with Next.js, Tailwind and React. It is a clone of the popular Notion app.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Convex"],
    imageUrl: jotionImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "J2EE",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "REST",
  "GraphQL",
  "Express",
  "Django",
  "Spring",
  "MySQL",
  "Framer Motion",
] as const;
