import { describe, expect, it } from "vitest";
import { PlayerState, next, play, player as reducer } from "../slices/player";

const initialState: PlayerState = {
  playlist: {
    modules: [
      {
        id: 1,
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
        id: 2,
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
        ],
      },
    ],
  },
  isLoading: false,
  currentModuleIndex: 0,
  currentVideoIndex: 0,
};

describe("player slice", () => {
  it("should be able to play", () => {
    const state = reducer(initialState, play([1, 2]));

    expect(state.currentModuleIndex).toEqual(1);
    expect(state.currentVideoIndex).toEqual(2);
  });

  it("should be able to play next video automatically", () => {
    const state = reducer(initialState, next());

    expect(state.currentModuleIndex).toEqual(0);
    expect(state.currentVideoIndex).toEqual(1);
  });

  it("should be able to play next module automatically", () => {
    const state = reducer(
      {
        ...initialState,
        currentVideoIndex: 1,
      },
      next()
    );

    expect(state.currentModuleIndex).toEqual(1);
    expect(state.currentVideoIndex).toEqual(0);
  });

  it("should not update the current module and the lesson index if there is no next video available", () => {
    const state = reducer(
      {
        ...initialState,
        currentVideoIndex: 1,
        currentModuleIndex: 1,
      },
      next()
    );

    expect(state.currentModuleIndex).toEqual(1);
    expect(state.currentVideoIndex).toEqual(1);
  });
});
