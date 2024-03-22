import React, { useState } from 'react'
import Facebook from '../../assets/icon-facebook.svg';
import Twitter from '../../assets/icon-twitter.svg';
import Instagram from '../../assets/icon-instagram.svg';
import Youtube from '../../assets/icon-youtube.svg';
import { TopCardComponentProps } from '../../interfaces/interfaces'
import './TopCard.css'
import '@fortawesome/fontawesome-free/css/all.css';


const TopCardComponent = (props: TopCardComponentProps) => {
  let changeClassName = "text-xs font-InterBold mt-6 mb-6 "
  if (props.isUp) {
    changeClassName += "text-LimeGreen";
  } else {
    changeClassName += "text-BrightRed";
  }

  let image = "";
  let SectionClassName = "font-InterRegular flex flex-col w-60 rounded-md text-center bg-LightGrayishBlueCardBG ";

   switch (props.socialMedia) {
    case "Twitter":
      image = Twitter;
      SectionClassName += "border-t-4 border-Twitter"
      break;
    case "Instagram":
      image = Instagram;
      SectionClassName += "instagram-border-gradient"
      break;
    case "YouTube":
      image = Youtube;
      SectionClassName += "border-t-4 border-YouTube"
      break;
    default:
      image = Facebook;
      SectionClassName += "border-t-4 border-Facebook"
      break;
  }   


  return (
    <section className={SectionClassName}>
      <div className="flex items-center justify-center gap-2">
        <img src={image} alt="social media logo" />
        <h4 className="text-xs block mt-5 mb-5 font-InterBold text-gray-400 ">{props.username}</h4>
      </div>
      <div>
        <h4 className="text-5xl mt-1 mb-1 font-InterBold tracking-tight">{props.number}</h4>
        <h5 className="text-xs uppercase text-gray-400 tracking-[0.25em]">{props.followers}</h5>
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
    </section>
  )
}

export default TopCardComponent