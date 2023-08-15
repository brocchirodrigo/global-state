import { MediaCommunitySkin, MediaOutlet, MediaPlayer } from "@vidstack/react";
import Player from "react-player";
import { type CommunitySkinTranslations } from "vidstack";
import "vidstack/styles/community-skin/video.css";
import "vidstack/styles/defaults.css";

const PORTUGUESE: CommunitySkinTranslations = {
  Audio: "Áudio",
  Auto: "Automático",
  Captions: "Legendas",
  Chapters: "Capítulos",
  Default: "Padrão",
  Mute: "Mutar",
  Normal: "Normal",
  Off: "Desligar",
  Pause: "Pausar",
  Play: "Reproduzir",
  Speed: "Velocidade",
  Quality: "Qualidade",
  Settings: "Configuração",
  Unmute: "Desmutar",
  "Seek Forward": "Avançar",
  "Seek Backward": "Voltar",
  "Closed-Captions On": "Ligar Legendas",
  "Closed-Captions Off": "Desligar Legendas",
  "Enter Fullscreen": "Tela cheia",
  "Exit Fullscreen": "Sair da tela cheia",
  "Enter PiP": "Entrar no PIP",
  "Exit PiP": "Sair do PiP",
};

interface VideoProps {
  url: string;
  remote?: boolean;
  title?: string;
}

export function VideoPlayer({ url, title, remote = true }: VideoProps) {
  return (
    <div className="flex items-center justify-center w-full h-full bg-zinc-950 aspect-video">
      {remote ? (
        <Player width="100%" height="100%" controls url={url} />
      ) : (
        <MediaPlayer title={title} src={url}>
          <MediaOutlet />

          <MediaCommunitySkin translations={PORTUGUESE} />
        </MediaPlayer>
      )}
    </div>
  );
}
