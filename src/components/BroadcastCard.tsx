import React from 'react'
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Button,
  makeStyles,
  Box,
} from '@material-ui/core'
import { Broadcast } from './Broadcast'
import { Link } from 'react-router-dom'

type Props = {
  url: string
  poster: string
  name: string
}

export const BroadcastCard: React.FC<Props> = ({ url, name, poster }) => {
  return (
    <Card>
      <CardActionArea>
        <Box width={600}>
          <Broadcast url={url} poster={poster} />
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Test description
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/${name}`}>
          <Button size="small" color="primary">
            Watch
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}
