import Hero from '@/components/Hero';
import HomeProperties from '@/components/HomeProperty';
import InfoBoxes from '@/components/infoBoxes';

const HomePage = () => {
  console.log(process.env.MONGODB_URI)

  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
    </>
  )
}

export default HomePage;