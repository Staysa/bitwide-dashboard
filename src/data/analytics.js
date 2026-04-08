export const analyticsData = {
  kpis: [
    { label: 'Users',           value: '14,382', change: '+11.2%', up: true },
    { label: 'Sessions',        value: '21,540', change: '+9.8%',  up: true },
    { label: 'Conversion Rate', value: '3.4%',   change: '+0.6pp', up: true },
    { label: 'Top Source',      value: 'Organic', change: null,    up: null },
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
    { page: '/home',          views: '8,432', users: '6,210', bounceRate: '42.1%', avgDuration: '2m 14s' },
    { page: '/pricing',       views: '4,218', users: '3,890', bounceRate: '38.4%', avgDuration: '3m 02s' },
    { page: '/blog/outbound', views: '3,102', users: '2,760', bounceRate: '55.3%', avgDuration: '4m 31s' },
    { page: '/demo',          views: '2,840', users: '2,640', bounceRate: '21.7%', avgDuration: '5m 48s' },
    { page: '/features',      views: '2,310', users: '2,100', bounceRate: '44.8%', avgDuration: '2m 55s' },
    { page: '/about',         views: '1,560', users: '1,420', bounceRate: '61.2%', avgDuration: '1m 38s' },
  ],
}
