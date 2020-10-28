import { useEffect, useRef, useState, useCallback } from "react";

import videoWebm from "./assets/blank.webm";
import videoMp4 from "./assets/blank.mp4";

const useStayAwake = () => {
  const _video = useRef(document.createElement("video"));

  const [canSleep, setCanSleep] = useState(true);

  useEffect(() => {
    _video.current.muted = true;

    const _videoStyle: React.CSSProperties = {
      position: "absolute",
      top: "0",
      left: "0",
      width: "0",
      height: "0",
    };

    Object.assign(_video.current.style, _videoStyle);

    const _source_webm = document.createElement("source");
    _source_webm.setAttribute("src", videoWebm);
    _source_webm.setAttribute("type", "video/webm");

    _video.current.appendChild(_source_webm);

    const _source_mp4 = document.createElement("source");
    _source_mp4.setAttribute("src", videoMp4);
    _source_mp4.setAttribute("type", "video/mp4");
    _source_mp4.setAttribute("playsinline", "");

    _video.current.appendChild(_source_mp4);

    document.body.appendChild(_video.current);
  }, []);

  const preventSleeping = useCallback(() => {
    _video.current.setAttribute("loop", "loop");
    _video.current.play();

    setCanSleep(false);
  }, []);

  const allowSleeping = useCallback(() => {
    _video.current.removeAttribute("loop");
    _video.current.pause();

    setCanSleep(true);
  }, []);

  return { canSleep, preventSleeping, allowSleeping };
};

export default useStayAwake;
