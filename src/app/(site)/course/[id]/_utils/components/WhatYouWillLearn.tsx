import { FaCheckCircle } from "react-icons/fa";

type Props = {
  learnings: string[];
};

const WhatYouWillLearn = ({ learnings }: Props) => {
  return (
    <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-bold">
        What You&apos;ll Learn
      </h2>

      <ul className="grid gap-3 text-black/75 md:grid-cols-2">
        {learnings.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-2"
          >
           <FaCheckCircle className="text-primary text-lg shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhatYouWillLearn;