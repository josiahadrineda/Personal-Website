import { useState } from 'react'
import VizSensor from 'react-visibility-sensor'
import './App.css';
import Navbar from './components/Navbar';
import Section from './components/Section';
import { studentSub, developerSub, gameCreatorSub, composerSub, transcriberSub } from './Subtitles.js'
import Cards from './components/Cards'
import { studentCardset, developerCardset, gameCreatorCardset, composerCardset, transcriberCardset } from './Cardsets.js'
import Footer from './components/Footer';

function App() {
  const [bgColor, setBgColor] = useState("white")

  const changeNavMenuColors = (color) => {
      setBgColor(color)
  }

  return (
    <div className="App">
      <Navbar bgColor={bgColor} />
      <div className="sections">
        <VizSensor onChange={(isVisible) => {if(isVisible) changeNavMenuColors("white")}}>
          <Section 
            title="student"
            subtitle={studentSub}
            dark={false}
            works={<Cards cardset={studentCardset} />}
            id="student"
          />
        </VizSensor>
        <VizSensor onChange={(isVisible) => {if(isVisible) changeNavMenuColors("black")}}>
          <Section 
            title="developer"
            subtitle={developerSub}
            dark={true}
            works={<Cards cardset={developerCardset} />}
            id="developer"
          />
        </VizSensor>
        <VizSensor onChange={(isVisible) => {if(isVisible) changeNavMenuColors("white")}}>
          <Section 
            title="game creator"
            subtitle={gameCreatorSub}
            dark={false}
            works={<Cards cardset={gameCreatorCardset} />}
            id="game creator"
          />
        </VizSensor>
        <VizSensor onChange={(isVisible) => {if(isVisible) changeNavMenuColors("black")}}>
          <Section 
            title="composer"
            subtitle={composerSub}
            dark={true}
            works={<Cards cardset={composerCardset} />}
            id="composer"
          />
        </VizSensor>
        <VizSensor onChange={(isVisible) => {if(isVisible) changeNavMenuColors("white")}}>
          <Section 
            title="transcriber"
            subtitle={transcriberSub}
            dark={false}
            works={<Cards cardset={transcriberCardset} />}
            id="transcriber"
          />
        </VizSensor>
      </div>
      <Footer />
    </div>
  );
}

export default App;
