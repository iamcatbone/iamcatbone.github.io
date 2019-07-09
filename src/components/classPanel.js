import Fab from "@material-ui/core/Fab"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import React from "react"
import styled from "styled-components"

const PanelContainer = styled(({ index, ...other }) => <div {...other} />)`
  background-color: ${props => (props.index === 0 ? "#eeeeee" : "#e7e7e7")};
  padding: 68px 148px;
`

const PanelContentGrid = styled.div`
  padding-left: 56px;
  padding-top: 7px;
`

const PanelContentTitle = styled(Typography)`
  font-size: 2.5rem !important;
`

const PanelContentDesc = styled(Typography)`
  text-align: justify;
`

const PanelFabWrapper = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
`

const PanelFab = styled(Fab)`
  background-color: #fff !important;
  border-radius: 30px !important;
  height: 58px !important;
  margin-bottom: 7px !important;
  margin-top: 7px !important;
  text-transform: none !important;
  width: 380px !important;
`

const ClassPanel = ({ index, title, desc, cover, buttons }) => (
  <PanelContainer index={index}>
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <div>
          <img src={cover} alt="cover" />
        </div>
      </Grid>
      <Grid item xs={6}>
        <PanelContentGrid>
          <PanelContentTitle variant="h4" gutterBottom>
            {title}
          </PanelContentTitle>
          <PanelContentDesc variant="h6">{desc}</PanelContentDesc>
          {buttons.map(({ label, path }) => (
            <PanelFabWrapper key={label}>
              <PanelFab variant="extended">
                <Typography variant="h5">{label}</Typography>
              </PanelFab>
            </PanelFabWrapper>
          ))}
        </PanelContentGrid>
      </Grid>
    </Grid>
  </PanelContainer>
)

export default ClassPanel
