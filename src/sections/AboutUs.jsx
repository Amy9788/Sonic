import { arrow } from "../assets/icons"
import { wearHeadphone } from "../assets/images"
import Button from "../components/Button"



const AboutUs = () => {
  return (
    <section id='about-us' className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-containter">
      <div className="flex flex-1 flex-col">
      
        <h2 className="font-forum text-4xl capitialize max-sm:text-[45px] max-sm:leading-[1.5] font-bold lg:max-w-lg">
          Redefining 
          <span className="text-brown"> Excellent </span>
          in Audio
          
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Wireless connectivity gives you the freedom to move without constraints, while the long-lasting battery 
          ensures uninterrupted enjoyment for hours on end. And with intuitive controls at your fingertips, 
          managing your music has never been easier.
        </p>

        <p className="mt-6 lg:max-w-lg info-text">Quality is our promise</p>

        <p className="mt-11">
          <Button label="View Details" iconUrl={arrow}/>
        </p>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={wearHeadphone}
          alt="wear headphone"
          width={570}
          height={522}
          className="object-contain rounded-2xl"
        />
      </div>
    </section>
  )
}

export default AboutUs