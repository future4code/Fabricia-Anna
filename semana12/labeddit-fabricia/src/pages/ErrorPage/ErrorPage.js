import React from "react"
import error from "../../assets/erro.jpg"
import Typography from "@material-ui/core/Typography"
import { ErroImage, ErrorPageContainer } from "./styled"


const ErrorPage = () => {
return (
    <ErrorPageContainer>
    <ErroImage src={error} />
       <Typography color={"primary"} variant={"h4"} align={"center"}>Erro 404 - Página Não Encontrada </Typography>
    </ErrorPageContainer>
)
}

export default ErrorPage