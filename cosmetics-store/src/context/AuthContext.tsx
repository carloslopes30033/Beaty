import React, { createContext, useContext, useState, ReactNode } from 'react'

interface User {
  id: string
  name: string
  email: string
  phone: string
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
}

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, phone: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: false,
  })

  const login = async (email: string, password: string) => {
    setState(prev => ({ ...prev, isLoading: true }))
    
    // Simulate API call
    setTimeout(() => {
      const user: User = {
        id: '1',
        name: 'کاربر نمونه',
        email,
        phone: '09123456789',
      }
      
      setState({
        user,
        isAuthenticated: true,
        isLoading: false,
      })
    }, 1000)
  }

  const register = async (name: string, email: string, phone: string, password: string) => {
    setState(prev => ({ ...prev, isLoading: true }))
    
    // Simulate API call
    setTimeout(() => {
      const user: User = {
        id: '1',
        name,
        email,
        phone,
      }
      
      setState({
        user,
        isAuthenticated: true,
        isLoading: false,
      })
    }, 1000)
  }

  const logout = () => {
    setState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    })
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}