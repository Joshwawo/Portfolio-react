import React from "react";

const ComparadorBg = () => {
  return (
    <div>
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
      ></span>

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
            : "a"
        }
      >
        #{children}
      </span>
    </div>
  );
};

export default ComparadorBg;
