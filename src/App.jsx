import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const monthlyData = [
  { month: 'Jan', revenue: 42000, users: 1200 },
  { month: 'Feb', revenue: 51000, users: 1500 },
  { month: 'Mar', revenue: 47000, users: 1350 },
  { month: 'Apr', revenue: 63000, users: 1800 },
  { month: 'May', revenue: 58000, users: 1650 },
  { month: 'Jun', revenue: 72000, users: 2100 },
]

const stats = [
  { label: 'Total Revenue', value: '$333,000', change: '+12.4%', up: true },
  { label: 'Active Users', value: '9,600', change: '+8.1%', up: true },
  { label: 'Churn Rate', value: '2.3%', change: '-0.5%', up: false },
  { label: 'Avg. Session', value: '4m 12s', change: '+0.3%', up: true },
]

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Bitwide Dashboard</h1>
        <p className="text-gray-400 mt-1">Analytics overview · Last 6 months</p>
      </header>

      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s) => (
          <div key={s.label} className="bg-gray-900 rounded-2xl p-5 border border-gray-800">
            <p className="text-sm text-gray-400 mb-1">{s.label}</p>
            <p className="text-2xl font-semibold">{s.value}</p>
            <span
              className={`text-xs font-medium mt-1 inline-block ${
                s.up ? 'text-emerald-400' : 'text-rose-400'
              }`}
            >
              {s.change} vs prev period
            </span>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-900 rounded-2xl p-5 border border-gray-800">
          <h2 className="text-lg font-semibold mb-4">Revenue</h2>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
              <XAxis dataKey="month" stroke="#6b7280" tick={{ fill: '#9ca3af' }} />
              <YAxis stroke="#6b7280" tick={{ fill: '#9ca3af' }} tickFormatter={(v) => `$${v / 1000}k`} />
              <Tooltip
                contentStyle={{ backgroundColor: '#111827', border: '1px solid #374151', borderRadius: 8 }}
                labelStyle={{ color: '#f9fafb' }}
              />
              <Line type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-gray-900 rounded-2xl p-5 border border-gray-800">
          <h2 className="text-lg font-semibold mb-4">Active Users</h2>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
              <XAxis dataKey="month" stroke="#6b7280" tick={{ fill: '#9ca3af' }} />
              <YAxis stroke="#6b7280" tick={{ fill: '#9ca3af' }} />
              <Tooltip
                contentStyle={{ backgroundColor: '#111827', border: '1px solid #374151', borderRadius: 8 }}
                labelStyle={{ color: '#f9fafb' }}
              />
              <Legend wrapperStyle={{ color: '#9ca3af' }} />
              <Bar dataKey="users" fill="#10b981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
