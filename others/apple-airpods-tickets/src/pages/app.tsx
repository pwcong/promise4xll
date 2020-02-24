import React from 'react';

import axios from 'axios';

import Ticket, { ITicket } from './ticket';

import airpods from '@/assets/imgs/airpods.jpeg';

import './style/app.scss';

const App: React.FunctionComponent = props => {
  const [tickets, setTickets] = React.useState<Array<ITicket>>([]);

  const getTickets = () => {
    axios
      .get(
        'https://1048991038380814.cn-shenzhen.fc.aliyuncs.com/2016-08-15/proxy/apple_airpods_tickets-TodoListService-72C3B98572CF/apple_airpods_tickets-TodoListFunction-F2301335CE66/api%2Ftickets%2Flist'
      )
      .then(res => res.data)
      .then(res => {
        setTickets(res || []);
      });
  };

  React.useEffect(() => {
    getTickets();
  }, []);

  return (
    <div className="container">
      {tickets.map(t => (
        <Ticket
          key={t.id}
          {...t}
          img={t.id === '1' ? airpods : undefined}
          onDone={async () => {
            try {
              await axios.get(
                `https://1048991038380814.cn-shenzhen.fc.aliyuncs.com/2016-08-15/proxy/apple_airpods_tickets-TodoListService-72C3B98572CF/apple_airpods_tickets-TodoListFunction-F2301335CE66/api%2Ftickets%2Fdone?id=${t.id}`
              );
              await getTickets();
            } catch (e) {}
          }}
        />
      ))}
    </div>
  );
};

export default App;
