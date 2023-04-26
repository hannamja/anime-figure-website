import BreadCrums from "@/src/components/BreadCrums/BreadCrums"
import Footer from "@/src/components/Footer/Footer"
import Header from "@/src/components/Header/Header"
import ProductDetail from "@/src/components/ProductDetail/ProductDetail"
import RelatedProducts from "@/src/components/RelatedProducts/RelatedProducts"


export default function Products() {

    return (
        <>
            <Header />
            <BreadCrums />
            <ProductDetail />
            <RelatedProducts />
            <Footer />
        </>
    )
}

