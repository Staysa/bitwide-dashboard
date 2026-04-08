export const seoData = {
  kpis: [
    { label: 'Clicks',       value: '9,240',   change: '+13.8%', up: true  },
    { label: 'Impressions',  value: '138,400', change: '+9.2%',  up: true  },
    { label: 'CTR',          value: '6.7%',    change: '+0.4pp', up: true  },
    { label: 'Avg Position', value: '11.8',    change: '-1.2',   up: false, positive: true },
  ],
  chartTitle: 'Weekly Clicks',
  chartXKey: 'week',
  chartData: [
    { week: 'Jan 6',  clicks: 820  },
    { week: 'Jan 13', clicks: 980  },
    { week: 'Jan 20', clicks: 910  },
    { week: 'Jan 27', clicks: 1120 },
    { week: 'Feb 3',  clicks: 1280 },
    { week: 'Feb 10', clicks: 1380 },
    { week: 'Feb 17', clicks: 1510 },
    { week: 'Feb 24', clicks: 1620 },
  ],
  chartLines: [
    { key: 'clicks', color: '#6366f1', label: 'Clicks' },
  ],
  tableColumns: [
    { key: 'query',       label: 'Query'        },
    { key: 'clicks',      label: 'Clicks'       },
    { key: 'impressions', label: 'Impressions'  },
    { key: 'ctr',         label: 'CTR'          },
    { key: 'position',    label: 'Avg Position' },
  ],
  tableRows: [
    { query: 'b2b outbound agency',      clicks: '1,240', impressions: '18,420', ctr: '6.7%', position: '3.1' },
    { query: 'outbound sales strategy',  clicks: '980',   impressions: '16,800', ctr: '5.8%', position: '4.4' },
    { query: 'cold email agency',        clicks: '842',   impressions: '14,200', ctr: '5.9%', position: '5.2' },
    { query: 'b2b lead generation',      clicks: '730',   impressions: '24,100', ctr: '3.0%', position: '8.7' },
    { query: 'outbound call service',    clicks: '612',   impressions: '11,300', ctr: '5.4%', position: '6.1' },
    { query: 'sales development agency', clicks: '540',   impressions: '9,840',  ctr: '5.5%', position: '7.3' },
    { query: 'book meetings b2b',        clicks: '480',   impressions: '8,620',  ctr: '5.6%', position: '6.8' },
  ],
}
