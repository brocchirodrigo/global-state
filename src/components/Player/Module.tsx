import * as Collapsible from "@radix-ui/react-collapsible";
import { ChevronDown } from "lucide-react";
import { useStore } from "../../zustand-store";
import { Video } from "./Video";

interface ModuleProps {
  moduleIndex: number;
  title: string;
  amount: number;
}

export function Module({ amount, moduleIndex, title }: ModuleProps) {
  const { play } = useStore((store) => {
    return {
      play: store.play,
    };
  });

  const { videos, currentModuleIndex, currentVideoIndex } = useStore(
    (state) => {
      const { currentModuleIndex, currentVideoIndex } = state;

      return {
        videos: state.playlist?.modules[moduleIndex].videos,
        currentModuleIndex,
        currentVideoIndex,
      };
    }
  );

  return (
    <Collapsible.Root className="group" defaultOpen={moduleIndex === 0}>
      <Collapsible.Trigger className="flex items-center w-full gap-3 p-4 bg-zinc-800">
        <div className="flex items-center justify-center w-10 h-10 text-xs rounded-full bg-zinc-950">
          {moduleIndex + 1}
        </div>

        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>

          <span className="text-xs text-zinc-400">
            {amount} {amount === 1 ? "vídeo" : "videos"}
          </span>
        </div>

        <ChevronDown className="group-data-[state=open]:rotate-180 transition-transform w-5 h-5 ml-auto text-zinc-400" />
      </Collapsible.Trigger>
      <Collapsible.Content>
        <nav className="relative flex flex-col gap-4 p-6">
          {videos &&
            videos.map((video, videoIndex) => {
              const isCurrent =
                currentModuleIndex === moduleIndex &&
                currentVideoIndex === videoIndex;

              return (
                <Video
                  key={video.id}
                  title={video.title}
                  duration={video.duration}
                  onPlay={() => play([moduleIndex, videoIndex])}
                  isCurrent={isCurrent}
                />
              );
            })}
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
