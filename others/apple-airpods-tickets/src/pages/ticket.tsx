import React from 'react';

import './style/ticket.scss';

export interface IProps {
  img?: string;
  gift: string
  description: string
}

const Ticket: React.FunctionComponent<IProps> = props => {
  const { img, gift, description } = props;

  const cls = 'ticket';
  const clss = [cls];

  return (
    <div className={clss.join(' ')}>
      <div className="ticket-top">
        {img && (
          <div className="ticket-top-left">
            <img src={img} />
          </div>
        )}
        <div className="ticket-top-right">{gift}</div>
      </div>
      <div className="ticket-bottom">
        <div className="ticket-bottom-left"></div>
        <div className="ticket-bottom-right"></div>
        <div className="ticket-bottom-top">{description}</div>
        <a className="ticket-bottom-bottom" href="tel:12714338118">
          <div className="ticket-button">立即使用</div>
        </a>
      </div>
    </div>
  );
};

export default Ticket;
