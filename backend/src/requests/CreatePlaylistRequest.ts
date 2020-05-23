interface Video {
  url: string
  caption: string
}

export interface CreatePlaylistRequest {
  name: string
  videos: Video[]
}