import { createBrowserRouter } from "react-router";
import { ProdutosPagina } from "../pages/Produtos";
import { NovoProdutoPagina } from "../pages/NovoProduto";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: ProdutosPagina,
    },
    {
        path: "/novo",
        Component: NovoProdutoPagina
    }
])