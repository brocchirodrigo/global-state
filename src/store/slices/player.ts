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
              id: "caminhada.mp4",
              title: "Caminhada",
              url: "https://public.imaginer.com.br/tests/caminhada.mp4",
              remote: false,
              duration: "00:37",
            },
            {
              id: "CPRx_WVkJ8g",
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
              id: "caminhada.mp4",
              title: "Caminhada",
              url: "https://public.imaginer.com.br/tests/caminhada.mp4",
              remote: false,
              duration: "00:37",
            },
            {
              id: "CPRx_WVkJ8g",
              title: "Chatbot do ZERO com Next, AI SDK, OpenAI e Shadcn/UI",
              url: "https://www.youtube.com/watch?v=CPRx_WVkJ8g",
              remote: true,
              duration: "36:07",
            },
            {
              id: "CPRx_WVkJ8g",
              title: "Chatbot do ZERO com Next, AI SDK, OpenAI e Shadcn/UI",
              url: "https://www.youtube.com/watch?v=CPRx_WVkJ8g",
              remote: true,
              duration: "36:07",
            },
          ],
        },
      ],
    },
  },
  reducers: {},
});

export const player = playerSlice.reducer;
