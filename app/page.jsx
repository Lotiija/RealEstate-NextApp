import Hero from '@/components/Hero';
import HomeProperties from '@/components/HomeProperty';
import InfoBoxes from '@/components/infoBoxes';
import connectDB from '@/config/database';

const HomePage = async () => {
  await connectDB();

  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
    </>
  )
}

export default HomePage;