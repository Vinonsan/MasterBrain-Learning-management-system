"use client";

import { useState, useRef } from "react";
import { Download, FileText, Loader2 } from "lucide-react";
import Button from "@/src/components/base/Button";

type DownloadCardProps = {
  paperNumber?: number | string;
  title: string;
  description?: string;
  driveFileId?: string;
};

const DownloadCard = ({
  paperNumber,
  title,
  description,
  driveFileId,
}: DownloadCardProps) => {
  const downloadUrl = driveFileId
    ? `https://drive.google.com/uc?export=download&id=${driveFileId}`
    : "";

  const [isDownloading, setIsDownloading] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef<number>(0);

  const handleDownload = () => {
    if (isDownloading || !driveFileId) return;

    setIsDownloading(true);
    startTimeRef.current = performance.now();

    timerRef.current = setInterval(() => {
      setElapsed((performance.now() - startTimeRef.current) / 1000);
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
    <div className="group rounded-2xl border border-black/10 bg-white shadow-sm hover:shadow-lg transition px-4 py-4 flex flex-col gap-4">
      
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
          <FileText className="text-red-700" size={26} />
        </div>

        {paperNumber && (
          <span className="text-sm font-semibold text-gray-700">
            Paper {paperNumber}
          </span>
        )}
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


      <Button
        onClick={handleDownload}
        disabled={isDownloading || !driveFileId}
        variant="primary"
        size="sm"
        roundedSize="md"
        className="mt-2 w-full"
      >
        {isDownloading ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            {elapsed.toFixed(1)}s
          </>
        ) : (
          <>
            <Download size={16} />
            {driveFileId ? "Download" : "Unavailable"}
          </>
        )}
      </Button>
    </div>
  );
};

export default DownloadCard;
