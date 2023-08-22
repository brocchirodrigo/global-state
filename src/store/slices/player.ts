import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../lib/axios";

interface Videos {
  id: string;
  title: string;
  url: string;
  duration: string;
}

interface Modules {
  modules: Array<{
    id: number;
    title: string;
    videos: Array<Videos>;
  }>;
}

export interface PlayerState {
  currentModuleIndex: number;
  currentVideoIndex: number;
  playlist: Modules | null;
}

const initialState: PlayerState = {
  playlist: null,
  currentModuleIndex: 0,
  currentVideoIndex: 0,
};

export const loadModules = createAsyncThunk("player/load", async () => {
  const response = await api.get("/playlist/1");

  return response.data;
});

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    start: (state, action: PayloadAction<Modules>) => {
      state.playlist = action.payload;
    },

    play: (state, action: PayloadAction<[number, number]>) => {
      state.currentModuleIndex = action.payload[0];
      state.currentVideoIndex = action.payload[1];
    },

    next: (state) => {
      const nextVideoIndex = state.currentVideoIndex + 1;

      const nextVideo =
        state.playlist?.modules[state.currentModuleIndex].videos[
          nextVideoIndex
        ];

      if (nextVideo) {
        state.currentVideoIndex = nextVideoIndex;
      } else {
        const nextModuleIndex = state.currentModuleIndex + 1;

        const nextModule = state.playlist?.modules[nextModuleIndex];

        if (nextModule) {
          state.currentModuleIndex = nextModuleIndex;
          state.currentVideoIndex = 0;
        }
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(loadModules.fulfilled, (state, action) => {
      state.playlist = action.payload;
    });
  },
});

export const player = playerSlice.reducer;
export const { play, next } = playerSlice.actions;
