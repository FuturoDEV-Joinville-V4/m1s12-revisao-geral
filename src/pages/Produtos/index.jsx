import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, ButtonBase, Container, Stack } from '@mui/material';
import { Link } from 'react-router';
import { useState, useEffect } from 'react';
import { Pen, Pencil, Trash } from "lucide-react"

const PRODUTOS_STORAGE_KEY = 'produtos_cadastrados';

export function ProdutosPagina() {
    const [produtos, setProdutos] = useState([]);
    
    useEffect(() => {
        /** listar produtos - requisição para api  */
        const produtosStorage = localStorage.getItem(PRODUTOS_STORAGE_KEY);
        
        if(produtosStorage) {
            const produtosConvertido = JSON.parse(produtosStorage);
            setProdutos(produtosConvertido);
        }

    }, [])


    return (
        <div>
            <Container maxWidth="lg" sx={{ marginBottom: 2 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" marginY={2}>
                    <h1>Produtos</h1>
                    <Link to="/novo" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" color="primary">
                            Adicionar Produto
                        </Button>
                    </Link>
                </Stack>
            <TableContainer component={Paper}>
                <Table  aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Nome</TableCell>
                        <TableCell>Categoria</TableCell>
                        <TableCell>Preço</TableCell>
                        <TableCell>Estoque</TableCell>
                        <TableCell align='center'>Ações</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {produtos.map((produto) => (
                            <TableRow key={produto.id}>
                                <TableCell component="th" scope="row">
                                    {produto.id}
                                </TableCell>
                                <TableCell>{produto.nome}</TableCell>
                                <TableCell>{produto.categoria}</TableCell>
                                <TableCell>{produto.preco}</TableCell>
                                <TableCell>{produto.quantidade}</TableCell>
                                <TableCell align='center'>
                                    <Link to={`/editar/${produto.id}`}>
                                        <Button variant='text' sx={{ marginRight: 1 }}>
                                            <Pencil size={16} />
                                        </Button>
                                    </Link>
                                    <Button variant='text'>
                                        <Trash size={16} />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </Container>
        </div>
    )
}