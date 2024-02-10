import React from "react";

interface SectionHeadingProps {
  title: string;
}

export default function SectionHeading({ title }: SectionHeadingProps) {
  return <h2 className="text-3xl font-medium capitalize mb-8">{title}</h2>;
}
