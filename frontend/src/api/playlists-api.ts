import { apiEndpoint } from '../config'
import { PlaylistItem } from '../../../backend/src/models/PlaylistItem'
import { CreatePlaylistRequest } from '../../../backend/src/requests/CreatePlaylistRequest'
import Axios from 'axios'

export async function getUserPlaylists(idToken: string): Promise<PlaylistItem[]> {
  const response = await Axios.get(`${apiEndpoint}/playlists`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${idToken}`
    }
  })

  return response.data.items
}

export async function createPlaylist(idToken: string, newPlaylist: CreatePlaylistRequest): Promise<void> {
  const response = await Axios.post(`${apiEndpoint}/playlists/new`,  JSON.stringify(newPlaylist), {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${idToken}`
    }
  })

  return response.data.item
}

export async function getPlaylist(playlistId: string): Promise<PlaylistItem> {
  const response = await Axios.get(`${apiEndpoint}/playlists/${playlistId}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return response.data.item
}