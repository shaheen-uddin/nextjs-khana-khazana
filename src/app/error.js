"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="max-w-2xl mx-auto">
      <h2>Something went wrong! </h2>
      <h3 className="text-xl text-red-400 font-mono">
        The error: {error.message}
      </h3>
      <button
        className="bg-indigo-700 rounded-md py-1 px-2 text-white"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
