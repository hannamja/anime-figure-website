import AvailableGoods from '@/src/components/AvailableGoods/AvailableGoods'
import Collections from '@/src/components/Collections/Collections'
import Footer from '@/src/components/Footer/Footer'
import Header from '@/src/components/Header/Header'
import OrderGoods from '@/src/components/OrderGoods/OrderGoods'
import ScaleFigGoods from '@/src/components/ScaleFigGoods/ScaleFigGoods'
import Slider from '@/src/components/Slider/Slider'

export default function Home() {
  return (
    <>
      <Header />
      <Slider />
      <Collections />
      <OrderGoods />
      <AvailableGoods />
      <ScaleFigGoods />
      <Footer />
    </>
  )
}
