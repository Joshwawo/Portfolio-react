import React from "react";
import Comparador from "../helpers/Comparador";
import { projects } from "../data/projects";

const Proyectos2 = () => {
  return (
    <div className=" container mx-auto ">
      {/* <p className="text-center bg-yellow-400 font-semibold py-1">
        Trabajo en proceso
      </p> */}
      <p className="text-center font-bold text-2xl pb-10">
        Estos son unos de mis proyectos
      </p>
      <div className="md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4  2xl:grid-cols-4   gap-5  mx-4 ">
        {projects.map(({ nombre, id, descripcion, link, img, tecnologias }) => (
          <div key={id} className="max-w-sm rounded overflow-hidden shadow-2xl mt-5">
            <img className="w-full" src={img} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{nombre}</div>
              <p className="text-gray-700 text-base mb-2 ">{descripcion}</p>
              <a className=" inline-grid" target='_blank' href={link}>
                <svg
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
            <div className=" mt-2 px-4 pb-2">
              {tecnologias.map((tec, i) => {
                return <Comparador key={i}>{tec}</Comparador>;
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proyectos2;