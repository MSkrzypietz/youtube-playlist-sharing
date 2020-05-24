export interface VideoItem {
  ownerId?: string;
  caption: string;
  url: string;
  thumbnailUrl?: string;
}

export interface PlaylistItem {
  playlistId: string;
  userId: string;
  createdAt: string;
  name: string;
  videos: VideoItem[];
}
