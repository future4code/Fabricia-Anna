import React from "react"
import {Button} from "@material-ui/core"
import useProtectedPage from "../../hooks/useProtectedPage"


const RecipeListPage = () => {
  useProtectedPage()
return (
    <div>
        <h1>RecipeListPage </h1>
        <Button variant="contained" color="primary">
        Lista
      </Button>
    </div>
)
}

export default RecipeListPage

