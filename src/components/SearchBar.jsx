import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{ borderRadius: 20, pl: 2, mr: { sm: 5 }, boxShadow: "none" }}
    >
        <input
            type="text"
            placeholder="Search..."
            className="search-bar"
            value=''
            onChange={()=>{}}
        />
        <IconButton type="submit" sx={{p:'10px', color:'red'}}>
            <Search/>
        </IconButton>
    </Paper>
  );
};

export default SearchBar;
