import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

function Home() {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
            .then(res => res.json())
            .then(data => setPosts(data));
    }, []

    );


    return (
        <Box sx={{ flexGrow: 1, padding: '2rem' }}>
            <Grid container spacing={3}>
                {posts.map((post, index) => (
                    <Grid item xs={12} sm={6} md={4} key={post.id}>
                        <Card sx={{ width: '400px', marginTop: '30px', marginLeft: '30px', height: '280px' }}>
                            <CardContent>

                                {/* ID + Avatar Grid yapısı */}
                                <Grid container alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
                                    <Grid item>
                                        <Typography sx={{ color: 'text.secondary', fontSize: 14 }}>
                                            Kullanıcı ID: {index + 1}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Avatar
                                            alt="Remy Sharp"
                                            sx={{ width: 50, height: 50 }}
                                            src={`https://randomuser.me/api/portraits/men/${post.id}.jpg`}
                                        />
                                    </Grid>
                                </Grid>

                                {/* Başlık */}
                                <Typography variant="h5" component="div">
                                    {post.title}
                                </Typography>

                                {/* İçerik */}
                                <Typography variant="body2">
                                    {post.body.slice(0, 100)}...
                                </Typography>

                            </CardContent>

                            <CardActions>
                                <Link to={`/post/${post.id}`}>
                                    <Button size="small">Devamını Oku</Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>

    )
}

export default Home
