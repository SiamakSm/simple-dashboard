//UsageChart.tsx

import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  { day: "Mon", usage: 3 },
  { day: "Tue", usage: 6 },
  { day: "Wed", usage: 4 },
        { day: "Thu", usage: 5 },
  { day: "Fri", usage: 6 },
  { day: "Sat", usage: 1 },
  { day: "Sun", usage: 2 }
]



function UsageChart() {
        return (

    <LineChart width={400} height={200} data={data}>
     <XAxis dataKey="day" />
     <YAxis />
          <Tooltip />
     <Line type="natural" dataKey="usage" stroke="yellow" />
    </LineChart>

  )
}

export default UsageChart