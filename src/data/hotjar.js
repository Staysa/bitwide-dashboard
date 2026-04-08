export const hotjarData = {
  kpis: [
    { label: 'Total Clicks',     value: '68,420', change: '+14.3%', up: true,  positive: true },
    { label: 'Rage Clicks',      value: '1,847',  change: '-8.2%',  up: false, positive: true },
    { label: 'Dead Clicks',      value: '3,210',  change: '-5.4%',  up: false, positive: true },
    { label: 'Avg Scroll Depth', value: '64.3%',  change: '+3.1pp', up: true,  positive: true },
  ],
  chartTitle: 'Weekly Click Interactions',
  chartXKey: 'week',
  chartData: [
    { week: 'Jan 6',  clicks: 6200  },
    { week: 'Jan 13', clicks: 7800  },
    { week: 'Jan 20', clicks: 7100  },
    { week: 'Jan 27', clicks: 9200  },
    { week: 'Feb 3',  clicks: 10400 },
    { week: 'Feb 10', clicks: 11800 },
    { week: 'Feb 17', clicks: 13200 },
    { week: 'Feb 24', clicks: 14800 },
  ],
  chartLines: [
    { key: 'clicks', color: '#6366f1', label: 'Total Clicks' },
  ],
  tableColumns: [
    { key: 'element',    label: 'Element'             },
    { key: 'clicks',     label: 'Clicks'              },
    { key: 'rageClicks', label: 'Rage Clicks'         },
    { key: 'deadClicks', label: 'Dead Clicks'         },
    { key: 'scrollPct',  label: 'Visible To (Scroll)' },
  ],
  tableRows: [
    { element: 'Book a Demo (Hero)',    clicks: '12,420', rageClicks: 82,  deadClicks: 0,   scrollPct: '100%' },
    { element: 'Pricing CTA',          clicks: '8,340',  rageClicks: 124, deadClicks: 0,   scrollPct: '78%'  },
    { element: 'Nav — Features',       clicks: '6,210',  rageClicks: 31,  deadClicks: 0,   scrollPct: '100%' },
    { element: 'Chat Widget',          clicks: '4,820',  rageClicks: 18,  deadClicks: 140, scrollPct: '100%' },
    { element: 'Testimonials section', clicks: '3,140',  rageClicks: 210, deadClicks: 0,   scrollPct: '52%'  },
    { element: 'FAQ Accordion',        clicks: '2,980',  rageClicks: 88,  deadClicks: 320, scrollPct: '41%'  },
  ],
}
