import React from 'react';

export const CalendarHeader = ({ onNext, onBack, dateDisplay, onNextYear, onPrevYear, onToday }) => {
  return(
    <div id="header">
      <div id="monthDisplay">{dateDisplay}</div>
      <div>
        <button onClick={onPrevYear} id="prevYear">Prev Year</button>
        <button onClick={onBack} id="backButton">Back</button>
        <button onClick={onNext} id="nextButton">Next</button>
        <button onClick={onNextYear} id="nextYear">Next Year</button>
        <button onClick={onToday} id="Today">Today</button>
        
      </div>
    </div>
  );
};