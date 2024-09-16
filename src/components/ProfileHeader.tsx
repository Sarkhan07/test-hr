import React from 'react';
import Image from 'next/image';
import { FaChevronDown } from 'react-icons/fa';
import config from '@/public/images/config.svg'

interface ProfileHeader {
  userName: string;
  userAvatar: string;
}


const ProfileHeader: React.FC<ProfileHeader> = ({ userName, userAvatar }) => {
  const tabs = [
    'Personal',
    'Job',
    'Time Off',
    'Emergency',
    'Documents',
    'Notes',
    'Benefits',
    'Trainings',
    'Assets',
  ];

  return (
 
       <div className="bg-[#DAE6F2] w-full h-auto md:h-[200px] flex flex-col justify-center px-4 md:px-8 py-6 pb-4 md:pb-2 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center w-full">
       
           <div className="w-24 h-24 md:w-36 md:h-36 rounded-full mb-4 md:mb-0 z-10  ml-0 md:ml-12 md:mr-20">
          <Image
            src={userAvatar}
            alt="Profile Picture"
            width={150}
            height={150}
            className="object-cover rounded-full "
          />
        </div>

        <div className="flex-1 text-center md:text-left w-full">  
            <h1 className="font-inter text-2xl md:text-3xl font-semibold text-black">
            {userName}
            </h1>

           <div className="flex items-center justify-center md:justify-end space-x-4 mt-4 md:mt-0">

          
              {/* <button className="w-[130px] md:w-[162px] h-[33px] px-2 md:px-1 py-[8px] gap-[8px] rounded-tl-[8px] border-2 border-[#7C96B1] text-black font-inter text-sm font-normal flex items-center justify-center"> */}
             <button className="w-32 md:w-40 h-10 px-4 md:px-5 py-2 gap-2 rounded-tl-lg border-2 border-[#7C96B1] text-black font-inter text-sm font-normal flex items-center justify-center">
                 <span>Request Change</span>
              <FaChevronDown />
            </button>
          
         
               <div className="w-10 md:w-12 gap-2 h-10 border-2 border-[#7C96B1] flex items-center justify-center rounded-md text-black">
              <Image
                src={config}
                alt='config'
                className="rounded-full cursor-pointer  w-5 h-9"
              />
              <FaChevronDown />
            </div>

          </div>
         
            < div className="flex items-center justify-center md:justify-start space-x-2 md:space-x-4 mt-5">
            {tabs.map((tab, index) => (
              <a
                key={index}
                href="#"
                className={`${tab === "Time Off" ? "bg-[#FCFCFE] border-blue-500" : "border-transparent"
                  } text-black hover:text-gray-800 px-2 md:px-3 text-center py-2 md:py-3 border-b-2 hover:border-blue-500`}
              >
                {tab}
              </a>
            ))}
        
               <div className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 cursor-pointer">
                  <span>More</span>
                  <FaChevronDown />
                </div>
          </div>
        </div>




      </div>
    </div>
  );
};

export default ProfileHeader;
