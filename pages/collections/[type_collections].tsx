import Banner from "@/src/components/Banner/Banner"
import BreadCrums from "@/src/components/BreadCrums/BreadCrums"
import Filter from "@/src/components/Filter/Filter"
import Footer from "@/src/components/Footer/Footer"
import GoodsContainer from "@/src/components/GoodsContainer/GoodsContainer"
import Header from "@/src/components/Header/Header"

const Collections = () => {

    return (
        <>
            <Header />
            <BreadCrums />
            <Banner />
            <Filter />
            <GoodsContainer />
            <Footer />
        </>
    )
}

export default Collections