import React,{useState,useEffect} from 'react'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import Skill from './Components/Skill/Skill'
import Project from './Components/Project/Project'
import Contact from './Components/Contact/Contact'

const App = () => {

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )
  useEffect(() => {
    window
    .matchMedia("(min-width: 768px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);

  return (

    <>
      <Header/>
      <About/>
      <Experience/>
      <Skill/>
      <Project/>
      <Contact/>
    </>
  
  )
}

export default App