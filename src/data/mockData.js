// ─── Sheets ───────────────────────────────────────────────────────────────────
export const sheetsData = {
  kpis: [
    { label: 'Calls Made',       value: '1,479', change: '+8.3%',  up: true  },
    { label: 'Pick-up Rate',     value: '34.2%', change: '+2.1pp', up: true  },
    { label: 'Meetings Booked',  value: '89',    change: '+12.7%', up: true  },
    { label: 'Info Requests',    value: '156',   change: '-3.2%',  up: false },
  ],
  chartTitle: 'Weekly Call Activity',
  chartXKey: 'week',
  chartData: [
    { week: 'Jan 6',  calls: 142 },
    { week: 'Jan 13', calls: 168 },
    { week: 'Jan 20', calls: 155 },
    { week: 'Jan 27', calls: 189 },
    { week: 'Feb 3',  calls: 201 },
    { week: 'Feb 10', calls: 178 },
    { week: 'Feb 17', calls: 214 },
    { week: 'Feb 24', calls: 232 },
  ],
  chartLines: [
    { key: 'calls', color: '#6366f1', label: 'Calls Made' },
  ],
  tableColumns: [
    { key: 'week',         label: 'Week'          },
    { key: 'calls',        label: 'Calls Made'    },
    { key: 'pickupRate',   label: 'Pick-up Rate'  },
    { key: 'meetings',     label: 'Meetings'      },
    { key: 'infoRequests', label: 'Info Requests' },
  ],
  tableRows: [
    { week: 'Jan 6',  calls: 142, pickupRate: '31.0%', meetings: 8,  infoRequests: 18 },
    { week: 'Jan 13', calls: 168, pickupRate: '33.5%', meetings: 11, infoRequests: 22 },
    { week: 'Jan 20', calls: 155, pickupRate: '32.2%', meetings: 9,  infoRequests: 19 },
    { week: 'Jan 27', calls: 189, pickupRate: '35.4%', meetings: 14, infoRequests: 25 },
    { week: 'Feb 3',  calls: 201, pickupRate: '36.8%', meetings: 16, infoRequests: 28 },
    { week: 'Feb 10', calls: 178, pickupRate: '34.3%', meetings: 13, infoRequests: 24 },
    { week: 'Feb 17', calls: 214, pickupRate: '37.4%', meetings: 18, infoRequests: 20 },
    { week: 'Feb 24', calls: 232, pickupRate: '38.1%', meetings: 21, infoRequests: 27 },
  ],
}

// ─── Google Analytics ─────────────────────────────────────────────────────────
export const analyticsData = {
  kpis: [
    { label: 'Users',            value: '14,382', change: '+11.2%', up: true },
    { label: 'Sessions',         value: '21,540', change: '+9.8%',  up: true },
    { label: 'Conversion Rate',  value: '3.4%',   change: '+0.6pp', up: true },
    { label: 'Top Source',       value: 'Organic', change: null,    up: null },
  ],
  chartTitle: 'Weekly Traffic',
  chartXKey: 'week',
  chartData: [
    { week: 'Jan 6',  users: 1240, sessions: 1850 },
    { week: 'Jan 13', users: 1580, sessions: 2340 },
    { week: 'Jan 20', users: 1420, sessions: 2120 },
    { week: 'Jan 27', users: 1890, sessions: 2810 },
    { week: 'Feb 3',  users: 2150, sessions: 3200 },
    { week: 'Feb 10', users: 2340, sessions: 3580 },
    { week: 'Feb 17', users: 2890, sessions: 4320 },
    { week: 'Feb 24', users: 2870, sessions: 4310 },
  ],
  chartLines: [
    { key: 'users',    color: '#6366f1', label: 'Users'    },
    { key: 'sessions', color: '#f59e0b', label: 'Sessions' },
  ],
  tableColumns: [
    { key: 'page',        label: 'Page'         },
    { key: 'views',       label: 'Views'        },
    { key: 'users',       label: 'Users'        },
    { key: 'bounceRate',  label: 'Bounce Rate'  },
    { key: 'avgDuration', label: 'Avg Duration' },
  ],
  tableRows: [
    { page: '/home',           views: '8,432', users: '6,210', bounceRate: '42.1%', avgDuration: '2m 14s' },
    { page: '/pricing',        views: '4,218', users: '3,890', bounceRate: '38.4%', avgDuration: '3m 02s' },
    { page: '/blog/outbound',  views: '3,102', users: '2,760', bounceRate: '55.3%', avgDuration: '4m 31s' },
    { page: '/demo',           views: '2,840', users: '2,640', bounceRate: '21.7%', avgDuration: '5m 48s' },
    { page: '/features',       views: '2,310', users: '2,100', bounceRate: '44.8%', avgDuration: '2m 55s' },
    { page: '/about',          views: '1,560', users: '1,420', bounceRate: '61.2%', avgDuration: '1m 38s' },
  ],
}

// ─── Hotjar ───────────────────────────────────────────────────────────────────
export const hotjarData = {
  kpis: [
    { label: 'Total Clicks',     value: '68,420', change: '+14.3%', up: true,  positive: true  },
    { label: 'Rage Clicks',      value: '1,847',  change: '-8.2%',  up: false, positive: true  },
    { label: 'Dead Clicks',      value: '3,210',  change: '-5.4%',  up: false, positive: true  },
    { label: 'Avg Scroll Depth', value: '64.3%',  change: '+3.1pp', up: true,  positive: true  },
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
    { key: 'element',    label: 'Element'          },
    { key: 'clicks',     label: 'Clicks'           },
    { key: 'rageClicks', label: 'Rage Clicks'      },
    { key: 'deadClicks', label: 'Dead Clicks'      },
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

// ─── Chat ─────────────────────────────────────────────────────────────────────
export const chatData = {
  kpis: [
    { label: 'Conversations',     value: '342',    change: '+18.4%', up: true },
    { label: 'Qualified Leads',   value: '71',     change: '+22.1%', up: true },
    { label: 'Conversion Rate',   value: '20.8%',  change: '+0.7pp', up: true },
    { label: 'Avg Response Time', value: '1m 42s', change: '-23s',   up: false, positive: true },
  ],
  chartTitle: 'Conversations Over Time',
  chartXKey: 'week',
  chartData: [
    { week: 'Jan 6',  conversations: 28, qualified: 6  },
    { week: 'Jan 13', conversations: 34, qualified: 8  },
    { week: 'Jan 20', conversations: 31, qualified: 7  },
    { week: 'Jan 27', conversations: 42, qualified: 9  },
    { week: 'Feb 3',  conversations: 51, qualified: 11 },
    { week: 'Feb 10', conversations: 62, qualified: 13 },
    { week: 'Feb 17', conversations: 68, qualified: 14 },
    { week: 'Feb 24', conversations: 72, qualified: 18 },
  ],
  chartLines: [
    { key: 'conversations', color: '#6366f1', label: 'Conversations'  },
    { key: 'qualified',     color: '#10b981', label: 'Qualified Leads' },
  ],
  tableColumns: [
    { key: 'contact',      label: 'Contact'       },
    { key: 'company',      label: 'Company'       },
    { key: 'status',       label: 'Status'        },
    { key: 'responseTime', label: 'Response Time' },
    { key: 'date',         label: 'Date'          },
  ],
  tableRows: [
    { contact: 'Sarah Chen',   company: 'Growthbase', status: 'Qualified',   responseTime: '0m 48s', date: 'Feb 24' },
    { contact: 'Mark Torres',  company: 'Salesloop',  status: 'Qualified',   responseTime: '1m 12s', date: 'Feb 24' },
    { contact: 'Julia Bauer',  company: 'Clarix',     status: 'In Progress', responseTime: '2m 05s', date: 'Feb 23' },
    { contact: 'Liam Park',    company: 'Vetrix',     status: 'Qualified',   responseTime: '0m 55s', date: 'Feb 23' },
    { contact: 'Nina Harmon',  company: 'Propelr',    status: 'Not a Fit',   responseTime: '3m 22s', date: 'Feb 22' },
    { contact: 'Owen Bradley', company: 'CloudHive',  status: 'Qualified',   responseTime: '1m 30s', date: 'Feb 22' },
    { contact: 'Priya Sharma', company: 'Taskly',     status: 'In Progress', responseTime: '1m 58s', date: 'Feb 21' },
  ],
}

// ─── SEO ──────────────────────────────────────────────────────────────────────
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
    { key: 'query',       label: 'Query'       },
    { key: 'clicks',      label: 'Clicks'      },
    { key: 'impressions', label: 'Impressions' },
    { key: 'ctr',         label: 'CTR'         },
    { key: 'position',    label: 'Avg Position'},
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

// ─── Google Ads ───────────────────────────────────────────────────────────────
export const adsData = {
  kpis: [
    { label: 'Total Spend',       value: '$13,480', change: '+4.2%',  up: true,  positive: null },
    { label: 'Clicks',            value: '5,240',   change: '+18.3%', up: true  },
    { label: 'Avg CPC',           value: '$2.57',   change: '-11.7%', up: false, positive: true },
    { label: 'Conversions',       value: '248',     change: '+21.4%', up: true  },
    { label: 'Cost / Conversion', value: '$54.35',  change: '-14.2%', up: false, positive: true },
  ],
  chartTitle: 'Weekly Ad Performance',
  chartXKey: 'week',
  chartData: [
    { week: 'Jan 6',  clicks: 480 },
    { week: 'Jan 13', clicks: 560 },
    { week: 'Jan 20', clicks: 520 },
    { week: 'Jan 27', clicks: 680 },
    { week: 'Feb 3',  clicks: 740 },
    { week: 'Feb 10', clicks: 800 },
    { week: 'Feb 17', clicks: 820 },
    { week: 'Feb 24', clicks: 810 },
  ],
  chartLines: [
    { key: 'clicks', color: '#6366f1', label: 'Clicks' },
  ],
  tableColumns: [
    { key: 'campaign',    label: 'Campaign'      },
    { key: 'spend',       label: 'Spend'         },
    { key: 'clicks',      label: 'Clicks'        },
    { key: 'cpc',         label: 'CPC'           },
    { key: 'conversions', label: 'Conversions'   },
    { key: 'costPerConv', label: 'Cost / Conv'   },
  ],
  tableRows: [
    { campaign: 'Brand — Search',      spend: '$3,840', clicks: '1,420', cpc: '$2.70', conversions: 72, costPerConv: '$53.33' },
    { campaign: 'Competitor — Search', spend: '$2,680', clicks: '980',   cpc: '$2.73', conversions: 48, costPerConv: '$55.83' },
    { campaign: 'Demo — RLSA',         spend: '$2,240', clicks: '840',   cpc: '$2.67', conversions: 62, costPerConv: '$36.13' },
    { campaign: 'Outbound — Search',   spend: '$1,980', clicks: '780',   cpc: '$2.54', conversions: 38, costPerConv: '$52.11' },
    { campaign: 'LinkedIn — Display',  spend: '$1,540', clicks: '620',   cpc: '$2.48', conversions: 18, costPerConv: '$85.56' },
    { campaign: 'Retargeting — All',   spend: '$1,200', clicks: '600',   cpc: '$2.00', conversions: 28, costPerConv: '$42.86' },
  ],
}
