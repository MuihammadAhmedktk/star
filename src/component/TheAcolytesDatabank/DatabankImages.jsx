import React,{useState} from 'react'
import './Databank.css'

function DatabankImages({Images}) {
  const [showData, setShowData] = useState(12)
 
  const showMore = ()=>{
    setShowData(pervcount=>pervcount+20)
  }
  const showLess = ()=>{
    setShowData(10);
  }
  
  return (

    <div className='dataAcolytes-container' >
      <div className='dataAcolytes-all'>
      {Images.slice(0,showData).map((item,index)=>(
        <div key={index} className='dataAcolytes'>
        <div className='dataAcolytes-img'>
        <img src={item.img} alt="" />
      </div>
      <div className='dataAcolytes-text'>
        <div className='text_line'><hr /></div>
        <p className='color-white'>{item.name}</p>
      </div>
        </div>
    ))}
      </div>
   
   <div className='button-container'>
        {Images && Images.length > 0 ? (
          showData < Images.length ? (
            <button onClick={showMore}>Show More</button>
          ) : (
            <button onClick={showLess}>Show Less</button>
          )
        ) : (
          <p className='color-white'>No videos available</p>
        )}
      </div>
</div>
  )
}

export default DatabankImages
