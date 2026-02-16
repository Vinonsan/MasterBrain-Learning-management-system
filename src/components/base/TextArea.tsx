import React, { useId } from "react";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  id?: string;
};

const Textarea = ({ className = "", label, id, ...props }: TextareaProps) => {
  const reactId = useId();
  const textareaId = id ?? reactId;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={textareaId}
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        {...props}
        className={`w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary ${className}`}
      />
    </div>
  );
};

export default Textarea;
