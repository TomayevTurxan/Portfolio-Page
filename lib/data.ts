import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import wineWebSitePhoto from "../img/Wine Web Site.jpeg";
import CarProject from "../img/Car Project.jpeg";
import XO from "../img/X O game.jpeg";
import AdminPanel from "../img/Admin Panel.jpeg";
import TobBike from "../img/Top Bike.jpeg";
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
    title: "RG Academy-Front End Mentor",
    location: "Azerbaijan,Baku",
    description:
      "After I finished the front end programming course of the RG Academy, where I first studied, I mentored there for 3 months.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
] as const;

export const projectsData = [
  {
    title: "Wine Site",
    description:
      "I worked as a full-stack developer on this  project.Also There are many features such as Login and register with confirmation,Responsive design and	Admin panel.",
    tags: [
      "React",
      "Javascript",
      "Sass",
      "Ant design",
      "MUI",
      "Node Js",
      "MongoDB",
      "Express",
      "Mongoose",
      "Context API",
    ],
    imageUrl: wineWebSitePhoto,
    link: "https://wine-site-one.vercel.app/",
  },
  {
    title: "Car Site",
    description:
      "In this project, the data from the api is filtered and written, which features and brands of machines are available.",
    tags: ["Next Js", "TypeScript", "Tailwindw"],
    imageUrl: CarProject,
    link: "https://car-project-ybmq.vercel.app/",
  },
  {
    title: "X-O game",
    description: "In this project,I just use Html,Css and Javascript.",
    tags: ["Html", "Css", "Javascript"],
    imageUrl: XO,
    link: "https://x-o-game-one.vercel.app/",
  },
  {
    title: "Admin Panel",
    description:
      "In this project, everything in the left menu does not work, all the forms are registered and prepared, but the api is not connected.",
    tags: ["Html", "Scss", "React", "Antd design"],
    imageUrl: AdminPanel,
    link: "https://admin-panel-sigma-gray.vercel.app/",
  },
  {
    title: "Tob Bike Web Site",
    description:
      "In this project,  it is related to the sale of bicycles. Here you can rate the products by commenting on them.",
    tags: [
      "Javascript",
      "React",
      "Redux",
      "Context Api",
      "Redux",
      "Mongoose",
      "Node Js",
      "Express Js",
    ],
    imageUrl: TobBike,
    link: "https://topbike.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "REST API",
  "Redux",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Git Hub",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Ant design",
  "MUI",
] as const;
