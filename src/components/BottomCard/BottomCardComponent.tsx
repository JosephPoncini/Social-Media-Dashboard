import React from 'react'
import Facebook from '../../assets/icon-facebook.svg';
import Twitter from '../../assets/icon-twitter.svg';
import Instagram from '../../assets/icon-instagram.svg';
import Youtube from '../../assets/icon-youtube.svg';
import { BottomCardComponentProp } from '../../interfaces/interfaces';

const BottomCardComponent = (props:BottomCardComponentProp) => {
  let changeClassName = "text-xs lg:text-sm font-InterBold ";

  if (props.isUp) {
    changeClassName += "text-LimeGreen";
  } else {
    changeClassName += "text-BrightRed";
  }

  let image = "";
   switch (props.socialMedia) {
    case "Twitter":
      image = Twitter;
      break;
    case "Instagram":
      image = Instagram;
      break;
    case "Youtube":
      image = Youtube;
      break;
    default:
      image = Facebook;
      break;
  }   


  return (
    <div className='w-full lg:w-60 rounded-6 text-center bg-LightGrayishBlueCardBG dark:bg-DarkDesaturatedBlueCardBG hover:bg-CardHover dark:hover:bg-DarkCardHover cursor-pointer rounded-md mb-5 lg:mb-0 '>
      <div className='flex items-start justify-between mx-6 mt-5 mb-3'>
        <h4 className=' text-sm text-DarkGrayishBlueText dark:text-DesaturatedBlueText font-InterBold '>{props.name}</h4>
        <img src={image} alt="social media icon" />
      </div>
      <div className='flex items-end justify-between mx-6 mb-5 mt-3'>
        <h5 className='text-3xl font-InterBold text-VeryDarkBlueText dark:text-WhiteText '>{props.number}</h5>
        <h6 className={changeClassName}>
        {
            props.isUp ? <i className="fas fa-caret-up"></i> : <i className="fas fa-caret-down"></i>

          }
          {"  "}
          {
            props.change
          }
        </h6>
      </div>
    </div>
  )
}

export default BottomCardComponent