import React from 'react'

const TitleComponent = () => {
  return (
    <div className='flex justify-between my-10'>
      <div className='flex flex-col items-start dark:text-white  '>
        <h1 className='font-InterBold text-[2em] text-VeryDarkBlueText'>Social Media Dashboard</h1>
        <h4 className='font-InterBold text-DarkGrayishBlueText'>Total Followers: 23,004</h4>
      </div>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  )
}

export default TitleComponent