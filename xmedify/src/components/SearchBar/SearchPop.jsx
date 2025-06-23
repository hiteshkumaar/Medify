
import React from 'react';
//components
import ResultCard from '../ResultCard/ResultCard';
import Button from '../Button/Button';

const SearchPop = props => {
  const { locations, clickFunction, hospitals, atBookingsPage } = props;

  const displayStates = () => {
    if (atBookingsPage) {
      if (!hospitals || !hospitals?.length) return null;

      return hospitals.map(item => {
        const { hospitalName } = item.data;
        const { time, date } = item.dateTime;
        return (
          <span className='SearchPopItem SearchPopItem-bookings'>
            <span>{hospitalName}</span>
            <span className='resultContent-right resultContent-top'>
              <Button text={time} buttonClass={`smallButton blueButton-outlined`} />
              <Button text={date} buttonClass={`smallButton greenButton-outlined`} />
            </span>
          </span>
        );
      });
    }

    if (!locations || !locations.length) return null;

    return (
      <ul>
        {locations.map(item => (
          <li
            key={item}
            className='SearchPopItem'
            onClick={() => clickFunction(item)}
            style={{ cursor: 'pointer' }}
          >
            {item}
          </li>
        ))}
      </ul>
    );
  };

  return <span className='SearchPop'>{displayStates()}</span>;
};

export default SearchPop;