import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './slider.module.css'
const Slider = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src="http://theme.hstatic.net/1000160337/1000885200/14/slide_1_img.jpg?v=299" alt="image2" />
                    <p className="legend">Image 2</p>

                </div>
                <div>
                    <img src="https://theme.hstatic.net/1000160337/1000885200/14/slide_2_img.jpg?v=299" alt="image1" />
                    <p className="legend">Image 1</p>

                </div>
                <div>
                    <img src="https://theme.hstatic.net/1000160337/1000885200/14/slide_3_img.jpg?v=299" alt="image3" />
                    <p className="legend">Image 3</p>

                </div>
                <div>
                    <img src="http://theme.hstatic.net/1000160337/1000885200/14/slide_4_img.jpg?v=299" alt="image4" />
                    <p className="legend">Image 4</p>
                </div>
            </Carousel>
        </div>

    )
}

export default Slider