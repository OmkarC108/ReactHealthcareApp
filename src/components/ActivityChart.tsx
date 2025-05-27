import React from 'react'
import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts'

const data = [
  { day: 'Mon', activity1: 30, activity2: 20, activity3: 5 },
  { day: 'Tues', activity1: 15, activity2: 40, activity3: 10 },
  { day: 'Wed', activity1: 25, activity2: 10, activity3: 30 },
  { day: 'Thurs', activity1: 40, activity2: 30, activity3: 15 },
  { day: 'Fri', activity1: 20, activity2: 15, activity3: 35 },
  { day: 'Sat', activity1: 35, activity2: 25, activity3: 5 },
  { day: 'Sun', activity1: 10, activity2: 30, activity3: 25 },
]

const ActivityChart = () => {
  return (
    <ResponsiveContainer width="100%" height={150}>
      <BarChart data={data} barGap={4} barCategoryGap={30}>
        <XAxis 
          dataKey="day" 
          axisLine={false} 
          tickLine={false} 
          tick={{ fontSize: 12, fill: '#9CA3AF' }}
        />
        <Bar 
          dataKey="activity1" 
          fill="#0CDCDC" 
          radius={[4, 4, 0, 0]} 
          barSize={8} 
        />
        <Bar 
          dataKey="activity2" 
          fill="#6979F8" 
          radius={[4, 4, 0, 0]} 
          barSize={8} 
        />
        <Bar 
          dataKey="activity3" 
          fill="#E4E7EC" 
          radius={[4, 4, 0, 0]} 
          barSize={8} 
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default ActivityChart