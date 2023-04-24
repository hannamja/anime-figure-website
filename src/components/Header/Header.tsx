import Link from "next/link";
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core'
import './header.module.css'
import { useState } from "react";

const cart = findIconDefinition({ prefix: 'fas', iconName: 'cart-shopping' })
const arrowDown = findIconDefinition({ prefix: 'fas', iconName: 'angle-down' })
const bars = findIconDefinition({ prefix: 'fas', iconName: 'bars' })

const Header = () => {
    const [open, setOpen] = useState(false)
    const [openHD, setOpenHD] = useState(false)
    const [openSP, setOpenSP] = useState(false)
    return (

        <header className="h-40">
            <div className="xl:container mx-auto xl:px-4 flex flex-col justify-end h-full w-full">
                <div className="xl:mb-8 flex xl:flex-row justify-between items-center flex-col-reverse sm:flex-col-reverse">

                    <div className="xl:w-1/3 w-full">
                        <div className="relative flex w-full flex-wrap items-stretch">
                            <input
                                type="search"
                                className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="button-addon1" />


                            <button
                                className="min-[200px]:absolute min-[200px]:right-0 min-[200px]:h-full xl:relative min-[200px]:z-[4] z-[2] flex items-center xl:rounded-r min-[200px]:p-1 sm:p-1 xl:bg-[#ffe4e6] xl:px-6 xl:py-2.5 text-xs font-medium uppercase leading-tight text-black xl:shadow-xl xl:transition xl:duration-150 xl:ease-in-out hover:bg-primary-700 xl:hover:shadow-lg xl:focus:bg-primary-700 xl:focus:shadow-lg xl:focus:outline-none xl:focus:ring-0 xl:active:bg-primary-800 xl:active:shadow-lg"
                                type="button"
                                id="button-addon1"
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fill-rule="evenodd"
                                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="w-3/5 flex flex-row xl:justify-between items-center min-[200px]:w-full justify-evenly min-[200px]:mb-10 xl:mb-0">
                        <div className="xl:hidden" onClick={() => setOpen(!open)}>
                            <FontAwesomeIcon icon={bars} />
                        </div>
                        <div className="xl:w-1/2 flex flex-row justify-end items-center">
                            <div className="p-3">
                                <Image src='/assets/icons/user.png' alt="User" width={30} height={30} />
                            </div>
                            <div className="xl:block min-[200px]:hidden">
                                <div>
                                    <Link href='/'>Đăng nhập</Link> / <Link href='/'>Đăng kí</Link>
                                </div>
                                <Link href='/' className="flex flex-row items-center">
                                    <p>Tài khoản của tôi</p> <FontAwesomeIcon icon={arrowDown} className="p-1" />
                                </Link>
                            </div>
                        </div>
                        <div className="xl:w-2/5 flex flex-row items-center">
                            <FontAwesomeIcon icon={cart} />
                            <p className="ml-2 xl:block sm:hidden min-[200px]:hidden">Giỏ hàng</p>
                        </div>
                    </div>
                </div>

                <div className={` absolute xl:relative top-20 xl:top-0 bg-white xl:bg-transparent xl:border-0 border-2
                    ${openHD && open ? 'w-full opacity-100 z-[5] xl:w-1/2 xl:z-auto xl:h-fit h-full' : 'xl:h-fit h-full xl:w-1/2 xl:opacity-100 opacity-0 w-4/5 left-0 right-0 mx-auto xl:mx-0'}
                    transition-all duration-0 ease-in delay-0`}>
                    <ul className="absolute xl:bg-blue-400 xl:p-2 xl:opacity-0 xl:z-[-1] xl:invisible xl:translate-y-[-2em] xl:transition-all xl:duration-300 xl:ease-in-out xl:delay-0 xl:group-hover:visible xl:group:hover:delay-0 xl:group-hover:translate-y-[0] xl:group-hover:opacity-100 xl:group-hover:z-1">
                        <li className="p-1" onClick={() => setOpenHD(!openHD)}>
                            <FontAwesomeIcon icon={arrowDown} className='rotate-90 mr-2' />
                            <span className="font-bold">Trở lại</span>

                        </li>
                        <li className="p-2 font-bold">
                            <Link href='/collections/all'>
                                Tất cả
                            </Link>
                        </li>
                        <li className="p-2">
                            <Link href='/'>
                                Hello dropdown
                            </Link>
                        </li>
                        <li className="p-2">
                            <Link href='/'>
                                Hello dropdown
                            </Link>
                        </li>
                        <li className="p-2">
                            <Link href='/'>
                                Hello dropdown
                            </Link>
                        </li>
                        <li className="p-2">
                            <Link href='/'>
                                Hello dropdown
                            </Link>
                        </li>
                        <li className="p-2">
                            <Link href='/'>
                                Hello dropdownnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className={` absolute xl:relative top-20 xl:top-0 bg-white xl:bg-transparent xl:border-0 border-2
                    ${openSP && open ? 'w-full opacity-100 z-[5] xl:w-1/2 xl:z-auto xl:h-fit h-full' : 'xl:h-fit h-full xl:w-1/2 xl:opacity-100 opacity-0 w-4/5 left-0 right-0 mx-auto xl:mx-0'}
                    transition-all duration-0 ease-in delay-0`}>
                    <ul className="absolute xl:bg-blue-400 xl:p-2 xl:opacity-0 xl:z-[-1] xl:invisible xl:translate-y-[-2em] xl:transition-all xl:duration-300 xl:ease-in-out xl:delay-0 xl:group-hover:visible xl:group:hover:delay-0 xl:group-hover:translate-y-[0] xl:group-hover:opacity-100 xl:group-hover:z-1">
                        <li className="p-1" onClick={() => setOpenSP(!openSP)}>
                            <FontAwesomeIcon icon={arrowDown} className='rotate-90 mr-2' />
                            <span className="font-bold">Trở lại</span>
                        </li>
                        <li className="p-2 font-bold">
                            <Link href='/collections/all'>
                                Tất cả
                            </Link>
                        </li>
                        <li className="p-2">
                            <Link href='/'>
                                Hello dropdown
                            </Link>
                        </li>
                        <li className="p-2">
                            <Link href='/'>
                                Hello dropdown
                            </Link>
                        </li>
                        <li className="p-2">
                            <Link href='/'>
                                Hello dropdown
                            </Link>
                        </li>
                        <li className="p-2">
                            <Link href='/'>
                                Hello dropdown
                            </Link>
                        </li>
                        <li className="p-2">
                            <Link href='/'>
                                Hello dropdownnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
                            </Link>
                        </li>
                    </ul>
                </div>


                <div className={` xl:block absolute xl:relative top-20 xl:top-0 bg-white xl:bg-transparent xl:border-0 border-2
                    ${open ? 'w-full opacity-100 z-[4] xl:w-1/2 xl:z-auto xl:h-fit h-full' : 'xl:h-fit h-full xl:w-1/2 xl:opacity-100 opacity-0 w-4/5 left-0 right-0 mx-auto xl:mx-0'}
                    transition-all duration-0 ease-in delay-0`}>
                    <ul
                        className="flex flex-col list-none xl:flex-row flex-wrap xl:justify-between border-b-0 pl-0"
                        role="tablist"
                        data-te-nav-ref>
                        <li className="p-2 xl:p-0">
                            <Link href='/' role="presentation" className="block flex flex-row items-center border-x-0 border-b-2 border-t-0 border-transparent xl:py-3.5 text-base leading-tight text-black relative transition-all w-min-content
                                xl:before:w-0 xl:before:h-1 xl:before:absolute xl:before:bottom-0 xl:before:right-0 xl:before:bg-blue-400 xl:before:transition-all xl:before:duration-500
                                xl:hover:before:w-full xl:hover:before:left-0 xl:hover:before:bg-red-500">
                                Trang chủ
                            </Link>
                        </li>

                        <li className="p-2 xl:p-0">
                            <Link href='/' role="presentation" className="block flex flex-row items-center border-x-0 border-b-2 border-t-0 border-transparent xl:py-3.5 text-base leading-tight text-black relative transition-all w-min-content
                                xl:before:w-0 xl:before:h-1 xl:before:absolute xl:before:bottom-0 xl:before:right-0 xl:before:bg-blue-400 xl:before:transition-all xl:before:duration-500
                                xl:hover:before:w-full xl:hover:before:left-0 xl:hover:before:bg-red-500">
                                Giới thiệu
                            </Link>
                        </li>

                        <li className="group p-2 xl:p-0" onClick={() => setOpenHD(!openHD)}>
                            <Link href='/' role="presentation" className="xl:block hidden flex flex-row items-center border-x-0 border-b-2 border-t-0 border-transparent xl:py-3.5 text-base leading-tight text-black relative transition-all w-min-content
                                xl:before:w-0 xl:before:h-1 xl:before:absolute xl:before:bottom-0 xl:before:right-0 xl:before:bg-blue-400 xl:before:transition-all xl:before:duration-500
                                xl:hover:before:w-full xl:hover:before:left-0 xl:hover:before:bg-red-500">
                                <span>Hướng dẫn</span>
                                <FontAwesomeIcon icon={arrowDown} className={`${open ? '-rotate-90 xl:rotate-0 duration-300 xl:group-hover:rotate-180' : 'duration-300 group-hover:rotate-180'}`} fontSize={15} />
                            </Link>
                            <div className="xl:hidden">
                                <span>
                                    Hướng dẫn
                                </span>
                                <FontAwesomeIcon icon={arrowDown} className={`${open ? '-rotate-90 xl:rotate-0 duration-300 xl:group-hover:rotate-180' : 'duration-300 group-hover:rotate-180'}`} fontSize={15} />
                            </div>
                            <div>
                                <ul className="absolute bg-[#f8fafc] p-2 opacity-0 xl:z-[-1] invisible translate-y-[-2em] transition-all duration-300 ease-in-out delay-0 xl:group-hover:visible xl:group:hover:delay-0 xl:group-hover:translate-y-[0] xl:group-hover:opacity-100 xl:group-hover:z-10">
                                    <li className="p-1">
                                        <Link href='/'>
                                            Hello dropdown
                                        </Link>
                                    </li>
                                    <li className="p-1">
                                        <Link href='/'>
                                            Hello dropdown
                                        </Link>
                                    </li>
                                    <li className="p-1">
                                        <Link href='/'>
                                            Hello dropdown
                                        </Link>
                                    </li>
                                    <li className="p-1">
                                        <Link href='/'>
                                            Hello dropdown
                                        </Link>
                                    </li>
                                    <li className="p-1">
                                        <Link href='/'>
                                            Hello dropdown
                                        </Link>
                                    </li>
                                    <li className="p-1">
                                        <Link href='/'>
                                            Hello dropdownnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="group p-2 xl:p-0" onClick={() => setOpenSP(!openSP)}>
                            <Link href='/collections/all' role="presentation" className="xl:block hidden flex flex-row items-center border-x-0 border-b-2 border-t-0 border-transparent xl:py-3.5 text-base leading-tight text-black relative transition-all w-min-content
                                xl:before:w-0 xl:before:h-1 xl:before:absolute xl:before:bottom-0 xl:before:right-0 xl:before:bg-blue-400 xl:before:transition-all xl:before:duration-500
                                xl:hover:before:w-full xl:hover:before:left-0 xl:hover:before:bg-red-500">
                                <span>Sản phẩm</span>
                                <FontAwesomeIcon icon={arrowDown} className={`${open ? '-rotate-90 xl:rotate-0 duration-300 xl:group-hover:rotate-180' : 'duration-300 group-hover:rotate-180'}`} fontSize={15} />
                            </Link>
                            <div className="xl:hidden">
                                <span>
                                    Sản phẩm
                                </span>
                                <FontAwesomeIcon icon={arrowDown} className={`${open ? '-rotate-90 xl:rotate-0 duration-300 xl:group-hover:rotate-180' : 'duration-300 group-hover:rotate-180'}`} fontSize={15} />
                            </div>

                            <div>
                                <ul className="absolute bg-[#f8fafc] p-2 opacity-0 z-[-1] invisible translate-y-[-2em] transition-all duration-300 ease-in-out delay-0 xl:group-hover:visible xl:group:hover:delay-0 xl:group-hover:translate-y-[0] xl:group-hover:opacity-100 xl:group-hover:z-10">
                                    <li className="p-1">
                                        <Link href='/'>
                                            Hello dropdown
                                        </Link>
                                    </li>
                                    <li className="p-1">
                                        <Link href='/'>
                                            Hello dropdown
                                        </Link>
                                    </li>
                                    <li className="p-1">
                                        <Link href='/'>
                                            Hello dropdown
                                        </Link>
                                    </li>
                                    <li className="p-1">
                                        <Link href='/'>
                                            Hello dropdown
                                        </Link>
                                    </li>
                                    <li className="p-1">
                                        <Link href='/'>
                                            Hello dropdown
                                        </Link>
                                    </li>
                                    <li className="p-1">
                                        <Link href='/'>
                                            Hello dropdownnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="p-2 xl:p-0">
                            <Link href='/' role="presentation" className="block flex flex-row items-center border-x-0 border-b-2 border-t-0 border-transparent xl:py-3.5 text-base leading-tight text-black relative transition-all w-min-content
                                xl:before:w-0 xl:before:h-1 xl:before:absolute xl:before:bottom-0 xl:before:right-0 xl:before:bg-blue-400 xl:before:transition-all xl:before:duration-500
                                xl:hover:before:w-full xl:hover:before:left-0 xl:hover:before:bg-red-500">
                                <span>Review</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header