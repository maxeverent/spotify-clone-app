export interface IGenre {
  name: string
}

export interface IArtist {
  name: string,
  cover?: string,
  description?: string
}

export interface ITrack {
  name: string,
  genre: IGenre[],
  artists: IArtist[],
  url: string,
  cover?: string
}

export interface IPlaylist {
  name: string,
  isPublic?: boolean
  tracks?: ITrack[]
}

export interface PlaylistResponse {
  name: string,
  isPublic?: boolean
}[]

export interface IAlbum {
  name: string,
  description: string,
  artist: string,
  genre: IGenre[],
  tracks: ITrack[],
  cover: string
}


export interface INewsItem {
  cover: string,
  title: string,
  artist: string,
}