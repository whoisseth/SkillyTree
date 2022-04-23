import Image from 'next/image'
import Link from 'next/dist/client/link'
function About() {
  return (
    <div className=" pb-8  ">
      <style jsx>
        {`
          body {
            background-color: blue;
          }
        `}
      </style>
      <div className="px-5 pt-3 pb-4 font-poppins text-2xl font-semibold capitalize text-[#5E5252] md:px-16">
        About
      </div>
      <hr />
      <form action="" className="  p-5 md:px-16">
        <div className="mb-8 flex  flex-col gap-8 ">
          <FirstName />
          <LastName />
          <Email />
          <Country />
          <LanguageAndLevel />
          <Subject />
          <HourlyRate />
          <TeachingExperienceDesc />
          <CurrentSituationDesc />
          <PhoneNumber />
          <Age />
        </div>
        <Link href={'/tutorDashboard/photo'}>
          <a className="tutor-dashboard-btn   md:inline-flex  ">next</a>
        </Link>
      </form>
    </div>
  )
}

export default About

const FirstName = () => (
  <div className="tutors-input-n-label-style   ">
    <label htmlFor="" className=" tutor-dashboard-label-style  ">
      first name
    </label>
    <input
      className="tutor-dashboard-input-style "
      type="text"
      placeholder="john"
    />
  </div>
)
const LastName = () => (
  <div className=" tutors-input-n-label-style">
    <label htmlFor="" className="tutor-dashboard-label-style ">
      last name
    </label>
    <input
      className="tutor-dashboard-input-style"
      type="text"
      placeholder="smith"
    />
  </div>
)
const Email = () => (
  <div className="tutors-input-n-label-style">
    <label htmlFor="" className="tutor-dashboard-label-style">
      email
    </label>
    <input
      className="tutor-dashboard-input-style"
      type="email"
      name=""
      id=""
      placeholder="johnsmith@gmail.com"
    />
  </div>
)
const Country = () => (
  <div className="tutors-input-n-label-style">
    <label htmlFor="" className="tutor-dashboard-label-style">
      country of origin
    </label>
    {/* <input
      className="tutor-dashboard-input-style"
      type="text"
      placeholder="india"
    /> */}
    <select
      id="cars"
      name="cars "
      className=" cursor-pointer rounded-lg border-2 bg-white py-3 px-2 font-roboto text-[#9E9E9E] outline-none md:w-96 "
    >
      <option value="">India </option>
      <option value="">Pakistan </option>
      <option value="">America </option>
    </select>
  </div>
)
const LanguageAndLevel = () => (
  <div className="grid grid-cols-2 gap-3">
    {/* language */}
    <div className="tutors-input-n-label-style">
      <label htmlFor="" className="tutor-dashboard-label-style">
        language spoken
      </label>
      <input
        type="text"
        placeholder="english"
        className="tutor-dashboard-input-style"
      />
      <div className="-mt-2 text-sm font-medium capitalize text-[#42ADE2]">
        add another language
      </div>
    </div>
    {/* level */}
    <div className="tutors-input-n-label-style flex flex-col">
      <label htmlFor=" " className="tutor-dashboard-label-style">
        level
      </label>
      <input
        type="text "
        className="tutor-dashboard-input-style"
        placeholder="c1"
      />
    </div>
  </div>
)
const Subject = () => (
  <div className="tutors-input-n-label-style">
    <label htmlFor="" className="tutor-dashboard-label-style">
      subject Taught
    </label>

    <select
      id="cars"
      name="cars "
      className="cursor-pointer rounded-lg border-2 bg-white py-3 px-2 font-roboto capitalize text-[#9E9E9E] outline-none md:w-96 "
    >
      <option value="">Math </option>
      <option value="">English </option>
      <option value="">Science </option>
    </select>
  </div>
)
const HourlyRate = () => (
  <div className="tutors-input-n-label-style">
    <label htmlFor="" className="tutor-dashboard-label-style">
      Hourly Rate
    </label>
    <div className="space-x-4">
      <input
        className="tutor-dashboard-input-style w-28"
        type="text"
        placeholder="5"
      />
      <span>$</span>
    </div>
    <p className="mt-1 text-[13px] capitalize leading-4">
      new tutor charge $8 for this subject to get students faster. You can
      change your Rate any time
    </p>
  </div>
)

const TeachingExperienceDesc = () => (
  <div className="tutors-input-n-label-style">
    <label htmlFor="" className="tutor-dashboard-label-style">
      describe your teaching experience
    </label>

    <select
      id="cars"
      name="cars "
      className=" cursor-pointer rounded-lg border-2 bg-white py-3 px-2 font-roboto capitalize text-[#9E9E9E] outline-none md:w-96 "
    >
      <option value="">i have tought in an informal setting </option>
    </select>
  </div>
)
const CurrentSituationDesc = () => (
  <div className="tutors-input-n-label-style">
    <label htmlFor="" className="tutor-dashboard-label-style">
      describe your current situation
    </label>
    <select
      id="cars"
      name="cars "
      className="cursor-pointer rounded-lg border-2 bg-white py-3 px-2 font-roboto capitalize text-[#9E9E9E] outline-none md:w-96 "
    >
      <option value="">Math </option>
      <option value="">English </option>
      <option value="">Science </option>
    </select>
  </div>
)

const PhoneNumber = () => (
  <div className="tutors-input-n-label-style">
    <label htmlFor="" className="tutor-dashboard-label-style">
      phone number <span className="text-gray-4 opacity-40">(optional)</span>
    </label>
    <div className="flex items-center gap-2 overflow-hidden rounded-xl border-2 bg-white px-2 ">
      <div className="relative  h-5 w-5 ">
        <Image
          src="/Images/TutorsDashboard/country-Flag.png"
          objectFit="cover"
          layout="fill"
        />
      </div>
      <input
        className="border-none py-3 px-2 text-[#545454]  outline-none  "
        type="text"
        value="+1"
      />
    </div>
    <p className="mt-1 capitalize leading-4 tracking-wider">
      receive <span className="uppercase">sms</span>-notification about the new
      message from students.
    </p>
  </div>
)

const Age = () => (
  <div className="space-y-2">
    <label htmlFor="" className="tutor-dashboard-label-style">
      age
    </label>
    <div className="flex items-center gap-3">
      <input
        type="checkbox"
        name=""
        id=""
        className=" h-6 w-6 border-2 border-gray-300 bg-blue-200 "
      />
      <span className="capitalize">i confirm i'm over 18</span>
    </div>
  </div>
)
