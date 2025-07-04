import { useState } from 'react';
import { CalendarIcon } from 'lucide-react';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const DateRangePicker = () => {
  const [showPicker, setShowPicker] = useState(false);
  const [range, setRange] = useState([
    {
      startDate: new Date(2024, 0, 1),
      endDate: new Date(2024, 0, 30),
      key: 'selection',
    },
  ]);

  return (
    <div className="relative mt-1 inline-block text-left">
      <button
        onClick={() => setShowPicker((prev) => !prev)}
        className="flex cursor-pointer items-center rounded-md border px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
      >
        <CalendarIcon className="mr-2 h-4 w-4 text-gray-500" />
        {`${format(range[0].startDate, 'MMM d')} - ${format(
          range[0].endDate,
          'MMM d, yyyy',
        )}`}
      </button>

      {showPicker && (
        <div className="absolute z-50 mt-2">
          <DateRange
            editableDateInputs
            onChange={(item) => setRange([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={range}
            rangeColors={['#3b82f6']}
          />
        </div>
      )}
    </div>
  );
};

export default DateRangePicker;
