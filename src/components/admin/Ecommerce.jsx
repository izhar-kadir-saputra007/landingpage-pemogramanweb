"use client"

const Ecommerce = () => {
  return (
    <div className="max-w-7xl mx-auto lg:mx-0">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">eCommerce</h1>
        <p className="text-gray-600">Welcome to your eCommerce dashboard</p>
      </div>

<div className="bg-white rounded-xl p-6 mb-8 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div className="flex space-x-6">
            <button className="text-purple-600 border-b-2 border-purple-600 pb-1">Users</button>
            <button className="text-gray-500 hover:text-gray-700">Projects</button>
            <button className="text-gray-500 hover:text-gray-700">Operating Status</button>
          </div>
          <div className="flex items-center space-x-4">
            <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm">
              <option>Week</option>
              <option>Month</option>
              <option>Year</option>
            </select>
            <button className="p-2 hover:bg-gray-100 rounded-lg">📊</button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">⋯</button>
          </div>
        </div>

        {/* Simple Line Chart Representation */}
        <div className="h-64 flex items-end justify-between px-4">
          {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((month, index) => (
            <div key={month} className="flex flex-col items-center">
              <div
                className="w-2 bg-purple-400 rounded-t mb-2"
                style={{ height: `${Math.random() * 150 + 50}px` }}
              ></div>
              <span className="text-xs text-gray-500">{month}</span>
            </div>
          ))}
        </div>
      </div>



      {/* Device and Location Traffic */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Device Traffic */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-blue-600">Device Traffic</h3>
            <button className="p-2 hover:bg-gray-100 rounded-lg">⋯</button>
          </div>
          <div className="space-y-4">
            {deviceData.map((device, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{device.name}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${device.highlight ? "bg-blue-500" : "bg-gray-400"} rounded-full`}
                      style={{ width: `${device.value}%` }}
                    ></div>
                  </div>
                  {device.highlight && (
                    <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded-full">243K</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location Traffic */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-green-600">Location Traffic</h3>
            <button className="p-2 hover:bg-gray-100 rounded-lg">⋯</button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {locationData.map((location, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gray-200 rounded-lg mx-auto mb-2"></div>
                <span className="text-xs text-gray-600">{location}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Traffic Chart */}
      <div className="bg-white rounded-xl p-6 mb-8 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-red-500">Product Traffic</h3>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-4 text-sm">
              <span className="flex items-center">
                <span className="w-3 h-3 bg-gray-800 rounded-full mr-2"></span>All
              </span>
              <span className="flex items-center">
                <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>SnowUI
              </span>
              <span className="flex items-center">
                <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>Dashboard
              </span>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg">⋯</button>
          </div>
        </div>

        {/* Bar Chart Representation */}
        <div className="h-48 flex items-end justify-between px-2">
          {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(
            (month, index) => (
              <div key={month} className="flex flex-col items-center space-y-1">
                <div className="flex flex-col space-y-1">
                  <div
                    className="w-3 bg-gray-800 rounded-t"
                    style={{ height: `${Math.random() * 80 + 20}px` }}
                  ></div>
                  <div
                    className="w-3 bg-red-500 rounded-t"
                    style={{ height: `${Math.random() * 60 + 20}px` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-500 transform -rotate-45 origin-center">{month}</span>
              </div>
            ),
          )}
        </div>
      </div>


      <div className="bg-white rounded-xl p-12 shadow-sm text-center">
        <div className="text-6xl mb-4">🛒</div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">eCommerce Dashboard</h2>
        <p className="text-gray-600">
          This page is under construction. Content for eCommerce will be available soon.
        </p>
      </div>
    </div>
  )
}

export default Ecommerce