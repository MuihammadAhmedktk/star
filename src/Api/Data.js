import img1 from "../assests/Video_image/image_8c7cf01d.jpeg";
import img2 from "../assests/Video_image/image_a9623831.jpeg";
import img3 from "../assests/Video_image/068_twdisp_acolyterecap05_thumb_16x9_dcom_f58181ee.jpeg";
import img4 from "../assests/Video_image/image_8c7cf01d.jpeg";
// slider img
import slideimg1 from "../assests/silder/104-acolyte-container-hero-desktop_fc570bdb.jpeg"
import slideimg2 from "../assests/silder/thr-quiz-sw2-hero-desktop_25adae14.jpeg"
import slideimg3 from "../assests/silder/creature-shop-the-acolyte-sw2-hero-desktop_1659e180.jpeg"
import slideimg4 from "../assests/silder/the-acolyte-monet-single-sw2-hero-desktop_337dc9ad.jpeg"
import slideimg5 from "../assests/silder/sw-outlaws-unifwrd-sw2-hero-desktop_883c82db.jpeg"
import logoimg from "../assests/silder/acolyte-logo-single-104-800_b832c350.png"
import logoimg2 from"../assests/silder/outlaws-logotitle-800_b92f5e6c.png";
import logoimg1 from"../assests/silder/the-acolyte-logo-purple-800_ab592485.png"
import mobilesHero from "../assests/silder/the-acolyte-104-epguide-container-hero-mobile_1e24ac3d.jpeg"
// Movie Comp
import movieimg1 from '../assests/the-acolyte-logotitle-now-streaming-800_7f4b391b.png'
import movieimg0 from "../assests/silder/the-acolyte-tentpole-desktop-b_13efcaeb.jpeg"
import movieimg2 from "../assests//the-acolyte-poster-now-streaming_13031b89.jpeg";
// Card Data
import cardImg1 from "../assests/the-acolyte-is-here-article-feature_f51c447b.jpeg";
import cardImg2 from "../assests/koril-gumstick_b0c2e7dd.jpeg";

// Star Movie
import starimg1 from "../assests/moivie_card/the-acolyte-character-posters-featured-2_15c6967f.jpeg"
import starimg2 from "../assests/moivie_card/the-acolyte-104-main_8af5a1d1.jpeg"
import starimg3 from "../assests/moivie_card/the-acolyte-creature-feature-bazil-featured_17dde8c4.jpeg"
// Social card
import soicalimg1 from "../assests/social_icon_card/yord-steam-social-share-portrait_9e10495b.jpeg"
import soicalimg2 from "../assests/social_icon_card/acolyte-cast-social-share_d8d529a0.jpeg"
import soicalimg3 from "../assests/social_icon_card/acolyte-trailer-post-social-share_b3c2a004.jpeg"
import soicalimg4 from "../assests/social_icon_card/acolyte-trailer-social-share_73479e49.jpeg"
import soicalimg5 from "../assests/social_icon_card/amandla-social-share_9207940c.jpeg"

// New Feature
import newimg1 from "../assests/silder/thr-quiz-sw2-hero-desktop_25adae14.jpeg"
import newimg2 from "../assests/silder/thr-quiz-sw2-hero-desktop_25adae14.jpeg"
import newimg3 from "../assests/silder/the-acolyte-104-highlights_article-feature_c2671ca5.jpeg"

// Explore
import exploreimg1 from "../assests/Explore/swcj25-franchise-slider_1f18826e.jpeg"
import exploreimg2 from "../assests/Explore/franchsie-slider-logos-disneyplus_4dd619d3.jpeg"
import exploreimg3 from "../assests/Explore/ffc-bottom-slider_6666c49b.jpeg"
import exploreimg4 from "../assests/Explore/eras-169_c9428175.jpeg"
import exploreimg5 from "../assests/Explore/bottom-slider-logos_5d5563d4.jpeg"

// FeatureCard
import featurecardImg1 from "../assests/featureCard/bazil-basil-painted-pot-craft-_article-feature_fe38349a.jpeg"
import featurecardImg2 from "../assests/featureCard/manny-jacinto-the-stranger-featured_9b269c91.jpeg"
import featurecardImg3 from "../assests/featureCard/the-acolyte-charlie-barnett-dafne-keen-interview-featur_68454e50.jpeg"
import moment from 'moment';

// LastNewsFeature

import lastNewsFeatureImg1 from "../assests/featureCard/bazil-basil-painted-pot-craft-_article-feature_fe38349a.jpeg"
import lastNewsFeatureImg2 from "../assests/featureCard/manny-jacinto-the-stranger-featured_9b269c91.jpeg"
import lastNewsFeatureImg3 from "../assests/featureCard/the-acolyte-charlie-barnett-dafne-keen-interview-featur_68454e50.jpeg"
// TheAcolytes
//  Video
import videoimg from "../assests/silder/thr-quiz-sw2-hero-desktop_25adae14.jpeg";
import Video from "../assests/video_img/main (1).mp4";
// episode
import epsiodeimg33 from '../assests/epsiodeguide/the-acolyte-105-main-a_78367e7a.jpeg'
import epsiodeimg22 from '../assests/epsiodeguide/the-acolyte-106-main-a_2612d879.jpeg'
import epsiodeimg11 from '../assests/epsiodeguide/the-acolyte-107-main-a_1fba7005.jpeg'

// Four Card
import fourcardImg1 from "../assests/fourcard/this-week-in-star-wars-card-1200x600_5e28ac96.jpeg";
import fourcardImg2 from "../assests/fourcard/thrs-singlehero-landing-mobile_df19c13e_4b58028c.jpeg";
import fourcardImg3 from "../assests/fourcard/sws-thumb-11_7cdb7524.jpeg";
import fourcardImg4 from "../assests/fourcard/book-club-exlink_01e569ab.jpeg";
// lastNewsDetail
export const getImages = () => {
  return [
    { img: require('../assests/Video_image/068_twdisp_acolyterecap05_thumb_16x9_dcom_f58181ee.jpeg') },
    { img: require('../assests/Video_image/image_8c7cf01d.jpeg') },
    { img: require('../assests/Video_image/image_a9623831.jpeg') },
    { img: require('../assests/Video_image/twdisp_064acolyterecap01-02_16x9_54f73f52.jpeg') }
  ];
};
export const Videos = ()=>{
  return Video
}

export const MenuList =  [
    { id: 1, text: 'ALL', link: '/all', count: 25 },
    { id: 2, text: 'ASOKA', link: '/asoka', count: 5 },
    { id: 3, text: 'THE ACOLYTE', link: '/the-acolyte', count: 3 },
    { id: 4, text: 'ANDOR', link: '/andor', count: 4 },
    { id: 5, text: 'THE BAD BATCH', link: '/the-bad-batch', count: 6 },
    { id: 6, text: 'OBI-WAN KENOBI', link: '/obi-wan-kenobi', count: 7 },
    { id: 7, text: 'THE BOOK OF BOBA FETT', link: '/the-book-of-boba-fett', count: 2 },
    { id: 8, text: 'THE MANDALORIAN', link: '/the-mandalorian', count: 8 },
    { id: 9, text: 'VISIONS', link: '/visions', count: 3 },
    { id: 10, text: 'EPISODE IX', link: '/episode-ix', count: 1 },
    { id: 11, text: 'EPISODE VIII', link: '/episode-viii', count: 1 },
    { id: 12, text: 'EPISODE VII', link: '/episode-vii', count: 1 },
    { id: 13, text: 'EPISODE VI', link: '/episode-vi', count: 1 },
    { id: 14, text: 'EPISODE V', link: '/episode-v', count: 1 },
    { id: 15, text: 'EPISODE IV', link: '/episode-iv', count: 1 },
    { id: 16, text: 'EPISODE III', link: '/episode-iii', count: 1 },
    { id: 17, text: 'EPISODE II', link: '/episode-ii', count: 1 },
    { id: 18, text: 'EPISODE I', link: '/episode-i', count: 1 },
    { id: 19, text: 'SOLO', link: '/solo', count: 1 },
    { id: 20, text: 'ROGUE ONE', link: '/rogue-one', count: 1 },
    { id: 21, text: 'THE CLONE WARS', link: '/the-clone-wars', count: 1 },
    { id: 22, text: 'RESISTANCE', link: '/resistance', count: 1 },
    { id: 23, text: 'REBELS', link: '/rebels', count: 1 },
    { id: 24, text: 'BEHIND THE SCENES', link: '/behind-the-scenes', count: 2 },
    { id: 25, text: 'GAMES + APPS', link: '/games-apps', count: 3 }
  ];

  export const videos = {
    ALL: [
        { id: 1, img: img1, text: "Lies and Heartbreak | This week! in star war dispatch", time: "0:59" },
        { id: 2, img: img2, text: "Many UNknows| This week! in star war dispatch", time: "0:59" },
        { id: 3, img: img3, text: "Jedi vs the stranger| This week! in star war dispatch", time: "0:59" },
        { id: 4, img: img4, text: "Showdown on khofar| This week! in star war dispatch", time: "0:59" },
        { id: 5, img: img1, text: "Lies and Heartbreak | This week! in star war dispatch", time: "0:59" },
        { id: 6, img: img2, text: "Many UNknows| This week! in star war dispatch", time: "0:59" },
        { id: 7, img: img3, text: "Jedi vs the stranger| This week! in star war dispatch", time: "0:59" },
        { id: 8, img: img4, text: "Showdown on khofar| This week! in star war dispatch", time: "0:59" },
    ],
    ASOKA: [
        { id: 1, img: img1, text: "Asoka | Star Wars Dispatch", time: "1:30" },
        { id: 2, img: img2, text: "Asoka's Journey | Star Wars Dispatch", time: "1:45" },
    ],
    // Add other menu item videos here...
  };
  export const Sliderdata= [
    {
        id: 1,
        img: slideimg1,
        logo: logoimg,
        mobileImg: mobilesHero,
        text: "Racing to the next target, the Jedi head to a new world as they close in on the clever assassin",
        ButtonText: "STREAM ON DISNEY+",
        ButtonTextOther: "EPISODE GUIDE",
        link: "/#"
    },
    {
        id: 2,
        img: slideimg2,
        text: "Quiz:WHICH HIGH REPUBLIC JOB IS RIGHT FOR YOU?",
        para:"Let StarWars.com help you find your dream career - on anoter planet in another galaxy.",
        ButtonText: "FIND OUT",
        link: "/#"
    },
    {
        id: 3,
        img: slideimg3,
        text: "INSIDE THE ACOLYTE CREATURE SHOP: MEET BAZIL, THE TYNNAN TRACKER",
        para:"Plus, creature & droid FX creative supervisor Neal Scanlan shres his insights on the making of a Wookiee Jedi and the creation of OSHA's droid pal,Pip.",
        ButtonText: "FIRST DETAILS",
        link: "/#"
    },
    {
        id:4,
        img:slideimg4,
        logo:logoimg1,
        text:"Listen to Grammy award-winner Victoria Monet's new single Power of Two now",
        ButtonText: "READ MORE",
        link:"/#",
    },
    {
        id:5,
        img:slideimg5,
        logo:logoimg2,
        text:"Catch up on all the news from Ubisft Forward , whree new looks at combat, navgating through the galaxy, and more were revealed.",
        ButtonText:"INTERVIEW",
        ButtonTextOther:"EXPLORE",
        link:"/#",
    }
];

export const Movie_Comp =[
  {id:1, img:movieimg0,img1:movieimg1,img2:movieimg2, btn1:"STREAM NOW", btn2:"EXPLORE",head:"The Acolyte",para:"An investigation into a shocking crime spree pits a repected Jedi MAster against a dangerous warrior from his past"}
];

export const CardData =[
  {   id:1,
      img:cardImg1,
      text:"Introducing the Cast of the Acolyte",
      link:"/#",
  },
  {
      id:2,
      img: cardImg2,
      text:"Databank | the Acolyte",
      link:"/#",
  }
];
export const CardDetail = [
  {
    id: 1,
    img: starimg2,
    text: "Day Episode Guide | Te Acolyte",
    para: "Racing to the net target, the Jedi head to new world as they close in on the clever assassin.",
    link: '/#'
  },
  {
    id: 2,
    img: starimg1,
    text: "The Acylyte Character Posters Dedut - Update",
    link: '/#'
  },
  {
    id: 3,
    img: starimg3,
    text: "Inside The Acolyte Creature Shop; Meet Bazil, the Tynnan Tracker - First Details"
  }
];

export const SoicalData =[
  {
      id:1,
      img:soicalimg1,
      text:"NO increase For the Yord Horde",
      link:"/#"
  },
  {
      id:2,
      img:soicalimg2,
      text:"Yord Horde...special delivery",
      link:"/#"
  },
  {
      id:3,
      img:soicalimg3,
      text:"Yord Hord, this one's for you",
      link:"/#"
  },
  {
      id:4,
      img:soicalimg4,
      text:"Critics are aying The Acolyte is one of the most exaciting shows on ...",
      link:"/#"
  },
  {
      id:5,
      img:soicalimg5,
      text:"Experience the critics are calling riveting",
      link:"/#"
  },
];
export const NewsDetail =[
  {
      id: 1,
      img: newimg1,
      text: "Quiz: Which High Republic Job Is Right for You?",
      link: '/#'
    },
    {
      id: 2,
      img: newimg2,
      text: "The Acolyte Explained | Highlights from Day",
      link: '/#'
    },
    {
      id: 3,
      img: newimg3,
      text: "Grammy Award-Winner Victoria Monet Lends Her Voice to The Acolyte"
    }
];
export const ExploreMoreDetail =[
  {
      id: 1,
      img: exploreimg1,
      text: "Quiz: Which High Republic Job Is Right for You?",
      link: '/#'
    },
    {
      id: 2,
      img: exploreimg2,
      text: "The Acolyte Explained | Highlights from Day",
      link: '/#'
    },
    {
      id: 3,
      img: exploreimg3,
      text: "Grammy Award-Winner Victoria Monet Lends Her Voice to The Acolyte"
    },
    {
      id: 4,
      img: exploreimg4,
      text: "Grammy Award-Winner Victoria Monet Lends Her Voice to The Acolyte"
    },
    {
      id: 5,
      img: exploreimg5,
      text: "Grammy Award-Winner Victoria Monet Lends Her Voice to The Acolyte"
    },
];

export const featurecard  =[
   
  {
      id:1,
      Img:featurecardImg1,
      text:"YOu'll Dig This DIY Bazil Basil Planter YOu'll Dig This DIY Bazil Basil Planter YOu'll Dig This DIY Bazil Basil Planter YOu'll Dig This DIY Bazil Basil Planter YOu'll Dig This DIY Bazil Basil Planter YOu'll Dig This DIY Bazil Basil Planter YOu'll Dig This DIY Bazil Basil Planter YOu'll Dig This DIY Bazil Basil PlanterYOu'll Dig This DIY Bazil Basil Planter YOu'll Dig This DIY Bazil Basil Planter YOu'll Dig This DIY Bazil Basil Planter YOu'll Dig This DIY Bazil Basil Planter",
      date: '24,July 2021',
  },
  {
      id:2,
      Img:featurecardImg2,
      text:"YOu'll Dig This DIY Bazil Basil Planter",
      date: '24,June 2021',
  },
  {
      id:3,
      Img:featurecardImg3,
      text:"YOu'll Dig This DIY Bazil Basil Planter",
      date: '12,July 2021',
  },
  
  {
      id:4,
      Img:featurecardImg1,
      text:"YOu'll Dig This DIY Bazil Basil Planter",
      date: '4,July 2021',
  },
  {
      id:5,
      Img:featurecardImg2,
      text:"YOu'll Dig This DIY Bazil Basil Planter",
      date: '1,July 2021',
  },
  {
      id:6,
      Img:featurecardImg3,
      text:"YOu'll Dig This DIY Bazil Basil Planter",
      date: '2,July 2021',
  },
  
  {
      id:7,
      Img:featurecardImg1,
      text:"YOu'll Dig This DIY Bazil Basil Planter",
      date: '9,July 2021',
  },
  {
      id:8,
      Img:featurecardImg2,
      text:"YOu'll Dig This DIY Bazil Basil Planter",
      date: '12,July 2021',
  },
  {
      id:9,
      Img:featurecardImg3,
      text:"YOu'll Dig This DIY Bazil Basil Planter",
      date: '2,April 2021',
  },
  
  {
      id:10,
      Img:featurecardImg1,
      text:"YOu'll Dig This DIY Bazil Basil Planter",
      date: moment().format('MMMM DD,YYYY'),
  },
  {
      id:11,
      Img:featurecardImg2,
      text:"YOu'll Dig This DIY Bazil Basil Planter",
      date: moment().format('MMMM DD,YYYY'),
  },
  {
      id:3,
      Img:featurecardImg3,
      text:"YOu'll Dig This DIY Bazil Basil Planter",
      date: moment().format('MMMM DD,YYYY'),
  },
  
  {
      id:12,
      Img:featurecardImg1,
      text:"YOu'll Dig This DIY Bazil Basil Planter",
      date: moment().format('MMMM DD,YYYY'),
  },
  {
      id:13,
      Img:featurecardImg2,
      text:"YOu'll Dig This DIY Bazil Basil Planter",
      date: moment().format('MMMM DD,YYYY'),
  },
  {
      id:14,
      Img:featurecardImg3,
      text:"YOu'll Dig This DIY Bazil Basil Planter",
      date: moment().format('MMMM DD,YYYY'),
  },
  
  {
      id:15,
      Img:featurecardImg1,
      text:"YOu'll Dig This DIY Bazil Basil Planter",
      date: moment().format('MMMM DD,YYYY'),
  },
  {
      id:16,
      Img:featurecardImg2,
      text:"YOu'll Dig This DIY Bazil Basil Planter",
      date: moment().format('MMMM DD,YYYY'),
  },
  {
      id:17,
      Img:featurecardImg3,
      text:"YOu'll Dig This DIY Bazil Basil Planter",
      date: moment().format('MMMM DD,YYYY'),
  },
  
  {
      id:18,
      Img:featurecardImg1,
      text:"YOu'll Dig This DIY Bazil Basil Planter",
      date: moment().format('MMMM DD,YYYY'),
  },
  {
      id:19,
      Img:featurecardImg2,
      text:"YOu'll Dig This DIY Bazil Basil Planter",
      date: moment().format('MMMM DD,YYYY'),
  },
  {
      id:20,
      Img:featurecardImg3,
      text:"YOu'll Dig This DIY Bazil Basil Planter",
      date: moment().format('MMMM DD,YYYY'),
  },
  {
    id:21,
    Img:featurecardImg3,
    text:"YOu'll Dig This DIY Bazil Basil Planter",
    date: moment().format('MMMM DD,YYYY'),
},
{
  id:22,
  Img:featurecardImg3,
  text:"YOu'll Dig This DIY Bazil Basil Planter",
  date: moment().format('MMMM DD,YYYY'),
},
{
  id:23,
  Img:featurecardImg3,
  text:"YOu'll Dig This DIY Bazil Basil Planter",
  date: moment().format('MMMM DD,YYYY'),
},
{
  id:24,
  Img:featurecardImg3,
  text:"YOu'll Dig This DIY Bazil Basil Planter",
  date: moment().format('MMMM DD,YYYY'),
},

  

 ]

 export const video =[  {
  id: 1,
  videoSrc: Video,
  isVideo: true,
  videoImg: videoimg,
  text: "Quiz: Which High Republic Job Is Right for You?",
  link: '/#'
},
{
  id: 2,
  videoSrc: "path/to/your/video2.mp4",
  isVideo: false,
  videoImg: videoimg,
  text: "The Acolyte Explained | Highlights from Day",
  link: '/#'
},
{
  id: 3,
  link: 'https://www.example.com',
  isVideo: false,
  videoImg: videoimg,
  text: "Visit Example Website"
}]

export const episode =[
  {
      id:1,img:epsiodeimg11,text:"Choice Episode Guide | The Acolyte",para:"The tragic events that forever shaped the lives of two sisters are revisited from a new perpective, and a missing truth is revealed.",esp:"S1,E7"
  },
  {
      id:2,img:epsiodeimg22,text:"Teach / Corrupt Episode Guide | The Acolyte",para:"On a distant island world, two strangers confront unsetting questions about identity and destiny as they each plot their next moves.",esp:"S1,E6"
  },
  {
      id:3,img:epsiodeimg33,text:"Night Episode Guide | The Acolyte",para:"In adense jungle, the Jedi are put to the test when they confront a rising darkness.",esp:"S1,E5"
  },
]
export const Fourcards = () => [
      {
          id:1,
          img:fourcardImg1,
          para:"This Week! in Star Wars"
      },
      {
          id:2,
          img:fourcardImg2,
          para:"The High Republic Show"
      },
      {
          id:3,
          img:fourcardImg3,
          para:"The Stars Wars Show"
      },
      {
          id:4,
          img:fourcardImg4,
          para:"The Star Wars Show Book Club"
      }
  ]

  // LastNewsFeature

 
  export  const Card = [
    {
      id: 1,
      type: 'image',
      src: lastNewsFeatureImg1,
      text: "You'll Dig This DIY Basil Planter"
    },
    {
      id: 2,
      type: 'image',
      src: lastNewsFeatureImg2,
      text: "You'll Dig This DIY Basil Planter"
    },
    {
      id: 3,
      type: 'image',
      src: lastNewsFeatureImg3,
      text: "You'll Dig This DIY Basil Planter"
    }
  ];


