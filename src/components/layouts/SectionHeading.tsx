
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  variant?: "default" | "gradient";
}

function SectionHeading({
  title,
  subtitle,
  align = "left",
  variant = "default",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`mb-14 ${
        isCenter ? "text-center flex flex-col items-center" : "text-left"
      }`}
    >
     

      <h2
        className={`text-3xl md:text-4xl font-extrabold tracking-tight ${
          variant === "gradient"
            ? "bg-linear-to-r from-primary via-black to-red-900 bg-clip-text text-transparent"
            : "text-gray-900"
        }`}
      >
        {title}
      </h2>

 <span
        className={`h-1 w-12 rounded-full bg-primary ${
          isCenter ? "mx-auto" : ""
        }`}
      />
   
      {subtitle && (
        <p
          className={`mt-4 text-base text-gray-600 leading-relaxed ${
            isCenter ? "max-w-2xl mx-auto" : "max-w-xl"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
