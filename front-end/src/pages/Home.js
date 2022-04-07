import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel.js';
import Extras from '../components/Extras';

/*.########..##.....##..#######..########..#######.............###.....######...######..########.########..######.
  .##.....##.##.....##.##.....##....##....##.....##...........##.##...##....##.##....##.##..........##....##....##
  .##.....##.##.....##.##.....##....##....##.....##..........##...##..##.......##.......##..........##....##......
  .########..#########.##.....##....##....##.....##.........##.....##..######...######..######......##.....######.
  .##........##.....##.##.....##....##....##.....##.........#########.......##.......##.##..........##..........##
  .##........##.....##.##.....##....##....##.....##.........##.....##.##....##.##....##.##..........##....##....##
  .##........##.....##..#######.....##.....#######..........##.....##..######...######..########....##.....######.*/
import blueDream from '../photo_assets/Flavours/mockup4.jpg';
import sherblato from '../photo_assets/Flavours/mockup5.jpg';
import birthdayCake from '../photo_assets/Flavours/mockup6.jpg';
import stock_bong from '../photo_assets/Logos/stock_bong.jpeg';
import stock_joint from '../photo_assets/Logos/stock_grinder.jpeg';
import stock_grinder from '../photo_assets/Logos/stock_joint.jpeg';

const slides = [
    {image: blueDream,
    info:`Blue Dream is a sativa-dominant hybrid marijuana strain made by crossing Blueberry with Haze. This strain produces a balanced high, along with effects such as cerebral stimulation and full-body relaxation. Blue dream is 18% THC but has a low CBD percentage, making this potent strain a fan favorite of both novice and veteran cannabis consumers. In terms of flavor, Blue Dream is reported to smell and taste like sweet berries.`},
    {image: sherblato,
    info: `Sherblato is a hybrid marijuana strain made by crossing Sherbert and Gelato. Sherblato is quickly becoming a favorite strain on the West Coast. With Pink Panties, GSC, and Sunset Sherbert in its lineage, this strain doesn’t mess around. Sherblato offers a tart citrus profile that’s backed by notes of gas. As for the high, the effects of Sherblato will have you feeling tingly and buzzy, putting your mind and body at ease without flooring you for the rest of the day`},
    {image: birthdayCake,
    info: `Birthday Cake, also known "Birthday Cake Kush," is an indica-dominant hybrid with strong body effects and sweet cake-like flavor. As decadent as its Girl Scout Cookies and Cherry Pie parent strains, Birthday Cake buds bloom with a crystalline icing of THC-rich resin. Like any dessert, Birthday Cake is the perfect way to end your day, with deeply relaxing effects that soothe the body without sedating the mind. This strain is preferred by patients treating pain, anxiety, appetite loss, inflammation, and headaches.`}    
] //throw this in the back end when its up****

const items  = [
    {item: stock_bong, info: 'Tokes'},
    {item: stock_joint, info: 'Smokes'},
    {item: stock_grinder, info: '& More'},    
]

const Home=()=>{
    return (
        <div>            
            Home page
            <Carousel slides={slides}/>
            <Link to='/flavors'>
                <button>Buy Now</button>
            </Link>
            <Extras items={items}/>
        </div>
    );
};

export default Home;