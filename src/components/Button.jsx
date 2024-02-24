



const Button = ({label, iconUrl}) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 
                    py-4 border font-poppins text-lg bg-coral-red
                    text-white rounded-full">
        {label}
        <img
            src={iconUrl}
            alt="arrow icon"
            className="ml-2 rounded-full w-5 h-5 bg-white"
        />
    </button>
  )
}

export default Button