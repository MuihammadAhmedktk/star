import React,{useState} from 'react'
import './Fearure_card_re.css'
import { featurecard } from '../../../Api/Data';

const textSlice = (text, maxLength) => {
  if (text.length <= maxLength) return { truncated: text, fullText: text };

  const truncated = text.slice(0, maxLength) + '...';
  return { truncated, fullText: text };
};

const FeatureCardRe = () => {
const [expandedCard, setExpandedCard] =useState({});
const[visableCount,setVisableCount] = useState(8);
const showMore = ()=>{
    setVisableCount(prevCount=> prevCount + 4)
}
const removeMore =()=>{
    setVisableCount(8)
}
const toggleExpand =(id)=>{
    setExpandedCard(prevState =>({
            ...prevState,
            [id]:!prevState[id],
    }));
};

  return (
    <div>
           <div className='morenews'>
    {
        featurecard.slice(0,visableCount).map((item,index)=>
        {
            const { truncated, fullText } =textSlice (item.text, 20);
            const isExpanded = expandedCard[item.id];
            return(
                <div className="news_card" key={index}>
                <div className="news_card_img">
                    <img src={item.Img} alt="" />
                </div>
                <div className="news_card_text">
                <p>
              {isExpanded ? fullText : truncated}
              <p
                style={{ color: '#fff', cursor: 'pointer', fontSize:'1rem', textDecoration:'underline'}}
                onClick={() => toggleExpand(item.id)}
              >
               {isExpanded ? ' Read Less' : 'Read More'}
              </p>
            </p>
                    <p>{item.date}</p>
                </div>
            </div>
            )})}  
   </div>
   <div className='btn-adjust'>
   {visableCount < featurecard.length ?((
    <button onClick={showMore}>ShowMore</button>
   )):(<button onClick={removeMore}>RemoveMore</button>)}
   </div>
    </div>
  )
}

export default FeatureCardRe
