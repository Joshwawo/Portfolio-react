import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Comparador from "../helpers/Comparador";

const Testing = () => {
  const [projects, setprojects] = useState([]);

  const url = "http://localhost:3002/blog/posts";

  const fetchBlogs = async () => {
    const { data } = await axios.get(url);
    setprojects(data);
    // console.log(data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  //   console.log(projects)
  //   projects?.map((proyecto)=>{
  //     console.log(proyecto)
  //   })

  console.log(projects);

  return (
    <div>
      <p>Hola desde testing</p>

      {/* <div className="md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4  2xl:grid-cols-4   gap-5  mx-4">

       
        {projects.map((proyecto) => (
          <div
            key={proyecto._id}
            className="max-w-sm rounded overflow-hidden shadow-2xl mt-5"
          >
            <img className="w-full" src={proyecto.image.url} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{proyecto.title}</div>
              <p className="text-gray-700 text-base mb-2 ">{proyecto.descripcion}</p>
              <a className=" inline-grid" target="_blank" href={proyecto.image.url}>
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
            
          </div>
        ))}

   
      </div> */}

      {/* <div className="grid grid-cols-6 gap-4">
      {projects.map((p) => (
        <div key={p._id} className="bg-white flex flex-col max-w-sm mx-auto rounded-lg shadow-xl">
          <div>
            <img
              src={p.image.url}
              alt="Usuario"
              className="w-full object-cover"
            />
          </div>
          <div className="bg-gray-900 mx-4 rounded-lg flex items-center gap-2 -mt-8 z-10 shadow-xl py-2 px-6">
            <h3 className="text-white text-lg font-semibold">{p.title}</h3>
          </div>
          <div className="px-6 py-4 flex flex-col gap-2">
            <h1 className="text-xl font-semibold text-gray-800">
              Yared Jacquez Trillo
            </h1>
            <p className="text-gray-500">
             {p.descripcion}
            </p>
            <div className="flex items-center mt-4 text-gray-700">
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
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <h1 className="px-2 text-sm">JT - UI</h1>
            </div>
            <div className="flex items-center mt-4 text-gray-700">
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
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <h1 className="px-2 text-sm">Chihuahua, México</h1>
            </div>
            <div className="flex items-center mt-4 text-gray-700">
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>

              <h1 className="px-2 text-sm">frontend@jt-ui.com</h1>
            </div>
          </div>
        </div>
      ))}
      </div> */}

      {/* <div className="grid grid-cols-5">
      {projects.map((p) => (
        <section key={p._id} className="text-gray-600 body-font">
          <div className="container px-5 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 w-full ">
                <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                    src={p.image.url}
                    alt="blog"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      {p.title}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
                      {p.title}
                    </h1>
                    <p className="leading-relaxed mb-3">{p.descripcion}</p>
                    <div className="flex items-center flex-wrap ">
                      <button className="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
      </div> */}

      {/* <div className="grid grid-cols-4 ">
      {projects.map((p) => (
        <section key={p._id} className="w-full mx-auto  md:py-20 px-0 md:p-20 md:px-0 antialiased">
          <section className=" ">
            <article
              className="mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-150 transform duration-500 hover:-translate-y-2 cursor-pointer group"
              style={{
                backgroundImage: `url(${p.image.url})`,
              }}
            >
              <div className="bg-black bg-opacity-20 min-h-150 px-10 flex flex-wrap flex-col pt-96 hover:bg-opacity-75 transform duration-300">
                <h1 className="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                  {p.title}
                </h1>
                <div className="w-16 h-2 bg-yellow-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300"></div>
                <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                  {p.descripcion}
                </p>
              </div>
            </article>

          </section>
          <p className="text-sm leading-relaxed text-gray-400 mt-10 text-center">
            Images by:{" "}
            <a
              target="_blank"
              href="https://www.pexels.com/@joao-cabral-1723948"
            >
              João Cabral
            </a>
          </p>
        </section>
      ))}
      </div> */}

      <div className="md:grid md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  gap-5  mx-4">
        {projects.map((p) => (
          <div key={p._id} className="flex flex-wrap justify-center  ">
            <div className="max-w-md   rounded overflow-hidden shadow-lg my-2  ">
              <img
                // style={{backgroundColor: color}}
                loading="lazy"
                className="w-full bg-black/80"
                
                src={p.image.url}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <p className="font-bold uppercase">{p.title}</p>

                <Comparador>{p.tech}</Comparador>

                {/* <p className="text-grey-darker text-sm">
                    {p.descripcion}
                </p> */}
              </div>
              <div className="px-4 py-4">
                <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
                  <span className="font-bold">Price:</span> 
                  V-Bucks
                </span>
                <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
                  <span className="font-bold">Rarity:</span>{" "}
                  {/* <Comparador>{daily.items[0].rarity.displayValue}</Comparador> */}
                </span>
                <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">
                  <span className="font-bold">Giftable:</span>
                  {/* {daily.giftable ? "Yes" : "No"} */}
                </span>
                <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">
                  <span className="font-bold">Refundable:</span>
                  {/* {daily.refundable ? "Yes" : "No"} */}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testing;
