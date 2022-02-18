import Carousel from '../components/Carousel.js'
import mockup4 from '../photo_assets/Flavours/mockup4.jpg'
import mockup5 from '../photo_assets/Flavours/mockup5.jpg'
import mockup6 from '../photo_assets/Flavours/mockup6.jpg'

const slides = [
    { image:
        mockup4},
    {image:
        mockup5},
    {image:
        mockup6}
] //throw this in the back end when its up****

const Home=()=>{
    return (
        <div>            
            Home page
            <Carousel slides={slides}/>
        </div>
    )
};

export default Home;