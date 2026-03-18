//UsageChart.tsx
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts'

type UsageChartProps = {
  data: { day: string; usage: number }[]
}

function UsageChart({ data }: UsageChartProps) {
  const safeData = data.map((d) => ({
    day: d.day,
    usage: typeof d.usage === 'number' ? d.usage : 0,
  }))

  return (
    <LineChart width={400} height={200} data={safeData}>
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Line type="natural" dataKey="usage" stroke="yellow" />
    </LineChart>
  )
}

export default UsageChart
