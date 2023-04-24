import Link from "next/link"
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
const phone = findIconDefinition({ prefix: 'fas', iconName: 'phone' })
const angleDown = findIconDefinition({ prefix: 'fas', iconName: 'angle-down' })
const Footer = () => {
    const [open, setOpen] = useState(false)
    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    return (
        <div>
            <div className="bg-[#f8fafc] h-40 flex flex-col items-center justify-evenly">
                <span className="xl:text-3xl text-xl font-bold">Follow Anime Figure on Instagram</span>
                <span className="font-light">@anime.figure_</span>
            </div>
            <div className="flex flex-row">
                <div className="group overflow-hidden 
                relative featured-item md:w-60 md:h-64 w-full h-full"
                >
                    <Link href='/' className="relavtive
                    before:transition-all before:duration-500 before:linear before:z-[5]
                    before:absolute before:w-full before:h-full before:opacity-0 before:right-1/2 before:top-0 before:bg-[#fafafa]
                    group-hover:before:opacity-50 group-hover:before:w-0

                    after:transition-all after:duration-500 after:linear
                    after:absolute after:w-full before:h-full after:opacity-0 after:right-0 after:bottom-0 after:left-1/2 after:top-0 after:bg-[#fafafa]
                    group-hover:after:opacity-50 group-hover:after:w-0
                    ">
                        <img className="group-hover:scale-125 transition-all duration-500 ease-in-out w-full h-full object-cover" src="https://theme.hstatic.net/1000160337/1000885200/14/home_collection_1_banner.jpg?v=299" />
                    </Link>
                </div>
                <div className="group overflow-hidden 
                relative featured-item md:w-60 md:h-64 w-full h-full"
                >
                    <Link href='/' className="relavtive
                    before:transition-all before:duration-500 before:linear before:z-[5]
                    before:absolute before:w-full before:h-full before:opacity-0 before:right-1/2 before:top-0 before:bg-[#fafafa]
                    group-hover:before:opacity-50 group-hover:before:w-0

                    after:transition-all after:duration-500 after:linear
                    after:absolute after:w-full before:h-full after:opacity-0 after:right-0 after:bottom-0 after:left-1/2 after:top-0 after:bg-[#fafafa]
                    group-hover:after:opacity-50 group-hover:after:w-0
                    ">
                        <img className="group-hover:scale-125 transition-all duration-500 ease-in-out w-full h-full object-cover" src="https://theme.hstatic.net/1000160337/1000885200/14/home_collection_1_banner.jpg?v=299" />
                    </Link>
                </div>
                <div className="group overflow-hidden 
                relative featured-item md:w-64 md:h-64 w-full h-full"
                >
                    <Link href='/' className="relavtive
                    before:transition-all before:duration-500 before:linear before:z-[5]
                    before:absolute before:w-full before:h-full before:opacity-0 before:right-1/2 before:top-0 before:bg-[#fafafa]
                    group-hover:before:opacity-50 group-hover:before:w-0

                    after:transition-all after:duration-500 after:linear
                    after:absolute after:w-full before:h-full after:opacity-0 after:right-0 after:bottom-0 after:left-1/2 after:top-0 after:bg-[#fafafa]
                    group-hover:after:opacity-50 group-hover:after:w-0
                    ">
                        <img className="group-hover:scale-125 transition-all duration-500 ease-in-out w-full h-full object-cover" src="https://theme.hstatic.net/1000160337/1000885200/14/home_collection_1_banner.jpg?v=299" />
                    </Link>
                </div>
                <div className="group overflow-hidden 
                relative featured-item md:w-64 md:h-64 w-full h-full"
                >
                    <Link href='/' className="relavtive
                    before:transition-all before:duration-500 before:linear before:z-[5]
                    before:absolute before:w-full before:h-full before:opacity-0 before:right-1/2 before:top-0 before:bg-[#fafafa]
                    group-hover:before:opacity-50 group-hover:before:w-0

                    after:transition-all after:duration-500 after:linear
                    after:absolute after:w-full before:h-full after:opacity-0 after:right-0 after:bottom-0 after:left-1/2 after:top-0 after:bg-[#fafafa]
                    group-hover:after:opacity-50 group-hover:after:w-0
                    ">
                        <img className="group-hover:scale-125 transition-all duration-500 ease-in-out w-full h-full object-cover" src="https://theme.hstatic.net/1000160337/1000885200/14/home_collection_1_banner.jpg?v=299" />
                    </Link>
                </div>
                <div className="group overflow-hidden 
                relative featured-item md:w-64 md:h-64 w-full h-full"
                >
                    <Link href='/' className="relavtive
                    before:transition-all before:duration-500 before:linear before:z-[5]
                    before:absolute before:w-full before:h-full before:opacity-0 before:right-1/2 before:top-0 before:bg-[#fafafa]
                    group-hover:before:opacity-50 group-hover:before:w-0

                    after:transition-all after:duration-500 after:linear
                    after:absolute after:w-full before:h-full after:opacity-0 after:right-0 after:bottom-0 after:left-1/2 after:top-0 after:bg-[#fafafa]
                    group-hover:after:opacity-50 group-hover:after:w-0
                    ">
                        <img className="group-hover:scale-125 transition-all duration-500 ease-in-out w-full h-full object-cover" src="https://theme.hstatic.net/1000160337/1000885200/14/home_collection_1_banner.jpg?v=299" />
                    </Link>
                </div>
                <div className="group overflow-hidden 
                relative featured-item md:w-64 md:h-64 w-full h-full"
                >
                    <Link href='/' className="relavtive
                    before:transition-all before:duration-500 before:linear before:z-[5]
                    before:absolute before:w-full before:h-full before:opacity-0 before:right-1/2 before:top-0 before:bg-[#fafafa]
                    group-hover:before:opacity-50 group-hover:before:w-0

                    after:transition-all after:duration-500 after:linear
                    after:absolute after:w-full before:h-full after:opacity-0 after:right-0 after:bottom-0 after:left-1/2 after:top-0 after:bg-[#fafafa]
                    group-hover:after:opacity-50 group-hover:after:w-0
                    ">
                        <img className="group-hover:scale-125 transition-all duration-500 ease-in-out w-full h-full object-cover" src="https://theme.hstatic.net/1000160337/1000885200/14/home_collection_1_banner.jpg?v=299" />
                    </Link>
                </div>
            </div>

            <div className="w-full h-full bg-black md:block hidden">
                <ul className="list-none flex flex-row justify-between p-8">
                    <li>
                        <span className="text-lg text-white font-bold">Giới thiệu Anime Figure</span>
                        <p className="text-[#f3f4f6] font-light text-sm">Giúp các bạn trẻ Việt Nam dễ dàng tiếp <br /> cận với mô hình figure Nhật Bản</p>
                    </li>
                    <li>
                        <span className="text-lg text-white font-bold">Địa chỉ</span>
                        <p className="text-[#f3f4f6] font-light text-sm">
                            Địa chỉ: Quận 10, Tp. Hồ Chí Minh.<br /> Japan Figure chưa có không gian trưng <br /> bày, bạn vui lòng hẹn trước khi đến <br />
                            Điện thoại: 090 8268 007 <br />
                            Email: support@animefigure.vn
                        </p>
                    </li>
                    <li>
                        <span className="text-lg text-white font-bold">Hỗ trợ khách hàng</span>
                        <ul>
                            <li className="text-[#f3f4f6] font-light text-sm">Tìm kiếm</li>
                            <li className="text-[#f3f4f6] font-light text-sm">Giới thiệu</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>
                                <span className="text-lg text-white font-bold">Chăm sóc khách hàng</span>
                                <ul className="flex flex-row items-center justify-between">
                                    <li>
                                        <FontAwesomeIcon className="text-[#f3f4f6] font-light text-sm" icon={phone} />
                                    </li>
                                    <li className="flex flex-col">
                                        <span className="text-[#f3f4f6] font-light text-sm">090 8268 007</span>
                                        <span className="text-[#f3f4f6] font-light text-sm">support@animefigure.vn</span>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <span className="text-lg text-white font-bold">Follow on Instagram</span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className="md:hidden flex flex-col justify-center items-center w-full">
                <span className="text-lg font-semibold">Thông tin thêm</span>
                <div onClick={() => setOpen(!open)}>
                    <span className="bg-black text-white px-1 rounded-full">
                        <FontAwesomeIcon icon={angleDown} className={`${open ? 'rotate-180' : 'rotate-0'} transition duration-500 linear`}/>
                    </span>
                </div>

                <div className={`${open?'block':'hidden'} bg-black w-full`}>
                    <div className="flex flex-col justify-center items-center">
                        <div onClick={() => setOpen1(!open1)} className="text-lg text-white font-bold w-full flex flex-row justify-evenly items-center ">
                            <span>Giới thiệu Anime Figure</span>
                            <FontAwesomeIcon icon={angleDown} className={`${open1 ? 'rotate-180' : 'rotate-0'} transition duration-500 linear`} />
                        </div>
                        <div className={`${open1 ? 'block h-auto' : 'hidden h-0'} w-full transition duration-500 linear`}>
                            <p className="text-[#f3f4f6] font-light text-sm">
                                Địa chỉ: Quận 10, Tp. Hồ Chí Minh.<br /> Japan Figure chưa có không gian trưng <br /> bày, bạn vui lòng hẹn trước khi đến <br />
                                Điện thoại: 090 8268 007 <br />
                                Email: support@animefigure.vn
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <div onClick={() => setOpen2(!open2)} className="text-lg text-white font-bold w-full flex flex-row justify-evenly items-center ">
                            <span>Hỗ trợ khách hàng</span>
                            <FontAwesomeIcon icon={angleDown} className={`${open2 ? 'rotate-180' : 'rotate-0'} transition duration-500 linear`} />
                        </div>
                        <div className={`${open2 ? 'block h-auto' : 'hidden h-0'} w-full transition duration-500 linear`}>
                            <ul className="flex flex-row items-center justify-center">
                                <li>
                                    <FontAwesomeIcon className="text-[#f3f4f6] font-light text-sm" icon={phone} />
                                </li>
                                <li className="flex flex-col">
                                    <span className="text-[#f3f4f6] font-light text-sm">090 8268 007</span>
                                    <span className="text-[#f3f4f6] font-light text-sm">support@animefigure.vn</span>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <div onClick={() => setOpen3(!open3)} className="text-lg text-white font-bold w-full flex flex-row justify-evenly items-center ">
                            <span>Chăm sóc khách hàng</span>
                            <FontAwesomeIcon icon={angleDown} className={`${open3 ? 'rotate-180' : 'rotate-0'} transition duration-500 linear`} />
                        </div>

                        <div className={`${open3 ? 'block h-auto' : 'hidden h-0'} w-full transition duration-500 linear`}>
                            <ul className="flex flex-col items-center justify-between">
                                <li className="text-[#f3f4f6] font-light text-sm">Tìm kiếm</li>
                                <li className="text-[#f3f4f6] font-light text-sm">Giới thiệu</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer