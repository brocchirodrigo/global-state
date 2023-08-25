import { PlayIcon, Video as VideoIcon } from "lucide-react";

interface VideoProps {
  title: string;
  duration: string;
  isCurrent?: boolean;
  onPlay: () => void;
}

export function Video({
  title,
  duration,
  onPlay,
  isCurrent = false,
}: VideoProps) {
  return (
    <button
      onClick={onPlay}
      data-active={isCurrent}
      disabled={isCurrent}
      className="flex items-center gap-3 text-sm text-zinc-400 data-[active=true]:text-emerald-400 enabled:hover:text-zinc-500"
    >
      <div>
        {isCurrent ? (
          <PlayIcon className="w-4 h-4 text-emerald-400" />
        ) : (
          <VideoIcon
            data-active={isCurrent}
            className="w-4 h-4 text-zinc-500"
          />
        )}
      </div>
      <span className="text-xs text-start">{title}</span>
      <span className="ml-auto font-mono text-xs text-zinc-500">
        {duration}
      </span>
    </button>
  );
}
