"use client"

import { useState, useEffect } from "react"
import { getStatistikWarga } from "../../api/statistik"
import { getDataWarga } from "../../api/warga"
import GrafikWarga from "../grafik/GrafikWarga"
import UploadModal from "../modals/UploadModal"
import {
  Box,
  Typography,
  Alert,
  Button
} from "@mui/material"
import { CloudUpload } from "@mui/icons-material"

const Overview = () => {
  const [statistikData, setStatistikData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [wargaData, setWargaData] = useState([])
  const [itemsPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  
  // State untuk modal upload
  const [uploadModalOpen, setUploadModalOpen] = useState(false)
  
  // State untuk filtering
  const [filterKelayakan, setFilterKelayakan] = useState('semua')
  const [filterKelas, setFilterKelas] = useState('semua')
  const [filteredWargaData, setFilteredWargaData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  // Filter data ketika filter berubah atau data warga berubah
  useEffect(() => {
    let filteredData = [...wargaData]
    
    // Filter berdasarkan kelayakan bansos
    if (filterKelayakan !== 'semua') {
      filteredData = filteredData.filter(warga => 
        warga.kelayakan_bansos === filterKelayakan
      )
    }
    
    // Filter berdasarkan kelas
    if (filterKelas !== 'semua') {
      filteredData = filteredData.filter(warga => 
        warga.kelas === filterKelas
      )
    }
    
    setFilteredWargaData(filteredData)
    setCurrentPage(1) // Reset ke halaman pertama ketika filter berubah
  }, [wargaData, filterKelayakan, filterKelas])

  const fetchData = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const [statistik, warga] = await Promise.all([
        getStatistikWarga(),
        getDataWarga()
      ])
      
      setStatistikData(statistik)
      setWargaData(warga)
    } catch (err) {
      console.error("Error fetching data:", err)
      setError(`Gagal memuat data: ${err.message}`)
      setStatistikData(null)
      setWargaData([])
    } finally {
      setLoading(false)
    }
  }

  // Handle upload success
  const handleUploadSuccess = () => {
    // Reset filter setelah upload berhasil
    setFilterKelayakan('semua')
    setFilterKelas('semua')
    
    // Refresh data setelah upload berhasil
    setTimeout(() => {
      fetchData()
    }, 2000)
  }

  // Hitung pagination berdasarkan data yang sudah difilter
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredWargaData.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(filteredWargaData.length / itemsPerPage)

  // Fungsi ganti halaman
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  // Format penghasilan ke Rupiah
  const formatRupiah = (angka) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(angka)
  }

  // Warna status berdasarkan kelas
  const getStatusColor = (kelas) => {
    switch (kelas) {
      case 'miskin':
        return 'text-red-600 bg-red-100'
      case 'menengah':
        return 'text-yellow-600 bg-yellow-100'
      case 'atas':
        return 'text-green-600 bg-green-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  // Stats Cards dengan data dari API
  const statsCards = [
    { 
      title: "Total Warga", 
      value: statistikData?.total?.toLocaleString() || "0", 
      change: "+0%", 
      positive: true, 
      bgColor: "bg-blue-500",
      icon: "👥"
    },
    { 
      title: "Warga Miskin", 
      value: statistikData?.miskin?.toLocaleString() || "0", 
      change: statistikData?.persentase_miskin || "0%", 
      positive: false, 
      bgColor: "bg-red-500",
      icon: "🏠"
    },
    { 
      title: "Warga Menengah", 
      value: statistikData?.menengah?.toLocaleString() || "0", 
      change: statistikData?.persentase_menengah || "0%", 
      positive: true, 
      bgColor: "bg-yellow-500",
      icon: "🏡"
    },
    { 
      title: "Warga Atas", 
      value: statistikData?.atas?.toLocaleString() || "0", 
      change: statistikData?.persentase_atas || "0%", 
      positive: true, 
      bgColor: "bg-green-500",
      icon: "🏘️"
    },
  ]

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto lg:mx-0">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Overview</h1>
          <p className="text-gray-600">Welcome to your overview dashboard</p>
        </div>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto lg:mx-0">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Overview</h1>
          <p className="text-gray-600">Welcome to your overview dashboard</p>
        </div>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto lg:mx-0">
      {/* Upload Modal */}
      <UploadModal 
        open={uploadModalOpen}
        onClose={() => setUploadModalOpen(false)}
        onUploadSuccess={handleUploadSuccess}
      />

      {/* Header dengan Tombol Upload */}
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Overview</h1>
          <p className="text-gray-600">Welcome to your overview dashboard</p>
        </div>
        <Button
          variant="contained"
          startIcon={<CloudUpload />}
          onClick={() => setUploadModalOpen(true)}
          sx={{
            bgcolor: '#3B82F6',
            '&:hover': { bgcolor: '#2563EB' }
          }}
        >
          Upload Data
        </Button>
      </div>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      {/* Stats Cards dengan data statistik warga */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statsCards.map((card, index) => (
          <div
            key={index}
            className={`${card.bgColor} rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm opacity-90">{card.title}</span>
              <span className="text-xl">{card.icon}</span>
            </div>
            <div className="text-2xl font-bold mb-1">{card.value}</div>
            <div className={`text-sm ${card.positive ? "text-green-200" : "text-red-200"}`}>
              {card.change}
            </div>
          </div>
        ))}
      </div>

      {/* Grafik Warga */}
      <div className="mb-8">
        <GrafikWarga wargaData={wargaData} />
      </div>

      {/* Data Warga Table */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-cyan-600">Data Warga</h3>
          <div className="flex items-center space-x-4">
            {/* Filter Kelayakan Bansos */}
            <div className="relative">
              <select 
                className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setFilterKelayakan(e.target.value)}
                value={filterKelayakan}
              >
                <option value="semua">Semua Kelayakan</option>
                <option value="layak">Layak Bansos</option>
                <option value="tidak layak">Tidak Layak</option>
              </select>
            </div>
            
            {/* Filter Kelas */}
            <div className="relative">
              <select 
                className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setFilterKelas(e.target.value)}
                value={filterKelas}
              >
                <option value="semua">Semua Kelas</option>
                <option value="miskin">Miskin</option>
                <option value="menengah">Menengah</option>
                <option value="atas">Atas</option>
              </select>
            </div>
            
            <span className="text-sm text-gray-600">
              {filteredWargaData.length > 0 
                ? `Menampilkan ${indexOfFirstItem + 1}-${Math.min(indexOfLastItem, filteredWargaData.length)} dari ${filteredWargaData.length} warga`
                : 'Data belum tersedia'
              }
            </span>
            <button className="p-2 hover:bg-gray-100 rounded-lg">⋯</button>
          </div>
        </div>

        <div className="overflow-x-auto">
          {filteredWargaData.length === 0 ? (
            // Tampilan ketika data kosong
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📋</div>
              <h4 className="text-lg font-semibold text-gray-700 mb-2">
                {wargaData.length === 0 ? 'Data Belum Tersedia' : 'Data Tidak Ditemukan'}
              </h4>
              <p className="text-gray-500">
                {wargaData.length === 0 
                  ? 'Tidak ada data warga yang dapat ditampilkan' 
                  : 'Tidak ada data yang sesuai dengan filter yang dipilih'
                }
              </p>
              {wargaData.length === 0 && (
                <button 
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  onClick={() => setUploadModalOpen(true)}
                >
                  Upload Data CSV
                </button>
              )}
            </div>
          ) : (
            // Tampilan ketika ada data
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Nama</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">NIK</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Alamat</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Usia</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Jenis Kelamin</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Pekerjaan</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Kelayakan Bansos</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Penghasilan</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Tanggungan</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Pendidikan</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Kendaraan</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Status Pernikahan</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Kelas</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((warga) => (
                  <tr key={warga.id || warga.nik} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-xs text-blue-600 font-medium">
                          {warga.nama ? warga.nama.charAt(0).toUpperCase() : '?'}
                        </div>
                        <span className="font-medium text-gray-900">{warga.nama || '-'}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-600 font-mono">{warga.nik || '-'}</td>
                    <td className="py-4 px-4 text-gray-600 max-w-xs truncate">{warga.alamat || '-'}</td>
                    <td className="py-4 px-4 text-gray-600 text-center">{warga.usia || '-'}</td>
                    <td className="py-4 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        warga.jenis_kelamin === 'Laki-laki' 
                          ? 'text-blue-600 bg-blue-100' 
                          : 'text-pink-600 bg-pink-100'
                      }`}>
                        {warga.jenis_kelamin || '-'}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-gray-600">{warga.pekerjaan || '-'}</td>
                    <td className="py-4 px-4 font-medium text-gray-900">
                      {warga.penghasilan ? formatRupiah(warga.penghasilan) : '-'}
                    </td>
                    <td className="py-4 px-4 text-gray-600 text-center">{warga.jumlah_tanggungan || '0'}</td>
                    <td className="py-4 px-4 text-gray-600">{warga.pendidikan || '-'}</td>
                    <td className="py-4 px-4 text-gray-600">{warga.kendaraan || '-'}</td>
                    <td className="py-4 px-4 text-gray-600">{warga.status_pernikahan || '-'}</td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(warga.kelas)}`}>
                        {warga.kelas || '-'}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        warga.kelayakan_bansos === 'layak' 
                          ? 'text-green-600 bg-green-100' 
                          : 'text-red-600 bg-red-100'
                      }`}>
                        {warga.kelayakan_bansos || 'tidak layak'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Pagination - hanya tampilkan jika ada data */}
        {filteredWargaData.length > 0 && totalPages > 1 && (
          <div className="flex justify-center items-center mt-6 space-x-2">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => paginate(page)}
                className={`px-3 py-1 border rounded-md ${
                  currentPage === page
                    ? 'bg-blue-500 text-white border-blue-500'
                    : 'border-gray-300 text-gray-700'
                }`}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Overview