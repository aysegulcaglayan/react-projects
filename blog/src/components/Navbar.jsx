import React from 'react'
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import BorderColorIcon from '@mui/icons-material/BorderColor';



function Navbar() {

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ backgroundColor: '	#983e3e' }} >
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <LibraryBooksIcon />
                        </IconButton>
                        <Typography variant="h6" component={Link}
                            to="/" sx={{
                                flexGrow: 1, color: '#ffffff',
                                textDecoration: 'none'
                            }}>
                            BLOG
                        </Typography>
                        <BorderColorIcon />
                        <Link to="/new"> <Button sx={{ color: 'white' }} >Yeni yazı </Button></Link>
                        <Link to="/signup">  <Button sx={{ color: 'white' }}>Giriş Yap</Button></Link>
                    </Toolbar>
                </AppBar>
            </Box>

        </div>
    )
}

export default Navbar
