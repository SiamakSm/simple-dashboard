import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
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
    <div className="card card-full">
      <div className="card-header">
        <div className="card-icon">📈</div>
        <h3 className="card-title">Usage History</h3>
      </div>

      {hasInvalidData && <div className="error-text" style={{marginBottom: '16px'}}>Invalid data detected in some records. Fallback values applied.</div>}
      
      <div className="chart-wrapper" style={{ height: '240px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={safeData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border)" />
            <XAxis 
              dataKey="day" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: 'var(--color-text-muted)' }}
              dy={10}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: 'var(--color-text-muted)' }}
            />
            <Tooltip 
              contentStyle={{ 
                borderRadius: '8px', 
                border: 'none', 
                boxShadow: 'var(--shadow-md)',
                fontSize: '13px',
                fontWeight: 600
              }}
              itemStyle={{ color: 'var(--color-primary)' }}
            />
            <Line 
              type="monotone" 
              dataKey="usage" 
              stroke="var(--color-primary)" 
              strokeWidth={3}
              dot={{ r: 4, strokeWidth: 2, fill: 'var(--color-surface)', stroke: 'var(--color-primary)' }}
              activeDot={{ r: 6, fill: 'var(--color-primary)', stroke: 'white', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default UsageChart
