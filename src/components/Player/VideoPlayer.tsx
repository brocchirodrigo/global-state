import { Loader } from "lucide-react";
import Player from "react-player";
import { useStore } from "../../store";

interface VideoProps {
  url?: string;
}

export function VideoPlayer({ url }: VideoProps) {
  const { isLoading, next } = useStore((store) => {
    return {
      isLoading: store.isLoading,
      next: store.next,
    };
  });

  function handleNext() {
    next();
  }

  return (
    <div className="flex items-center justify-center w-full h-full bg-zinc-950 aspect-video">
      {isLoading ? (
        <div className="flex items-center justify-center h-full">
          <Loader className="w-6 h-6 text-zinc-400 animate-spin" />
        </div>
      ) : (
        <Player
          onEnded={handleNext}
          width="100%"
          height="100%"
          controls
          url={url}
        />
      )}
    </div>
  );
}
