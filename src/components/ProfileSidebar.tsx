import React from 'react';

const ProfileSidebar: React.FC = () => {
  const cardContent = ['Card 1', 'Card 2', 'Card 3', 'Card 4'];

  return (
    <div className="w-[225px] h-[664px] flex flex-col gap-4 mt-[256px] ml-[72px]">
      {cardContent.map((content, index) => (
        <div
          key={index}
          className="w-[225px] h-[130px] bg-gray-200 p-6 rounded-tl-[16px] flex items-center justify-center"
        >
          <span className="text-gray-700">{content}</span>
        </div>
      ))}
    </div>
  );
};

export default ProfileSidebar;
