import Player from "react-player";
import { useDispatch } from "react-redux";
import { next } from "../../store/slices/player";

interface VideoProps {
  url: string;
}

export function VideoPlayer({ url }: VideoProps) {
  const dispatch = useDispatch();

  function handleNext() {
    dispatch(next());
  }

  return (
    <div className="flex items-center justify-center w-full h-full bg-zinc-950 aspect-video">
      <Player
        onEnded={handleNext}
        width="100%"
        height="100%"
        controls
        url={url}
      />
    </div>
  );
}
