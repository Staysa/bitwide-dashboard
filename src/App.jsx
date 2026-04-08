import { useState } from 'react'
import SheetsTab from './tabs/SheetsTab'
import GoogleAnalyticsTab from './tabs/GoogleAnalyticsTab'
import HotjarTab from './tabs/HotjarTab'
import ChatTab from './tabs/ChatTab'
import SEOTab from './tabs/SEOTab'
import GoogleAdsTab from './tabs/GoogleAdsTab'

const TABS = [
  { id: 'sheets',    label: 'Sheets',           Component: SheetsTab          },
  { id: 'analytics', label: 'Google Analytics',  Component: GoogleAnalyticsTab },
  { id: 'hotjar',    label: 'Hotjar',            Component: HotjarTab          },
  { id: 'chat',      label: 'Chat',              Component: ChatTab            },
  { id: 'seo',       label: 'SEO',               Component: SEOTab             },
  { id: 'ads',       label: 'Google Ads',        Component: GoogleAdsTab       },
]

export default function App() {
  const [active, setActive] = useState('sheets')
  const { Component: ActiveTab } = TABS.find(t => t.id === active)

  return (
    <div className="min-h-screen bg-slate-50">
      {/* ── Top nav ── */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-8 h-14">

            {/* Logo */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="w-5 h-5 bg-indigo-600 rounded-md" />
              <span className="text-sm font-semibold text-slate-900 tracking-tight">Bitwide</span>
            </div>

            {/* Tabs */}
            <nav className="flex items-center gap-0.5 overflow-x-auto">
              {TABS.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  className={`px-3.5 py-1.5 text-sm rounded-md whitespace-nowrap transition-colors ${
                    active === tab.id
                      ? 'bg-slate-100 text-slate-900 font-semibold'
                      : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50 font-medium'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>

          </div>
        </div>
      </header>

      {/* ── Page content ── */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <ActiveTab />
      </main>
    </div>
  )
}
