import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BroadcastListPage } from '../pages/BroadcastListPage'
import { Broadcast } from './types'
import { AxiosResponse } from 'axios'
import { BroadcastPage } from '../pages/BroadcastPage'
import { Route, Switch } from 'react-router-dom'

type Props = {}

export const Application: React.FC<Props> = () => {
  const [broadcasts, setBroadcast] = useState<Broadcast[]>([])

  useEffect(() => {
    axios
      .get('http://localhost:3000/media/broadcasts')
      .then((response: AxiosResponse<Broadcast[]>) => {
        setBroadcast(response.data)
      })
  }, [])

  return (
    <Switch>
      <Route exact path="/">
        <BroadcastListPage broadcasts={broadcasts} />
      </Route>
      <Route
        path="/:userName"
        render={(props) => <BroadcastPage id={props.match.params.userName} />}
      />
    </Switch>
  )
}
