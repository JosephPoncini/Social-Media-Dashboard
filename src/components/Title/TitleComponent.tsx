import React from 'react'
import DarkLightSwitchComponent from './DarkLightSwitch/DarkLightSwitchComponent'
import { TitleComponentProps } from '../../interfaces/interfaces'

const TitleComponent = (props:TitleComponentProps) => {
  return (
    <div className='flex justify-between my-10'>
      <div className='flex flex-col items-start'>
        <h1 className='font-InterBold text-[2em] text-VeryDarkBlueText dark:text-WhiteText'>Social Media Dashboard</h1>
        <h4 className='font-InterBold text-DarkGrayishBlueText dark:text-DesaturatedBlueText'>Total Followers: 23,004</h4>
      </div>
      <div className='flex flex-row h-fit'>
      <div className='font-InterBold text-DarkGrayishBlueText dark:text-DesaturatedBlueText dark:hover:text-WhiteText mr-4'>Dark Mode</div>
      <div className='h-fit rotate-180'>
        <DarkLightSwitchComponent clickHandle={props.clickHandle} />        
      </div>        
      </div>

    </div>
  )
}

export default TitleComponent