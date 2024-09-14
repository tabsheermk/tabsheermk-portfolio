import sageImg from "@/public/sageImg.png";
import jotionImg from "@/public/jotionImg.png";
import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { FaCalculator } from "react-icons/fa";

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
		title: "Graduation",
		location: "MNRCET, Sangareddy, Telangana",
		description:
			"I graduated with a bachelor's degree in Computer Science and Engineering with a First Class with Distinction grade from Jawaharlal Nehru Technological University.",
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
	"Golang",
	"Python",
	"Java",
	"React",
	"Next.js",
	"Node.js",
	"Git",
	"Tailwind",
	"Prisma",
	"MongoDB",
	"REST",
	"Express",
	"Django",
	"Spring",
	"MySQL",
	"PostgreSQL",
	"Docker",
	"K8s",
] as const;
