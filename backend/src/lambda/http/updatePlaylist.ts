import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda'
import { updatePlaylist } from '../../businessLogic/playlists'
import { UpdatePlaylistRequest } from '../../requests/UpdatePlaylistRequest'
import { getUserId } from '../utils'

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  console.log('Processing event: ', event)
  
  const userId = getUserId(event)
  const playlistId = event.pathParameters.playlistId
  const updatedPlaylistRequest: UpdatePlaylistRequest = JSON.parse(event.body)

  await updatePlaylist(userId, playlistId, updatedPlaylistRequest)

  return {
    statusCode: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify({})
  }
}