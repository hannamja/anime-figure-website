import Link from "next/link"
import GoodItem from "../GoodItem/GoodItem"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const RelatedProducts = () => {

    return (
        <div>
            <Carousel
                className="md:w-1/2 m-auto w-full"
                renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
                    hasPrev && (
                        <div className="absolute flex flex-col justify-center z-[5] h-full">
                            <button onClick={clickHandler}>
                                <img
                                    style={{ height: "30px", width: "30px" }}
                                    src={`../assets/icons/left-arrow.svg`} />
                            </button>
                        </div>
                    )
                }
                renderArrowNext={(clickHandler, hasNext, labelNext) =>
                    hasNext && (
                        <div className="absolute flex flex-col justify-center z-[5] h-full top-0 right-0">
                            <button onClick={clickHandler}>
                                <img
                                    style={{ height: "30px", width: "30px" }}
                                    src={`../assets/icons/right-arrow.svg`} />
                            </button>
                        </div>
                    )
                }
                centerMode={true}
                centerSlidePercentage={35}
                showStatus={false}
                showIndicators={false}
            >
                <GoodItem />
                <GoodItem />
                <GoodItem />
                <GoodItem />
                <GoodItem />
                <GoodItem />
                <GoodItem />
                <GoodItem />
            </Carousel>
        </div>
    )
}
export default RelatedProducts