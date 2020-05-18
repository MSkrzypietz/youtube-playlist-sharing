interface VideoItem {
  ownerId: string
  caption: string
  url: string
  thumbnailUrl?: string
}

export interface PlaylistItem {
  playlistId: string
  userId: string  
  createdAt: string
  caption: string
  videos: VideoItem[]
}