import React, { useState } from 'react';
import Header from './components/Header';
import SNSCard from './components/SNSCard'
import './assets/css/App.css';
import './components/Header';
import UpdateCard from './components/UpdateCard';

function App() {
  const [mode, setMode] = useState("dark")
  const toggleMode = () => {
    if (mode === "dark") {setMode("light")}
    if (mode === "light") {setMode("dark")}
  }

  const follower = 23004;

  return (
    <div className={`container ${mode}`}>
      <div className={`top-bg ${mode}`}></div>
      <div className='wrapper'>
        <Header 
          mode={mode}
          follower={follower}
          toggleMode={toggleMode}
        />
        <main>
          <SNSCard 
            name="nathanf"
            mode={mode}
            sns="facebook"
            number="1987"
            update={12}
          />
          <SNSCard 
            name="nathanf"
            mode={mode}
            sns="twitter"
            number="1044"
            update={99}
          />
          <SNSCard 
            name="nathanf"
            mode={mode}
            sns="instagram"
            number="11k"
            update={1099}
          />
          <SNSCard 
            name="nathanf"
            mode={mode}
            sns="youtube"
            number="8239"
            update={-144}
          />
          <h3> Overview - Today</h3>
          <UpdateCard 
            sns="facebook"
            mode={mode}
            number="87"
            percentage={3}
            info="Page views"
          />
          <UpdateCard 
            sns="facebook"
            mode={mode}
            number="52"
            percentage={-2}
            info="Likes"
          />
          <UpdateCard 
            sns="instagram"
            mode={mode}
            number="5462"
            percentage={-2257}
            info="Likes"
          />
          <UpdateCard 
            sns="instagram"
            mode={mode}
            number="52k"
            percentage={1375}
            info="Profile Views"
          />
          <UpdateCard 
            sns="twitter"
            mode={mode}
            number="117"
            percentage={303}
            info="Retweets"
          />
          <UpdateCard 
            sns="twitter"
            mode={mode}
            number="507"
            percentage={553}
            info="Likes"
          />
          <UpdateCard 
            sns="youtube"
            mode={mode}
            number="107"
            percentage={19}
            info="Likes"
          />
          <UpdateCard 
            sns="youtube"
            mode={mode}
            number="1407"
            percentage={-12}
            info="Total Views"
          />
        </main>
      </div>
    </div>
  );
};

export default App;
