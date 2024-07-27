import img2 from "../assests/Browseflim/Star-Wars-Attack-Clones-II-Poster_53baa2e7.jpeg"
import img5 from "../assests/Browseflim/Star-Wars-Empire-Strikes-Back-V-Poster_878f7fce.jpeg";
import img1 from "../assests/Browseflim/Star-Wars-Phantom-Menace-I-Poster_3c1ff9eb.jpeg";
import img3 from "../assests/Browseflim/Star-Wars-Revenge-Sith-III-Poster_646108ce.jpeg";
import img4 from '../assests/Browseflim/Star-Wars-New-Hope-IV-Poster_c217085b.jpeg'
import img6 from "../assests/Browseflim/Star-Wars-Return-Jedi-VI-Poster_a10501d2.jpeg"


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BannerTwoBtn from '../component/BannerTwoBtn/BannerTwoBtn';
import LastNewsFeature from '../component/reuseable_card/LargeTwoCard/LastNewsFeature';
import BrowseFlim from '../component/reuseable_card/Browse Flims/BrowseFlim';
import {ClipLoader } from 'react-spinners';
const initialMenuOptions = [
  { id: 1, text: 'ALL', count: 0 },
  { id: 2, text: 'ASOKA', count: 0 },
];
const Imagemapping ={
  1:img1,
  2:img2,
  3:img3,
  4:img4,
  5:img5,
  6:img6,
}

const Flims = () => {
  const [videoData, setVideoData] = useState({});
  const [menuOptions, setMenuOptions] = useState(initialMenuOptions);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const categories = ['ALL', 'ASOKA',];
      const categoryData = {};
      const newMenuOptions = [...initialMenuOptions];

      try {
        await Promise.all(categories.map(async (category) => {
          let response;
          if (category === 'ALL') {
            response = await axios.get('https://swapi.dev/api/films/');
          } else {
            // Adjust this endpoint based on actual API
            response = await axios.get(`https://swapi.dev/api/films/?search=${category}`);
          }

          const films = response.data.results;

          categoryData[category] = films.map((film, index) => ({
            id: film.episode_id,
            img:Imagemapping[film.episode_id],  
            text: film.title,
            time: `${Math.floor(Math.random() * 10) + 1}:59`,
          }));

          const menuOptionIndex = newMenuOptions.findIndex(option => option.text === category);
          if (menuOptionIndex !== -1) {
            newMenuOptions[menuOptionIndex].count = categoryData[category].length;
          }
        }));

        setVideoData(categoryData);
        setMenuOptions(newMenuOptions);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="loader-container">
      <ClipLoader color="#FFFFFF" size={50} /> 
      </div>;
  }

  return (
    <div className='pad-r-l-all'>
      <BannerTwoBtn />
      <div className='heading-h2'>
        <h2 className='color-white'>Latest News + Feature</h2>
        <div>
          <hr />
        </div>
      </div>
      <LastNewsFeature />
      <div className='heading-h2'>
        <h2 className='color-white'>Browse Flims</h2>
        <div>
          <hr />
        </div>
      </div>
      <BrowseFlim menuOptions={menuOptions} videoData={videoData} />
    </div>
  );
};

export default Flims;
