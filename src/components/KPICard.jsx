export default function KPICard({ label, value, change, up, positive }) {
  // `positive` overrides `up` for colour — lets "down is good" metrics show green
  const colorSign = positive !== undefined ? positive : up

  const colorClass =
    colorSign === true  ? 'text-emerald-600' :
    colorSign === false ? 'text-red-500'      :
                          'text-slate-400'

  return (
    <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm">
      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-slate-900 tracking-tight">{value}</p>
      {change && (
        <div className={`mt-2 inline-flex items-center gap-1 text-xs font-medium ${colorClass}`}>
          {up === true  && <span>↑</span>}
          {up === false && <span>↓</span>}
          <span>{change} vs prev period</span>
        </div>
      )}
    </div>
  )
}
