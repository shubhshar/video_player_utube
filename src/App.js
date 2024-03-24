import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Box} from '@mui/material'
import {Navbar, ChannelDetail, VideoDetail, SearchFeed, Feed} from './components'

const App = () => (
    <BrowserRouter>
    <Box sx={{backgroundColor:"#000"}}>
        <Navbar/>
        <Routes>
            <Route path='/' exact element={<Feed/>}/>
            <Route path='/video/:id' element={<VideoDetail/>}/>
            <Route path='/channel' element={<ChannelDetail/>}/>
            <Route path='/search/:searchterm' element={<SearchFeed/>}/>
        </Routes>
    </Box>
    </BrowserRouter>
  )


export default App