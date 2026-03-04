import Image from "next/image";
import { Star } from "lucide-react";

type Review = {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
};

type Props = {
  reviews: Review[];
};

const CourseReviews = ({ reviews }: Props) => {
  const average =
    reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;

  return (
    <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-xl font-bold">Student Reviews</h2>

      {/* Average Rating */}
      <div className="mb-8 flex items-center gap-3">
        <div className="flex items-center gap-1 text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              fill={i < Math.round(average) ? "currentColor" : "none"}
              className="stroke-current"
            />
          ))}
        </div>
        <span className="text-lg font-semibold">
          {average.toFixed(1)} out of 5
        </span>
      </div>

      {/* Individual Reviews */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="flex flex-col gap-4 rounded-2xl border border-black/10 p-5 md:flex-row"
          >
            {/* Avatar */}
            <div className="relative h-12 w-12 shrink-0">
              <Image
                src={review.avatar}
                alt={review.name}
                fill
                sizes="48px"
                className="rounded-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <h4 className="font-semibold">{review.name}</h4>
                <span className="text-xs text-black/50">
                  {review.date}
                </span>
              </div>

              <div className="mt-1 flex items-center gap-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill={i < review.rating ? "currentColor" : "none"}
                    className="stroke-current"
                  />
                ))}
              </div>

              <p className="mt-3 text-sm leading-6 text-black/70">
                {review.comment}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseReviews;