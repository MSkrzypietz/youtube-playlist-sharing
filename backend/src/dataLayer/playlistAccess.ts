import * as AWS  from 'aws-sdk'
import { DocumentClient } from 'aws-sdk/clients/dynamodb'

import { PlaylistItem, VideoItem } from '../models/PlaylistItem'

export class PlaylistAccess {

  constructor(
    private readonly docClient: DocumentClient = new AWS.DynamoDB.DocumentClient(),
    private readonly playlistsTable = process.env.PLAYLISTS_TABLE,
    private readonly playlistIdIndex = process.env.PLAYLIST_ID_INDEX) {
  }

  async getPlaylist(playlistId: string): Promise<PlaylistItem> {
    const result = await this.docClient.query({
      TableName: this.playlistsTable,
      IndexName: this.playlistIdIndex,
      KeyConditionExpression: 'playlistId = :playlistId',
      ExpressionAttributeValues: { ':playlistId': playlistId } 
    }).promise()

    const item = result.Items[0]
    return item as PlaylistItem
  }

  async getAllPlaylists(userId: string): Promise<PlaylistItem[]> {
    const result = await this.docClient.query({
      TableName: this.playlistsTable,
      KeyConditionExpression: 'userId = :userId',
      ExpressionAttributeValues: {
          ':userId': userId
        },
    }).promise()

    const items = result.Items
    return items as PlaylistItem[]
  }

  async createPlaylist(newPlaylist: PlaylistItem): Promise<PlaylistItem> {
    await this.docClient.put({
      TableName: this.playlistsTable,
      Item: {
        ...newPlaylist
      }
    }).promise()

    return newPlaylist
  }  

  async updatePlaylistVideoUrls(userId: string, playlistId: string, newVideos: VideoItem[]) {
    await this.docClient.update({
      TableName: this.playlistsTable,
      Key: {
        "userId": userId,
        "playlistId": playlistId
      },
      UpdateExpression: "set videos=:newVideos",
      ExpressionAttributeValues:{
          ":newVideos": { ...newVideos }
      }
    }).promise()
  }

  async deletePlaylist(userId: string, playlistId: string) {
    await this.docClient.delete({
      TableName: this.playlistsTable,
      Key: {
        "userId": userId,
        "playlistId": playlistId
      }
    }).promise()
  }

}