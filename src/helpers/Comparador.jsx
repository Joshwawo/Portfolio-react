import React, { Children } from "react";

const Comparador = ({ children,i }) => {
//   console.log(i)
  return (
    <span 
      
      className={`inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ${
        children == "HTML"
          ? "bg-orange-100"
          : children == "CSS"
          ? "bg-blue-100"
          : children == "JAVASCRIPT"
          ? "bg-yellow-100 "
          : children == "REACT"
          ? " bg-teal-100"
          : children == "BOOSTRAP"
          ? "bg-violet-200"
          : children == "TAILWIND"
          ? "bg-emerald-100"
          : children == "JSONSERVER"
          ? " jsondata-bg"
          :""
      } `}
    >
      <span
        className={
          children == "HTML"
            ? "html"
            : children == "CSS"
            ? "css"
            : children == "JAVASCRIPT"
            ? "js"
            : children == "REACT"
            ? "react"
            : children == "BOOSTRAP"
            ? "bootstrap"
            : children == "TAILWIND"
            ? "tailwind"
            : children == "JSONSERVER"
            ? "jsondata"
            :''
        }
      >
        #{children}
      </span>
    </span>
  );
};

export default Comparador;

// import React from "react";

// const Alerta = ({children}) => {
//   return (
//     <div className="text-center my-4 bg-red-500 text-white font-bold p-3 uppercase">
//       {children}
//     </div>
//   );
// };

// export default Alerta;
