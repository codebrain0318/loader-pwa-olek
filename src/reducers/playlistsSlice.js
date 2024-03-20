import { createSlice } from '@reduxjs/toolkit'

export const playlistsSlice = createSlice({
  name: 'playlists',
  initialState: {
    playlists: []
  },
  reducers: {
    getPlaylists: (state, action) => {
      state.playlists = action.payload
    },
    addSongToPlaylists: (state, action) => {
      const { playlistName, songInfo } = action.payload;
      const playlistToUpdateIndex = state.playlists.findIndex(playlist => playlist.name === playlistName);
      if (playlistToUpdateIndex !== -1) {
        return {
          ...state,
          playlists: state.playlists.map((playlist, index) =>
            index === playlistToUpdateIndex ? 
              { ...playlist, songs: [...playlist.songs, songInfo] }
              : playlist
          )
        };
      }
    }
  }
})

export const { getPlaylists, addSongToPlaylists } = playlistsSlice.actions

export default playlistsSlice.reducer