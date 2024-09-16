import React from 'react';
import Image from 'next/image';
import history from '../public/images/history.svg';
import plus from '../public/images/plus.svg';
import mountain from '../public/images/montain.svg';
import bigHis from '../public/images/bigHis.svg';
import pig from '../public/images/PIG.svg';
import clock from '../public/images/clock.svg';
import hismon from '../public/images/hisMon.svg';
import cross from '../public/images/cross.svg';
import deleteIcon from '../public/images/delete.svg';

const ProfileCard: React.FC = () => {
  const timeOffData = [
    { type: 'Sick', days: '3', available: 'Days Available', img: plus },
    { type: 'Annual Leave', days: '10.3', available: 'Hours Used (YTD)', img: mountain },
    { type: 'Comp/In Lieu Time', days: '0', available: 'Hours Used (YTD)', img: bigHis }
  ];
  return (
    <div className="w-full max-w-5xl min-h-[970px] gap-0 rounded-tl-lg bg-[#FCFCFE] py-8 px-4 lg:px-6">

      <div className="flex flex-col lg:flex-row justify-between items-start mb-4 lg:mr-16">
        <div className="flex items-center mb-4 lg:mb-0">
          <Image src={history} alt="icon" width={16} height={16} />
          <div className="font-inter text-xl font-medium text-left text-[#204973] ml-1 ">
            Time Off
          </div>
        </div>

        <div className='flex items-center'>
          <span className="font-inter text-sm font-medium text-black ">
            Accrual Level Start Date
            <span className="text-[#3758AB] font-medium text-sm ml-1" >
              03.09.2020
            </span>
          </span>

          <button className="min-w-36 h-8 gap-2 rounded-tl-lg border-2 border-black ml-5">
            <div className="font-inter text-sm font-medium text-center text-[#204973] ml-1">
              Add Time Off Policy
            </div>
          </button>

        </div>


      </div>

      <div className="border-b-2 border-gray-300 mb-6"></div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10 mb-6">
        {timeOffData.map((item, idx) => (
          <div key={idx} className="border border-gray-300 rounded-lg p-4 bg-[#F0F3F8] flex flex-col items-center">

            <h3 className="ml-2 text-xl font-semibold text-black">{item.type}</h3>
            <div className="flex flex-row items-center mb-2">
              <Image src={item.img} alt={item.type} width={30} height={30} />
              <p className="text-3xl font-bold text-black">
                {item.days}
              </p>
            </div>

            <p className="text-sm text-black">{item.available}</p>
            {item.type === 'Sick' && <p className="text-sm">1 day scheduled</p>}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12 mb-6">
        {['Sick Full-Time', 'Holiday Full-Time', 'Comp/in Lieu Time Flexible Policy'].map((text, idx) => (
          <div key={idx} className="flex items-center justify-center mb-2 text-black">
            <p className="font-inter text-sm font-medium">{text}</p>
          </div>
        ))}
      </div>

      <div className="border-b-2 border-gray-300 mb-6"></div>

      <div className="flex justify-between items-start mb-4 mr-16">
        <div className="flex items-center">
          <Image src={clock} alt="icon" width={16} height={16} />
          <div className="font-inter text-sm font-medium text-[#204973] ml-2 ">
            Upcoming Time Off
          </div>
        </div>

      </div>

      <div className="border-b-2 border-gray-300 mb-6"></div>

      <div className="flex justify-between items-start mb-4 mr-16">
        <div className="flex items-center">
          <Image src={plus} alt="icon" width={30} height={30} />
          <div className='flex flex-col'>

            <div className="font-inter text-sm font-medium text-black ml-2 ">
              Jan 27
            </div>

            <div className="flex items-center">
              <div className="w-2 h-2 bg-black rounded-full mr-1 ml-2"></div>
              <div className="font-inter text-sm font-medium text-black ml-1">
                1 day of Sick
              </div>
            </div>
          </div>
        </div>

      </div>


      <div className="border-b-2 border-gray-300 mb-6"></div>

      <div className="flex justify-between items-start mb-4 mr-16">
        <div className="flex items-center">
          <Image src={pig} alt="icon" width={30} height={30} />
          <div className='flex flex-col'>

            <div className="font-inter text-[14px] font-medium leading-[24.2px] text-left text-black ml-2 ">
              Jul 4
            </div>

            <div className="flex items-center">
              <div className="font-inter text-[14px] font-medium leading-[24.2px] text-left text-black ml-2">
                Independence Day
              </div>
            </div>
          </div>
        </div>

      </div>


      <div className="flex flex-col justify-between items-start mb-6">
        <div className="flex items-start mb-4 lg:mb-0">
          <Image src={hismon} alt="icon" width={16} height={16} />
          <span className="text-sm font-medium font-inter text-[#204973] ml-2">
            History
          </span>
        </div>

        <div className='flex justify-between w-full items-center'>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="border border-[#7C96B1] rounded-md p-2 mr-4 w-full lg:w-64 h-8 pr-8 text-black" />
            <div className="absolute right-[17px] top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
              <Image src={deleteIcon} alt="Clear" width={16} height={16} />
              <Image src={cross} alt="Arrow Down" width={21} height={21} />
            </div>
          </div>
          <div className="relative">
            <button className="border border-[#7C96B1] px-4 py-1 rounded-md w-24 h-8 text-black">
              ALL
            </button>
            <div className="absolute right-[2px] top-1/2 transform -translate-y-1/2 flex items-center space-x-2">

              <Image src={cross} alt="Arrow Down" width={21} height={21} />
            </div>
          </div>

          <div className="relative">

            <button className="border border-[#7C96B1] px-4 py-1 rounded-md  w-44 h-8 ml-auto text-black">
              Balance History
            </button>
            <div className="absolute right-[2px] top-1/2 transform -translate-y-1/2 flex items-center space-x-2">

              <Image src={cross} alt="Arrow Down" width={21} height={21} />
            </div>
          </div>

        </div>

      </div>


      <div className="border-b-2 border-gray-300 mb-6"></div>


      <div className="overflow-auto" >
        <table className="w-full text-left text-black text-sm">
          <thead>
            <tr className="border-b-2 border-gray-300 bg-[#DAE6F2] ">
              <th>Date</th>
              <th className="pl-5 lg:pl-20">Description</th>
              <th className="pl-12 lg:pl-80">Used Days (-)</th>
              <th>Earned Days (+)</th>
              <th>Expiration</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {[
              { date: '23/05/2024', desc: 'Accrual for May', used: '-3', earned: '3', expiration: 'N/A', balance: '3' },
              { date: '23/06/2024', desc: 'Accrual for June', used: '', earned: '3', expiration: 'N/A', balance: '4' },
              { date: '23/06/2024', desc: 'Accrual for June', used: '-2', earned: '', expiration: 'N/A', balance: '4' },
              { date: '23/06/2024', desc: 'Accrual for June', used: '', earned: '', expiration: 'N/A', balance: '4' },
              { date: '23/06/2024', desc: 'Accrual for June', used: '-2', earned: '3', expiration: 'N/A', balance: '4' },
              { date: '23/06/2024', desc: 'Accrual for June', used: '-2', earned: '3', expiration: 'N/A', balance: '4' }

            ].map((row, index) => (
              <tr key={index} className="border-b-2 border-gray-200">
                <td>{row.date}</td>
                <td className="pl-5 lg:pl-20">{row.desc}</td>
                <td className="pl-12 lg:pl-80">{row.used}</td>
                <td>{row.earned}</td>
                <td>{row.expiration}</td>
                <td>{row.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfileCard;
