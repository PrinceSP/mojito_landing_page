import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { cocktailLists, mockTailLists } from '../constants'

const Cocktails = () => {
  useGSAP(()=>{
    const parallaxTimeline = gsap.timeline({
      scrollTrigger:{
        trigger:"#cocktails",
        start:"top 30%",
        end:"bottom 80%",
        scrub:true
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
        <div className='popular'>
          <h2>Most popular cocktails:</h2>
          <ul>
            {cocktailLists.map(({ country, name, detail, price }) =>
              <li key={country}>
                <div className='md:me-28'>
                  <h3>{name}</h3>
                  <p>{country} | {detail}</p>
                </div>
                <span>- {price}</span>
              </li>
            )}
          </ul>
        </div>
        
        <div className='loved'>
          <h2>Most loved mocktails:</h2>
          <ul>
            {mockTailLists.map(({ country, name, detail, price }) =>
              <li key={country}>
                <div className='me-28'>
                  <h3>{name}</h3>
                  <p>{country} | {detail}</p>
                </div>
                <span>- {price}</span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Cocktails