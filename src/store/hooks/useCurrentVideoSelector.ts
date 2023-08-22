import { useAppSelector } from "..";

export const useCurrentVideoSelector = () => {
  return useAppSelector((state) => {
    const { currentModuleIndex, currentVideoIndex } = state.player;

    const currentModule = state.player.playlist?.modules[currentModuleIndex];
    const currentVideo =
      state.player.playlist?.modules[currentModuleIndex].videos[
        currentVideoIndex
      ];

    return { currentModule, currentVideo };
  });
};
