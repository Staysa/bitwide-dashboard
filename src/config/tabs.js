import SheetsTab          from '../components/tabs/SheetsTab'
import GoogleAnalyticsTab from '../components/tabs/GoogleAnalyticsTab'
import HotjarTab          from '../components/tabs/HotjarTab'
import ChatTab            from '../components/tabs/ChatTab'
import SEOTab             from '../components/tabs/SEOTab'
import GoogleAdsTab       from '../components/tabs/GoogleAdsTab'

export const TABS = [
  { id: 'sheets',    label: 'Sheets',          Component: SheetsTab          },
  { id: 'analytics', label: 'Google Analytics', Component: GoogleAnalyticsTab },
  { id: 'hotjar',    label: 'Hotjar',           Component: HotjarTab          },
  { id: 'chat',      label: 'Chat',             Component: ChatTab            },
  { id: 'seo',       label: 'SEO',              Component: SEOTab             },
  { id: 'ads',       label: 'Google Ads',       Component: GoogleAdsTab       },
]
