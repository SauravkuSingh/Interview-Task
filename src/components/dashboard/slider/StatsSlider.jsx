import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

// Mini line chart component for the small graph
function MiniLineChart({ data = [], color = '#facc15' }) {
  // Responsive SVG line chart
  const width = 80;
  const height = 28;
  const minY = Math.min(...data);
  const maxY = Math.max(...data);
  const getY = (v) => {
    if (maxY === minY) return height / 2;
    return height - ((v - minY) / (maxY - minY)) * (height - 6) - 3;
  };
  const points = data
    .map(
      (v, i) =>
        `${(i * (width / (data.length - 1))).toFixed(2)},${getY(v).toFixed(2)}`,
    )
    .join(' ');
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className="h-auto w-full"
    >
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="2"
        points={points}
        style={{ opacity: 0.8 }}
      />
      <polyline
        fill="none"
        stroke="#d1d5db"
        strokeDasharray="3 3"
        strokeWidth="2"
        points={`0,${height - 3} ${width},${height - 3}`}
      />
    </svg>
  );
}

export default function StatsSlider() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    const container = sliderRef.current;
    if (!container) return;
    const amount = 300;
    container.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  const stats = [
    {
      title: 'Total Orders',
      value: 21,
      change: '25.2%',
      positive: true,
      color: 'text-yellow-500',
      chart: [2, 3, 4, 6, 8, 10, 13, 15, 18, 21],
      chartColor: '#facc15', // yellow-400
    },
    {
      title: 'Order items over time',
      value: 15,
      change: '18.2%',
      positive: true,
      color: 'text-blue-400',
      chart: [1, 2, 3, 5, 7, 9, 11, 13, 14, 15],
      chartColor: '#60a5fa', // blue-400
    },
    {
      title: 'Returns Orders',
      value: 0,
      change: '1.2%',
      positive: false,
      color: 'text-red-500',
      chart: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      chartColor: '#ef4444', // red-500
    },
    {
      title: 'Fulfilled orders over time',
      value: 12,
      change: '12.2%',
      positive: true,
      color: 'text-green-500',
      chart: [2, 3, 4, 6, 8, 9, 10, 11, 12, 12],
      chartColor: '#22c55e', // green-500
    },
    {
      title: 'Pending Orders',
      value: 5,
      change: '5.4%',
      positive: false,
      color: 'text-orange-400',
      chart: [1, 2, 3, 4, 5, 5, 5, 5, 5, 5],
      chartColor: '#fb923c', // orange-400
    },
    {
      title: 'Cancelled Orders',
      value: 3,
      change: '3.1%',
      positive: false,
      color: 'text-rose-500',
      chart: [0, 1, 1, 2, 2, 2, 3, 3, 3, 3],
      chartColor: '#f43f5e', // rose-500
    },
    {
      title: 'Shipped Orders',
      value: 17,
      change: '9.8%',
      positive: true,
      color: 'text-cyan-500',
      chart: [2, 4, 6, 8, 10, 12, 14, 16, 17, 17],
      chartColor: '#06b6d4', // cyan-500
    },
    {
      title: 'New Customers',
      value: 8,
      change: '14.5%',
      positive: true,
      color: 'text-violet-500',
      chart: [1, 2, 3, 4, 5, 6, 7, 8, 8, 8],
      chartColor: '#a78bfa', // violet-500
    },
    {
      title: 'Repeat Customers',
      value: 4,
      change: '7.2%',
      positive: true,
      color: 'text-emerald-500',
      chart: [1, 1, 2, 2, 3, 3, 4, 4, 4, 4],
      chartColor: '#10b981', // emerald-500
    },
    {
      title: 'Revenue Growth',
      value: 20,
      change: '11.9%',
      positive: true,
      color: 'text-pink-500',
      chart: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      chartColor: '#ec4899', // pink-500
    },
  ];

  return (
    <div className="relative">
      {/* Prev Button */}
      <button
        onClick={() => scroll('left')}
        className="absolute top-1/2 left-0 z-10 -translate-y-1/2 cursor-pointer rounded-full border bg-white p-1 shadow hover:bg-gray-50 hover:bg-slate-100"
        aria-label="Scroll left"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      {/* Cards Container */}
      <div
        ref={sliderRef}
        className="scrollbar-hide flex space-x-4 overflow-x-auto px-4 py-4 pt-2"
        style={{
          maxWidth: '100%',
          overflowY: 'hidden',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className="relative flex min-w-[200px] flex-col justify-between rounded-lg border bg-white p-4 shadow-sm"
            style={{ minHeight: 120 }}
          >
            <h3 className="text-sm text-gray-500">{stat.title}</h3>
            <div className="my-2 text-2xl font-semibold text-gray-900">
              {stat.value} -
            </div>
            <div className="flex items-center text-xs text-gray-500">
              <span
                className={`${stat.positive ? 'text-green-600' : 'text-red-600'} mr-1`}
              >
                {stat.positive ? '▲' : '▼'} {stat.change}
              </span>
              last week
            </div>
            {/* Mini line chart at the bottom right */}
            <div className="absolute right-3 bottom-3 h-7 w-20">
              <MiniLineChart data={stat.chart} color={stat.chartColor} />
            </div>
            <div
              className={`mt-3 h-1 rounded ${stat.color} bg-opacity-50`}
            ></div>
          </div>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={() => scroll('right')}
        className="absolute top-1/2 right-0 z-10 -translate-y-1/2 cursor-pointer rounded-full border bg-white p-1 shadow hover:bg-gray-50 hover:bg-slate-100"
        aria-label="Scroll right"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}
