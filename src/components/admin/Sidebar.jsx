"use client"

const Sidebar = ({ activeMenuItem, onMenuClick }) => {
  const sidebarItems = [
    { icon: "📊", label: "Overview", path: "/admin" },
    { icon: "🛒", label: "eCommerce", path: "/admin/ecommerce" },
    { icon: "📁", label: "Projects", path: "/admin/projects" },
  ]

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-full sticky top-[76px]">
      <nav className="p-4 space-y-2">
        {sidebarItems.map((item, index) => (
          <button
            key={index}
            onClick={() => onMenuClick(item.label, item.path)}
            className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left hover:bg-gray-100 transition-all duration-200 ${
              activeMenuItem === item.label
                ? "bg-blue-50 text-blue-700 border-r-2 border-blue-500 shadow-sm"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
            {activeMenuItem === item.label && <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full"></div>}
          </button>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar