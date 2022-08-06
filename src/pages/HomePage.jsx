import React from 'react'
// import Data from '../components/Data'
import Proyectos from '../components/ProyectosTest'
import Skills from '../components/Skills'
import Top from '../components/Top'
import Contacto from './Contacto'

const HomePage = () => {
  return (
    <div className=''>
      <Top/>
      <Skills/>
      {/* <Data/> */}
      <Proyectos/>
      {/* <Card/> */}
      <Contacto/>

    </div>
  )
}

export default HomePage