import React from 'react';
import Image from 'next/image';
import phone from '@/public/images/phone.svg'
import mail from '@/public/images/mail.svg'
import linkedin from '@/public/images/in.svg'
import facebook from '@/public/images/facebook.svg'
import twitter from '@/public/images/twitter.svg'
import diezd from '@/public/images/diezd.svg'
import clock from '@/public/images/Vector.svg'
import publicImg from '@/public/images/public.svg'
import network from '@/public/images/network.svg'
import destination from '@/public/images/destination.svg'
import personal from '@/public/images/profil.svg'

const ProfileSidebar: React.FC = () => {
  return (
    <div className="w-[225px] min-h-[664px] z-0 flex flex-col gap-4 mt-[-1.5rem] ml-10 mr-5">

      <div

        className="w-[225px] min-h-[130px] bg-white p-6 rounded-tl-[16px] flex flex-col items-start justify-center"
      >
        <div className='flex items-center justify-start'>
          <Image
            src={phone}
            alt='phone'
            className=" cursor-pointer  w-5 h-9 mr-3"
          />

          <div className='text-black font-inter text-[14px] font-medium '>07911 654321</div>

        </div>

        <div className='flex items-center justify-center'>
          <Image
            src={mail}
            alt='mail'
            className=" cursor-pointer  w-5 h-9 mr-3"
          />

          <div className='text-black font-inter text-[14px] font-medium '>avd.yana@videorollnet</div>

        </div>

        <div className='flex items-center justify-center'>
          <Image
            src={linkedin}
            alt='linkedin'
            className=" cursor-pointer  w-5 h-9 mr-3"
          />

          <Image
            src={facebook}
            alt='facebook'
            className=" cursor-pointer  w-5 h-9 mr-3"
          />

          <Image
            src={twitter}
            alt='twitter'
            className=" cursor-pointer  w-5 h-9 mr-3"
          />
        </div>



      </div>



      <div

        className="w-[225px] min-h-[130px] bg-white p-6 rounded-tl-[16px] flex flex-col items-start justify-center"
      >


        <div className='text-black font-inter text-[14px] font-medium '>Hire Date</div>

        <div className='text-black font-inter text-[14px] font-medium mt-2'>Sep. 3,2020</div>

        <div className='text-black font-inter text-[14px] font-medium '>3y - 9m - 20d</div>

      </div>


      <div

        className="w-[225px] min-h-[130px] bg-white p-6 rounded-tl-[16px] flex flex-col items-start justify-center"
      >
        <div className='flex items-center justify-start'>
          <Image
            src={diezd}
            alt='dieszd'
            className=" cursor-pointer  w-5 h-9 mr-3"
          />

          <div className='text-black font-inter text-[14px] font-medium '>5</div>

        </div>

        <div className='flex items-center justify-center'>
          <Image
            src={clock}
            alt='clock'
            className=" cursor-pointer  w-5 h-9 mr-3"
          />

          <div className='text-black font-inter text-[14px] font-medium '>Full-Time</div>

        </div>

        <div className='flex items-center justify-center'>
          <Image
            src={publicImg}
            alt='Public'
            className=" cursor-pointer  w-5 h-9 mr-3"
          />

          <div className='text-black font-inter text-[14px] font-medium '>Operations</div>

        </div>

        <div className='flex items-center justify-center'>
          <Image
            src={network}
            alt='network'
            className=" cursor-pointer  w-5 h-9 mr-3"
          />

          <div className='text-black font-inter text-[14px] font-medium '>Europe</div>

        </div>

        <div className='flex items-center justify-center'>
          <Image
            src={destination}
            alt='mail'
            className=" cursor-pointer  w-5 h-9 mr-3"
          />

          <div className='text-black font-inter text-[14px] font-medium '>London, UK</div>

        </div>






      </div>


      <div

        className="w-[225px] min-h-[130px] bg-white p-6 rounded-tl-[16px] flex flex-col items-start justify-center"
      >
        <div className='text-black font-inter text-[14px] font-medium mb-2'>Direct Reports</div>
        <div className='flex items-center justify-start'>
          <Image
            src={personal}
            alt='personal'
            className=" cursor-pointer  w-5 h-9 mr-3"
          />

          <div className='text-black font-inter text-[14px] font-medium '>Shane</div>

        </div>

        <div className='flex items-center justify-center'>
          <Image
            src={personal}
            alt='personal'
            className=" cursor-pointer  w-5 h-9 mr-3"
          />

          <div className='text-black font-inter text-[14px] font-medium '>Nathan</div>

        </div>

        <div className='flex items-center justify-center'>
          <Image
            src={personal}
            alt='personal'
            className=" cursor-pointer  w-5 h-9 mr-3"
          />

          <div className='text-black font-inter text-[14px] font-medium '>Mitchell</div>

        </div>

        <div className='flex items-center justify-center'>
          <Image
            src={personal}
            alt='personal'
            className=" cursor-pointer  w-5 h-9 mr-3"
          />

          <div className='text-black font-inter text-[14px] font-medium '>Philip</div>

        </div>

        <div className='flex items-center justify-center'>
          <Image
            src={personal}
            alt='personal'
            className=" cursor-pointer  w-5 h-9 mr-3"
          />

          <div className='text-black font-inter text-[14px] font-medium '>4 More...</div>

        </div>






      </div>


    </div>
  );
};

export default ProfileSidebar;
