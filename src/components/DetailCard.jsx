

const DetailCard = ({title, text}) => {
  return (
    <div>
        <ul className="list-disc ">  
            <li className="mb-5 leading-8">
                <span className="font-bold text-[20px]/[10px]">
                    {title}: 
                </span>
                <span className="leading-4 text-[18px] font-poppins text-slate-gray"> {text}</span>
                <br/>
            </li>
        </ul> 
    </div>
  )
}

export default DetailCard