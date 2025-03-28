import React, { useState } from 'react';
import General from './General';
import UserManagement from './UserManagement';
import Notifications from './Notifications';
import Security from './Security';

const Settings = () => {
  const [content, setContent] = useState('General Settings');
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (newContent, index) => {
    setContent(newContent);
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-col p-10 h-screen bg-[#0a0a0a] text-white">
        <h1 className='text-4xl font-bold'>Settings</h1>
        <div className='w-full h-12 rounded-lg my-5 flex justify-between p-1 bg-[#252525]'>
            <div className={`flex w-1/4 justify-center items-center ${activeIndex === 0 ? 'bg-[#0a0a0a]' : ''}`} onClick={() => handleClick('General Settings', 0)}>General</div>
            <div className={`flex w-1/4 justify-center items-center ${activeIndex === 1 ? 'bg-[#0a0a0a]' : ''}`} onClick={() => handleClick('User Management Settings', 1)}>User Management</div>
            <div className={`flex w-1/4 justify-center items-center ${activeIndex === 2 ? 'bg-[#0a0a0a]' : ''}`} onClick={() => handleClick('Notification Settings', 2)}>Notifications</div>
            <div className={`flex w-1/4 justify-center items-center ${activeIndex === 3 ? 'bg-[#0a0a0a]' : ''}`} onClick={() => handleClick('Security Settings', 3)}>Security</div>
        </div>
        <div>
            {activeIndex === 0 && <General />} 
            {activeIndex === 1 && <UserManagement />} 
            {activeIndex === 2 && <Notifications />} 
            {activeIndex === 3 && <Security />} 
        </div>
    </div>
  );
};

export default Settings;


