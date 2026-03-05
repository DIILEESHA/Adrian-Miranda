import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header'
import Intro from './components/intro/Intro'
import Envelope from './components/env/Envelope'
import Itinerary from './components/it/Itinerary'
import Count from './components/count/Count'
import Dresscode from './components/dress/Dresscode'
import Story from './components/story/Story'
import Faq from './components/faqs/Faq'
import Party from './pages/party/Party';
import Nav from './components/nav/Nav';
import All from './components/faqs/All';
import Things from './components/things/Things';
import heys from "./assets/hey.jpg"
import Reg from './components/reg/Reg';
import Alls from './pages/schedule/Alls';
import Travels from './pages/travel/Travels';
const App = () => {
  return (
    <Router>
<Nav/>
      <Routes>
        <Route path="/" element={
          <>
          <Header title="SEPTEMBER 12, 2026  -  NEW YORK, NY"/>
            <Intro />
            <Envelope />
            <Itinerary />
            <div className="hey">
              <img src={heys} alt="" className="hey_img" />
            </div>
            <Things/>
            <Count />
            <Reg/>
            <Dresscode />
            <Story />
            <Faq />
          </>
        } />

        {/* Example of another page */}
        <Route path="/wedding-party" element={<All />} />
        <Route path="/travel-info" element={<Travels />} />
        <Route path="/wedding-schedule" element={<Alls />} />
        <Route path="/story" element={<Story />} />
      </Routes>

      <h2 className="footer">Adrian & Miranda © All Rights Reserved</h2>
    </Router>
  )
}

export default App