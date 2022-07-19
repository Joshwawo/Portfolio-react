import React from 'react'

const SkillsBK = () => {
  return (
    <div className="md:w-1/2  md:py-32 m-2 bg-yellow-300">
        <h2 className="text-center py-2 font-bold  justify-center items-center text-xl uppercase">
          Estas son algunas de mis skills
        </h2>

        <div className="flex w-full justify-center items-center ">
          <h3 className=" text-2xl py-5  px-1 md:px-7">FrontEnd</h3>
          {allSkills.frontend.map(({ ico, id, skill }) => {
            return (
              <img key={id} src={ico} alt={skill} className="w-auto h-[2rem]" />
            );
          })}
        </div>
        <div className="backend">
          <div className="flex justify-center items-center">
            <h3 className=" text-2xl py-5    ">BackEnd</h3>
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
          <div className="frameworks flex justify-center items-center">
            <h3 className="  text-2xl  ">Frameworks</h3>
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
          <div className="frameworks flex justify-center items-center">
            <h3 className="  text-2xl  ">Bases de datos</h3>
            <img
              src={allSkills.basesDeDatos[0].ico}
              className="w-auto h-[3rem] px-2"
              alt=""
            />
          </div>
        </div>
        <div className="">
          <div className="frameworks flex justify-center items-center">
            <h3 className="  text-2xl  ">Bases de datos</h3>
            <img
              src={allSkills.otros[0].ico}
              className="w-auto h-[3rem] px-2"
              alt=""
            />
          </div>
        </div>
      </div>
  )
}

export default SkillsBK