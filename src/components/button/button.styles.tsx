import styled from 'styled-components';
import { Button } from '@mui/material';

export const StyledButton = styled(Button)`
  background-color: ${props => {
    console.log(props.theme.palette);
    return props.theme.palette.yellow.main;
  }};
`;
