import { Video as VideoIcon } from "lucide-react";

interface VideoProps {
  title: string;
  duration: string;
}

export function Video({ title, duration }: VideoProps) {
  return (
    <button className="flex items-center gap-3 text-sm text-zinc-400">
      <div>
        <VideoIcon className="w-4 h-4 text-zinc-500" />
      </div>
      <span className="text-xs text-start">{title}</span>
      <span className="ml-auto font-mono text-xs text-zinc-500">
        {duration}
      </span>
    </button>
  );
}
