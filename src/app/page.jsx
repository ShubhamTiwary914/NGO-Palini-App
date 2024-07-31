

import Hero from './home/Hero';
import FeatureCards from './home/FeatureCards';
import MissionGoals from './home/MissionGoals';
import DonationCarousel from './home/DonationCarousel';
import VolunteerForm from './home/VolunteerForm';



export default async function Home() {

  return (
    <main>
      <Hero />
      <FeatureCards />
      <MissionGoals />
      <DonationCarousel />
      <VolunteerForm />
    </main>
  );
}
