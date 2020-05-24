import { apiEndpoint } from '../config'
import { PlaylistItem } from '../../../backend/src/models/PlaylistItem'
import { CreatePlaylistRequest } from '../../../backend/src/requests/CreatePlaylistRequest'
import Axios from 'axios'
import { UpdatePlaylistRequest } from '@/models/UpdatePlaylistRequest'

export async function getUserPlaylists(idToken: string): Promise<PlaylistItem[]> {
  const response = await Axios.get(`${apiEndpoint}/playlists`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${idToken}`
    }
  })

  return response.data.items
}

export async function createPlaylist(idToken: string, newPlaylist: CreatePlaylistRequest): Promise<PlaylistItem> {
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

export async function updatePlaylist(idToken: string, playlistId: string, updatePlaylist: UpdatePlaylistRequest): Promise<void> {
  await Axios.patch(`${apiEndpoint}/playlists/${playlistId}`, JSON.stringify(updatePlaylist), {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${idToken}`
    }
  })
}

export async function getUploadUrl(idToken: string, playlistId: string): Promise<string> {
  const response = await Axios.post(`${apiEndpoint}/playlists/${playlistId}/attachment`, '', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${idToken}`
    }
  })
  return response.data.uploadUrl
}

export async function uploadFile(uploadUrl: string, file: Buffer): Promise<void> {
  await Axios.put(uploadUrl, file)
}

export async function deletePlaylist(idToken: string, playlistId: string): Promise<void> {
  await Axios.delete(`${apiEndpoint}/playlists/${playlistId}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${idToken}`
    }
  })
}