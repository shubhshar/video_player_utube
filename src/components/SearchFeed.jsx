import React from 'react'
import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {Box, Typography} from '@mui/material'
import  { Videos} from './'
import { fetchFromApi } from '../utils/apiservices'


const SearchFeed = () => {

  const [videos, setVideos] = useState(null);
  const { searchterm } = useParams();
  useEffect(()=>{
   fetchFromApi(`search?part=snippet&q=${searchterm}`).then(data=>setVideos(data.items))
  },[searchterm])
  
  return (
    <Box ml={15} p={2} sx={{overflowY:'auto',
      height:'90vh', flex:2}}>
        <Typography variant='h4' fontWeight="bold" mb={2} sx={{color:
        "white"}}>
          Search Results: <span style={{color:'#F31503'}}>{searchterm} videos</span>
        </Typography>
      <Videos videos={videos}/>
    </Box>
  )
}

export default SearchFeed