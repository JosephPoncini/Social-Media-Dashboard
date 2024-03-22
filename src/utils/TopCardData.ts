import { TopCardComponentProps } from "../interfaces/interfaces";
import Facebook from '../assets/icon-facebook.svg'
import Twitter from '../assets/icon-twitter.svg'
import Instagram from '../assets/icon-instagram.svg'
import YouTube from '../assets/icon-youtube.svg'

const TopCardDataArray:TopCardComponentProps[] = [
    {
      number: "1987",
      username: "@nathanf",
      followers: "followers",
      image: "../../assets/icon-facebook.svg",
      change: "12 Today",
      isUp: true,
      socialMedia: Facebook
    },
    {
      number: "1044",
      username: "@nathanf",
      followers: "followers",
      image: "../../assets/icon-facebook.svg",
      change: "99 Today",
      isUp: true,
      socialMedia: Twitter
    },
    {
      number: "11K",
      username: "@realnathanf",
      followers: "followers",
      image: "../../assets/icon-facebook.svg",
      change: "1099 Today",
      isUp: true,
      socialMedia: Instagram
    },
    {
      number: "8239",
      username: "Nathan F.",
      followers: "Subscribers",
      image: "../../assets/icon-facebook.svg",
      change: "144 Today",
      isUp: false,
      socialMedia: YouTube
    }
  ]

export default {TopCardDataArray}