import { Loader } from "lucide-react";
import Player from "react-player";
import { useAppDispatch, useAppSelector } from "../../store";
import { next } from "../../store/slices/player";

interface VideoProps {
  url?: string;
}

export function VideoPlayer({ url }: VideoProps) {
  const dispatch = useAppDispatch();
  const isVideoLoading = useAppSelector((state) => state.player.isLoading);

  function handleNext() {
    dispatch(next());
  }

  return (
    <div className="flex items-center justify-center w-full h-full bg-zinc-950 aspect-video">
      {isVideoLoading ? (
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
