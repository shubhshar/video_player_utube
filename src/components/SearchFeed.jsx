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
    <Box p={2} sx={{overflowY:'auto',
      height:'90vh', flex:2, marginLeft:{xs: '0px', sm: '0px', md: "155px"}}}>
        <Typography variant='h4' fontWeight="bold" mb={2} sx={{color:
        "white" ,fontWeight:{sx:'10', md: 'bold'}}}>
          Search Results: <span style={{color:'#F31503'}}>{searchterm} videos</span>
        </Typography>
      <Videos videos={videos}/>
    </Box>
  )
}

export default SearchFeed