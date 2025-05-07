import React, { useState } from 'react';
import {
    Box,
    Button,
    TextField,
    Typography,
    Paper,
    Stack,
    Alert
} from '@mui/material';

const NewPost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [tags, setTags] = useState('');
    const [showSuccess, setShowSuccess] = useState(false); // ✅ Alert için state

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !content) {
            alert('Lütfen başlık ve içerik girin.');
            return;
        }

        const newPost = {
            title,
            content,
            tags: tags.split(',').map((tag) => tag.trim()),
            createdAt: new Date(),
        };

        const existingPosts = JSON.parse(localStorage.getItem('posts')) || [];
        const updatedPosts = [...existingPosts, newPost];
        localStorage.setItem('posts', JSON.stringify(updatedPosts));

        console.log('Yeni gönderi eklendi:', newPost);

        // Temizle ve başarı mesajı göster
        setTitle('');
        setContent('');
        setTags('');
        setShowSuccess(true); // ✅ Alert'ı göster
    };

    return (
        <Paper elevation={3} sx={{ maxWidth: 600, margin: '2rem auto', padding: '2rem' }}>
            <Typography variant="h5" gutterBottom>
                Yeni Gönderi Oluştur
            </Typography>

            {/* ✅ Başarı mesajı */}
            {showSuccess && (
                <Alert
                    severity="success"
                    sx={{ mb: 2 }}
                    onClose={() => setShowSuccess(false)}
                >
                    İçerik başarıyla eklendi
                </Alert>
            )}

            <Box component="form" onSubmit={handleSubmit}>
                <Stack spacing={2}>
                    <TextField
                        label="Başlık"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        fullWidth
                        required
                    />
                    <TextField
                        label="İçerik"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        multiline
                        rows={5}
                        fullWidth
                        required
                    />
                    <TextField
                        label="Etiketler (virgülle ayırın)"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                        fullWidth
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Yayınla
                    </Button>
                </Stack>
            </Box>
        </Paper>
    );
};

export default NewPost;
