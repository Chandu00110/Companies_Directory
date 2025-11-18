import React, { createContext, useContext, useEffect, useState } from 'react'
import { fetchCompanies } from '../api/api'

const CompaniesContext = createContext()

export function CompaniesProvider({ children }) {
  const [companies, setCompanies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetchCompanies()
      .then(data => {
        setCompanies(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message || 'Unknown error')
        setLoading(false)
      })
  }, [])

  return (
    <CompaniesContext.Provider value={{ companies, loading, error }}>
      {children}
    </CompaniesContext.Provider>
  )
}

export function useCompaniesContext() {
  return useContext(CompaniesContext)
}
