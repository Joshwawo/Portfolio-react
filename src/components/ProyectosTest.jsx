import React from "react";

const Proyectos2 = () => {
  const projects = [
    {
      id: 1,
      nombre: "Tribute Page",
      tecnologias: ["HTML", "CSS"],
      descripcion: "Pagina, para ver la tienda de fornite, consumiendo la API",
      link: "https://codepen.io/Joshwawo/pen/NWXbbLw",
      img: "https://cdn.discordapp.com/attachments/775393794186412073/999460919459467365/tributo.png",
    },
    {
      id: 2,
      nombre: "JavaScript Documentation",
      tecnologias: ["HTML", "CSS"],
      descripcion:
        "Practica hecha con  HTML Y CSS  consiste en hacer una documentacion de JavaScript. ",

      link: "https://codepen.io/Joshwawo/pen/LYexBvb",
      img: "https://cdn.discordapp.com/attachments/775393794186412073/999460869626925137/jsdocumentacion.png?width=832&height=468",
    },
    {
      id: 3,
      nombre: "Survey Form",
      tecnologias: ["HTML", "CSS"],
      descripcion:
        "Practica hecha con  HTML Y CSS  consiste en hacer una documentacion de JavaScript. ",

      link: "https://codepen.io/Joshwawo/pen/LYexBvb",
      img: "https://cdn.discordapp.com/attachments/775393794186412073/999460919140692018/survey.png?width=832&height=468",
    },
    {
      id: 4,
      nombre: "Ethereum Card",
      tecnologias: ["HTML", "CSS"],
      descripcion:
        "Practica hecha con Css consiste en hacer una replica de una carta de Ethereum  ",

      link: "https://codepen.io/Joshwawo/pen/LYexBvb",
      img: "https://cdn.discordapp.com/attachments/775393794186412073/999460843378970685/card_eth.png?width=832&height=468",
    },
    {
      id: 5,
      nombre: "Crypto Conversor",
      tecnologias: ["HTML", "CSS", "JAVASCRIPT"],
      descripcion:
        "Conversor de criptomonedas, consumiendo una API de criptomonedas ",
      link: "https://codepen.io/Joshwawo/pen/LYexBvb",
      img: "https://cdn.discordapp.com/attachments/775393794186412073/999460842615615588/criptoconversor_.png?width=832&height=468",
    },
    {
      id: 6,
      nombre: "Coffee Blog",
      tecnologias: ["HTML", "CSS"],
      descripcion: "Un blog de café con todo lo que quieras saber de café  ",

      link: "https://codepen.io/Joshwawo/pen/LYexBvb",
      img: "https://cdn.discordapp.com/attachments/775393794186412073/999460843047616563/blog_cafe.png?width=832&height=468",
    },
    {
      id: 7,
      nombre: "Pokedex",
      tecnologias: ["HTML", "CSS", "JAVASCRIPT"],
      descripcion: "Pokedex consumiendo la API de PokeApi",
      link: "https://codepen.io/Joshwawo/pen/LYexBvb",
      img: "https://cdn.discordapp.com/attachments/775393794186412073/999460868754522152/pokedex.png?width=832&height=468",
    },
    {
      id: 8,
      nombre: "Memorama",
      tecnologias: ["HTML", "CSS", "JAVASCRIPT"],
      descripcion: "Memorama es un juego con 30 segundos para ganar",
      link: "https://codepen.io/Joshwawo/pen/LYexBvb",
      img: "https://cdn.discordapp.com/attachments/775393794186412073/999460868351856640/memorama_.png?width=832&height=468",
    },
    {
      id: 9,
      nombre: "Rick And Morty APP",
      tecnologias: ["REACT", "BOOSTRAP"],
      descripcion:
        "Pagina, para ver los personas de Rick And Morty consumiendo la API, con paginacion",
      link: "https://codepen.io/Joshwawo/pen/LYexBvb",
      img: "https://cdn.discordapp.com/attachments/775393794186412073/999460918796750918/rickandmorty.png?width=832&height=468",
    },
    {
      id: 10,
      nombre: "Fornite Tracker App",
      tecnologias: ["REACT", "TAILWIND"],
      descripcion: "Pagina, para ver la tienda de fornite, consumiendo la API",
      link: "https://codepen.io/Joshwawo/pen/LYexBvb",
      img: "https://cdn.discordapp.com/attachments/775393794186412073/999460869220085770/fornite.png?width=832&height=468",
    },
    {
        id: 11,
        nombre: "CRM App",
        tecnologias: ["REACT", "TAILWIND"],
        descripcion: "Pagina, para ver la tienda de fornite, consumiendo la API",
        link: "https://codepen.io/Joshwawo/pen/LYexBvb",
        img: "https://cdn.discordapp.com/attachments/775393794186412073/999460869220085770/fornite.png?width=832&height=468",
      },
  ];
  console.log(projects);

  return (
    <div className=" h-screen container mx-auto ">
      <p className="text-center bg-yellow-400 font-semibold py-1">
        Trabajo en proceso
      </p>
      <p className="text-center font-bold text-2xl pb-10">
        Estos son unos de mis proyectos
      </p>

      <div className="md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4  2xl:grid-cols-4   gap-5  mx-4">
        {projects.map(({ nombre, id, descripcion, link, img, tecnologias }) => (
          <div key={id} className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={img} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{nombre}</div>
              <p className="text-gray-700 text-base mb-2 ">{descripcion}</p>
              <a className=" inline-grid" href={link}>
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
                return (
                  <span
                    key={i}
                    className={`inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ${
                      tec == "HTML"
                        ? "bg-orange-100"
                        : tec == "CSS"
                        ? "bg-blue-100"
                        : tec == "JAVASCRIPT"
                        ? "bg-yellow-100 "
                        : tec == "REACT"
                        ? " bg-teal-100"
                        : tec == "BOOSTRAP"
                        ? "bg-violet-200"
                        : tec == "TAILWIND"
                        ? "bg-emerald-100"
                        : ""
                    } `}
                  >
                    <span
                      className={
                        tec == "HTML"
                          ? "html"
                          : tec == "CSS"
                          ? "css"
                          : tec == "JAVASCRIPT"
                          ? "js"
                          : tec == "REACT"
                          ? "react"
                          : tec == "BOOSTRAP"
                          ? "bootstrap"
                          : tec == "TAILWIND"
                          ? "tailwind"
                          : "a"
                      }
                    >
                      #{tec}
                    </span>
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// {
//     id: 1,
//     nombre: "Tribute Page",
//     tecnologias: ["HTML", "CSS"],
//     descripcion: "Pagina, para ver la tienda de fornite, consumiendo la API",
//     link: "https://codepen.io/Joshwawo/pen/NWXbbLw",
//     img: "https://cdn.discordapp.com/attachments/775393794186412073/989723496919732296/unknown.png",
//   },

export default Proyectos2;
