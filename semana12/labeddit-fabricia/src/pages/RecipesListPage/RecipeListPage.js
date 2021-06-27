import React from "react"
import useProtectedPage from "../../hooks/useProtectedPage"
import useRequestData from "../../hooks/useRequesData"
import { BASE_URL } from '../../constants/urls'


const RecipeListPage = () => {
  useProtectedPage()
  const recipes = useRequestData([], `${BASE_URL}/recipe/feed`)
  console.log(recipes)
  
  return (
    <div>

      {/* 
        title={"Batata"}
        image={"https://conteudo.imguol.com.br/c/entretenimento/0e/2017/10/15/batata-crua-1508077604971_v2_450x450.jpg.webp"}
        onClick={() => null}
        />*/}
    </div>
  )
}

export default RecipeListPage

