import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { openingHours, socials } from '../constants'
import { SplitText } from 'gsap/all'

const Contact = () => {
  useGSAP(() => {
    const splitTitle = SplitText.create("#contact h2", { type: "words" })
    const splitLine= SplitText.create("#contact h3, #contact p", { type: "lines" })
    gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center"
      }
    })
    .from(splitTitle.words, {y: 150,opacity: 0,duration: 0.5,ease: "power1.in",stagger: 0.04})
    .from(splitLine.lines, {y: 100,opacity: 0,stagger: 0.04})
    .to("#f-right-leaf",{y:-50,duration: 0.8,ease:"power1.inOut"})
    .to("#f-left-leaf", { y: 50,duration: 0.8,ease:"power1.inOut"})
  }, [])
  return (
    <footer id='contact'>
      <img src="/images/footer-right-leaf.png" alt="leaf-right" id='f-right-leaf' />
      <img src="/images/footer-left-leaf.png" alt="leaf-right" id='f-left-leaf' />

      <div className="content">
        <h2>Where to Find Us</h2>

        <div>
          <h3>Visit Our Bar</h3>
          <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>(555) 987-6543</p>
          <p>hello@jsmcocktail.com</p>
        </div>

        <div>
          <h3>Open every day</h3>
          {openingHours.map(opening =>
            <p key={opening.time}>{opening.day} : {opening.time}</p>
          )}
        </div>

        <div>
          <h3>Socials</h3>
          <div className='flex-center gap-5'>
            {socials.map(social =>
              <a key={social.name} href={social.url} target='_blank' rel='noopener noreferrer' aria-label={social.name}>
                <img src={social.icon} alt={social.name} />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Contact