import React, { useLayoutEffect } from 'react'
import 'video.js/dist/video-js.min.css'
import videojs from 'video.js'

type Props = {
  url: string
}

export const Broadcast: React.FC<Props> = ({ url }) => {
  const ref = React.useRef(null)

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    paused: true,
    sources: [
      {
        src: url,
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
    <div data-vjs-player="">
      <video ref={ref} className="video-js vjs-big-play-centered" />
    </div>
  )
}
