import React, { useEffect, useState } from 'react'
import DarkLightSwitchComponent from './DarkLightSwitch/DarkLightSwitchComponent'
import { TitleComponentProps } from '../../interfaces/interfaces'

const TitleComponent = (props:TitleComponentProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [className, setClassName] = useState<string>("font-InterBold mr-4 text-DarkGrayishBlueText dark:text-DesaturatedBlueText");

  useEffect(()=>{
    if(isHovered){
      setClassName("text-sm font-InterBold mr-4 text-DarkGrayishBlueText dark:text-WhiteText");
    }else{
      setClassName("text-sm font-InterBold mr-4 text-DarkGrayishBlueText dark:text-DesaturatedBlueText");
    }
  },[isHovered])

  return (
    <div className='flex flex-col lg:flex-row justify-between my-10'>
      <div className='flex flex-col items-start border-[#9A9EAD] dark:border-[#373A4D]  border-b dark:border-b-2 lg:border-0 pb-4 mb-4 lg:pb-0 lg:mb-0'>
        <h1 className='font-InterBold text-2xl lg:text-[2em] text-VeryDarkBlueText dark:text-WhiteText'>Social Media Dashboard</h1>
        <h4 className='font-InterBold text-sm lg:text-normal text-DarkGrayishBlueText dark:text-DesaturatedBlueText'>Total Followers: 23,004</h4>
      </div>
      <div className='flex flex-row h-fit items-end lg:items-center justify-between lg:justify-end'>
      <div className={className}>Dark Mode</div>
      <div  onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className='h-fit rotate-180 lg:-translate-y-[2px] transform scale-75 lg:scale-100' >
        <DarkLightSwitchComponent clickhandle={props.clickhandle} isHover={isHovered} />        
      </div>        
      </div>

    </div>
  )
}

export default TitleComponent