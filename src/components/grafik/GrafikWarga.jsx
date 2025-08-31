"use client"

import { useState, useEffect } from "react"
import ChartPie from "./ChartPie"
import ChartBar from "./ChartBar"

const GrafikWarga = ({ wargaData }) => {
  const [statistics, setStatistics] = useState(null)

  // Fungsi untuk memproses data statistik
  const processStatistics = (data) => {
    if (!data || data.length === 0) return null

    // Distribusi Kelayakan Bansos
    const kelayakanBansos = data.reduce((acc, warga) => {
      acc[warga.kelayakan_bansos] = (acc[warga.kelayakan_bansos] || 0) + 1
      return acc
    }, {})

    // Distribusi Kelas Ekonomi
    const kelasEkonomi = data.reduce((acc, warga) => {
      acc[warga.kelas] = (acc[warga.kelas] || 0) + 1
      return acc
    }, {})

    // Distribusi Pendidikan
    const pendidikan = data.reduce((acc, warga) => {
      const pend = warga.pendidikan
      if (pend === 'Sarjana') acc['S1'] = (acc['S1'] || 0) + 1
      else acc[pend] = (acc[pend] || 0) + 1
      return acc
    }, {})

    // Distribusi Jenis Kelamin
    const jenisKelamin = data.reduce((acc, warga) => {
      acc[warga.jenis_kelamin] = (acc[warga.jenis_kelamin] || 0) + 1
      return acc
    }, {})

    // Rata-rata Penghasilan per Kelas
    const rataPenghasilan = data.reduce((acc, warga) => {
      if (!acc[warga.kelas]) acc[warga.kelas] = { total: 0, count: 0 }
      acc[warga.kelas].total += warga.penghasilan
      acc[warga.kelas].count += 1
      return acc
    }, {})

    // Rata-rata Jumlah Tanggungan per Kelas
    const rataTanggungan = data.reduce((acc, warga) => {
      if (!acc[warga.kelas]) acc[warga.kelas] = { total: 0, count: 0 }
      acc[warga.kelas].total += warga.jumlah_tanggungan
      acc[warga.kelas].count += 1
      return acc
    }, {})

    return {
      kelayakanBansos,
      kelasEkonomi,
      pendidikan,
      jenisKelamin,
      rataPenghasilan: Object.keys(rataPenghasilan).reduce((acc, key) => {
        acc[key] = Math.round(rataPenghasilan[key].total / rataPenghasilan[key].count)
        return acc
      }, {}),
      rataTanggungan: Object.keys(rataTanggungan).reduce((acc, key) => {
        acc[key] = (rataTanggungan[key].total / rataTanggungan[key].count).toFixed(1)
        return acc
      }, {})
    }
  }

  useEffect(() => {
    if (wargaData && wargaData.length > 0) {
      const stats = processStatistics(wargaData)
      setStatistics(stats)
    } else {
      setStatistics(null)
    }
  }, [wargaData])

  if (!wargaData || wargaData.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-xl shadow-sm">
        <div className="text-6xl mb-4">📊</div>
        <h4 className="text-lg font-semibold text-gray-700 mb-2">Data Grafik Belum Tersedia</h4>
        <p className="text-gray-500">Tidak ada data warga untuk ditampilkan dalam grafik</p>
      </div>
    )
  }

  if (!statistics) {
    return (
      <div className="flex justify-center items-center h-64 bg-white rounded-xl shadow-sm">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        <span className="ml-4 text-gray-600">Memproses data statistik...</span>
      </div>
    )
  }

  // Format Rupiah untuk penghasilan
  const formatRupiah = (angka) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(angka)
  }

  return (
    <div className="space-y-6">
      {/* Distribusi Kelayakan Bansos dan Kelas Ekonomi */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Kelayakan Bansos */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-blue-600">Distribusi Kelayakan Bansos</h3>
            <button className="p-2 hover:bg-gray-100 rounded-lg">⋯</button>
          </div>
          <ChartPie
            data={statistics.kelayakanBansos}
            colors={{
              'layak': '#10B981',
              'tidak layak': '#EF4444'
            }}
          />
        </div>

        {/* Kelas Ekonomi */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-green-600">Distribusi Kelas Ekonomi</h3>
            <button className="p-2 hover:bg-gray-100 rounded-lg">⋯</button>
          </div>
          <ChartPie
            data={statistics.kelasEkonomi}
            colors={{
              'miskin': '#EF4444',
              'menengah': '#F59E0B',
              'atas': '#10B981'
            }}
          />
        </div>
      </div>

      {/* Pendidikan dan Jenis Kelamin */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pendidikan */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-purple-600">Tingkat Pendidikan</h3>
            <button className="p-2 hover:bg-gray-100 rounded-lg">⋯</button>
          </div>
          <ChartBar
            data={statistics.pendidikan}
            colors={{
              'SD': '#EF4444',
              'SMP': '#F59E0B',
              'SMA': '#10B981',
              'D3': '#3B82F6',
              'S1': '#8B5CF6'
            }}
          />
        </div>

        {/* Jenis Kelamin */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-pink-600">Distribusi Jenis Kelamin</h3>
            <button className="p-2 hover:bg-gray-100 rounded-lg">⋯</button>
          </div>
          <ChartPie
            data={statistics.jenisKelamin}
            colors={{
              'Laki-laki': '#3B82F6',
              'Perempuan': '#EC4899'
            }}
          />
        </div>
      </div>

      {/* Rata-rata Penghasilan dan Tanggungan */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Rata-rata Penghasilan */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-orange-600">Rata-rata Penghasilan per Kelas</h3>
            <button className="p-2 hover:bg-gray-100 rounded-lg">⋯</button>
          </div>
          <div className="space-y-4">
            {Object.entries(statistics.rataPenghasilan).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <span className="text-sm text-gray-600 capitalize">{key}</span>
                <span className="text-sm font-medium text-gray-900">
                  {formatRupiah(value)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Rata-rata Tanggungan */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-cyan-600">Rata-rata Jumlah Tanggungan</h3>
            <button className="p-2 hover:bg-gray-100 rounded-lg">⋯</button>
          </div>
          <div className="space-y-4">
            {Object.entries(statistics.rataTanggungan).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <span className="text-sm text-gray-600 capitalize">{key}</span>
                <span className="text-sm font-medium text-gray-900">
                  {value} orang
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GrafikWarga