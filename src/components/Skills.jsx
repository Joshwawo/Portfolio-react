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
        skill: "HTML",
        ico: html,
        id: 1,
      },
      {
        skill: "CSS",
        ico: css,
        id: 2,
      },
      {
        skill: "JAVASCRIPT",
        ico: js,
        id: 3,
      },
      {
        skill: "REACT",
        ico: react,
        id: 4,
      },
    ],
    backend: [
      {
        skill: "NODE",
        ico: node,
        id: 1,
      },
      {
        skill: "PHP",
        ico: php,
        id: 2,
      },
    ],
    frameworks: [
      {
        skill: "TAILWINDCSS",
        ico: taiwindcss,
        id: 2,
      },
      {
        skill: "EXPRESSJS",
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

      <div className="md:w-1/2  md:py-32 m-2">
        <h2 className="text-center py-2 font-bold  justify-center items-center text-xl uppercase">
          Estas son algunas de mis skills
        </h2>

        <div className="flex w-full justify-around items-center ">
          <h3 className=" text-2xl py-5 w-1/2 px-1 md:px-7">FrontEnd</h3>
          {allSkills.frontend.map(({ ico, id, skill }) => {
            return (
              <img key={id} src={ico} alt={skill} className="w-auto h-[2rem]" />
            );
          })}
        </div>
        <div className="backend">
          <div className="flex justify-evenly items-center">
            <h3 className=" text-2xl py-5   w-1/2 ">BackEnd</h3>
            {allSkills.backend.map(({ ico, id, skill }) => {
              return (
                <img
                  src={ico}
                  key={id}
                  alt={skill}
                  className=" w-auto h-[3.1rem] px-3"
                />
              );
            })}
          </div>
        </div>
        <div className="">
          <div className="frameworks flex justify-evenly items-center">
            <h3 className="  text-2xl w-1/2 ">Frameworks</h3>
            <img
              src={allSkills.frameworks[0].ico}
              className="w-auto h-[4rem] px-2"
              alt=""
            />
            <img
              src={allSkills.frameworks[1].ico}
              className="w-auto h-[3rem] px-2"
              alt=""
            />
          </div>
        </div>
        <div className="">
          <div className="frameworks flex justify-evenly items-center">
            <h3 className="  text-2xl w-1/2 ">Bases de datos</h3>
            <img
              src={allSkills.basesDeDatos[0].ico}
              className="w-auto h-[3rem] px-2"
              alt=""
            />
          </div>
        </div>
        <div className="">
          <div className="frameworks flex justify-evenly items-center">
            <h3 className="  text-2xl w-1/2 ">Bases de datos</h3>
            <img
              src={allSkills.otros[0].ico}
              className="w-auto h-[3rem] px-2"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
