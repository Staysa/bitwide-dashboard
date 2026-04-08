import { hotjarData as d } from '../../data/hotjar'
import KPICard    from '../KPICard'
import TrendChart from '../TrendChart'
import DataTable  from '../DataTable'

export default function HotjarTab() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-slate-900">Hotjar</h2>
        <p className="text-sm text-slate-400 mt-0.5">User behaviour & interactions · Last 8 weeks</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {d.kpis.map(kpi => <KPICard key={kpi.label} {...kpi} />)}
      </div>
      <TrendChart title={d.chartTitle} data={d.chartData} xKey={d.chartXKey} lines={d.chartLines} />
      <DataTable columns={d.tableColumns} rows={d.tableRows} />
    </div>
  )
}
