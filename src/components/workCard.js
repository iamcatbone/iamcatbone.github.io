import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import React from "react"

import styled from "styled-components"

const WorkCardMedia = styled(CardMedia)`
  height: 275px !important;
`
const WorkCardTitle = styled(Typography)`
  text-align: justify;
  height: 72px !important;
`
const WorkCardDesc = styled(Typography)`
  text-align: right;
`

const WorkCard = ({ title, time, thumbnail }) => (
  <Card>
    <CardActionArea>
      <WorkCardMedia image={thumbnail} title={title} />
      <CardContent>
        <WorkCardTitle gutterBottom variant="h6">
          {title}
        </WorkCardTitle>
        <WorkCardDesc variant="body2" color="textSecondary" component="p">
          {time}
        </WorkCardDesc>
      </CardContent>
    </CardActionArea>
  </Card>
)

export default WorkCard
