import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BroadcastListPage } from '../pages/BroadcastListPage'
import { Broadcast } from './types'
import { AxiosResponse } from 'axios'
import { BroadcastPage } from '../pages/BroadcastPage'

type Props = {}

export const Application: React.FC<Props> = () => {
  const [selectedBroadcastId, setSelectedBroadcastId] = useState<string>()
  const [broadcasts, setBroadcast] = useState<Broadcast[]>([])

  useEffect(() => {
    axios
      .get('http://localhost:3000/media/broadcasts')
      .then((response: AxiosResponse<Broadcast[]>) => {
        setBroadcast(response.data)
      })
  }, [])

  if (selectedBroadcastId) {
    return (
      <BroadcastPage
        id={selectedBroadcastId}
        onBack={() => {
          setSelectedBroadcastId(undefined)
        }}
      />
    )
  }

  return (
    <BroadcastListPage
      onSelectBroadcast={(id) => {
        setSelectedBroadcastId(id)
      }}
      broadcasts={broadcasts}
    />
  )
}
