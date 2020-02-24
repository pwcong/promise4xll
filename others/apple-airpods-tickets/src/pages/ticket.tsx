import React from 'react';

import './style/ticket.scss';

export interface ITicket {
  id: string
  gift: string
  description: string
  call: string
  isCompleted: boolean
}

export interface IProps {
  img?: string;
  gift: string
  description: string
  call: string
  isCompleted?: boolean
  onDone?: () => void
}

const Ticket: React.FunctionComponent<IProps> = props => {
  const { img, gift, description, call, onDone, isCompleted } = props;

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
        <div className="ticket-bottom-bottom">
          <div 
            className={`ticket-button ${isCompleted ? 'ticket-button-disabled' : ''}`}
            onClick={() => {
              if (isCompleted) {
                return
              }
              if (confirm('是否确认使用？')) {
                const a = document.createElement('a')
                a.href = `tel:${call}`
                a.click()
                onDone && onDone()
              }
            }}
          >
            { isCompleted ? '已使用' : '立即使用'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
