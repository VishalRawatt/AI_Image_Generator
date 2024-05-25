import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';

const SearchBarContainer = styled.div`
   max-width:550px;
   display: flex;
   width: 90%;
   border: 1px solid ${({theme}) => theme.text_secondary }; 
   border-radius: 8px;
   padding: 12px 16px ;
   cursor: pointer;
   gap: 6px;
   align-items: center;
`;
const SearchBar = () => {
  return (
    <SearchBarContainer>
        <SearchIcon/>
        <input
        style={{
            border:"none",
            outline: "none",
            width:"100%",
            backgroundColor: "transparent",
            color: 'inherit'
        }}/>
    </SearchBarContainer>
  )
}

export default SearchBar