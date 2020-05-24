import { VideoItem } from '../models/PlaylistItem'

export interface UpdatePlaylistRequest {
  name?: string
  videoUrls?: VideoItem[]
  thumbnailUrl?: string
}