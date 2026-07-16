import { useState } from 'react'
import { Sidebar } from '@/components/layout/Sidebar'
import { TopNav } from '@/components/layout/TopNav'
import { LandingPage } from '@/pages/LandingPage'
import { DashboardPage } from '@/pages/DashboardPage'
import { AnalyticsPage } from '@/pages/AnalyticsPage'
import { ResearchPage } from '@/pages/ResearchPage'
import { IdeasPage } from '@/pages/IdeasPage'
import { SettingsPage } from '@/pages/SettingsPage'
import { UploadPage } from '@/pages/UploadPage'
import { useDarkMode } from '@/hooks/useDarkMode'
import { useBackendStatus } from '@/hooks/useBackendStatus'

function AppShell({ isDark, toggleDark }) {
  const [activePage, setActivePage] = useState('dashboard')
  const backendStatus = useBackendStatus()

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':  return <DashboardPage />
      case 'research':   return <ResearchPage />
      case 'ideas':      return <IdeasPage />
      case 'analytics':  return <AnalyticsPage />
      case 'upload':     return <UploadPage />
      case 'settings':   return <SettingsPage />
      default:           return <DashboardPage />
    }
  }

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-950 overflow-hidden">
      <Sidebar activePage={activePage} onPageChange={setActivePage} backendStatus={backendStatus} />

      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <TopNav
          isDark={isDark}
          toggleDark={toggleDark}
          activePage={activePage}
          onPageChange={setActivePage}
          backendStatus={backendStatus}
        />

        <main className="flex-1 overflow-y-auto scrollbar-thin">
          <div className="p-4 md:p-6 max-w-[1400px] mx-auto">
            {renderPage()}
          </div>
        </main>
      </div>
    </div>
  )
}

function App() {
  const { isDark, toggle } = useDarkMode()
  const [showApp, setShowApp] = useState(false)

  if (!showApp) {
    return (
      <div className={isDark ? 'dark' : ''}>
        <LandingPage onEnterApp={() => setShowApp(true)} />
      </div>
    )
  }

  return (
    <div className={isDark ? 'dark' : ''}>
      <AppShell isDark={isDark} toggleDark={toggle} />
    </div>
  )
}

export default App
