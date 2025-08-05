import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { cocktailLists, mockTailLists } from '../constants'
import DrinkList from './drinkList'

const Cocktails = () => {
  useGSAP(()=>{
    const parallaxTimeline = gsap.timeline({
      scrollTrigger:{
        trigger:"#cocktails",
        start:"top 30%",
        end:"bottom 80%",
        scrub:true,
        markers:true
      }
    })

    parallaxTimeline
    .from("#c-left-leaf",{x:-100,y:100})
    .from("#c-right-leaf",{x:100,y:100})
  })
  
  return (
    <section id='cocktails' className='noisy'>
      <img src="/images/cocktail-left-leaf.png" alt="cocktail left leaf" id="c-left-leaf" />
      <img src="/images/cocktail-right-leaf.png" alt="cocktail right leaf" id="c-right-leaf" />

      <div className='list'>
        <DrinkList data={cocktailLists} title="Most popular cocktails:" className='md:me-28' container="popular"/>
        <DrinkList data={mockTailLists} title="Most loved mocktails:" className='me-28' container='loved'/>
      </div>
    </section>
  )
}

export default Cocktails