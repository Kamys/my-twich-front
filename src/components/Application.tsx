import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BroadcastList } from './BroadcastList'
import { Broadcast } from './types'
import { AxiosResponse } from 'axios'
import { Broadcast as BroadcastComponent } from './Broadcast'

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
      <BroadcastComponent
        id={selectedBroadcastId}
        onBack={() => {
          setSelectedBroadcastId(undefined)
        }}
      />
    )
  }

  return (
    <BroadcastList
      onSelectBroadcast={(id) => {
        setSelectedBroadcastId(id)
      }}
      broadcasts={broadcasts}
    />
  )
}
