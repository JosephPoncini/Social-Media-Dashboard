import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Facebook from './assets/icon-facebook.svg';
import Twitter from './assets/icon-twitter.svg';
import Instagram from './assets/icon-instagram.svg';
import Youtube from './assets/icon-youtube.svg';
import TitleComponent from './components/Title/TitleComponent';
import TopCardComponent from './components/TopCard/TopCardComponent';
import TopCardDataArray from './utils/TopCardData.json'
import { BottomCardComponentProp, TopCardComponentProps } from './interfaces/interfaces';
import SubTitleComponent from './components/SubTitle/SubTitleComponent';
import BottomCardComponent from './components/BottomCard/BottomCardComponent';
import BottomCardArray from './utils/BottomCardData.json'



function App() {

  const [TopCards, setTopCards] = useState<TopCardComponentProps[]>(TopCardDataArray);
  const [BotCards, setBotCards] = useState<BottomCardComponentProp[]>(BottomCardArray);

  return (
    <div className="App dark:bg-VeryDarkBlueBG ">
      <div className="background-container"></div>
      <TitleComponent />
      <div className='flex justify-between w-full '>
        {
          TopCards.map((card, idx) => {
            return (
              <TopCardComponent key={idx}
                socialMedia={card.socialMedia}
                username={card.username}
                number={card.number}
                image={card.image}
                followers={card.followers}
                isUp={card.isUp}
                change={card.change}
              />
            )
          })
        }
      </div >
      <SubTitleComponent />
      <div className='flex justify-between w-full mb-10'>
        {
          BotCards.map((card, idx) => {
            if (idx < 4) {
              return (
                <BottomCardComponent 
                key = {idx}
                name = {card.name}
                number = {card.number}
                socialMedia = {card.socialMedia}
                change = {card.change}
                isUp = {card.isUp}
                />
              )
            }
            return (
              null
            )
          })
        }
      </div>
      <div className='flex justify-between w-full '>
      {
          BotCards.map((card, idx) => {
            if (idx > 3) {
              return (
                <BottomCardComponent 
                key = {idx}
                name = {card.name}
                number = {card.number}
                socialMedia = {card.socialMedia}
                change = {card.change}
                isUp = {card.isUp}
                />
              )
            }
            return (
              null
            )
          })
        }
      </div>

    </div>
  );
}

export default App;
