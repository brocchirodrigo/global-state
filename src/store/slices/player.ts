import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
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
              remote: false,
              duration: "00:37",
            },
            {
              id: "2",
              title: "Chatbot do ZERO com Next, AI SDK, OpenAI e Shadcn/UI",
              url: "https://www.youtube.com/watch?v=CPRx_WVkJ8g",
              remote: true,
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
              remote: false,
              duration: "00:37",
            },
            {
              id: "2",
              title: "Chatbot do ZERO com Next, AI SDK, OpenAI e Shadcn/UI",
              url: "https://www.youtube.com/watch?v=CPRx_WVkJ8g",
              remote: true,
              duration: "36:07",
            },
            {
              id: "3",
              title: "3 dicas para escalar apps React com TailwindCSS",
              url: "https://www.youtube.com/watch?v=BhPyF0BQpF0",
              remote: true,
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
              remote: false,
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
    play: (state, action) => {
      state.currentModuleIndex = action.payload[0];
      state.currentVideoIndex = action.payload[1];
    },
  },
});

export const player = playerSlice.reducer;
export const { play } = playerSlice.actions;
