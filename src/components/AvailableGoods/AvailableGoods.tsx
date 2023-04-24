import Link from "next/link"
import GoodItem from "../GoodItem/GoodItem"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const AvailableGoods = () => {
    return (
        <div className="w-full flex flex-col items-center mt-10">
            <h1 className="text-2xl font-bold p-2">Sản phẩm có sẵn</h1>
            <p className="font-light">Sản phẩm đang có sẵn, bạn có thể mua ngay</p>
            <div className="w-full h-auto md:flex md:flex-row flex flex-col justify-evenly mt-10">
                <div className="other-items md:w-3/5 w-full flex justify-between flex-wrap">
                    <Carousel
                        className="w-full flex justify-between flex-wrap"
                        renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
                            hasPrev && (
                                <div className="absolute flex flex-col justify-center z-[5] h-full">
                                    <button onClick={clickHandler}>
                                        <img
                                            style={{ height: "30px", width: "30px" }}
                                            src={`assets/icons/left-arrow.svg`} />
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
                                            src={`assets/icons/right-arrow.svg`} />
                                    </button>
                                </div>
                            )
                        }
                    >
                        <div className="w-full flex justify-between flex-wrap">
                            <GoodItem />
                            <GoodItem />
                            <GoodItem />
                            <GoodItem />
                            <GoodItem />
                            <GoodItem />
                            <GoodItem />
                            <GoodItem />

                        </div>
                        <div className="w-full flex justify-between flex-wrap">
                            <GoodItem />
                            <GoodItem />
                            <GoodItem />
                            <GoodItem />
                            <GoodItem />
                            <GoodItem />
                            <GoodItem />
                            <GoodItem />
                        </div>
                        <div className="w-full flex justify-between flex-wrap">
                            <GoodItem />
                            <GoodItem />
                            <GoodItem />
                            <GoodItem />
                            <GoodItem />
                            <GoodItem />
                            <GoodItem />
                            <GoodItem />

                        </div>
                        <div className="w-full flex justify-between flex-wrap">
                            <GoodItem />
                            <GoodItem />
                            <GoodItem />
                            <GoodItem />
                            <GoodItem />
                            <GoodItem />
                            <GoodItem />
                            <GoodItem />
                        </div>
                    </Carousel>
                </div>

                <div className="group overflow-hidden 
                relative featured-item md:w-1/3 w-full h-full"
                >
                    <Link href='/' className="relavtive
                    before:transition-all before:duration-500 before:linear before:z-[5]
                    before:absolute before:w-full before:h-full before:opacity-0 before:right-1/2 before:top-0 before:bg-[#fafafa]
                    group-hover:before:opacity-50 group-hover:before:w-0

                    after:transition-all after:duration-500 after:linear
                    after:absolute after:w-full before:h-full after:opacity-0 after:right-0 after:bottom-0 after:left-1/2 after:top-0 after:bg-[#fafafa]
                    group-hover:after:opacity-50 group-hover:after:w-0
                    ">
                        <img className="max-w-full max-h-full" src="https://theme.hstatic.net/1000160337/1000885200/14/home_collection_2_banner.jpg?v=299" />
                    </Link>
                </div>
            </div>


        </div>
    )
}

export default AvailableGoods