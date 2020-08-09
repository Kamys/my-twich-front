export const getBroadcastsUrl = (username: string) => {
  return `http://localhost:3000/media/broadcasts/${username}/index.m3u8`
}

export const getBroadcastsPosterUrl = (username: string) => {
  return `http://localhost:3000/media/thumbnail/${username}`
}
