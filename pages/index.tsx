import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Nav";
import type { Project } from "../components/ProjectCard";
import ProjectCard from "../components/ProjectCard";
import ContactForm from "../components/ContactForm";
import SkillsIconLink from "../components/SkillsIconLink";
import TopSvg from "../components/svgs/layered-waves-haikei.svg";
import Brushstroke from "../components/svgs/brushstroke_small.svg";
import BotSvg from "../components/svgs/layered-waves-haikei-bottom4.svg";
import { FaChevronDown, FaJava, FaCss3Alt, FaHtml5, FaJsSquare, FaPhp, FaGit } from "react-icons/fa/";
import { FiChevronsUp } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5/";
import { DiScrum } from "react-icons/di/";
import {
  SiTypescript,
  SiMysql,
  SiCplusplus,
  SiApachegroovy,
  SiAngular,
  SiNextdotjs,
  SiLaravel,
  SiGithub,
  SiGitlab,
  SiJirasoftware,
  SiTeamcity,
  SiPostman,
  SiSpring,
  SiSpringboot,
  SiIntellijidea,
  SiVisualstudiocode,
  SiDocker,
  SiLinux,
  SiTailwindcss,
  SiAdobephotoshop,
} from "react-icons/si/";
import { AiFillLinkedin, AiFillFacebook, AiOutlineGithub } from "react-icons/ai/";
import { Inter } from "@next/font/google";
import { InView } from "react-intersection-observer";
import React, { useState } from "react";

const inter = Inter({ subsets: ["latin"] });
const iconStyle = "w-5/5 h-2/5 text-white sm:text-9xl sm:h-2/4";
const available: boolean = false;

const portfolioProject: Project = {
  underConstruction: false,
  imageName: "portfolioSite",
  imageAlt: "Image of this website",
  header: "This portfolio site",
  repoName: "nextjs-portfolio-site",
  siteUrl: "https://www.colorfulcode.se",
  tools: ["NextJS", "React", "CSS", "TailwindCSS", "HTML", "Animate.css", "FormCarry"],
  text: "A responsive single page application to showcase my projects and promote my business. I wanted to learn some new frameworks with this project so I wrote this site using NextJS and Tailwind amongst other things.",
};

const wordSearchProject: Project = {
  underConstruction: true,
  imageName: "",
  imageAlt: "",
  header: "Word search game",
  repoName: "",
  siteUrl: "",
  tools: ["Java", "Spring Boot", "JavaScript", "CSS"],
  text: "",
};

export default function Home() {
  const [homeInView, sethomeInView] = useState(false);
  return (
    <>
      <Head>
        <title>Colorful Code</title>
        <meta
          name="description"
          content="Home of IT consultant company Colorful Code. Get to know the person behind the company, previous projects and how to get in touch."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      </Head>

      <main className="relative snap-y snap-mandatory scroll-smooth h-screen w-full overflow-y-scroll">
        <Nav showHamburger={!homeInView} />
        <InView
          triggerOnce={false}
          threshold={0.01}
          initialInView={true}
          fallbackInView={true}
          onChange={(inView) => sethomeInView(!homeInView)}
        >
          {({ inView, ref, entry }) => (
            <section
              ref={ref}
              id="home"
              className="snap-start bg-lavaOrange w-full h-full flex flex-col gap-4 justify-center overflow-hidden p-4 md:gap-6"
            >
              <h1 className="animate-fadeInDown animate-fast text-violet-500 uppercase font-extrabold text-center drop-shadow-lg text-5xl md:text-8xl lg:9xl ">
                Colorful Code
              </h1>
              <h2 className="animate-fadeIn animate-slow animate-delay-[600ms] text-zinc-800 lowercase font-light text-center text-sm sm:text-lg sm:font-normal">
                Bringing a human touch to technology
              </h2>
              <a
                className="animate-fadeInUpBig animate-duration-[2.1s] animate-delay-[600ms] self-center focus:ring-1 outline-none"
                href="#about"
              >
                <FaChevronDown className="fill-black hover:fill-red-500 active:fill-red-700 animate-shakeY animate-infinite animate-duration-[10s] self-center text-4xl landscape:md:text-4xl md:text-7xl lg:text-6xl" />
              </a>
            </section>
          )}
        </InView>

        <InView triggerOnce={true} threshold={0.01} initialInView={false} fallbackInView={true}>
          {({ inView, ref, entry }) => (
            <section
              id="about"
              ref={ref}
              className="snap-start bg-amber-400 w-full h-full flex flex-col overflow-y-auto p-8 scrollBarAbout"
            >
              <div className={`relative flex justify-center mb-4 ${inView ? "animate-slideInDown animate-fast" : ""}`}>
                <Brushstroke className="absolute w-1/2 h-1/2 top-1/2 fill-brightMustard" />
                <h1 className="text-shadow-sm relative uppercase text-white text-center font-semibold text-3xl mb-2 landscape:md:text-4xl md:text-7xl lg:text-9xl lg:mb-10 lg:text-shadow-lg">
                  About
                </h1>
              </div>
              <div className="flex flex-col align-middle justify-center lg:flex-row lg:gap-10">
                <Image
                  className={`transform -rotate-3 self-center shadow-2xl w-70 h-70 object-fill rounded-md ${
                    inView ? "animate-jackInTheBox animate-slow" : ""
                  }`}
                  src="/images/profile.jpg"
                  width="200"
                  height="0"
                  alt="Picture of Amir"
                />
                <div
                  className={`font-light text-black text-center text-base space-y-6 my-6 lg:max-w-xl md:my-12 ${
                    inView ? "animate-slideInUp animate-faster" : ""
                  }`}
                >
                  <p className="w-full">
                    I&apos;m the face behind Colorful Code, a 35 year old{" "}
                    <span className="relative inline-block before:absolute before:bg-[#ffd500] before:w-[102%] before:h-[90%] before:-z-10 before:rounded-[15%_27%_20%_31%] before:-left-1 before:top-1 before:-rotate-2 overflow-x-clip">
                      Software Engineer based in Sweden.
                    </span>{" "}
                    At heart I&apos;m a creative soul that is passionate about creating and problem solving. I also love
                    to learn new things in life, so I try to stay curious and keep an open mind.
                  </p>
                  <p>
                    My clients can always expect a{" "}
                    <span className="relative inline-block before:absolute before:bg-[#ffd500] before:w-full before:h-[90%] before:-z-10 before:rounded-[15%_30%_23%_28%] before:top-1 before:rotate-1 overflow-x-clip">
                      professional service with modern technological solutions.
                    </span>{" "}
                    I also aim to create a fun and engaging work environment and elevate my peers when possible. I am a
                    big believer in being{" "}
                    <span className="relative inline-block before:absolute before:bg-[#ffd500] before:w-full before:h-[90%] before:-z-10 before:rounded-[5%_25%_30%_50%] before:top-1 before:-left-0.5 before:-rotate-1 overflow-x-clip">
                      ambitious, genuine, reliable, responsible and a teamplayer.
                    </span>
                  </p>
                  <p>
                    Outside of work I write and produce music, spend time with friends and family, hike, garden,
                    exercise, travel, listen to podcasts etc. I wish there was more time in life because the list is
                    long and it keeps growing! :D
                  </p>
                </div>
              </div>
              <h2
                className={`text-center font-light text-xl text-md md:text-2xl md:font-light lg:text-4xl lg:mb-2 lg:font-light ${
                  inView ? "animate-zoomIn animate-faster" : ""
                }`}
              >
                Tools I use
              </h2>
              <div className="flex justify-center">
                <div
                  className={`flex flex-wrap max-w-3xl p-2 justify-center gap-0 md:gap-x-10 gap-y-4 ${
                    inView ? "animate-zoomIn animate-faster" : ""
                  }`}
                >
                  <SkillsIconLink url="https://www.java.com" icon={<FaJava className={iconStyle} />} />
                  <SkillsIconLink
                    url="https://www.w3.org/Style/CSS/Overview.en.html"
                    icon={<FaCss3Alt className={iconStyle} />}
                  />
                  <SkillsIconLink url="https://www.javascript.com" icon={<FaJsSquare className={iconStyle} />} />
                  <SkillsIconLink
                    url="https://html.spec.whatwg.org/multipage"
                    icon={<FaHtml5 className={iconStyle} />}
                  />
                  <SkillsIconLink url="https://www.typescriptlang.org" icon={<SiTypescript className={iconStyle} />} />
                  <SkillsIconLink url="https://www.php.net" icon={<FaPhp className={iconStyle} />} />
                  <SkillsIconLink url="https://www.mysql.com" icon={<SiMysql className={iconStyle} />} />
                  <SkillsIconLink url="https://isocpp.org" icon={<SiCplusplus className={iconStyle} />} />
                  <SkillsIconLink url="https://groovy-lang.org" icon={<SiApachegroovy className={iconStyle} />} />
                  <SkillsIconLink url="https://angular.io" icon={<SiAngular className={iconStyle} />} />
                  <SkillsIconLink url="https://nextjs.org" icon={<SiNextdotjs className={iconStyle} />} />
                  <SkillsIconLink url="https://laravel.com" icon={<SiLaravel className={iconStyle} />} />
                  <SkillsIconLink url="https://github.com" icon={<SiGithub className={iconStyle} />} />
                  <SkillsIconLink url="https://git-scm.com" icon={<FaGit className={iconStyle} />} />
                  <SkillsIconLink url="https://about.gitlab.com" icon={<SiGitlab className={iconStyle} />} />
                  <SkillsIconLink
                    url="https://www.atlassian.com/software/jira"
                    icon={<SiJirasoftware className={iconStyle} />}
                  />
                  <SkillsIconLink
                    url="https://www.jetbrains.com/teamcity"
                    icon={<SiTeamcity className={iconStyle} />}
                  />
                  <SkillsIconLink url="https://www.scrum.org" icon={<DiScrum className={iconStyle} />} />
                  <SkillsIconLink url="https://www.postman.com" icon={<SiPostman className={iconStyle} />} />
                  <SkillsIconLink url="https://spring.io" icon={<SiSpring className={iconStyle} />} />
                  <SkillsIconLink
                    url="https://spring.io/projects/spring-boot"
                    icon={<SiSpringboot className={iconStyle} />}
                  />
                  <SkillsIconLink
                    url="https://www.jetbrains.com/idea"
                    icon={<SiIntellijidea className={iconStyle} />}
                  />
                  <SkillsIconLink
                    url="https://code.visualstudio.com"
                    icon={<SiVisualstudiocode className={iconStyle} />}
                  />
                  <SkillsIconLink url="https://www.docker.com" icon={<SiDocker className={iconStyle} />} />
                  <SkillsIconLink url="https://www.linux.org" icon={<SiLinux className={iconStyle} />} />
                  <SkillsIconLink url="https://tailwindcss.com" icon={<SiTailwindcss className={iconStyle} />} />
                  <SkillsIconLink
                    url="https://www.adobe.com/products/photoshop.html"
                    icon={<SiAdobephotoshop className={iconStyle} />}
                  />
                </div>
              </div>
            </section>
          )}
        </InView>

        <InView triggerOnce={true} threshold={0.01} initialInView={false} fallbackInView={true}>
          {({ inView, ref, entry }) => (
            <section
              id="projects"
              ref={ref}
              className="snap-start bg-teal-500  w-full h-full flex flex-col overflow-y-auto p-8 scrollBarProjects"
            >
              <div
                className={`relative flex justify-center mb-4 ${
                  inView ? "animate-slideInLeft animate-faster sm:animate-slideInDown sm:animate-fast" : ""
                }`}
              >
                <Brushstroke className="absolute w-1/2 h-1/2 top-1/2 fill-green-300" />
                <h1 className="text-shadow-sm relative uppercase text-white text-center font-semibold text-3xl mb-2 landscape:md:text-4xl md:text-7xl lg:text-9xl lg:mb-10 lg:text-shadow-lg">
                  Projects
                </h1>
              </div>
              <p
                className={`text-xs font-thin self-center mb-4 md:text-base ${
                  inView ? "animate-slideInRight animate-faster sm:animate-slideInUp" : ""
                }`}
              >
                {" "}
                Most of my work are things I can not share here due to client confidentiality. However, I have more
                personal projects that will be added soon.
              </p>
              <div
                className={`flex flex-wrap gap-y-10 gap-x-20 justify-center overflow-y-auto scrollBarProjects ${
                  inView ? "animate-slideInLeft animate-faster sm:animate-slideInUp sm:animate-duration-500" : ""
                }`}
              >
                <ProjectCard {...portfolioProject} />
                <ProjectCard {...wordSearchProject} />
              </div>
            </section>
          )}
        </InView>

        <InView triggerOnce={true} threshold={0.01} initialInView={false} fallbackInView={true}>
          {({ inView, ref, entry }) => (
            <section
              id="contact"
              ref={ref}
              className="snap-start bg-indigo-500 w-full h-full flex flex-col align-middle overflow-y-auto p-8 scrollBarContact"
            >
              <div className={`relative flex justify-center mb-4 ${inView ? "animate-zoomIn animate-fast" : ""}`}>
                <Brushstroke className="absolute w-1/2 h-1/2 top-1/2 fill-red-400" />
                <h1 className="text-shadow-sm relative uppercase text-white text-center font-semibold text-3xl mb-2 landscape:md:text-4xl md:text-7xl lg:text-9xl lg:mb-10 lg:text-shadow-lg">
                  Contact
                </h1>
              </div>

              {/* Main container in this section */}
              <div
                className={`flex flex-wrap self-center space-y-4 w-full shadow-2xl rounded-lg border border-slate-600 sm:w-fit p-2 ${
                  inView ? "animate-slideInUp animate-faster" : ""
                }`}
              >
                <div
                  className={`flex w-full justify-center mt-4 ${inView ? "animate-flipInX animate-delay-[400ms]" : ""}`}
                >
                  <h2
                    className={`text-center text-xs font-bold shadow-lg border rounded-lg border-black bg-gradient-to-r from-lime-200 to-emerald-200 p-2 ${
                      available ? "" : "hidden"
                    }`}
                  >
                    Currently available for new contracts.
                  </h2>
                  <h2
                    className={`text-center text-xs font-bold shadow-lg border rounded-lg border-black bg-gradient-to-r from-rose-300 to-[#ff6969] p-2 ${
                      available ? "hidden" : ""
                    }`}
                  >
                    Currently not available.
                    <br />
                    Current contract ends 2024-02-01.
                  </h2>
                </div>
                {/* Container for contact form and address/icons */}
                <div className="flex flex-wrap w-full justify-center p-2">
                  <div className="flex items-center max-w-xl lg:w-full">
                    <ContactForm bgColor="indigo-500" sendBtnBorderColor="indigo-600 " sendBtnBg="indigo-200" />
                  </div>
                  <div className="flex grow flex-col h-auto self-center mt-8 space-y-10">
                    <div className="flex items-center justify-center">
                      <IoLocationOutline className="text-lg text-black mr-4 md:text-xl" />
                      <div className="max-w-fit font-light text-black tracking-wide md:text-xl">
                        <div>Colorful Code</div>
                        <div>Gullbergsgatan 6</div>
                        <div>58246 Linköping</div>
                        <div>Sweden</div>
                      </div>
                    </div>
                    <div className="flex justify-center space-x-8 md:space-x-12">
                      <a
                        href="https://www.linkedin.com/in/colorfulcode/"
                        target="_blank"
                        rel="noreferrer"
                        className="flex justify-center align-middle shadow-md bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 ring-offset-indigo-600"
                      >
                        <AiFillLinkedin className="text-4xl fill-red-300" />
                      </a>
                      <a
                        href="https://www.facebook.com/ColorfulCodeAB"
                        target="_blank"
                        rel="noreferrer"
                        className="flex justify-center align-middle shadow-md bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 ring-offset-indigo-600"
                      >
                        <AiFillFacebook className="text-4xl fill-amber-400" />
                      </a>
                      <a
                        href="https://github.com/colorful-code"
                        target="_blank"
                        rel="noreferrer"
                        className="flex justify-center align-middle shadow-md bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 ring-offset-indigo-600"
                      >
                        <AiOutlineGithub className="text-4xl fill-teal-400" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full mt-10 mb-6 flex justify-center">
                <a
                  href="#home"
                  className="shadow-md border border-indigo-600 bg-indigo-200 max-w-fit flex justify-center align-middle rounded-full px-2 py-3 animate-twBounce animate-infinite focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 ring-offset-indigo-600"
                >
                  <FiChevronsUp className="mb-1 text-xl text-gray-700" />
                </a>
              </div>
            </section>
          )}
        </InView>
      </main>
    </>
  );
}
