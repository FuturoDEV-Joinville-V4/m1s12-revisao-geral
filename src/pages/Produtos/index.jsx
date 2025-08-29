import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Container, Stack } from '@mui/material';
import { Link } from 'react-router';


export function ProdutosPagina() {
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
                        <TableCell align="right">Nome</TableCell>
                        <TableCell align="right">Categoria</TableCell>
                        <TableCell align="right">Preço</TableCell>
                        <TableCell align="right">Estoque</TableCell>
                        <TableCell align="right">Ações</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    
                    </TableBody>
                </Table>
                </TableContainer>
            </Container>
        </div>
    )
}