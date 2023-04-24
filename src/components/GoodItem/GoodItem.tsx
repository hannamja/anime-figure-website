import Link from "next/link"
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const angleLeft = findIconDefinition({ prefix: 'fas', iconName: 'angle-right' })
const cartPlus = findIconDefinition({prefix: 'fas', iconName:'cart-plus'})
const GoodItem = () => {
    return (
        <div className="group md:w-52 h-auto overflow-hidden w-40">
            <div className="w-full h-64 flex flex-col justify-center items-center">
                <Link href='/' className="my-auto">
                    <img className="max-w-auto max-h-auto" src="https://product.hstatic.net/1000160337/product/style_code_geass_lelouch_of_the_rebellion_villetta_nu_bunny_ver._1__6__9db1fb25a9214d609c1b8326563305ac_master.jpg" />
                </Link>
            </div>
            <div className="flex flex-col justify-center items-center group-hover:bg-[#f1f5f9] group-hover:translate-y-[-2em] translate-y-[2em] transition-all duration-500 linear">
                <span>SEI illustration by CABA 1/6</span>
                <span>6,450,000₫</span>
            </div>
            <div className="flex flex-row justify-center opacity-0 group-hover:opacity-100 group-hover:translate-y-[-1em] translate-y-[2em] transition-all duration-500 linear">
                <div className="py-2 rounded-md bg-black text-white group-hover:w-auto group-hover:h-auto">
                    <span className="p-1 z-[5] rounded-md relative opacity-0 w-0 h-0 group-hover:w-auto group-hover:h-auto group-hover:opacity-100 before:z-[-1] before:bottom-0 before:left-0 before:absolute before:rounded-md before:w-0 before:h-full before:bg-[#dc2626] before:transition-all before:duration-500 before:linear hover:before:w-full">Xem ngay <FontAwesomeIcon icon={angleLeft}></FontAwesomeIcon></span>
                    <span className="p-1 z-[5] rounded-md relative opacity-0 w-0 h-0 group-hover:w-auto group-hover:h-auto group-hover:opacity-100 before:z-[-1] before:bottom-0 before:left-0 before:absolute before:rounded-md before:w-0 before:h-full before:bg-[#dc2626] before:transition-all before:duration-500 before:linear hover:before:w-full"><FontAwesomeIcon icon={cartPlus}></FontAwesomeIcon></span>
                </div>
            </div>
        </div>
    )
}
export default GoodItem