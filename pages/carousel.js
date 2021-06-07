
import Slider from "react-slick";
//IMPORT MODULE
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { myLanguages } from '../components/utils/Paths';


function carousel(props) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      
      <div className="w-full h-full flex justify-center items-center">
          {/*JSON.stringify(myLanguages)*/}
          <Slider {...settings}> 
            <div className="z-10 block text-xl font-white">ASD-1</div>
            <div className="z-10 block">ASD-2</div>
            <div className="z-10 block">ASD-3</div>
            <div className="z-10 block">ASD-4</div>
          </Slider>

          <div className="w-52 h-52 bg-green-400"></div>
        </div>

    </div>
  );
}

export default carousel;