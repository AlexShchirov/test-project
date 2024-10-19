import React from "react";

export enum HEADING_TYPE {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
}

interface HeadingProps {
  type: HEADING_TYPE;
  children: React.ReactNode;
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({ type, children, className }) => {
  const Tag = type;
  return <Tag className={className}>{children}</Tag>;
};
