import { createBrowserRouter } from "react-router";
import { ProdutosPagina } from "../pages/Produtos";
import { NovoProdutoPagina } from "../pages/NovoProduto";
import { EditarProdutoPagina } from "../pages/EditarProduto";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: ProdutosPagina,
    },
    {
        path: "/novo",
        Component: NovoProdutoPagina
    },
    {
        path: "/editar/:id",
        Component: EditarProdutoPagina
    }
])