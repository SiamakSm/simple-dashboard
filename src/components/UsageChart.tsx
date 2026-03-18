import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts'
import type { UsagePoint } from '../types/patient'

type UsageChartProps = {
  data: UsagePoint[]
}

function UsageChart({ data }: UsageChartProps) {
  const hasInvalidData = data.some((d) => typeof d.usage !== 'number')

  const safeData = data.map((d) => ({
    day: d.day,
    usage: typeof d.usage === 'number' ? d.usage : 0,
  }))

  return (
    <div>
      {hasInvalidData && <p>Invalid data detected</p>}

      <LineChart width={400} height={200} data={safeData}>
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="usage" stroke="#8884d8" />
      </LineChart>
    </div>
  )
}

export default UsageChart
