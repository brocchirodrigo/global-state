import { Header } from "../components/Player/Header";
import { Module } from "../components/Player/Module";
import { VideoPlayer } from "../components/Player/VideoPlayer";

//  https://www.youtube.com/watch?v=25Mrhg6dg1M videos/video.MP4

export function Player() {
  return (
    <div className="antialiased h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex lg:w-[1100px] w-[950px] flex-col gap-6">
        <Header />

        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
          <div className="flex-1">
            <VideoPlayer
              url="https://pub-49734f77d2b14426a098fefff489de15.r2.dev/video.mp4"
              title="Caminhada Teste"
              remote={false}
            />
          </div>

          <aside className="w-80 absolute top-0 bottom-0 right-0 border-l border-zinc-800 bg-zinc-900  overflow-y-auto divide-y-2 divide-zinc-600 scrollbar-thin scrollbar-thumb-zinc-400 scrollbar-track-zinc-700">
            <Module />
          </aside>
        </main>
      </div>
    </div>
  );
}
