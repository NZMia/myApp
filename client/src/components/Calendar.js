import React, { useEffect, useState } from 'react';

// const Day = ({ newDate }) => {
//   const { isCurrentMonth, isToday, isSelected, number } = newDate
//   return (
//     <div className={
//       "day" +
//       `${isCurrentMonth ?? "day--different-month"} +
//       ${isToday ?? "day--today"} +
//       ${isSelected ?? "day--selected"}
//       `}>

//       <div className="day__number">
//         { number }
//       </div>
//     </div>
//   )
// }

const Calendar = () => {
  let today = new Date();
  let grid = { id: 0, day: 0 };

  const monthWeeks = [1, 2, 3, 4, 5];
  const weekDays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

  const [monthDifference, setMonthDifference] = useState(0);

  // Current Month
  const [month, setMonth] = useState({
    today,
    firstDay: new Date(today.getFullYear(), today.getMonth(), 1),
    lastDay: new Date(today.getFullYear(), today.getMonth() + 1, 0)
  });

  useEffect(() => {
    today = new Date();
    grid = { id: 0, day: 0 };
    today.setMonth(today.getMonth() + monthDifference);
    setMonth({
      today,
      firstDay: new Date(today.getFullYear(), today.getMonth(), 1),
      lastDay: new Date(today.getFullYear(), today.getMonth() + 1, 0)
    });
  }, [monthDifference]);

  return (
    <div className="calendar">
      <div className="currentCalendar">
        <button
          title="previous month"
          data-bs-toggle="tooltip"
          className="btn btn-secondary rounded-pill ms-1"
          onClick={() => setMonthDifference(monthDifference - 1)}
        >
          pre
        </button>
        <h1>
          {month.today.toLocaleString('default', {
            month: 'long',
            year: 'numeric'
          })}
        </h1>
        <button
          title="next month"
          data-bs-toggle="tooltip"
          className="btn btn-secondary rounded-pill ms-1"
          onClick={() => setMonthDifference(monthDifference + 1)}
        >
          next
        </button>
      </div>
      <table className="table table-bordered table-responsive text-center">
        <thead>
          <tr>
            {weekDays &&
              weekDays.map((weekday, id) => {
                return <th key={id}>{weekday}</th>;
              })}
          </tr>
        </thead>
        <tbody>
          {monthWeeks &&
            monthWeeks.map((week, id) => (
              <tr key={id}>
                {weekDays &&
                  weekDays.map((day, id) => {
                    if (grid.day || month.firstDay.getDay() === grid.id)
                      grid.day++;
                    grid.id++;

                    if (grid.day > month.lastDay.getDate()) grid.day = 0;

                    return (
                      <td key={id}>
                        {grid.day != 0 && (
                          <span
                            className={
                              monthDifference == 0 &&
                              grid.day == new Date().getDate()
                                ? 'badge'
                                : ''
                            }
                          >
                            {grid.day}
                            {/* <p>{grid.day == new Date().getDate()?'current':''}</p> */}
                          </span>
                        )}
                      </td>
                    );
                  })}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
