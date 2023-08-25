import { create } from "zustand";
import { api } from "../lib/axios";

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
  isLoading: boolean;
  play: (moduleAndVideoIndex: [number, number]) => void;
  next: () => void;
  load: () => Promise<void>;
}

export const useStore = create<PlayerState>((set, get) => {
  return {
    playlist: null,
    currentModuleIndex: 0,
    currentVideoIndex: 0,
    isLoading: true,

    load: async () => {
      set({
        isLoading: true,
      });

      const response = await api.get("/playlist/1");

      set({
        playlist: response.data,
        isLoading: false,
      });
    },

    play: (moduleAndVideoIndex: [number, number]) => {
      const [moduleIndex, videoIndex] = moduleAndVideoIndex;

      set({
        currentModuleIndex: moduleIndex,
        currentVideoIndex: videoIndex,
      });
    },

    next: () => {
      const { currentModuleIndex, currentVideoIndex, playlist } = get();

      const nextVideoIndex = currentVideoIndex + 1;

      const nextVideo =
        playlist?.modules[currentModuleIndex].videos[nextVideoIndex];

      if (nextVideo) {
        set({
          currentVideoIndex: nextVideoIndex,
        });
      } else {
        const nextModuleIndex = currentModuleIndex + 1;

        const nextModule = playlist?.modules[nextModuleIndex];

        if (nextModule) {
          set({
            currentModuleIndex: nextModuleIndex,
            currentVideoIndex: 0,
          });
        }
      }
    },
  };
});

export const useCurrentVideoSelector = () => {
  return useStore((state) => {
    const { currentModuleIndex, currentVideoIndex } = state;

    const currentModule = state.playlist?.modules[currentModuleIndex];
    const currentVideo =
      state.playlist?.modules[currentModuleIndex].videos[currentVideoIndex];

    return { currentModule, currentVideo };
  });
};
