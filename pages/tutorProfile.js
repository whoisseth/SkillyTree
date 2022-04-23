import AboutTutor from '../components/TutorProfile/AboutTutor'
import Resume from '../components/TutorProfile/Resume'
import Schedule from '../components/TutorProfile/Schedule'
import Subject from '../components/TutorProfile/Subject'
import Testimonial from '../components/TutorProfile/Testimonial'
import TutorHeroPage from '../components/TutorProfile/TutorHeroPage'
import TutorHeroPageMobile from '../components/TutorProfile/TutorHeroPageMobile'
import Footer from './../components/HomePage/Footer'

function TutorProfile() {
  return (
    <div className="">
      <TutorHeroPageMobile />
      <TutorHeroPage />
      <AboutTutor />
      <Schedule />
      <Resume />
      <Testimonial />
      <Subject />
      <div className='md:px-8 mt-4'>      <Footer />
</div>
    </div>
  )
}


export default TutorProfile
