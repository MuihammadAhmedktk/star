import React,{useState} from 'react'
import './Fearure_card_re.css'

const FeatureCardRe = ({CardDetail}) => {
const[visableCount,setVisableCount] = useState(8);
const showMore = ()=>{
    setVisableCount(prevCount=> prevCount + 4)
}
const removeMore =()=>{
    setVisableCount(8)
}
  return (
    <div>
     <div className='morenews'>
    {
        CardDetail.slice(0,visableCount).map((item,index)=>
        {
         
            return(
                <div className="news_card" key={index}>
                <div className="news_card_img">
                    <img src={item.Img} alt="" />
                </div>
                <div className="news_card_text">
                <p>{item.text} </p>
                    <p>{item.date}</p>
                </div>
            </div>
            )})}  
   </div>
   <div className='btn-adjust'>
   {visableCount < CardDetail.length ?((
    <button onClick={showMore}>ShowMore</button>
   )):(<button onClick={removeMore}>ShowLess</button>)}
   </div>
    </div>
  )
}

export default FeatureCardRe
