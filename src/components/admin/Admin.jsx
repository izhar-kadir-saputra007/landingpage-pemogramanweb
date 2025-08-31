"use client"

import { useState, useEffect } from "react"
import { useNavigate, useLocation, Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"

const Admin = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [activeMenuItem, setActiveMenuItem] = useState("Overview")

  // Set active menu item based on current path
  useEffect(() => {
    const pathToLabel = {
      "/admin": "Overview",
      "/admin/ecommerce": "eCommerce",
      "/admin/projects": "Projects"
    }
    setActiveMenuItem(pathToLabel[location.pathname] || "Overview")
  }, [location.pathname])

  const handleMenuClick = (menuLabel, path) => {
    setActiveMenuItem(menuLabel)
    navigate(path)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Fixed Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">❄️</span>
              </div>
              <span className="font-semibold text-gray-800">SnowUI</span>
            </div>
            <nav className="flex space-x-6">
              <button className="px-3 py-1 text-gray-600 hover:text-gray-800">Dashboards</button>
              <button className="px-3 py-1 text-gray-800 border-b-2 border-blue-500">Overview</button>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg">🔍</button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">☀️</button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">🔔</button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">👤</button>
          </div>
        </div>
      </header>

      {/* Main Content Area with Sidebar and Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Fixed Sidebar */}
        <div className="w-64 flex-shrink-0">
          <Sidebar activeMenuItem={activeMenuItem} onMenuClick={handleMenuClick} />
        </div>
        
        {/* Scrollable Content Area */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Admin