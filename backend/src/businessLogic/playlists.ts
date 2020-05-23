import * as uuid from 'uuid'

import { PlaylistItem } from '../models/PlaylistItem'
import { PlaylistAccess } from '../dataLayer/playlistAccess'
import { CreatePlaylistRequest } from '../requests/CreatePlaylistRequest'

const playlistAccess = new PlaylistAccess()

export async function getPlaylist(playlistId: string): Promise<PlaylistItem> {
  return playlistAccess.getPlaylist(playlistId)
}

export async function getAllPlaylists(userId: string): Promise<PlaylistItem[]> {
  return await playlistAccess.getAllPlaylists(userId)
}

export async function createPlaylist(userId: string, newPlaylist: CreatePlaylistRequest): Promise<PlaylistItem> {
  return await playlistAccess.createPlaylist({
    userId,
    playlistId: uuid.v4(),
    createdAt: new Date().toISOString(),
    ...newPlaylist
  })
}

export async function deletePlaylistItem(userId: string, playlistId: string): Promise<void> {
  await playlistAccess.deletePlaylist(userId, playlistId)
}
