import React, { useLayoutEffect } from 'react'
import 'video.js/dist/video-js.min.css'
import videojs from 'video.js'

type Props = {
  id: string
  onBack: () => void
}

export const Broadcast: React.FC<Props> = ({ id, onBack }) => {
  const ref = React.useRef(null)

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    sources: [
      {
        src: `http://localhost:3000/media/broadcasts/${id}/index.m3u8`,
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
      <div data-vjs-player="">
        <video ref={ref} className="video-js vjs-big-play-centered" />
      </div>
    </div>
  )
}
