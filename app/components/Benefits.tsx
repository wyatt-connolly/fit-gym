import React, { ReactNode } from "react";

type BenefitsProps = {
  icon: ReactNode;
  title: string;
  body: string;
};
function Benefits({ icon, title, body }: BenefitsProps) {
  return (
    <div className="flex items-start gap-4">
      <span className="shrink-0 rounded-lg bg-black p-4 text-white">
        {icon}
      </span>

      <div>
        <h2 className="text-lg font-bold">{title}</h2>

        <p className="mt-1 text-md ">{body}</p>
      </div>
    </div>
  );
}

export default Benefits;
