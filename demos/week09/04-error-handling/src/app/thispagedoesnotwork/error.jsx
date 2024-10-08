"use client";
// This has to be a 'use client' function.

// it takes two props:
export default function ErrorPage({ error, reset }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2>Im so sorry again</h2>
      <p>There are so many errors, I just dont know where to begin.</p>
      {/* we're able to access the error message like so: */}
      <p>Error message: {error.message}</p>

      {/* and then give the use some obvious actions */}
      <button className="p-6 mt-6 bg-orange-400 rounded" onClick={reset}>
        Click here to refresh the page to get posts
      </button>
      <button className="p-6 mt-6 bg-orange-400 rounded">
        Email us this error
      </button>
    </div>
  );
}
