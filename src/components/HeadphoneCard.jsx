

const HeadphoneCard = ({imgURL, changeHeadphoneImage, headphoneImg}) => {
   const handleClick = () => {
    if(headphoneImg !== imgURL.headphone){
        changeHeadphoneImage(imgURL.headphone);
    }
   }
    return (
    <div className={` border-2 rounded-xl
        ${headphoneImg === imgURL.headphone
            ? 'border-tan'
            : 'border-transparent'
        } cursor-pointer max-sm:flex-1
    `}  onClick={handleClick}>
        <div className="flex justify-center items-center bg-headphone-collection-bg bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
            <img
                src={imgURL.headphone}
                alt="Headphone Collection"
                width={127}
                height={103}
                className="object-contain"
            />
        </div>
    </div>
  )
}

export default HeadphoneCard