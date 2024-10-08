"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function About() {
	const { ref } = useSectionInView({ threshold: 0.75, sectionName: "About" });

	return (
		<motion.section
			ref={ref}
			className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				delay: 0.175,
			}}
			id="about"
		>
			<SectionHeading title="About me" />
			<p className="mb-3">
				{" "}
				I am a graduate with a B.Tech degree in{" "}
				<span className="font-medium">Computer Science and Engineering</span>, I
				want to pursue my passion for programming. I am looking for
				opportunities in the field of{" "}
				<span className="font-medium">Software Engineering</span>.{" "}
				<span className="italic">My favorite part of programming</span> is the
				problem-solving aspect. I <span className="underline">love</span> the
				feeling of finally figuring out a solution to a problem. My core stack
				is{" "}
				<span className="font-medium">
					React, Next.js, Node.js, and MongoDB
				</span>
				. I am also familiar with Python(Django) and Java(Spring). I am always
				looking to learn new technologies. I am currently looking for a{" "}
				<span className="font-medium">full-time position</span> as a software
				developer / software engineer / backend developer / front end developer.
			</p>
			<p>
				<span className="italic">When I am not coding</span>, I enjoy playing
				video games, watching movies, and playing chess. I also enjoy{" "}
				<span className="font-medium">learning new things</span>. I am currently
				learning about <span className="font-medium">AWS and Devops</span>{" "}
				tools.
			</p>
		</motion.section>
	);
}
