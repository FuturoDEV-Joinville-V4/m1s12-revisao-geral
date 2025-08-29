import { Container, Button, Stack, Paper, Grid, TextField, FormControl, InputLabel, Select, MenuItem, Typography, InputAdornment, Box } from "@mui/material"
import { Link } from "react-router";
import { useForm } from "react-hook-form"

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

const PRODUTOS_STORAGE_KEY = 'produtos_cadastrados';

export function NovoProdutoPagina() {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            id: new Date().getTime(),
            nome: '',
            categoria: '',
            preco: 0,
            quantidade: 0,
            descricao: ''
        }
    })

    function onSubmit(data) {
        const produtosStorage = localStorage.getItem(PRODUTOS_STORAGE_KEY);

        if(produtosStorage) {
            const produtos = JSON.parse(produtosStorage); /// []
            produtos.push(data)

            localStorage.setIten(PRODUTOS_STORAGE_KEY, JSON.stringify(produtos));

        } else {
            const produtos = [data];
            localStorage.setItem(PRODUTOS_STORAGE_KEY, JSON.stringify(produtos));
            
        }
        alert("Produto cadastrado com sucesso!");
    }

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
                    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <TextField
                            fullWidth
                            label="Nome do Produto"
                            required
                            {...register('nome')}
                        />
                        <FormControl fullWidth >
                            <InputLabel>Categoria *</InputLabel>
                            <Select
                                label="Categoria *"
                                {...register('categoria')}
                            >
                            {categorias.map((categoria) => (
                                <MenuItem value={categoria} key={categoria} >
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
                            {...register('preco', { valueAsNumber: true })}
                            required
                        />
                    
                        <TextField
                            fullWidth
                            label="Quantidade em Estoque"
                            type="number"
                            {...register('quantidade', { valueAsNumber: true })}
                            required
                        />
                        
                        <TextField
                            fullWidth
                            label="Descrição"
                            multiline
                            rows={4}
                            {...register('descricao')}
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