import { beforeEach, describe, expect, it } from "vitest";
import { useStore as store } from ".";

const mockState = {
  id: 1,
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
};

describe("zustand store", () => {
  const initialState = store.getState();

  beforeEach(() => {
    store.setState(initialState);
  });

  it("should be able to play", () => {
    const { play } = store.getState();

    play([1, 2]);

    const { currentModuleIndex, currentVideoIndex } = store.getState();

    expect(currentModuleIndex).toEqual(1);
    expect(currentVideoIndex).toEqual(2);
  });

  it("should be able to play next video automatically", () => {
    store.setState({ playlist: mockState });

    const { next } = store.getState();

    next();

    const { currentModuleIndex, currentVideoIndex } = store.getState();

    expect(currentModuleIndex).toEqual(0);
    expect(currentVideoIndex).toEqual(1);
  });

  it("should be able to play next module automatically", () => {
    store.setState({ playlist: mockState });

    const { next } = store.getState();

    store.setState({ currentVideoIndex: 1 });

    next();

    const { currentModuleIndex, currentVideoIndex } = store.getState();

    expect(currentModuleIndex).toEqual(1);
    expect(currentVideoIndex).toEqual(0);
  });

  it("should not update the current module and the lesson index if there is no next video available", () => {
    store.setState({ playlist: mockState });

    const { next } = store.getState();

    store.setState({ currentVideoIndex: 1, currentModuleIndex: 1 });

    next();

    const { currentModuleIndex, currentVideoIndex } = store.getState();

    expect(currentModuleIndex).toEqual(1);
    expect(currentVideoIndex).toEqual(1);
  });
});
