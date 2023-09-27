import React from 'react'
import MyState from './context/data/myState'
import {
  BrowserRouter as Router, Route, Routes, Navigate,} from "react-router-dom";
  import { Toaster } from 'react-hot-toast';
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import AddNote from './pages/AddNote'
import Update from './pages/Update'
import Profile from './pages/Profile'
import NoPage from './pages/NoPage'
function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path='/' element={
            <ProtectedRoute>
          <Home />
          </ProtectedRoute>} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />

          <Route path='/addnote' element={
            <ProtectedRoute>
          <AddNote />
          </ProtectedRoute>} />
          <Route path='/notes/edit/:id' element={
          <ProtectedRoute>
          <Update />
          </ProtectedRoute>} />
          
          <Route path='/profile' element={
            <ProtectedRoute>
          <Profile />
          </ProtectedRoute>}/>
          <Route path='/*' element={<NoPage />} />
        </Routes>
        <Toaster />
      </Router>
    </MyState>

  )
}

export default App

export const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token')
  if (token) {
    return children
  }
  else {
    return <Navigate to={'/login'} />
  }
}