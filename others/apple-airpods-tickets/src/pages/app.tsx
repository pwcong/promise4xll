import React from 'react';

import Ticket from './ticket';

import airpods from '@/assets/imgs/airpods.jpeg';

import './style/app.scss';

const App: React.FunctionComponent = props => {
  return (
    <div className="container">
      <Ticket 
        img={airpods} 
        gift="代金券" 
        description="AirPods遗失时使用" 
        call="13714338118"
      />
      <Ticket 
        gift="安慰一次" 
        description="AirPods再次遗失时使用" 
        call="13714338118"
      />
    </div>
  );
};

export default App;
