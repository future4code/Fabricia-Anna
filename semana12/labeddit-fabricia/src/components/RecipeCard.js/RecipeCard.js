import React from "react"
import { CardActionArea } from "@material-ui/core/CardActionArea/CardActionArea"
import CardMedia from "@material-ui/core/CardMedia/CardMedia"
import { Typography } from "@material-ui/core/Typography/Typography"

const RecipeCard = (props) => {
    return (
        <RecipeCardContainer onClick={props.onClick}>
            <CardActionArea>
                <CardMedia
                    component={"img"}
                    alt={props.title}
                    height={props.image}
                    image={props.image}
                    title={props.title}
                />

                <RecipeCardContent>
                    <Typography align={"center"}>
                        {props.title.toUpperCase()}
                    </Typography>
                </RecipeCardContent>
            </CardActionArea>
        </RecipeCardContainer>

    )
}
export default RecipeCard