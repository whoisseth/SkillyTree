import React from 'react'
import Link from 'next/dist/client/link'
import Image from 'next/image'
import NextAndBackBtn from '../../components/TutorDashboardRegistration/NextAndBackBtn'
import BlueTickLine from '../../components/TutorDashboardRegistration/BlueTick'
function Video() {
  return (
    <div>
      <PageTitle />
      <hr />
      <main className="mb-8 flex flex-col gap-5 p-5   font-roboto text-[#545454] md:px-16">
        <div className="flex flex-col gap-5 lg:grid lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <h2 className="text-xl font-medium capitalize">
              record your video
            </h2>
            <p className="text-sm capitalize text-[#545454] md:w-[28.25rem] ">
              now interoduce yourself to students! you can watch and re-record
              your intro before you submit it.
            </p>
            <div className="h-60 w-full overflow-hidden rounded-md bg-gray-200 md:w-[28.25rem] ">
              <img src="" alt="img" />
            </div>
            <StartRecordingBtn />
            <section className="capitalize">
              <h3 className="text-lg font-medium ">
                or paste a link to your video
              </h3>
              <p className="text-sm">
                learn how to upload videos to
                <span className="text-[#42ADE2]">capitalize</span> or
                <span className="text-[#42ADE2]"> vimeo</span>
              </p>
            </section>
            <input
              type="text"
              placeholder="www.youtube.com/watch?sjvcscksb"
              className="tutor-dashboard-input-style"
            />
          </div>
          <div>
            <h2 className="text-xl font-medium capitalize">
              make a great first impression
            </h2>
            <BlueTick />
          </div>
        </div>
        <NextAndBackBtn
          nextLink="/tutorDashboard/availability"
          backLink="/tutorDashboard/description"
        />
      </main>
    </div>
  )
}

export default Video

const BlueTick = () => (
  <div>
    <p className=" mb-2  text-sm font-medium capitalize"> technical</p>
    <div className="flex flex-col gap-4">
      <BlueTickLine data="record in horizontal mode" />
      <BlueTickLine data=" position the camera at the eye level" />
      <BlueTickLine data="use nuteral lighting and background" />
      <BlueTickLine data="avoid logos or contact information" />
      <BlueTickLine data="you are the only person in the photo" />
      <p className=" -mb-2  text-sm font-medium capitalize"> technical</p>

      <BlueTickLine data="greet your students warmly" />
      <BlueTickLine data="highlight any teaching certification" />
      <BlueTickLine data="present your tutoring experience" />
      <BlueTickLine data="invite students to book a trial session" />
      <Example />
    </div>
  </div>
)

const Example = () => {
  return (
    <Link href="#">
      <a className="flex items-center gap-2 self-start rounded-lg   ">
        <div className="relative h-[14px] w-[22px]">
          <Image
            src="/Images/TutorsDashboard/video-blue.svg"
            alt=""
            layout="fill"
            objectFit="cover"
            className=""
          />
        </div>
        <span className=" capitalize  text-[#1180BE]">example</span>
      </a>
    </Link>
  )
}
const PageTitle = () => {
  return (
    <div className="px-5 pt-3 pb-4 font-poppins text-2xl font-semibold capitalize text-[#5E5252] md:px-16">
      video introduction
    </div>
  )
}

const StartRecordingBtn = () => {
  return (
    <Link href="#">
      <a className="flex items-center gap-2 self-start rounded-lg bg-[#FC4D6D] py-2 px-5">
        <div className="relative h-[14px] w-[22px]">
          <Image
            src="/Images/TutorsDashboard/video.svg"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
        <span className="font-medium capitalize text-white">
          start recording
        </span>
      </a>
    </Link>
  )
}
