# Youtube Playlist Sharing

This application lets you create and share your youtube playlists with your friends.

- Create an account or use your google account to login in
- Create a playlist of your favorite videos
- Share the link to your playlist with your friends
- Your friends do not need an account to enjoy the playlist

# Key Technologies
- Serverless Framework
- AWS API Gateway
- AWS Lambda
- AWS S3
- DynamoDB
- Node.js
- Vue.js
- Auth0

# How to run the application
## Backend
To deploy an application run the following commands:

```
cd backend
npm install
sls deploy -v
```

## Frontend
To run a client application first edit the client/src/config.ts file to set correct parameters. And then run the following commands:

```
cd frontend
npm install
npm run serve
```

This should start a development server with the React application that will interact with the serverless TODO application.

# Application Preview

## Playlist Management
![Playlist Management Example](https://github.com/MSkrzypietz/youtube-playlist-sharing/blob/master/images/PlaylistManagement.PNG)

## All Playlists of a user with a custom thumbnail
![User Playlists Example](https://github.com/MSkrzypietz/youtube-playlist-sharing/blob/master/images/UserPlaylists.PNG)
