import { useEffect } from "react";

import { Header } from "../components/Player/Header";
import { Module } from "../components/Player/Module";
import { VideoPlayer } from "../components/Player/VideoPlayer";
import { useCurrentVideoSelector, useStore } from "../store";

export function Player() {
  const { playlist, load } = useStore((store) => {
    return {
      playlist: store.playlist,
      load: store.load,
    };
  });

  const { currentVideo } = useCurrentVideoSelector();

  useEffect(() => {
    if (currentVideo) {
      document.title = `React Global State | ${currentVideo.title}`;
    }
  }, [currentVideo]);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <div className="flex items-center justify-center h-screen antialiased bg-zinc-950 text-zinc-50">
      <div className="flex lg:w-[1100px] w-[950px] flex-col gap-6">
        <Header />

        <main className="relative flex overflow-hidden border rounded-lg shadow border-zinc-800 bg-zinc-900 pr-80">
          <div className="flex-1">
            <VideoPlayer url={currentVideo?.url} />
          </div>

          <aside className="absolute top-0 bottom-0 right-0 overflow-y-auto border-l divide-y-2 w-80 border-zinc-800 bg-zinc-900 divide-zinc-900 scrollbar-thin scrollbar-thumb-zinc-400 scrollbar-track-zinc-700">
            {playlist &&
              playlist.modules.map((module, index) => (
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
