
import { check } from "../assets/icons"
import Button from "../components/Button"


const Subscribe = () => {
    return (
        <section className="max-container flex justify-between items-center max-lg:flex-col gap-10" id="contact-us">
          <h3 className="text-4xl leading-[68px] font font-forum font-bold">
            <span className="text-brown">Subscribe </span>
            to our Newsletter
          </h3>
          <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
            <input type="text" placeholder="subscrible@sonic.com" className="input"/>
            <div className="flex max-sm:justify-end items-end max-sm:w-full">
              <Button label="Sign Me Up" iconUrl={check}/>
            </div>
          </div>
        </section>
      )
}

export default Subscribe