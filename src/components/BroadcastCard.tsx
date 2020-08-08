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
import { Broadcast } from '../components/Broadcast'

type Props = {
  url: string
  name: string
  onClick: () => void
}

export const BroadcastCard: React.FC<Props> = ({ url, name, onClick }) => {
  return (
    <Card>
      <CardActionArea>
        <Box width={600}>
          <Broadcast url={url} />
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
        <Button onClick={onClick} size="small" color="primary">
          Watch
        </Button>
      </CardActions>
    </Card>
  )
}
