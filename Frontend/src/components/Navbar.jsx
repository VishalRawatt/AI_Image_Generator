import React from 'react'
import styled from 'styled-components'
import Button from './button';
import AddIcon from '@mui/icons-material/Add';
import ExploreIcon from '@mui/icons-material/Explore';
import { useNavigate, useLocation } from 'react-router-dom';

const Container = styled.div`
flex :1 ;
background : ${({ theme }) => theme.navbar};
color : ${({ theme }) => theme.text_primary};
font-weight : bold;
font-size : 22px;
padding: 14px 50px;
display: flex;
align-items : center;
justify-content : space-between;
box-shadow: 0 0 10px rgba(0,0,0,0.15) ;
@media only screen and (max-width: 600px) {
  padding: 10px 12px ;
}
`;
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/");
  return (
    <div>
      <Container>
        PicAI
        {path[1] === 'post' ? (
          <Button
            onClick={() => navigate('/')}
            text="Explore Posts"
            leftIcon={
              <ExploreIcon
                style={{
                  fontSize: "18px"
                }}
              />
            }
            type = "secondary"
          />
        ) : (
          <Button
            onClick={() => navigate('/post')}
            text="Create new Post"
            leftIcon={
              <AddIcon
                style={{
                  fontSize: "18px"
                }}
              />
            }
          />
        )}
      </Container>
    </div>
  )
}

export default Navbar 
