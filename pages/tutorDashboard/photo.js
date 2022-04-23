import React from 'react'
import Dropzone from 'react-dropzone'
import Image from 'next/image'
import { useState } from 'react'
import NextAndBackBtn from '../../components/TutorDashboardRegistration/NextAndBackBtn'
import BlueTickLine from './../../components/TutorDashboardRegistration/BlueTick'
function ProfilePhoto() {
  const [fileNames, setFileNames] = useState([])
  const handleDrop = (acceptedFiles) =>
    setFileNames(acceptedFiles.map((file) => file.name))
  return (
    <div>
      <div className="px-5 pt-3 pb-4 font-poppins text-2xl font-semibold capitalize text-[#5E5252] md:px-16">
        profile photo
      </div>
      <hr />
      <main className="mb-8 flex flex-col gap-8 p-5   font-roboto text-[#545454] md:px-16">
        <h2 className="text-[22px]  font-medium capitalize text-[#545454]">
          make a great first impression
        </h2>
        <p className="capitalize text-[#545454] ">
          tutor who look friendly and professional get the most students
        </p>
        {/* 3 */}
        <section className="flex items-center gap-2">
          <button className="rounded-lg border-[1px] border-[#FC4D6D]  py-3 px-6 text-sm font-medium  capitalize">
            upload a photo
          </button>
          <p className="text-xs">
            <div className="">JPG or PNG format</div>
            <div>Maximum size - 2MB.</div>
          </p>
        </section>
        <div className="  lg:grid  lg:grid-cols-2">
          <Dropzone
            onDrop={handleDrop}
            accept="image/*"
            minSize={1024}
            maxSize={3072000}
          >
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps({ className: 'dropzone md:w-96 ' })}>
                <input {...getInputProps()} />
                <p className="py-[147px] capitalize  ">
                  drag and drop your photo here
                </p>
              </div>
            )}
          </Dropzone>
          <div className="space-y-4 ">
            <h3 className="text-[22px]  font-medium capitalize text-[#545454]">
              Tips for an amazing photo
            </h3>
            <section className="flex gap-2">
              <div className="h-[106px] w-[106px] bg-blue-300">
                <img src="" alt="img" />
              </div>
              <div className="h-[106px] w-[106px] bg-blue-300">
                <img src="" alt="img" />
              </div>
              <div className="h-[106px] w-[106px] bg-blue-300">
                <img src="" alt="img" />
              </div>
            </section>
            <section className="flex flex-col gap-4">
              <BlueTickLine data="smile and look at the camera" />
              <BlueTickLine data=" your photo is centered and upright" />
              <BlueTickLine data=" smile and look at the camera" />
              <BlueTickLine data=" use nuteral lighting and background" />

              <div className="flex items-center gap-2  text-[#838383]">
                <div className="relative h-4 w-4 ">
                  <Image
                    src="/Images/ProfilePhoto/blue-tick.png"
                    objectFit="cover"
                    layout="fill"
                  />
                </div>
                <div className="text-sm capitalize">
                  <div> your face and eyes are fully visible</div>
                  <div>(except for religious reasons)</div>
                </div>
              </div>
              <BlueTickLine data="avoid logos or contact information" />
              <BlueTickLine data=" you are the only person in the photo" />
            </section>
          </div>
        </div>
        <NextAndBackBtn
          backLink="/tutorDashboard/about"
          nextLink="/tutorDashboard/certification"
        />
      </main>
    </div>
  )
}

export default ProfilePhoto
