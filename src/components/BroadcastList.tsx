import React from 'react'
import { Broadcast } from './types'

type Props = {
  broadcasts: Broadcast[]
  onSelectBroadcast: (id: string) => void
}

export const BroadcastList: React.FC<Props> = ({
  broadcasts,
  onSelectBroadcast,
}) => (
  <div>
    {broadcasts.map((broadcast) => (
      <button
        onClick={() => {
          onSelectBroadcast(broadcast.username)
        }}
        style={{ padding: 10, margin: 10 }}
      >
        Id: {broadcast.id}
        <br />
        Name: {broadcast.username}
      </button>
    ))}
  </div>
)
