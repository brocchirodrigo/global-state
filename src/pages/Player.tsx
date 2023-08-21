import { Header } from "../components/Player/Header";
import { Module } from "../components/Player/Module";
import { VideoPlayer } from "../components/Player/VideoPlayer";
import { useAppSelector } from "../store";

export function Player() {
  const modules = useAppSelector((state) => state.player.playlist.modules);

  const video = useAppSelector((state) => {
    const { currentModuleIndex, currentVideoIndex } = state.player;

    const currentVideo =
      state.player.playlist.modules[currentModuleIndex].videos[
        currentVideoIndex
      ];

    return currentVideo;
  });

  return (
    <div className="flex items-center justify-center h-screen antialiased bg-zinc-950 text-zinc-50">
      <div className="flex lg:w-[1100px] w-[950px] flex-col gap-6">
        <Header />

        <main className="relative flex overflow-hidden border rounded-lg shadow border-zinc-800 bg-zinc-900 pr-80">
          <div className="flex-1">
            <VideoPlayer
              url={video.url}
              title={video.title}
              remote={video.remote}
            />
          </div>

          <aside className="absolute top-0 bottom-0 right-0 overflow-y-auto border-l divide-y-2 w-80 border-zinc-800 bg-zinc-900 divide-zinc-600 scrollbar-thin scrollbar-thumb-zinc-400 scrollbar-track-zinc-700">
            {modules.map((module, index) => (
              <Module
                key={module.id}
                moduleIndex={index}
                title={module.title}
                amount={module.videos.length}
              />
            ))}
          </aside>
        </main>
      </div>
    </div>
  );
}
