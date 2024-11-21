import React from 'react'
import TopBar from './components/Topbar'
import VideoGrid from './components/VideoGrid'
import BottomBar from './components/BottomBar'

const App = () => {
  return (
    <div className='app-container'>
      <TopBar/>
      <VideoGrid/>
      <BottomBar/>
    </div>
  )
}

export default App
