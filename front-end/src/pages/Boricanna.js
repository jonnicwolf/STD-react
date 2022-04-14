import Carousel from "../components/Carousel.js";

import Boricanna_webBanner from '../photo_assets/Boricanna/Insta photos/Boricanna_webBanner.jpg';
import Boricanna_logo_gold_nw from '../photo_assets/Boricanna/Insta photos/Boricanna_webBanner.jpg';
import Boricanna_streetSign from '../photo_assets/Boricanna/Insta photos/Boricanna_webBanner.jpg';
import Boricanna_innerPack_yt from '../photo_assets/Boricanna/Insta photos/Boricanna_webBanner.jpg';
// import Boricanna_webBanner from '../photo_assets/Boricanna/Insta photos/Boricanna_webBanner.jpg'
// import Boricanna_webBanner from '../photo_assets/Boricanna/Insta photos/Boricanna_webBanner.jpg'
// import Boricanna_webBanner from '../photo_assets/Boricanna/Insta photos/Boricanna_webBanner.jpg'
// import Boricanna_webBanner from '../photo_assets/Boricanna/Insta photos/Boricanna_webBanner.jpg'
// import Boricanna_webBanner from '../photo_assets/Boricanna/Insta photos/Boricanna_webBanner.jpg'
// import Boricanna_webBanner from '../photo_assets/Boricanna/Insta photos/Boricanna_webBanner.jpg'
const slides = [
    {
        image:
          Boricanna_innerPack_yt,
        info: `Boricanna White Label`
      },
      {
        image:
          Boricanna_logo_gold_nw,
          info: `boricanna`
          
      },
      {
        image:
          Boricanna_streetSign,
          info: `Facade`
      },
      {
        image:
        Boricanna_webBanner,
        info: `boricanna_4`
      }
] //throw this in the back end when its up****



const Boricanna = () => {
    return (
        <div>
            <Carousel slides={slides}/>
            <p>Boricanna</p>
        </div> 
    )
};

export default Boricanna;

