import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "./Silder.css";
import { Sliderdata } from '../../Api/Data';
import SlidersBtn from './SlidersBtn';

type SliderDataItem = {
    id: number;
    img: string;
    logo?: string;
    mobileImg?: string;
    text: string;
    para?: string;
    ButtonText: string;
    ButtonTextOther?: string;
};

const Sliders: React.FC = () => {
    useEffect(() => {
        const setEqualHeight = () => {
            const cards = document.querySelectorAll('.slide');
            let maxHeight = 0;

            cards.forEach((card) => {
                const element = card as HTMLElement;
                element.style.height = 'auto'; // Reset height to auto
                const height = element.offsetHeight;
                if (height > maxHeight) {
                    maxHeight = height;
                }
            });

            cards.forEach((card) => {
                const element = card as HTMLElement;
                element.style.height = `${maxHeight}px`;
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
            <Swiper spaceBetween={30} slidesPerView={1} className='swiper-all-slide'>
                {Sliderdata.map((project: SliderDataItem, index: number) => {
                    return (
                        <SwiperSlide
                            key={project.id}
                            className={`slide ${!project.logo ? 'no-logo' : ''} ${index === 0 ? 'first-slide' : ''}`}
                            id='slide'
                        >
                            <div className='slide_img'>
                                <img
                                    src={project.img}
                                    alt='Social_card img'
                                    className={`desktop-img ${index === 0 ? 'first-slide-img' : ''}`}
                                />
                                {index === 0 && (
                                    <img src={project.mobileImg} alt='Mobile img' className='mobile-img' />
                                )}
                            </div>
                            <div className='overlay'>
                                {project.logo && (
                                    <div className='logo-image'>
                                        <img src={project.logo} alt='logo_image' width={450} height={200} />
                                    </div>
                                )}
                                <div className='para_mobile'>
                                    <p className='image_text'>{project.text}</p>
                                    <p className='image_para'>{project.para}</p>
                                </div>
                                <div className='slide-button'>
                                    <button className='btn-bg-color'>{project.ButtonText}</button>
                                    {(index === 0 || index === Sliderdata.length - 1) && (
                                        <button className='btn-bg-black-color'>{project.ButtonTextOther}</button>
                                    )}
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
                <SlidersBtn className="slide-btn" />
            </Swiper>
        </div>
    );
};

export default Sliders;
