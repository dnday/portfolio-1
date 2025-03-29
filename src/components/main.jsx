import Nav from "./nav"
import Hero from "./hero"
import Skill from "./skill"
import Project from "./project"
import Footer from "./footer"

const main = () => {
  return (
    <div className="bg-indigo-700">
        <Nav />
        <Hero />
        <Skill />
        <Project />
        <Footer />
    </div>
  )
}

export default main