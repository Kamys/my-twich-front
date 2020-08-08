import React from 'react'
import { Broadcast } from '../components/types'
import { BroadcastCard } from '../components/BroadcastCard'
import { getBroadcastsUrl } from '../helpers'
import { Grid, Box } from '@material-ui/core'

type Props = {
  broadcasts: Broadcast[]
  onSelectBroadcast: (id: string) => void
}

export const BroadcastListPage: React.FC<Props> = ({
  broadcasts,
  onSelectBroadcast,
}) => (
  <Grid container direction="row" justify="flex-start" alignItems="flex-start">
    {[...broadcasts, ...broadcasts, ...broadcasts, ...broadcasts].map(
      (broadcast, index) => (
        <Box key={broadcast.id + index} paddingLeft={10} paddingTop={5}>
          <BroadcastCard
            url={getBroadcastsUrl(broadcast.username)}
            name={broadcast.username}
            onClick={() => {
              onSelectBroadcast(broadcast.username)
            }}
          />
        </Box>
      )
    )}
  </Grid>
)
