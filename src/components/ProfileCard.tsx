import React from 'react';
import Image from 'next/image';
import history from '../public/images/history.svg';

const ProfileCard: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-6" style={{ width: '1047px', height: '970px', borderRadius: '16px 0 0 0', gap: '0px' }}>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Image src={history} alt="icon" width={16} height={16} />
          <span className="text-sm font-medium" style={{ fontFamily: 'Inter', fontSize: '14px', lineHeight: '16.94px' }}>
            Accrual Level Start Date 03/09-2020
          </span>
        </div>
        <button className="border border-black px-4 py-1 rounded-md" style={{ width: '149px', height: '33px' }}>
          Add Time Off Policy
        </button>
      </div>

      <div className="border-b-2 border-gray-300 mb-6"></div>

      <div className="grid grid-cols-3 gap-12 mb-6" style={{ gap: '48px' }}>
        {['Sick', 'Annual Leave', 'Comp/In Lieu Time'].map((type, idx) => (
          <div key={idx} className="border border-gray-300 rounded-lg p-4" style={{ width: '264px', height: '138px' }}>
            <div className="flex items-center mb-2">
              <Image src="/icon.svg" alt="icon" width={16} height={16} />
              <h3 className="ml-2 text-xl font-semibold">{type}</h3>
            </div>
            <p className="text-3xl font-bold" style={{ fontSize: '30px', fontWeight: 600, lineHeight: '36.31px' }}>
              {type === 'Sick' ? '3' : type === 'Annual Leave' ? '10.3' : '0'}
            </p>
            <p className="text-sm">{type === 'Sick' ? 'Days Available' : 'Hours Used (YTD)'}</p>
            {type === 'Sick' && <p className="text-sm">1 day scheduled</p>}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-12 mb-6" style={{ gap: '48px' }}>
        {['Sick Full-Time', 'Holiday Full-Time', 'Comp/in Lieu Time Flexible Policy'].map((text, idx) => (
          <div key={idx} className="flex items-center mb-2">
            <p className="text-sm font-medium" style={{ fontFamily: 'Inter', fontSize: '14px', fontWeight: 500 }}>{text}</p>
          </div>
        ))}
      </div>

      <div className="border-b-2 border-gray-300 mb-6"></div>

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          {/* <img src="/icon.svg" alt="icon" className="mr-2" style={{ width: '16px' }} /> */}
          <span className="text-sm font-medium" style={{ fontFamily: 'Inter', fontSize: '14px', lineHeight: '16.94px' }}>
            History
          </span>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="border border-black rounded-md p-2 mr-4"
          style={{ width: '256px', height: '33px' }}
        />
        <button className="border border-black px-4 py-1 rounded-md" style={{ width: '96px', height: '33px' }}>
          ALL
        </button>
        <button className="border border-black px-4 py-1 rounded-md" style={{ width: '176px', height: '33px' }}>
          Balance History
        </button>
      </div>


      <div className="border-b-2 border-gray-300 mb-6"></div>


      <div className="overflow-auto" style={{ width: '1015px', height: '49px' }}>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b-2 border-gray-300">
              <th>Date</th>
              <th className="pl-20">Description</th>
              <th className="pl-80">Used Days (-)</th>
              <th>Earned Days (+)</th>
              <th>Expiration</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {[
              { date: '23/05/2024', desc: 'Accrual for May', used: '-3', earned: '3', expiration: 'N/A', balance: '3' },
              { date: '23/06/2024', desc: 'Accrual for June', used: '-2', earned: '3', expiration: 'N/A', balance: '4' }
            ].map((row, index) => (
              <tr key={index} className="border-b-2 border-gray-200">
                <td>{row.date}</td>
                <td className="pl-20">{row.desc}</td>
                <td className="pl-80">{row.used}</td>
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
