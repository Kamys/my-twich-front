import React, { useLayoutEffect } from 'react'
import 'video.js/dist/video-js.min.css'
import videojs from 'video.js'
import { getBroadcastsUrl } from '../helpers'
import { Broadcast } from '../components/Broadcast'

type Props = {
  id: string
  onBack: () => void
}

export const BroadcastPage: React.FC<Props> = ({ id, onBack }) => {
  const ref = React.useRef(null)

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    sources: [
      {
        src: getBroadcastsUrl(id),
        type: 'application/x-mpegURL',
      },
    ],
    fluid: true,
  }

  useLayoutEffect(() => {
    if (ref.current) {
      const player = videojs(ref.current, videoJsOptions, () => {
        console.log('onPlayerReady')
      })
    }
  }, [ref.current])

  return (
    <div>
      <button onClick={onBack}>Back</button>
      <Broadcast url={getBroadcastsUrl(id)} />
    </div>
  )
}
