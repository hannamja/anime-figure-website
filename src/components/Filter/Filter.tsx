import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core'
import { useState } from 'react'

const aZ = findIconDefinition({ prefix: 'fas', iconName: 'arrow-down-a-z' })
const arrowDown = findIconDefinition({ prefix: 'fas', iconName: 'angle-down' })
const filter = findIconDefinition({ prefix: 'fas', iconName: 'filter' })

const Filter = () => {
    const [openPL, setOpenPL] = useState(false)
    const [openPL1, setOpenPL1] = useState(false)
    const [openPL2, setOpenPL2] = useState(false)
    const [openPL3, setOpenPL3] = useState(false)
    const [openSort, setOpenSort] = useState(false)
    return (
        <div className='container m-auto xl:p-8 xl:flex xl:flex-col xl:justify-between xl:h-40 p-1'>
            <div className='hidden xl:flex flex-row justify-between items-center'>
                <h1 className='font-bold text-4xl'>Tất cả sản phẩm</h1>
                <div className='group w-52 h-fit border-2 p-1 relative'>
                    <div className='flex flex-row items-center justify-between'>
                        <div>
                            <FontAwesomeIcon icon={aZ} />
                            <span>Sort</span>
                        </div>
                        <FontAwesomeIcon icon={arrowDown} />
                    </div>
                    <div>
                        <ul className='w-full absolute bg-[#f8fafc] p-2 opacity-0 z-[-1] invisible translate-y-[-2em] transition-all duration-300 ease-in-out delay-0 xl:group-hover:visible xl:group:hover:delay-0 xl:group-hover:translate-y-[0] xl:group-hover:opacity-100 xl:group-hover:z-10 xl:top-full xl:left-0'>
                            <li className='p-1'>Giá: Tăng dần</li>
                            <li className='p-1'>Giá: Giảm dần</li>
                            <li className='p-1'>Tên: A-Z</li>
                            <li className='p-1'>Tên: Z-A</li>
                            <li className='p-1'>Cũ nhất</li>
                            <li className='p-1'>Mới nhất</li>
                            <li className='p-1'>Bán chạy nhât</li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className='hidden xl:flex flex-row justify-between'>
                <div className='group w-28 h-fit border-r-2 p-1'>
                    <div>
                        <FontAwesomeIcon icon={filter} />
                        <span className='ml-1'>Phân loại</span>
                    </div>
                </div>

                <div className='group relative w-52 h-fit border-2 p-1'>
                    <div className='flex flex-row items-center justify-between'>
                        <div>
                            <span>Thương hiệu</span>
                        </div>
                        <FontAwesomeIcon icon={arrowDown} />
                    </div>
                    <div>
                        <ul className='w-full absolute bg-[#f8fafc] p-2 opacity-0 z-[-1] invisible translate-y-[-2em] transition-all duration-300 ease-in-out delay-0 xl:group-hover:visible xl:group:hover:delay-0 xl:group-hover:translate-y-[0] xl:group-hover:opacity-100 xl:group-hover:z-10 xl:top-full xl:left-0'>
                            <li className='p-1'><input type='checkbox' /> Giá: Tăng dần</li>
                            <li className='p-1'><input type='checkbox' /> Giá: Giảm dần</li>
                            <li className='p-1'><input type='checkbox' /> Tên: A-Z</li>
                            <li className='p-1'><input type='checkbox' /> Tên: Z-A</li>
                            <li className='p-1'><input type='checkbox' /> Cũ nhất</li>
                            <li className='p-1'><input type='checkbox' /> Mới nhất</li>
                            <li className='p-1'><input type='checkbox' /> Bán chạy nhât</li>
                        </ul>
                    </div>
                </div>


                <div className='group relative w-52 h-fit border-2 p-1'>
                    <div className='flex flex-row items-center justify-between'>
                        <div>
                            <span>Lọc giá</span>
                        </div>
                        <FontAwesomeIcon icon={arrowDown} />
                    </div>
                    <div>
                        <ul className='w-full absolute bg-[#f8fafc] p-2 opacity-0 z-[-1] invisible translate-y-[-2em] transition-all duration-300 ease-in-out delay-0 xl:group-hover:visible xl:group:hover:delay-0 xl:group-hover:translate-y-[0] xl:group-hover:opacity-100 xl:group-hover:z-10 xl:top-full xl:left-0'>
                            <li className='p-1'><input type='checkbox' /> Giá: Tăng dần</li>
                            <li className='p-1'><input type='checkbox' /> Giá: Giảm dần</li>
                            <li className='p-1'><input type='checkbox' /> Tên: A-Z</li>
                            <li className='p-1'><input type='checkbox' /> Tên: Z-A</li>
                            <li className='p-1'><input type='checkbox' /> Cũ nhất</li>
                            <li className='p-1'><input type='checkbox' /> Mới nhất</li>
                            <li className='p-1'><input type='checkbox' /> Bán chạy nhât</li>
                        </ul>
                    </div>
                </div>


                <div className='group relative w-52 h-fit border-2 p-1'>
                    <div className='flex flex-row items-center justify-between'>
                        <div>
                            <span>Tỉ lệ</span>
                        </div>
                        <FontAwesomeIcon icon={arrowDown} />
                    </div>
                    <div>
                        <ul className='w-full absolute bg-[#f8fafc] p-2 opacity-0 z-[-1] invisible translate-y-[-2em] transition-all duration-300 ease-in-out delay-0 xl:group-hover:visible xl:group:hover:delay-0 xl:group-hover:translate-y-[0] xl:group-hover:opacity-100 xl:group-hover:z-10 xl:top-full xl:left-0'>
                            <li className='p-1'><input type='checkbox' /> Giá: Tăng dần</li>
                            <li className='p-1'><input type='checkbox' /> Giá: Giảm dần</li>
                            <li className='p-1'><input type='checkbox' /> Tên: A-Z</li>
                            <li className='p-1'><input type='checkbox' /> Tên: Z-A</li>
                            <li className='p-1'><input type='checkbox' /> Cũ nhất</li>
                            <li className='p-1'><input type='checkbox' /> Mới nhất</li>
                            <li className='p-1'><input type='checkbox' /> Bán chạy nhât</li>
                        </ul>
                    </div>
                </div>
            </div>



            <div className='xl:hidden w-full flex flex-row'>
                <div onClick={() => {setOpenPL(!openPL); setOpenSort(false)}} className='group flex w-1/2 h-fit border-2 p-1'>
                    <div>
                        <FontAwesomeIcon icon={filter} />
                        <span className='ml-1'>Phân loại</span>
                    </div>
                </div>



                <div onClick={() => {setOpenSort(!openSort);setOpenPL(false)}} className='flex flex-row items-center justify-between w-1/2 h-fit border-2 p-1'>
                    <div>
                        <FontAwesomeIcon icon={aZ} />
                        <span>Sort</span>
                    </div>
                    <FontAwesomeIcon icon={arrowDown} />
                </div>

            </div>

            <div className={`xl:hidden ${openPL ? 'block' : 'hidden'}`}>
                <div>
                    <div>
                        <div onClick={() => setOpenPL1(!openPL1)} className='flex flex-row items-center justify-between'>
                            <div>
                                <span>Thương hiệu</span>
                            </div>
                            <FontAwesomeIcon icon={arrowDown} className={`${openPL1 ? 'rotate-180' : 'rotate-0'} transition duration-500 linear`} />
                        </div>
                        <div>
                            <ul className={`w-full ${openPL1 ? 'block' : 'hidden'}`}>
                                <li className='p-1'><input type='checkbox' /> Giá: Tăng dần</li>
                                <li className='p-1'><input type='checkbox' /> Giá: Giảm dần</li>
                                <li className='p-1'><input type='checkbox' /> Tên: A-Z</li>
                                <li className='p-1'><input type='checkbox' /> Tên: Z-A</li>
                                <li className='p-1'><input type='checkbox' /> Cũ nhất</li>
                                <li className='p-1'><input type='checkbox' /> Mới nhất</li>
                                <li className='p-1'><input type='checkbox' /> Bán chạy nhât</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div onClick={() => setOpenPL2(!openPL2)} className='flex flex-row items-center justify-between'>
                            <div>
                                <span>Lọc giá</span>
                            </div>
                            <FontAwesomeIcon icon={arrowDown} className={`${openPL2 ? 'rotate-180' : 'rotate-0'} transition duration-500 linear`} />
                        </div>
                        <div>
                            <ul className={`w-full ${openPL2 ? 'block' : 'hidden'}`}>
                                <li className='p-1'><input type='checkbox' /> Giá: Tăng dần</li>
                                <li className='p-1'><input type='checkbox' /> Giá: Giảm dần</li>
                                <li className='p-1'><input type='checkbox' /> Tên: A-Z</li>
                                <li className='p-1'><input type='checkbox' /> Tên: Z-A</li>
                                <li className='p-1'><input type='checkbox' /> Cũ nhất</li>
                                <li className='p-1'><input type='checkbox' /> Mới nhất</li>
                                <li className='p-1'><input type='checkbox' /> Bán chạy nhât</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div onClick={() => setOpenPL3(!openPL3)} className='flex flex-row items-center justify-between'>
                            <div>
                                <span>Tỉ lệ</span>
                            </div>
                            <FontAwesomeIcon icon={arrowDown} className={`${openPL3 ? 'rotate-180' : 'rotate-0'} transition duration-500 linear`} />
                        </div>
                        <div>
                            <ul className={`w-full ${openPL3 ? 'block' : 'hidden'}`}>
                                <li className='p-1'><input type='checkbox' /> Giá: Tăng dần</li>
                                <li className='p-1'><input type='checkbox' /> Giá: Giảm dần</li>
                                <li className='p-1'><input type='checkbox' /> Tên: A-Z</li>
                                <li className='p-1'><input type='checkbox' /> Tên: Z-A</li>
                                <li className='p-1'><input type='checkbox' /> Cũ nhất</li>
                                <li className='p-1'><input type='checkbox' /> Mới nhất</li>
                                <li className='p-1'><input type='checkbox' /> Bán chạy nhât</li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>

            <div className={`xl:hidden ${openSort ? 'block' : 'hidden'}`}>
                <ul>
                    <li className='p-1'>Giá: Tăng dần</li>
                    <li className='p-1'>Giá: Giảm dần</li>
                    <li className='p-1'>Tên: A-Z</li>
                    <li className='p-1'>Tên: Z-A</li>
                    <li className='p-1'>Cũ nhất</li>
                    <li className='p-1'>Mới nhất</li>
                    <li className='p-1'>Bán chạy nhât</li>
                </ul>
            </div>


        </div>
    )
}
export default Filter