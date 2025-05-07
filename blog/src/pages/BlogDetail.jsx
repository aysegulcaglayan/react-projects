import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';


export default function BlogDetail() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
            .catch((err) => console.error('Veri alınamadı:', err));
    }, [id]);

    if (!post) return <p> <Box sx={{ display: 'flex' }}>
        <CircularProgress />
    </Box></p>;
    return (
        <Container sx={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
            {/* Başlık ve Yazar Bilgileri */}
            <Card sx={{ marginBottom: '2rem' }}>
                <CardContent>
                    <Typography variant="h3" component="div" sx={{ fontWeight: 'bold' }}>
                        {post.title}
                    </Typography>
                    <Stack direction="row" spacing={2} sx={{ marginTop: '1rem' }}>
                        <Avatar
                            alt="User Avatar"
                            sx={{ width: 50, height: 50 }}
                            src={`https://randomuser.me/api/portraits/men/${post.id}.jpg`}
                        />
                        <Typography variant="body1" sx={{ alignSelf: 'center' }}>
                            Yazar: John Doe
                        </Typography>
                    </Stack>
                    <Typography variant="body2" sx={{ marginTop: '1rem', color: 'text.secondary' }}>
                        Tarih: {new Date().toLocaleDateString()}
                    </Typography>
                </CardContent>
            </Card>

            {/* Blog İçeriği */}
            <Card sx={{ marginBottom: '2rem' }}>
                <CardContent>
                    <Typography variant="h6" sx={{ marginBottom: '1rem' }}>
                        İçerik:
                    </Typography>
                    <Typography variant="body1">
                        {post.body}
                    </Typography>
                </CardContent>
            </Card>

            {/* Yorumlar */}
            <Card>
                <CardContent>
                    <Typography variant="h6" sx={{ marginBottom: '1rem' }}>
                        Yorumlar:
                    </Typography>
                    <Typography variant="body2" sx={{ marginBottom: '1rem', color: 'text.secondary' }}>
                        Henüz yorum yapılmadı.
                    </Typography>
                    <Button variant="contained" sx={{ marginTop: '1rem' }}>Yorum Yap</Button>
                </CardContent>
            </Card>
        </Container>
    );
}

