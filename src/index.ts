import { useEffect, useRef, useState, useCallback } from "react";

import videoMp4 from "./assets/muted-blank.mp4";
import videoOGV from "./assets/muted-blank.ogv";

const useStayAwake = () => {
  const _video = useRef(document.createElement("video"));

  const [isAllowedToSleep, setAllowedToSleep] = useState(true);

  useEffect(() => {
    const _videoStyle: React.CSSProperties = {
      position: "absolute",
      top: "0",
      left: "0",
      width: "0",
      height: "0",
    };

    Object.assign(_video.current.style, _videoStyle);

    const _source_mp4 = document.createElement("source");
    _source_mp4.setAttribute("src", videoMp4);
    _source_mp4.setAttribute("type", "video/mp4");

    _video.current.appendChild(_source_mp4);

    const _source_ogg = document.createElement("source");
    _source_ogg.setAttribute("src", videoOGV);
    _source_ogg.setAttribute("type", "video/ogg");

    _video.current.appendChild(_source_ogg);

    document.body.appendChild(_video.current);
  }, [_video]);

  const preventSleep = useCallback(() => {
    _video.current.setAttribute("loop", "loop");
    _video.current.play();

    setAllowedToSleep(false);
  }, []);

  const allowSleep = () => {
    _video.current.removeAttribute("loop");
    _video.current.pause();

    setAllowedToSleep(true);
  };

  return { isAllowedToSleep, preventSleep, allowSleep };
};

export default useStayAwake;
