
import { productDetails} from "../assets/images"
import DetailCard from "../components/DetailCard"
import { detail } from "../constants"

const ProductDetails = () => {
  return (

    <section id='product-detail' className="flex justify-between items-center max-lg:flex-col gap-20 w-full max-containter">

      <div className="flex flex-1  flex-col py-3 px-3">
      
        <h2 className="font-forum text-4xl capitialize max-sm:text-[45px] max-sm:leading-[1.5] font-bold lg:max-w-lg mb-5 ">
            <span className='text-brown'>Product </span>
            Details
        </h2>
        {detail.map((detail) => (
            <DetailCard key={detail.text}
            {...detail}
            />
        ))}
   
      </div>
      
      <div className="flex-1 flex justify-center items-center">
        <img
          src={productDetails}
          alt="product details"
          width={580}
          height={600}
          className="object-contain rounded-2xl"
        />
      </div>

    </section>

  )
}

export default ProductDetails