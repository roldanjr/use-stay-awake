import { useEffect, useRef, useState, useCallback } from "react";

import videoWebm from "./assets/blank.webm";
import videoMp4 from "./assets/blank.mp4";

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

    const _source_webm = document.createElement("source");
    _source_webm.setAttribute("src", videoWebm);
    _source_webm.setAttribute("type", "video/webm");

    _video.current.appendChild(_source_webm);

    const _source_mp4 = document.createElement("source");
    _source_mp4.setAttribute("src", videoMp4);
    _source_mp4.setAttribute("type", "video/mp4");

    _video.current.appendChild(_source_mp4);

    document.body.appendChild(_video.current);
  }, [_video]);

  const preventToSleep = useCallback(() => {
    _video.current.setAttribute("loop", "loop");
    _video.current.play();

    setAllowedToSleep(false);
  }, []);

  const allowToSleep = () => {
    _video.current.removeAttribute("loop");
    _video.current.pause();

    setAllowedToSleep(true);
  };

  return { isAllowedToSleep, preventToSleep, allowToSleep };
};

export default useStayAwake;
