import logoHeader from '../../src/img/LogoHeader.png';
import logoHero from '../../src/img/imageHero.png';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Box';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export function Board() {
  return (
    <Box
      sx={{
        bgcolor: '#06151A',
        height: '100vh',
        padding: '10px',
      }}
    >
      {/* Header */}
      <AppBar position='static'>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src={logoHeader} alt='LogoTecboard' />
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {/* Imagem Hero */}
        <Box>
          <Box>
            <img
              src={logoHero}
              alt='LogoHero'
              style={{ width: '75vh', padding: '10px' }}
            />
          </Box>
        </Box>
        <Stack spacing={1}>
          {/* Formulario */}
          <Box
            sx={{
              backgroundColor: '#212121',
              width: '100%',
              maxWidth: '384px',
              padding: '28px',
              borderRadius: 2,
            }}
          >
            <Typography variant='h4' component='h1'>
              Preencha para criar um evento:
            </Typography>
            <FormControl fullWidth>
              <InputLabel
                shrink
                htmlFor='name'
                sx={{
                  position: 'static',
                  transform: 'none',
                  mb: '1',
                  textAlign: 'left',
                }}
              >
                Qual o nome do evento?
              </InputLabel>
              <OutlinedInput
                id='name'
                placeholder='Summer dev hits'
                fullWidth
                size='small'
                sx={{
                  height: '36px',
                }}
              />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel
                shrink
                htmlFor='date'
                sx={{
                  position: 'static',
                  transform: 'none',
                  mb: '1',
                  textAlign: 'left',
                }}
              >
                Data do evento?
              </InputLabel>
              <OutlinedInput
                type='date'
                id='date'
                size='small'
                placeholder='XX/XX/XXXX'
                fullWidth
                sx={{
                  height: '36px',
                }}
              />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel
                shrink
                htmlFor='name'
                sx={{
                  position: 'static',
                  transform: 'none',
                  mb: '1',
                  textAlign: 'left',
                }}
              >
                Selecione o tema do evento:
              </InputLabel>
              <Select
                id='theme'
                defaultValue=''
                displayEmpty
                fullWidth
                sx={{
                  height: '36px',
                  textAlign: 'left',
                }}
              >
                <MenuItem value='Front-end'>Front-end</MenuItem>
                <MenuItem value='Design'>Design</MenuItem>
                <MenuItem value='Marketing'>Marketing</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant='contained'
              sx={{ alignItems: 'center', mt: '20px' }}
            >
              Criar evento
            </Button>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
