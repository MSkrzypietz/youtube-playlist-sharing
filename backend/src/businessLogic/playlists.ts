import { PlaylistItem } from '../models/PlaylistItem'
import { PlaylistAccess } from '../dataLayer/playlistAccess'

const playlistAccess = new PlaylistAccess()

export async function getAllTodos(userId: string): Promise<PlaylistItem[]> {

  return await playlistAccess.getAllPlaylists(userId)
}

