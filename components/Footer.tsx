import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
           Take a Peek into <span className="text-purple">My</span> World
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          & feel free to connect on a cup of ☕
        </p>
        <a href="mailto:saharsh3008@gmail.com">
          <MagicButton
            title="Reach Out ✉️"
            icon
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Saharsh
        </p>
        <div className="flex items-center md:gap-3 gap-6">
{/*           {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Image src={profile.img} alt="icons" width={20} height={20} />
            </div>
          ))} */}
          <a href='https://github.com/saharsh3008'>
          <MagicButton 
          title='Github'
          icon="/git.svg"
          position='centre'
          />
          </a>
          <a href='https://www.linkedin.com/in/saharsh08/'>
          <MagicButton 
          title='Linkedin'
          icon="/git.svg"
          position='centre'
          />
          </a>
        </div>
        </div>
        </footer>
  )
}

export default Footer
