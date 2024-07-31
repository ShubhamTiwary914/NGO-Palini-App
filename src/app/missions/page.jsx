import AboutSection from "./About";
import Stats from "./Stats";
import DrivesCarousel from './DrivesCarousel'
import Divider from '@mui/material/Divider';
import drives from './../../store/controllers/drives.store'



// const fetchDrivesInRange = async (leap = 28) => {
//   const today = new Date();
//   const prevDate = new Date(today);
//   const nextDate = new Date(today);
//   prevDate.setDate(today.getDate() - leap);
//   nextDate.setDate(today.getDate() + leap);

//   const allDrives = await drives.fetchDrives(drives.defaultLimit * 2, prevDate, nextDate);
//   const completedDrives = allDrives.filter(drive => drive.deadline.toDate() < today)
//   const upcomingDrives = allDrives.filter(drive => drive.deadline.toDate() >= today );

//   return [completedDrives, upcomingDrives];
// };



//get completed drives -> from yesterday till prev 'leap' days ago
const get_completedDrives = async (leap=28) => {
  const yesterday = new Date();
  const prevDate = new Date()
  yesterday.setDate(yesterday.getDate()-1)
  prevDate.setDate(yesterday.getDate() - leap + 1);
  return await drives.fetchDrives(drives.defaultLimit, prevDate, yesterday)
}

//get next drives (including today) -> from today till next 'leap' days
const get_upcomingDrives = async (leap=28) => {
  const today = new Date();
  const nextDate = new Date()
  nextDate.setDate(today.getDate() + leap)
  return await drives.fetchDrives(drives.defaultLimit, today, nextDate)
}


export default async function Missions(){
  const ongoingDrives = await get_upcomingDrives()
  const completedDrives = await get_completedDrives()

  return(
    <section>
      <AboutSection />
      <Stats />
      <DrivesCarousel driveType="ongoing" drives={ongoingDrives} />
      <DrivesCarousel driveType="completed" drives={completedDrives} />
      <Divider />
    </section>
  )
}