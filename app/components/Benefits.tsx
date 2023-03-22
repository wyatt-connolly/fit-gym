import React from "react";

function Benefits({ icon, title, body }) {
  return (
    <div className="flex items-start gap-4">
      <span className="shrink-0 rounded-lg bg-gray-800 p-4">{icon}</span>

      <div>
        <h2 className="text-lg font-bold">{title}</h2>

        <p className="mt-1 text-sm text-gray-300">{body}</p>
      </div>
    </div>
  );
}

export default Benefits;
