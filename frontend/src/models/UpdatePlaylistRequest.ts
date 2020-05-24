import { VideoItem } from './PlaylistItem'

export interface UpdatePlaylistRequest {
  name?: string;
  videoUrls?: VideoItem[];
  thumbnailUrl?: string;
}