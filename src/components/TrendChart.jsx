import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer,
} from 'recharts'

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-white border border-slate-200 rounded-lg shadow-lg p-3 text-sm min-w-[140px]">
      <p className="text-xs font-semibold text-slate-400 mb-2">{label}</p>
      {payload.map(entry => (
        <div key={entry.dataKey} className="flex items-center justify-between gap-4">
          <span className="flex items-center gap-1.5 text-slate-500">
            <span
              className="inline-block w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: entry.color }}
            />
            {entry.name}
          </span>
          <span className="font-semibold text-slate-900">
            {entry.value.toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  )
}

export default function TrendChart({ title, data, xKey, lines }) {
  return (
    <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm">
      <h3 className="text-sm font-semibold text-slate-700 mb-6">{title}</h3>
      <ResponsiveContainer width="100%" height={248}>
        <AreaChart data={data} margin={{ top: 4, right: 4, left: -18, bottom: 0 }}>
          <defs>
            {lines.map(line => (
              <linearGradient key={line.key} id={`grad-${line.key}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"   stopColor={line.color} stopOpacity={0.14} />
                <stop offset="100%" stopColor={line.color} stopOpacity={0.01} />
              </linearGradient>
            ))}
          </defs>

          <CartesianGrid vertical={false} stroke="#f1f5f9" />

          <XAxis
            dataKey={xKey}
            tick={{ fontSize: 11, fill: '#94a3b8' }}
            axisLine={false}
            tickLine={false}
            dy={8}
          />
          <YAxis
            tick={{ fontSize: 11, fill: '#94a3b8' }}
            axisLine={false}
            tickLine={false}
            tickFormatter={v => v >= 1000 ? `${(v / 1000).toFixed(0)}k` : v}
          />

          <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#e2e8f0', strokeWidth: 1 }} />

          {lines.length > 1 && (
            <Legend
              iconType="circle"
              iconSize={6}
              wrapperStyle={{ fontSize: 12, color: '#64748b', paddingTop: 16 }}
            />
          )}

          {lines.map(line => (
            <Area
              key={line.key}
              type="monotone"
              dataKey={line.key}
              name={line.label}
              stroke={line.color}
              strokeWidth={2}
              fill={`url(#grad-${line.key})`}
              dot={false}
              activeDot={{ r: 4, strokeWidth: 0 }}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
