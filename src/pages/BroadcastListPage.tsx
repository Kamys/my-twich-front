import React from 'react'
import { Broadcast } from '../components/types'
import { BroadcastCard } from '../components/BroadcastCard'
import { getBroadcastsPosterUrl, getBroadcastsUrl } from '../helpers'
import { Grid, Box } from '@material-ui/core'

type Props = {
  broadcasts: Broadcast[]
}

export const BroadcastListPage: React.FC<Props> = ({ broadcasts }) => (
  <Grid container direction="row" justify="flex-start" alignItems="flex-start">
    {broadcasts.map((broadcast, index) => (
      <Box key={broadcast.id + index} paddingLeft={10} paddingTop={5}>
        <BroadcastCard
          poster={getBroadcastsPosterUrl(broadcast.username)}
          url={getBroadcastsUrl(broadcast.username)}
          name={broadcast.username}
        />
      </Box>
    ))}
  </Grid>
)
