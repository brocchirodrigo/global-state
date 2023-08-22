import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice({
  name: "player",
  initialState: {
    playlist: {
      modules: [
        {
          id: "1",
          title: "Iniciando com Redux",
          videos: [
            {
              id: "1",
              title: "Caminhada",
              url: "https://public.imaginer.com.br/tests/caminhada.mp4",
              duration: "00:37",
            },
            {
              id: "2",
              title: "Chatbot do ZERO com Next, AI SDK, OpenAI e Shadcn/UI",
              url: "https://www.youtube.com/watch?v=CPRx_WVkJ8g",
              duration: "36:07",
            },
          ],
        },
        {
          id: "2",
          title: "Iniciando com Redux part II",
          videos: [
            {
              id: "1",
              title: "Caminhada",
              url: "https://public.imaginer.com.br/tests/caminhada.mp4",
              duration: "00:37",
            },
            {
              id: "2",
              title: "Chatbot do ZERO com Next, AI SDK, OpenAI e Shadcn/UI",
              url: "https://www.youtube.com/watch?v=CPRx_WVkJ8g",
              duration: "36:07",
            },
            {
              id: "3",
              title: "3 dicas para escalar apps React com TailwindCSS",
              url: "https://www.youtube.com/watch?v=BhPyF0BQpF0",
              duration: "15:20",
            },
          ],
        },
        {
          id: "3",
          title: "Iniciando com Redux part III",
          videos: [
            {
              id: "1",
              title: "Caminhada",
              url: "https://public.imaginer.com.br/tests/caminhada.mp4",
              duration: "00:37",
            },
          ],
        },
      ],
    },
    currentModuleIndex: 0,
    currentVideoIndex: 0,
  },
  reducers: {
    play: (state, action: PayloadAction<[number, number]>) => {
      state.currentModuleIndex = action.payload[0];
      state.currentVideoIndex = action.payload[1];
    },
    next: (state) => {
      const nextVideoIndex = state.currentVideoIndex + 1;

      const nextVideo =
        state.playlist.modules[state.currentModuleIndex].videos[nextVideoIndex];

      if (nextVideo) {
        state.currentVideoIndex = nextVideoIndex;
      } else {
        const nextModuleIndex = state.currentModuleIndex + 1;

        const nextModule = state.playlist.modules[nextModuleIndex];

        if (nextModule) {
          state.currentModuleIndex = nextModuleIndex;
          state.currentVideoIndex = 0;
        }
      }
    },
  },
});

export const player = playerSlice.reducer;
export const { play, next } = playerSlice.actions;
