import Carousel from "../components/Carousel.js";
const slides = [
    {
        image:
          "https://images.unsplash.com/photo-1546190255-451a91afc548?ixlib=rb-1.2.1",
        info: `boricanna_1`
      },
      {
        image:
          "https://images.unsplash.com/photo-1591348122449-02525d70379b?ixlib=rb-1.2.1",
          info: `boricanna_2`
          
      },
      {
        image:
          "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?ixlib=rb-1.2.1",
          info: `boricanna_3`
      },
      {
        image:
        "https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?ixlib=rb-1.2.1",
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

