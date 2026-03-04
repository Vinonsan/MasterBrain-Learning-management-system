type Props = {
  courseId: string;
  videoRecordings: string[];
};

const CourseVideos = ({ courseId, videoRecordings }: Props) => {
  const videos = videoRecordings.slice(0, 6);

  return (
    <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-bold">Curriculum Videos</h2>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {videos.map((driveId, index) => (
          <div
            key={`${courseId}-video-${index + 1}`}
            className="overflow-hidden rounded-2xl border border-black/10"
          >
            <iframe
              title={`Recording ${index + 1}`}
              className="aspect-video w-full"
              src={`https://drive.google.com/file/d/${driveId}/preview`}
              allow="autoplay; fullscreen"
              allowFullScreen
            />
            <div className="border-t  border-black/10 px-3 py-2 text-sm font-bold text-white bg-black/80">
              Recording {index + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseVideos;
