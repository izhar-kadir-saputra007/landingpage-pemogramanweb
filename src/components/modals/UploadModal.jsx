// components/modals/UploadModal.jsx
"use client"

import { useState } from "react"
import { uploadWargaData } from "../../api/upload"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
  LinearProgress,
  Alert,
  IconButton
} from "@mui/material"
import { Close, CloudUpload } from "@mui/icons-material"

const UploadModal = ({ open, onClose, onUploadSuccess }) => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [uploadLoading, setUploadLoading] = useState(false)
  const [uploadResult, setUploadResult] = useState(null)
  const [uploadError, setUploadError] = useState(null)

  // Handle file selection
  const handleFileSelect = (event) => {
    const file = event.target.files[0]
    if (file && file.type === "text/csv") {
      setSelectedFile(file)
      setUploadError(null)
      setUploadResult(null)
    } else {
      setUploadError("Silakan pilih file CSV yang valid")
    }
  }

  // Handle upload
  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadError("Silakan pilih file terlebih dahulu")
      return
    }

    try {
      setUploadLoading(true)
      setUploadError(null)
      setUploadResult(null)

      const result = await uploadWargaData(selectedFile)
      setUploadResult(result)

      // Panggil callback jika upload berhasil
      if (onUploadSuccess) {
        onUploadSuccess()
      }

    } catch (err) {
      console.error("Upload error:", err)
      setUploadError(err.response?.data?.message || "Gagal mengupload file")
    } finally {
      setUploadLoading(false)
    }
  }

  // Reset modal
  const resetModal = () => {
    setSelectedFile(null)
    setUploadLoading(false)
    setUploadResult(null)
    setUploadError(null)
  }

  // Handle modal close
  const handleClose = () => {
    resetModal()
    onClose()
  }

  return (
    <Dialog 
      open={open} 
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h6">Upload Data Warga (CSV)</Typography>
          <IconButton onClick={handleClose} size="small">
            <Close />
          </IconButton>
        </Box>
      </DialogTitle>
      
      <DialogContent>
        {uploadLoading && <LinearProgress sx={{ mb: 2 }} />}
        
        {uploadError && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {uploadError}
          </Alert>
        )}
        
        {uploadResult ? (
          <Alert severity="success" sx={{ mb: 2 }}>
            <Typography variant="h6">Upload Berhasil!</Typography>
            <Typography variant="body2">
              {uploadResult.data?.eligibility_summary?.details || "Data berhasil diproses"}
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Precision: {(uploadResult.data?.train?.metrics?.precision_macro * 100).toFixed(1)}% |
              Recall: {(uploadResult.data?.train?.metrics?.recall_macro * 100).toFixed(1)}%
            </Typography>
          </Alert>
        ) : (
          <Box>
            <input
              accept=".csv"
              style={{ display: 'none' }}
              id="csv-file-input"
              type="file"
              onChange={handleFileSelect}
            />
            <label htmlFor="csv-file-input">
              <Button
                variant="outlined"
                component="span"
                startIcon={<CloudUpload />}
                fullWidth
                sx={{ mb: 2, py: 2 }}
              >
                {selectedFile ? selectedFile.name : "Pilih File CSV"}
              </Button>
            </label>
            
            {selectedFile && (
              <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                File terpilih: {selectedFile.name} ({(selectedFile.size / 1024).toFixed(1)} KB)
              </Typography>
            )}
          </Box>
        )}
      </DialogContent>
      
      <DialogActions>
        {!uploadResult ? (
          <>
            <Button onClick={handleClose}>Batal</Button>
            <Button
              onClick={handleUpload}
              variant="contained"
              disabled={!selectedFile || uploadLoading}
            >
              {uploadLoading ? "Mengupload..." : "Upload"}
            </Button>
          </>
        ) : (
          <Button onClick={handleClose} variant="contained">
            Tutup
          </Button>
        )}
      </DialogActions>
    </Dialog>
  )
}

export default UploadModal