import About from "./sections.jsx/About"
import NavBar from "./layouts/NavBar"
import DrawerWrap from "./layouts/DrawerWrap"
import Section from "./layouts/Section"
import Hero from "./sections.jsx/Hero"
import Footer from "./layouts/Footer"
import Projects from "./sections.jsx/Projects"
import Contacts from "./sections.jsx/Contacts"
import TechStacks from "./components/TechStacks"

function App() {

  return (
    <>
      <DrawerWrap>
        <NavBar />

        <>
          <Hero />

          <Section id={1} content={<About />} />
          <TechStacks />
          <Section id={2} content={<Projects />} />
          <Section id={3} content={<Contacts />} />
        </>

        <Footer />
      </DrawerWrap>
    </>
  )
}

export default App
