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
        featurecard.slice(0,visableCount).map(({id,Img,text,date})=>
        {
            const { truncated, fullText } =textSlice (text, 20);
            const isExpanded = expandedCard[id];
            return(
                <div className="news_card" key={id}>
                <div className="news_card_img">
                    <img src={Img} alt="" />
                </div>
                <div className="news_card_text">
                <p>
                 
              {isExpanded ? fullText : truncated}
              <p
                style={{ color: '#fff', cursor: 'pointer', fontSize:'1rem', textDecoration:'underline'}}
                onClick={() => toggleExpand(id)}
              >
               {isExpanded ? ' Read Less' : 'Read More'}
              </p>
            </p>
                    <p>{date}</p>
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
