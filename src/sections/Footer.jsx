
import { copyright, footerLogo } from "../assets/icons"
import { footerLinks, socialMedia } from "../constants"


const Footer = () => {
  return (
    <footer className="max-container ">
      <div className="flex justify-between item-start gap-20 flex-wrap max-lg:flex-col" >
        <div>
          <a>
            <img
              src={footerLogo}
              width={150}
              height={46}
            />
          </a>
          <p className="mt-6 text-base leading-7 font-poppins text-white-400">
            Unlock exclusive promotions and elevate your audio experience with our premium 
            headphones! Visit us today to explore unbeatable offers and immerse yourself 
            in superior sound quality
          </p>
          <div className="flex items-center gap-5 mt-8 ">
            {socialMedia.map((icon) => (
          
              <div key={icon.src} className="flex justify-center items-center w-12 h-12 bg-gray-200 rounded-full"> 
                <img
                  src={icon.src}
                  alt={icon.alt}
                  width={24}
                  height={24}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {
            footerLinks.map((section) => (
              <div key={section}>
                <h4 className="text-white font-forum text-2xl leading-normal mb-6">{section.title}</h4>
                <ul>
                  {section.links.map((link) => (
                    <li className="mt-3 text-white-400 font-poppins text-base leading-normal hover:text-slate-gray cursor-pointer" key={link.name}>
                      <a>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          }
        </div> 
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyright}
            alt="copyright"
            width={20}
            height={20}
            className="rounded-full m-0"

          />
          <p>Copyright 2024. All rights reserved.</p>
        </div>

        <p className="font-montserrat cursor-pointer">
          Terms & Conditions
        </p>
            
      </div>

    </footer>
  )
}

export default Footer
