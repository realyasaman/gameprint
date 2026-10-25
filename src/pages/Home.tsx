import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, TextField, Button, Paper, Container } from '@mui/material';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

export default function Home() {
    const [steamInput, setSteamInput] = useState('');
    const navigate = useNavigate();

    const handleAnalyze = (e: React.FormEvent) => {
        e.preventDefault();
        if (!steamInput.trim()) return;
        navigate('/result', { state: { steamInput } });
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #171A21 0%, #1B2838 50%, #11151c 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: 2,
            }}
        >
            <Container maxWidth="xs">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}
                >
                    <Paper
                        elevation={0}
                        sx={{
                            width: 72,
                            height: 72,
                            borderRadius: 4,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            bgcolor: 'rgba(102, 192, 244, 0.1)',
                            color: '#66C0F4',
                            mb: 3,
                        }}
                    >
                        <SportsEsportsIcon sx={{ fontSize: 40 }} />
                    </Paper>

                    <Typography
                        variant="h4"
                        component="h1"
                        sx={{ fontWeight: 800, color: '#FFFFFF', mb: 1, letterSpacing: '-0.5px' }}
                    >
                        GamePrint
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{ color: '#C7D5E0', mb: 4, fontWeight: 500 }}
                    >
                        Discover your true gaming personality from your Steam library
                    </Typography>

                    <Paper
                        elevation={4}
                        component="form"
                        onSubmit={handleAnalyze}
                        sx={{
                            p: 4,
                            width: '100%',
                            borderRadius: 4,
                            bgcolor: '#1B2838',
                            border: '1px solid rgba(199, 213, 224, 0.1)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 3,
                        }}
                    >
                        <TextField
                            fullWidth
                            placeholder="Paste Steam ID or Profile URL"
                            variant="outlined"
                            value={steamInput}
                            onChange={(e) => setSteamInput(e.target.value)}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: 3,
                                    color: '#FFFFFF',
                                    bgcolor: '#171A21',
                                    '& fieldset': {
                                        borderColor: 'rgba(199, 213, 224, 0.2)',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#66C0F4',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#66C0F4',
                                    },
                                },
                                '& .MuiInputBase-input::placeholder': {
                                    color: '#C7D5E0',
                                    opacity: 0.6,
                                },
                            }}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            size="large"
                            sx={{
                                py: 1.5,
                                borderRadius: 3,
                                textTransform: 'none',
                                fontSize: '1rem',
                                fontWeight: 700,
                                bgcolor: '#66C0F4',
                                color: '#171A21',
                                boxShadow: '0 4px 12px rgba(102, 192, 244, 0.25)',
                                '&:hover': {
                                    bgcolor: '#8ed0fa',
                                },
                            }}
                        >
                            Analyze My Library
                        </Button>
                    </Paper>

                    <Box
                        sx={{
                            mt: 5,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            color: '#C7D5E0',
                            fontSize: '0.85rem',
                        }}
                    >
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
