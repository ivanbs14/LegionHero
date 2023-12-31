import React, { useState } from 'react';
import { Container } from './style';

import { Button, TextField } from '@mui/material';
import styled from 'styled-components';

const StyledTextField = styled(TextField)`
  width: 60%;
`;

const StyledButton = styled(Button)`
  background-color: #333;
  
  &&& {
    background-color: #333;
  }
`;

export function Navbar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  }

  const handleClear = () => {
    setSearchTerm('');
    onSearch('');
  }

  return (
    <Container>
      <h3>Legion Hero</h3>
      
      <StyledTextField
        id='search'
        variant="outlined"
        size="small"
        label="Buscar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      /> 

      <StyledButton variant="contained" onClick={handleSearch}>
        Buscar
      </StyledButton>
      
      <StyledButton variant="contained" onClick={handleClear}>
        Voltar
      </StyledButton>
    </Container>
  );
}
