import { useState, useRef } from "react"
import { allCocktails } from "../constants"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Menu = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const recipeRef = useRef()

  useGSAP(() => {
    gsap.fromTo("#title", { opacity: 0 }, { opacity: 1, duration: 1 })

    gsap.fromTo(".details", { y: 100 }, { y: 0, duration: 0.5, ease: "power1.inOut" })

    gsap.fromTo(".cocktail", { x: -300, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: "power1.inOut" })
  }, [currentIndex])

  const totalCocktails = allCocktails.length

  const goToSlide = (index) => {
    const newIndex = (index + totalCocktails) % totalCocktails
    setCurrentIndex(newIndex)
  }

  const goToCocktail = (index) => {
    return allCocktails[(currentIndex + index + totalCocktails) % totalCocktails]
  }

  const currentCocktail = goToCocktail(0)
  const prev = goToCocktail(-1)
  const next = goToCocktail(1)

  console.log(currentCocktail)

  return (
    <section id="menu" aria-labelledby="menu-heading">
      <img src="/images/slider-left-leaf.png" alt="left-leaf" id='m-left-leaf' />
      <img src="/images/slider-right-leaf.png" alt="right-leaf" id='m-right-leaf' />

      <h2 id="menu-heading" className='sr-only'>Cocktail Menu</h2>

      <nav className="cocktail-tabs" aria-labelledby="Cocktail Navigation">
        {
          allCocktails.map(({ id, name }, index) => {
            const isActive = index === currentIndex
            return (
              <button key={id} onClick={() => goToSlide(index)} className={isActive ? "text-white border-white" : "text-white/50 border-white/50"}>{name}</button>
            )
          })
        }
      </nav>

      <div className="content">
        <div className="arrows">
          <button className="text-left cursor-pointer" onClick={() => goToSlide(currentIndex - 1)}>
            <span>{prev.name}</span>
            <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true" />
          </button>
          <button className="text-left cursor-pointer" onClick={() => goToSlide(currentIndex + 1)}>
            <span>{next.name}</span>
            <img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true" />
          </button>
        </div>

        <div className="cocktail">
          <img src={currentCocktail.image} alt={currentCocktail.name} className="object-contain" />
        </div>

        <div className="recipe">
          <div ref={recipeRef} className="info">
            <p>Recipe for:</p>
            <p id="title">{currentCocktail.name}</p>
          </div>

          <div className="details">
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu