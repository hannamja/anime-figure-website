import Link from "next/link"
import GoodItem from "../GoodItem/GoodItem"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const box = findIconDefinition({ prefix: 'fas', iconName: 'box' })
const truck = findIconDefinition({ prefix: 'fas', iconName: 'truck' })
const phone = findIconDefinition({ prefix: 'fas', iconName: 'phone' })
const check = findIconDefinition({ prefix: 'fas', iconName: 'check' })
const ProductDetail = () => {
    return (
        <div className="container flex md:flex-row flex-col justify-between m-auto">
            <div className="md:w-2/3 w-full">
                <Carousel className="w-full h-full"
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
                    showIndicators={false}
                    showStatus={false}
                >
                    <div>
                        <img src="https://product.hstatic.net/1000160337/product/style_code_geass_lelouch_of_the_rebellion_villetta_nu_bunny_ver._1__6__9db1fb25a9214d609c1b8326563305ac_master.jpg" />
                    </div>
                    <div>
                        <img src="https://product.hstatic.net/1000160337/product/style_code_geass_lelouch_of_the_rebellion_villetta_nu_bunny_ver._1__6__9db1fb25a9214d609c1b8326563305ac_master.jpg" />
                    </div>
                    <div>
                        <img src="https://product.hstatic.net/1000160337/product/style_code_geass_lelouch_of_the_rebellion_villetta_nu_bunny_ver._1__6__9db1fb25a9214d609c1b8326563305ac_master.jpg" />
                    </div>
                    <div>
                        <img src="https://product.hstatic.net/1000160337/product/style_code_geass_lelouch_of_the_rebellion_villetta_nu_bunny_ver._1__6__9db1fb25a9214d609c1b8326563305ac_master.jpg" />
                    </div>
                </Carousel>
            </div>


            <div className="flex flex-col justify-between">
                <div>
                    <div className="md:hidden flex-row flex justify-between w-fit">
                        <span className="text-sm font-light">Trạng thái</span>
                        <div className="ml-10 flex flex-row justify-between">
                            <button className="text-xs bg-black text-white rounded p-1">Có sẵn</button>
                            <button className="text-xs text-white bg-black rounded p-1 ml-2">Order</button>
                        </div>
                    </div>

                    <h1 className="text-lg font-bold">SSSS.DYNAZENON Mujina</h1>
                    <span className="text-red-500 text-lg font-bold">5,850,000₫</span>

                    <div className="flex-row md:flex justify-between w-fit hidden">
                        <span className="text-sm font-light">Trạng thái</span>
                        <div className="ml-10 flex flex-row justify-between">
                            <button className="text-xs bg-black text-white rounded p-1">Có sẵn</button>
                            <button className="text-xs text-white bg-black rounded p-1 ml-2">Order</button>
                        </div>
                    </div>
                </div>

                <div className="w-1/2 md:flex flex-row justify-between hidden">
                    <div className="h-12">
                        <input type="button" value="-" className="w-12 h-full text-center bg-[#f1f5f9]" />
                        <input type="text" value="1" min="1" className="w-24 h-full text-center border-2" />
                        <input type="button" value="+" className="w-12 h-full text-center bg-[#f1f5f9]" />
                    </div>

                    <div className="h-12">
                        <button type="button" className="h-full w-40 bg-[#fb7185]">
                            Thêm vào giỏ
                        </button>
                    </div>
                </div>

                <div>
                    <ul>
                        <li className="relative pl-8 mb-8">
                            <span className="absolute inline-block left-0 top-1/2 -translate-y-1/2"><FontAwesomeIcon icon={box} /> </span>
                            <FontAwesomeIcon icon={check} /> <strong>Sản phẩm chính hãng từ Nhật Bản.</strong><br />
                            <FontAwesomeIcon icon={check} /> <strong>Trước khi bạn đặt mua:</strong> vui lòng check lại giá hiện tại với admin, vì khả năng giá đã thay đổi so với lần cập nhật gần nhất, hoặc hết hàng, hết suất order. Do giới hạn số lượng, figure Nhật sẽ hiếm dần theo thời gian, dẫn tới giá tăng.
                        </li>
                        <li className="relative pl-8 mb-8">
                            <span className="absolute inline-block left-0 top-1/2 -translate-y-1/2"><FontAwesomeIcon icon={truck} /></span>
                            <FontAwesomeIcon icon={check} /> Với sản phẩm <strong>CÓ SẴN, bạn sẽ được giao ngay.</strong><br />
                            <FontAwesomeIcon icon={check} /> Với sản phẩm <strong>ĐẶT TRƯỚC, bạn cần cọc 50% giá trị sản phẩm.</strong> Hàng về VN khoảng 2-3 tuần sau khi phát hành. Lịch phát hành dự kiến như thông tin chi tiết bên dưới.<br></br>
                        </li>
                        <li className="relative pl-8 mb-8">
                            <span className="absolute inline-block left-0 top-1/2 -translate-y-1/2"><FontAwesomeIcon icon={phone} /></span>
                            <FontAwesomeIcon icon={check} className="inline-block" /> Giao hàng tận nơi<br />
                            <FontAwesomeIcon icon={check} className="inline-block" /> Miễn phí ship với các đơn hàng > 1000K <br />
                            <FontAwesomeIcon icon={check} className="inline-block" /> Vui lòng kiểm tra sản phẩm khi nhận bưu kiện
                        </li>
                    </ul>
                </div>
                <div>
                    <h1>Thông tin sản phẩm</h1>
                </div>
            </div>

            <div className="md:hidden w-full fixed bottom-0 left-0 right-0 z-10">
                <div className="flex flex-row justify-between w-full sticky bottom-0 left-0 right-0 z-10">
                    <div className="h-12 grow-0">
                        <input type="button" value="-" className="w-12 h-full text-center bg-[#f1f5f9]" />
                        <input type="text" value="1" min="1" className="w-24 h-full text-center border-2" />
                        <input type="button" value="+" className="w-12 h-full text-center bg-[#f1f5f9]" />
                    </div>

                    <div className="h-12 grow">
                        <button type="button" className="h-full w-full bg-[#fb7185]">
                            Thêm vào giỏ
                        </button>
                    </div>
                </div>

            </div>
        </div >
    )
}
export default ProductDetail