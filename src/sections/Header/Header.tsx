import { useNavigate } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';

import { FlexBox } from '@/components/styled';
import { title } from '@/config';

function Header() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: 'primary.dark' }} elevation={0} position="static">
        <Toolbar sx={{ justifyContent: 'center' }}>
          <FlexBox>
            <Button
              color="info"
              onClick={() => {
                navigate('/');
              }}
            >
              {title}
            </Button>
          </FlexBox>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
