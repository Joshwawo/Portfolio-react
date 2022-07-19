import React from 'react'
import Card from '../components/Card'
import Data from '../components/Data'
import Skills from '../components/Skills'
import Top from '../components/Top'

const HomePage = () => {
  return (
    <div className=''>
      <Top/>
      <Skills/>
      <Data/>
      {/* <Card/> */}

    </div>
  )
}

export default HomePage