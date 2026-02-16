"use client";

import { useState, useRef } from "react";
import {
  Download,
  FileText,
  Loader2,
} from "lucide-react";

type DownloadCardProps = {
  title: string;
  description?: string;
  driveFileId: string;
};

const DownloadCard = ({
  title,
  description,
  driveFileId,
}: DownloadCardProps) => {
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${driveFileId}`;

  const [isDownloading, setIsDownloading] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);

  const handleDownload = () => {
    if (isDownloading) return;

    setIsDownloading(true);
    startTimeRef.current = performance.now();

    timerRef.current = setInterval(() => {
      setElapsed(
        (performance.now() - startTimeRef.current) / 1000
      );
    }, 100);

    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      if (timerRef.current) clearInterval(timerRef.current);
      setIsDownloading(false);
    }, 3000);
  };

  return (
    <div className="group rounded-2xl border border-black/10 bg-white shadow-sm hover:shadow-lg transition px-2 py-4 flex flex-col gap-4">
      
      <div className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center">
        <FileText className="text-black" size={26} />
      </div>

      <div className="flex-1">
        <h3 className="font-semibold text-gray-900 leading-snug">
          {title}
        </h3>

        {description && (
          <p className="mt-1 text-sm text-gray-600 line-clamp-3">
            {description}
          </p>
        )}
      </div>

      {/* Download Button */}
      <button
        onClick={handleDownload}
        disabled={isDownloading}
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/90 transition disabled:opacity-70"
      >
        {isDownloading ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            {elapsed.toFixed(1)}s
          </>
        ) : (
          <>
            <Download size={16} />
            Download
          </>
        )}
      </button>
    </div>
  );
};

export default DownloadCard;
