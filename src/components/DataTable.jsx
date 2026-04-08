const STATUS_STYLES = {
  'Qualified':   'bg-emerald-50 text-emerald-700',
  'In Progress': 'bg-amber-50  text-amber-700',
  'Not a Fit':   'bg-slate-100 text-slate-500',
}

function CellValue({ colKey, value }) {
  if (colKey === 'status' && STATUS_STYLES[value]) {
    return (
      <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium ${STATUS_STYLES[value]}`}>
        {value}
      </span>
    )
  }
  return value
}

export default function DataTable({ columns, rows }) {
  return (
    <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/70">
              {columns.map(col => (
                <th
                  key={col.key}
                  className="px-5 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider whitespace-nowrap"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {rows.map((row, i) => (
              <tr key={i} className="hover:bg-slate-50/60 transition-colors">
                {columns.map((col, j) => (
                  <td
                    key={col.key}
                    className={`px-5 py-3.5 whitespace-nowrap ${
                      j === 0 ? 'font-medium text-slate-800' : 'text-slate-600'
                    }`}
                  >
                    <CellValue colKey={col.key} value={row[col.key]} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
