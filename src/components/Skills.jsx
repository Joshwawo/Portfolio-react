import { useState } from "react";
import Typewriter from "typewriter-effect";
import css from "../img/css-3.webp";
import html from "../img/html-5.webp";
import js from "../img/js.webp";
import react from "../img/react.webp";
import node from "../img/nodejs.webp";
import php from "../img/php.webp";
import taiwindcss from "../img/tailwindcss.webp";
import express from "../img/express.webp";
import git from "../img/git.webp";
import mysql from "../img/mysql.webp";

const Skills = () => {
  const [hola, setHola] = useState("");

  setTimeout(() => {
    setHola(
      "Actualmente soy estudiante universitario, mis pasatiempos favoritos son escuchar musica, ver videos de misterios, y Programar. Mi lenguaje favorito de programacion es Javascript❤️"
    );
  }, 0);

  const allSkills = {
    frontend: [
      {
        skill: "Html",
        ico: html,
        id: 1,
      },
      {
        skill: "Css",
        ico: css,
        id: 2,
      },
      {
        skill: "JavaScript",
        ico: js,
        id: 3,
      },
      {
        skill: "React",
        ico: react,
        id: 4,
      },
    ],
    backend: [
      {
        skill: "Node",
        ico: node,
        id: 1,
      },
      {
        skill: "php",
        ico: php,
        id: 2,
      },
    ],
    frameworks: [
      {
        skill: "Tailwindcss",
        ico: taiwindcss,
        id: 2,
      },
      {
        skill: "ExpressJs",
        ico: express,
        id: 3,
      },
    ],
    basesDeDatos: [
      {
        skill: "MySQL",
        ico: mysql,
        id: 1,
      },
    ],
    otros: [
      {
        skill: "GIT",
        ico: git,
        id: 1,
      },
    ],
  };

  return (
    <div className=" md:flex justify-center items-center ">
      <div className="md:w-1/2 bg-green-200 py-32 ">
        <h2 className="text-center py-2 font-bold  justify-center items-center text-2xl md:text-4xl ">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Hola, Soy Jorge  Morales ")
                .callFunction(() => {})
                .pauseFor(1000)
                .typeString("Web Development 😀")
                .callFunction(() => {})
                .start();
            }}
          />
        </h2>

        <p className=" text-center font-semibold">{hola}</p>
      </div>

      <div className="md:w-1/2  md:py-32 m-2 ">
        <h2 className="text-center py-2 font-bold  justify-center items-center text-xl uppercase">
          Estas son algunas de mis skills
        </h2>
        <div className="container-50 ">
          <div className=" flexo  mx-auto  ">
            <h2 className=" ">FrontEnd</h2>

            <div className=" flex ">
              {allSkills.frontend.map(({ ico, id, skill }) => {
                return (
                  
                    <div key={id}>
                      <img
                        key={id}
                        src={ico}
                        alt={skill}
                        className=" w-[30px] pl-2 mx-auto"
                      />
                      <p className=" text-sm pl-5">{skill}</p>
                    </div>
                  
                );
              })}
            </div>
          </div>
          <div className=" flexo  mx-auto  pt-5">
            <h2 className=" ">BackEnd</h2>

            <div className=" flex">
              {allSkills.backend.map(({ ico, id, skill }) => {
                return (
                  
                   <div key={id}>
                     <img
                       key={id}
                       src={ico}
                       alt={skill}
                       className=" w-[40px] pl-2 mx-auto"
                     />
                     <p className="text-sm pl-5">{skill}</p>
                   </div>
                  
                );
              })}
            </div>
          </div>
          <div className=" flexo  mx-auto pt-5">
            <h2 className=" ">Frameworks</h2>

            <div className=" flex">
              {allSkills.frameworks.map(({ ico, id, skill }) => {
                return (
                  
                   <div key={id}>
                     <img
                       key={id}
                       src={ico}
                       alt={skill}
                       className=" w-[35px] pl-2 mx-auto"
                     />
                     <p className="text-sm pl-5">{skill}</p>
                   </div>
                  
                );
              })}
            </div>
          </div>
          <div className=" flexo  mx-auto pt-5">
            <h2 className=" ">Bases de datos</h2>

            <div className=" flex">
              {allSkills.basesDeDatos.map(({ ico, id, skill }) => {
                return (
                  
                   <div key={id}>
                     <img
                       key={id}
                       src={ico}
                       alt={skill}
                       className=" w-[40px] pl-2 mx-auto"
                     />
                     <p className="text-sm pl-5">{skill}</p>
                   </div>
                  
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
