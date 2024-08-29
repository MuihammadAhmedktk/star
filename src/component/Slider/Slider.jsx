import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "./Silder.css";
import { Sliderdata } from '../../Api/Data';
import SlidersBtn from './SlidersBtn';

const Sliders = () => {
    useEffect(() => {
        const setEqualHeight = () => {
            const cards = document.querySelectorAll('.slide');
            let maxHeight = 0;

            cards.forEach(card => {
                card.style.height = 'auto'; // Reset height to auto
                const height = card.offsetHeight;
                if (height > maxHeight) {
                    maxHeight = height;
                }
            });

            cards.forEach(card => {
                card.style.height = `${maxHeight}px`;
            });
        };

        setEqualHeight();
        window.addEventListener('resize', setEqualHeight);

        return () => {
            window.removeEventListener('resize', setEqualHeight);
        };
    }, []);

    return (
        <div className='slide_all tablet-view' id='slide_all'>
            <Swiper spaceBetween={30}
            slidesPerView={1}
            className='swiper-all-slide'
            >
                {Sliderdata.map((project, index) => {
                    return (
                        <SwiperSlide key={index} className={`slide ${!project.logo ? 'no-logo' : ''} ${index === 0 ? 'first-slide' : ''}`} id='slide'>
                            <div className='slide_img'>
                                <img src={project.img} alt='Social_card img' className={`desktop-img ${index === 0 ? 'first-slide-img' : ''}`} />
                                {index === 0 && <img src={project.mobileImg} alt='Mobile img' className='mobile-img' />}
                            </div>
                            <div className='overlay'>
                                {project.logo && (<div className='logo-image'><img src={project.logo} alt="logo_image" width={450} height={200} /></div>)}
                                <div className='para_mobile'>
                                    <p className='image_text'>{project.text}</p>
                                    <p className='image_para'>{project.para}</p>
                                </div>
                                <div className='slide-button'>
                                    <button className='btn-bg-color'>{project.ButtonText}</button>
                                    {(index === 0 || index === Sliderdata.length - 1) && <button className='btn-bg-black-color'>{project.ButtonTextOther}</button>}
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
                <SlidersBtn className="slide-btn"/>
            </Swiper>
        </div>
    );
};

export default Sliders;


 //     <div key={index} className={`slide ${!project.logo ? 'no-logo' : ''} ${index === 0 ? 'first-slide' : ''}`} id='slide'>
                    //     <div className='slide_img'>
                    //         <img src={project.img} alt='Social_card img' className={`desktop-img ${index === 0 ? 'first-slide-img' : ''}`} />
                    //         {index === 0 && <img src={project.mobileImg} alt='Mobile img' className='mobile-img' />}
                    //     </div>
                    //     <div className='overlay'>
                    //         {project.logo && (<div className='logo-image'><img src={project.logo} alt="logo_image" width={450} height={200} /></div>)}
                    //         <div className='para_mobile'>
                    //         <p className='image_text'>{project.text}</p>
                    //         <p className='image_para'>{project.para}</p>
                    //         </div>
                           
                    //         <div className='slide-button'>
                    //             <button className='btn-bg-color'>{project.ButtonText}</button>
                    //             {(index === 0 || index === Sliderdata.length - 1) && <button className='btn-bg-black-color'>{project.ButtonTextOther}</button>}
                    //         </div>
                    //     </div>
                    // </div>

        //               <Slider {...settings}>
        //     {Sliderdata.map(({ id, img, logo, text, para, ButtonText, ButtonTextOther, mobileImg }, index) => (
        //         <div key={id} className={`slide ${!logo ? 'no-logo' : ''} ${index === 0 ? 'first-slide' : ''}`} id='slide'>
        //             <div className='slide_img'>
        //                 <img src={img} alt='Social_card img' className={`desktop-img ${index === 0 ? 'first-slide-img' : ''}`} />
        //                 {index === 0 && <img src={mobileImg} alt='Mobile img' className='mobile-img' />}
        //             </div>
        //             <div className='overlay'>
        //                 {logo && (<div className='logo-image'><img src={logo} alt="logo_image" width={450} height={200} /></div>)}
        //                 <div className='para_mobile'>
        //                 <p className='image_text'>{text}</p>
        //                 <p className='image_para'>{para}</p>
        //                 </div>
                       
        //                 <div className='slide-button'>
        //                     <button className='btn-bg-color'>{ButtonText}</button>
        //                     {(index === 0 || index === Sliderdata.length - 1) && <button className='btn-bg-black-color'>{ButtonTextOther}</button>}
        //                 </div>
        //             </div>
        //         </div>
        //     ))}
        // </Slider> 
   // const settings = {
    //     dots: false,
    //     arrows: true,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: false,
    //     autoplaySpeed: 2000,
    //     cssEase: "linear",
    //     pauseOnHover: true,
    //     pauseOnFocus: true,
    //     nextArrow: <SampleNextArrow />,
    //     prevArrow: <SamplePrevArrow />,
    //     responsive: [
    //         {
    //             breakpoint: 10000,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 infinite: true,
    //             },
    //         },
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 dots: true,
    //                 arrows: false,
    //             },
    //         },
    //         {
    //             breakpoint: 640,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 dots: true,
    //                 arrows: false,
    //             },
    //         },
    //     ],
    // };

    // function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={`${className} custom-arrow next-arrow`}
//             style={{ ...style }}
//             onClick={onClick}
//         />
//     );
// }

// function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={`${className} custom-arrow prev-arrow`}
//             style={{ ...style }}
//             onClick={onClick}
//         />
//     );
// }