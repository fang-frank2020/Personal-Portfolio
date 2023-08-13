import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Experience from './Experience'

export default function Home() {
  return (
    <div className="main">
      <Navbar />
      <Hero />
      <About />
      <Experience />
    </div>
  )
}
