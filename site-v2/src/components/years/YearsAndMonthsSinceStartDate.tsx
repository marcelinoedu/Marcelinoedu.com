import { useEffect, useState } from 'react';

interface YandMProps{
    startDate: string
}

function YearsAndMonthsSinceStartDate({ startDate }:YandMProps) {
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);

  useEffect(() => {
    const currentDate = new Date();
    const start = new Date(startDate);

    let diffYears = currentDate.getFullYear() - start.getFullYear();
    let diffMonths = currentDate.getMonth() - start.getMonth();

    if (diffMonths < 0) {
      diffYears--;
      diffMonths += 12;
    }

    setYears(diffYears);
    setMonths(diffMonths);
  }, [startDate]);

  return (
    <div>
      <p style={{paddingLeft: "0px", fontSize:"12px"}}>{years} {years === 1 ? 'year' : 'years'} and {months} {months === 1 ? 'month' : 'months'}</p>
    </div>
  );
}

export default YearsAndMonthsSinceStartDate;