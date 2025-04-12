import React from 'react'

const Notifications = () => {
  return (
    <div>
      <div className='p-6 border rounded-lg bg-[#010101ad]'>
      <h2 className="text-[26px] font-semibold">Notification Settings</h2>
      <span className="text-[#ffffff6c] text-sm">
      Configure system notifications and alerts
      </span>
      <div>
        <span>Document Expiry Notifications</span>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div>
        <span>Rental Notifications</span>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div>
        <span>System Notifications</span>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <button>
        Save Notification Settings
      </button>
    </div>
    </div>
  )
}

export default Notifications