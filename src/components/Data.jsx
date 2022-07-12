import React from "react";

const Data = () => {
  const Datas = [
    {
      id: 1,
      nombre: "Trubute Page",
      tecnologia: "HTML Y CSS",
      descripcion: 'Pagina TWributo al Dr. Norman Boring, hecha con HTML Y CSS',
      link: 'https://codepen.io/Joshwawo/pen/NWXbbLw',
      img: 'https://i.ibb.co/rfg8M2Z/Captura-de-pantalla-2022-03-24-212232.png'
    },
    {
      id: 2,
      nombre: "JavaScript Documentation",
      tecnologia: "HTML Y CSS",
      descripcion: 'Practica hecha con  HTML Y CSS  consiste en hacer una documentacion de JavaScript. ',
      link: 'https://codepen.io/Joshwawo/pen/LYexBvb',
      img:'https://i.ibb.co/1J2GjHQ/Js-Documentation.png'
    },
    {
        id: 3,
        nombre: "Survey Form",
        tecnologia: "HTML Y CSS",
        descripcion: 'Practica hecha con HTML Y CSS  consiste en un formulario  para una encuesta',
        link: 'https://cdn.discordapp.com/attachments/775393794186412073/989723496919732296/unknown.png',
        img:'https://cdn.discordapp.com/attachments/775393794186412073/989723496919732296/unknown.png'
      },
      {
        id: 4,
        nombre: "Ethereum Card",
        tecnologia: "HTML CSS",
        descripcion: 'Practica hecha con Css consiste en hacer una replica de una carta de Ethereum  ',
        link: 'https://cdn.discordapp.com/attachments/775393794186412073/989723496919732296/unknown.png',
        img:'https://cdn.discordapp.com/attachments/775393794186412073/989723496919732296/unknown.png'
      },
      {
        id: 5,
        nombre: "Crypto Conversor",
        tecnologia: "HTML CSS JAVASCRIPT",
        descripcion: 'Conversor de criptomonedas, consumiendo una API de criptomonedas ',
        link: 'https://cdn.discordapp.com/attachments/775393794186412073/989723496919732296/unknown.png',
        img:'https://cdn.discordapp.com/attachments/775393794186412073/989723496919732296/unknown.png'
      },
      {
        id: 6,
        nombre: "Coffee Blog",
        tecnologia: "HTML CSS",
        descripcion: 'Blog de curso de cafe,  ',
        link: 'https://cdn.discordapp.com/attachments/775393794186412073/989723496919732296/unknown.png',
        img:'https://cdn.discordapp.com/attachments/775393794186412073/989723496919732296/unknown.png'
      },
      {
        id: 7,
        nombre: "Pokedex",
        tecnologia: "HTML CSS JAVASCRIPT",
        descripcion: 'Pokedex consumiendo la API de PokeApi',
        link: 'https://cdn.discordapp.com/attachments/775393794186412073/989723496919732296/unknown.png',
        img:'https://cdn.discordapp.com/attachments/775393794186412073/989723496919732296/unknown.png'
      },
      {
        id: 8,
        nombre: "Memorama",
        tecnologia: "HTML CSS JAVASCRIPT",
        descripcion: 'Memorama es un juego con 30 segundos para ganar',
        link: 'https://cdn.discordapp.com/attachments/775393794186412073/989723496919732296/unknown.png',
        img:'https://cdn.discordapp.com/attachments/775393794186412073/989723496919732296/unknown.png'
      },
      {
        id: 9,
        nombre: "Rick And Morty APP",
        tecnologia: "REACT BOOSTRAP",
        descripcion: 'Pagina, para ver los personas de Rick And Morty consumiendo la API, con paginacion',
        link: 'https://cdn.discordapp.com/attachments/775393794186412073/989723496919732296/unknown.png',
        img:'https://cdn.discordapp.com/attachments/775393794186412073/989723496919732296/unknown.png'
      },
      {
        id: 9,
        nombre: "Fornite Tracker App",
        tecnologia: "REACT TAILWINDCSS",
        descripcion: 'Pagina, para ver la tienda de fornite, consumiendo la API',
        link: 'https://cdn.discordapp.com/attachments/775393794186412073/989723496919732296/unknown.png',
        img:'https://cdn.discordapp.com/attachments/775393794186412073/989723496919732296/unknown.png'
      },
];


  return (
  
     <div className=" h-screen container mx-auto ">
      <p className="text-center bg-yellow-200 font-semibold py-1">Trabajo en proceso</p>
         <p className="text-center font-bold text-2xl pb-10">Estos son unos de mis proyectos</p>
           <div className="sm:grid sm:grid-cols-2 sm:gap-4 md:grid-cols-4 md:gap-4">
           {Datas.map((data, index) => (
              
               
               <div className="s" key={index}>
               <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                 <a href="#">
                   <img
                     className="rounded-t-lg"
                     src={data.img}
                     alt=""
                   />
                 </a>
                 <div className="p-5">
                   <a href="#">
                     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {data.nombre}
                     </h5>
                   </a>
                   <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {
                     data.tecnologia
                    }
                   </p>
                   <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {
                     data.descripcion
                    }
                   </p>
                   <a
                     href={data.link}
                     className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                   >
                     Ir a demo
                     <svg
                       className="ml-2 -mr-1 w-4 h-4"
                       fill="currentColor"
                       viewBox="0 0 20 20"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                       <path
                         fillRule="evenodd"
                         d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                         clipRule="evenodd"
                       ></path>
                     </svg>
                   </a>
                 </div>
               </div>
             </div>
           ))}
         </div>
     </div>
   
  );
};

export default Data;
