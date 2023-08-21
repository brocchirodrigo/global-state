import { MessageCircle } from "lucide-react";
import { useAppSelector } from "../../store";

export function Header() {
  const { currentModule, currentVideo } = useAppSelector((state) => {
    const { currentModuleIndex, currentVideoIndex } = state.player;

    const currentModule = state.player.playlist.modules[currentModuleIndex];
    const currentVideo =
      state.player.playlist.modules[currentModuleIndex].videos[
        currentVideoIndex
      ];

    return { currentModule, currentVideo };
  });

  return (
    <div className="flex items-center justify-between ">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">{currentModule.title}</h1>
        <span className="text-sm text-zinc-400">
          Assistindo atualmente ao vídeo "{currentVideo.title}"
        </span>
      </div>

      <button className="flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium rounded bg-violet-500 hover:bg-violet-600">
        <MessageCircle className="w-4 h-4" />
        Deixar Feedback
      </button>
    </div>
  );
}
