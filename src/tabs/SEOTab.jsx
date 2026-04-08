import { seoData as d } from '../data/mockData'
import KPICard from '../components/KPICard'
import TrendChart from '../components/TrendChart'
import DataTable from '../components/DataTable'

export default function SEOTab() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-slate-900">SEO</h2>
        <p className="text-sm text-slate-400 mt-0.5">Google Search Console · Last 8 weeks</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {d.kpis.map(kpi => <KPICard key={kpi.label} {...kpi} />)}
      </div>

      <TrendChart title={d.chartTitle} data={d.chartData} xKey={d.chartXKey} lines={d.chartLines} />

      <DataTable columns={d.tableColumns} rows={d.tableRows} />
    </div>
  )
}
