import * as AWS  from 'aws-sdk'
import { DocumentClient } from 'aws-sdk/clients/dynamodb'

import { PlaylistItem, VideoItem } from '../models/PlaylistItem'

const AWSXRay = require('aws-xray-sdk')
const XAWS = AWSXRay.captureAWS(AWS)

export class PlaylistAccess {

  constructor(
    private readonly docClient: DocumentClient = new XAWS.DynamoDB.DocumentClient(),
    private readonly s3 = new AWS.S3({ signatureVersion: 'v4' }),
    private readonly playlistsTable = process.env.PLAYLISTS_TABLE,
    private readonly playlistIdIndex = process.env.PLAYLIST_ID_INDEX,
    private readonly bucketName = process.env.IMAGES_S3_BUCKET,
    private readonly urlExpiration = Number(process.env.SIGNED_URL_EXPIRATION)) {
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
          ":newVideos": newVideos
      }
    }).promise()
  }

  async getSignedUrl(bucketKey: string): Promise<string> {
    return this.s3.getSignedUrl('putObject', {
      Bucket: this.bucketName,
      Key: bucketKey,
      Expires: this.urlExpiration
    })
  }

  async updatePlaylistThumbnailUrl(userId: string, playlistId: string, thumbnailId: string) {
    await this.docClient.update({
      TableName: this.playlistsTable,
      Key: {
        "userId": userId,
        "playlistId": playlistId
      },
      UpdateExpression: "set thumbnailUrl=:thumbnailUrl",
      ExpressionAttributeValues:{
          ":thumbnailUrl": `https://${this.bucketName}.s3.amazonaws.com/${thumbnailId}`
      }
    }).promise()
  }

  async updatePlaylistName(userId: string, playlistId: string, newName: string) {
    await this.docClient.update({
      TableName: this.playlistsTable,
      Key: {
        "userId": userId,
        "playlistId": playlistId
      },
      UpdateExpression: "set #name=:newName",
      ExpressionAttributeValues:{
          ":newName": newName
      },
      ExpressionAttributeNames: {
        "#name": "name"
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