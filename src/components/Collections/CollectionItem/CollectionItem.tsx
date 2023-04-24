import Link from "next/link"
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const angleLeft = findIconDefinition({ prefix: 'fas', iconName: 'angle-right' })
const CollectionItem = () => {

    return (
        <div className="flex flex-row justify-evenly md:w-2/5 w-full md:p-0 p-2">
            <div>
                <h3 className="text-lg font-normal">Bộ sưu tập</h3>
                <span className="text-xl font-medium">Nendoroid</span>
                <p className="font-light py-3.5">Dòng chibi figure được yêu thích nhất,<br /> nhiều gương mặt thỏa sức tạo dáng</p>
                <Link href='/' className="py-1 rounded-md bg-black text-white">
                        <span className="p-1 z-[5] rounded-md relative before:z-[-1] before:bottom-0 before:left-0 before:absolute before:rounded-md before:w-0 before:h-full before:bg-[#dc2626] before:transition-all before:duration-500 before:linear hover:before:w-full">Xem ngay <FontAwesomeIcon icon={angleLeft}></FontAwesomeIcon></span>
                </Link>
            </div>
            <div className="w-60 h-auto overflow-hidden">
                <Link href='/'>
                    <img className="max-w-full max-h-full hover:scale-125 transition-all duration-500 ease-in" src='https://product.hstatic.net/1000160337/product/nendoroid_arknights_blaze__3__b566960390ad4d13a41bfb05aafd9fa8_master.jpg' alt="" />
                </Link>
            </div>
        </div>
    )
}

export default CollectionItem