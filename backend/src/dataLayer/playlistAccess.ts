import * as AWS  from 'aws-sdk'
import { DocumentClient } from 'aws-sdk/clients/dynamodb'

import { PlaylistItem } from '../models/PlaylistItem'

export class PlaylistAccess {

  constructor(
    private readonly docClient: DocumentClient = new AWS.DynamoDB.DocumentClient(),
    private readonly playlistsTable = process.env.PLAYLISTS_TABLE) {
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

}