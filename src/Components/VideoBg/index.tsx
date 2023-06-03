export default function VideoBg() {
  return (
    <div className="video-bg">
      <iframe
        className="iframe"
        src="https://www.youtube.com/embed/BqFSHbzSs7U"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
