import { arrow } from "../assets/icons"
import { specialOffer } from "../assets/images"
import Button from "../components/Button"


const SpecialOffer = () => {
  return (
    <section className="flex justify-center items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img 
          src={specialOffer} 
          alt="special-offer" 
          width={773} 
          height={400}
          className="object-contain w-full rounded-xl"
        />
      </div>

        <div className="flex flex-1 flex-col">
          
          <h2 className="font-forum text-4xl capitialize max-sm:text-[45px] max-sm:leading-[1.5] font-bold lg:max-w-lg">
     
            <span className="text-brown">Special </span>
            Offer
            
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">
            Introducing our limited-time special offer on headphones: 
            experience premium sound at an unbeatable price. Elevate your 
            listening experience with our top-of-the-line headphones, 
            featuring cutting-edge technology, superior comfort, and 
            immersive sound quality. 
            Don't miss out on this exclusive opportunity to enjoy music like never before.
          </p>

          <p className="mt-11">
            <Button label="View Details" iconUrl={arrow}/>
          </p>
      </div>
    </section>
  )
}

export default SpecialOffer