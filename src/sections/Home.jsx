import { arrow } from "../assets/icons"
import { headphone1 } from "../assets/images"
import Button from "../components/Button"
import HeadphoneCard from "../components/HeadphoneCard"
import { headphones, statistics } from "../constants"

import { useState } from "react"

const Home = () => {
  
  const [headphoneImg, setHeadphoneImg] = useState(headphone1);

  return (
    <section id='home' className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 max-sm:pt-12 ">
        <p className="text-xl font-forum text-tan pt-8">Empower your ears with great audio</p>
        <h1 className="mt-10 font-poppins text-8xl max-sm:text-[45px] max-sm:leading-[1.5] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">Introducing</span>
          <br/>
          <span className="text-brown inline-block mt-3">SonicWave</span>
        </h1>
        <p className="font-poppins text-slate-gray text-lg leading-8 mt-5 mb-14 sm:max-w-sm">
          Introducing our latest headphones: premium sound, comfort, and style all in one. 
          Experience unparalleled audio whether gaming, listening to music, or making calls.
        </p>
        <Button
          label="Shop now"
          iconUrl={arrow}
        />
        
        <div className="flex justify-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-[35px]/[50px] font-poppins font-bold">{stat.value}</p>
              <p className="font-forum leading-7 text-slate-gray">{stat.label}</p>
            </div> 
          ))}
        </div>
      </div>

      <div className="flex-1 flex relative justify-center items-center xl:min-h-screen max-xl:py-40 bg-home-bg bg-cover bg-center"> 
        <img
          src={headphoneImg}
          alt="Headphone Collection"
          width={610}
          height={500}
          className="object-contain relative z-10" 
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {headphones.map((item) => (
            <div key={item.name}>
              <HeadphoneCard
                imgURL={item}
                changeHeadphoneImage = {(headphone) => setHeadphoneImg(headphone)}
                headphoneImg = {headphoneImg}
              />
            </div>
          ))}
        </div>
      </div>
            
    </section>
  )
}

export default Home