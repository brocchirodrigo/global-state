import * as Collapsible from "@radix-ui/react-collapsible";
import { ChevronDown } from "lucide-react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store";
import { play } from "../../store/slices/player";
import { Video } from "./Video";

interface ModuleProps {
  moduleIndex: number;
  title: string;
  amount: number;
}

export function Module({ amount, moduleIndex, title }: ModuleProps) {
  const dispatch = useDispatch();

  const videos = useAppSelector((state) => {
    return state.player.playlist.modules[moduleIndex].videos;
  });

  return (
    <Collapsible.Root className="group">
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
          {videos.map((video, videoIndex) => {
            return (
              <Video
                key={video.id}
                title={video.title}
                duration={video.duration}
                onPlay={() => dispatch(play([moduleIndex, videoIndex]))}
              />
            );
          })}
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
