import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Home } from './components/Home'
import { Categories } from './components/Categories'
import { Reviews } from './components/Reviews'
import { Review } from './components/Review'
import { Users } from './components/Users'
import { Comments } from './components/Comments'
import styled, { css } from 'styled-components'

const AppStyles = styled.div`
  min-height: 100vh;
  background: linear-gradient(to right top, #65dfc9, #6cdbeb);
`
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
          <Route path="/reviews/:review_id/comments" element={<Comments />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </AppStyles>
    </BrowserRouter>
  )
}

export default App
