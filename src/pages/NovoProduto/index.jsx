import { Container, Button, Stack, Paper, Grid, TextField, FormControl, InputLabel, Select, MenuItem, Typography, InputAdornment, Box } from "@mui/material"
import { Link } from "react-router";

const categorias = [
    'Eletrônicos',
    'Informática',
    'Acessórios',
    'Casa e Jardim',
    'Roupas e Calçados',
    'Livros',
    'Esportes',
    'Beleza e Saúde',
    'Outros'
  ];

export function NovoProdutoPagina() {
    return (
        <Container maxWidth="lg" sx={{ marginBottom: 2 }}>
                <Stack direction="column" alignItems="start" marginY={2}>
                    <Link to={-1} style={{ textDecoration: 'none'}}>
                        <Button variant="text" color="primary">
                            Voltar
                        </Button>
                    </Link>
                    <h1>Novo produto</h1>
                </Stack>

                 {/* Formulário */}
                <Paper sx={{ p: 3 }}>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <TextField
                            fullWidth
                            label="Nome do Produto"
                            required
                        />
                        <FormControl fullWidth >
                            <InputLabel>Categoria *</InputLabel>
                            <Select

                            label="Categoria *"
                            >
                            {categorias.map((categoria) => (
                                <MenuItem key={categoria} >
                                {categoria}
                                </MenuItem>
                            ))}
                            </Select>
                            
                        </FormControl>
                        <TextField
                            fullWidth
                            label="Preço"
                            type="number"
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                R$
                                </InputAdornment>
                            ),
                            inputProps: {
                                min: 0,
                                step: 0.01
                            }
                            }}
                            required
                        />
                    
                        <TextField
                            fullWidth
                            label="Quantidade em Estoque"
                            type="number"
                            required
                        />
                        
                        <TextField
                            fullWidth
                            label="Descrição"
                            multiline
                            rows={4}
                            
                            placeholder="Descreva as características do produto..."
                        />
                      
                        <Box display="flex" gap={2} justifyContent="flex-end">
                       
                            <Button
                            type="submit"
                            variant="contained"
                            >
                            Criar produto
                            </Button>
                        </Box>
                     
                    </form>
                </Paper>
        </Container>
    )
}