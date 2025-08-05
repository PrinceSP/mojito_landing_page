import { ScrollTrigger,SplitText } from 'gsap/all'
import gsap from 'gsap'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Cocktails from './components/cocktails'

gsap.registerPlugin(ScrollTrigger,SplitText)

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Cocktails/>
    </main>
  )
}

export default App