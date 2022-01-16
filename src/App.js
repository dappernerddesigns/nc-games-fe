import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Home } from './components/Home'
import { Categories } from './components/Categories'
import { Reviews } from './components/Reviews'
import { Review } from './components/Review'
import { Users } from './components/Users'
import { User } from './components/User'
import { ErrorPage } from './components/ErrorPage'
import styled from 'styled-components'

const AppStyles = styled.div``
function App() {
  return (
    <BrowserRouter>
      <AppStyles>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/reviews/:review_id" element={<Review />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:username" element={<User />} />
          <Route path="*" element={ErrorPage} />
        </Routes>
      </AppStyles>
    </BrowserRouter>
  )
}

export default App
