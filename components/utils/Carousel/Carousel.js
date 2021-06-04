import Slider from "react-slick";
import Image from 'Next/image';
//IMPORT MODULE
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { myLanguages } from '../Paths';


export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return(
      <div className="mt-3 mx-auto w-96 h-96 bg-yellow-500 rounded-lg">
        <div className="w-full h-full flex justify-center items-center">
          {/*JSON.stringify(myLanguages)*/}
          <Slider {...settings}> 
            {myLanguages && myLanguages.map((path, idx) => {
            
            console.log("PATH Nº",idx,": ",path)
            return <div id="test" className="h-full w-full"><img src={path}/></div>

            }) }
          </Slider>

          <div className="w-52 h-52 bg-green-400"></div>
        </div>

        {/* <Image src={}/>  */}
      </div>
    );
}
