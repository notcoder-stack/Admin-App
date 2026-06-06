"use client";

import styles from './chart.module.css'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
const data = [
    {
        name: 'Mon',
        visit: 4000,
        click: 2400,
    },
        {
        name: 'Sun',
        visit: 3000,
        click: 1398,
    },
        {
        name: 'Tue',
        visit: 2000,
        click: 9800,
    },
        {
        name: 'Wed',
        visit: 2780,
        click: 3908,
    },
        {
        name: 'Thu',
        visit: 1890,
        click: 4800,
    },
        {
        name: 'Fri',
        visit: 2390,
        click: 3800,
    },
        {
        name: 'Sat',
        visit: 3490,
        click: 4300,
    },

]


const Chart = () => {
    return(
        <div className={styles.container}>
        <h2 className={styles.title}>Weekly Recap</h2>
    <LineChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 15,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border-3)" />
      <XAxis dataKey="name" stroke="var(--color-text-3)" />
      <YAxis width="auto" stroke="var(--color-text-3)" />
      <Tooltip
        cursor={{ stroke: 'var(--color-border-2)' }}
        contentStyle={{ backgroundColor: 'var(--color-surface-base)', borderColor: 'var(--color-border-2)' }}
      />
      <Legend />
      <Line
        type="monotone"
        dataKey="visit"
        stroke="var(--color-chart-1)"
        strokeDasharray="5 5"
        dot={{
          fill: 'var(--color-surface-base)',
        }}
        activeDot={{
          stroke: 'var(--color-surface-base)',
        }}
      />
      <Line
        type="monotone"
        dataKey="click"
        stroke="var(--color-chart-2)"
        strokeDasharray="3 4 5 2"
        dot={{
          fill: 'var(--color-surface-base)',
        }}
        activeDot={{
          stroke: 'var(--color-surface-base)',
        }}
      />
    </LineChart>
        </div>
    )
}

export default Chart;