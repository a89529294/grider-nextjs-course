"use client";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset(): void;
}) {
  return (
    <div>
      {error.message}
      <br />
      <button className="p-2 border border-slate-600 rounded" onClick={reset}>
        reset
      </button>
    </div>
  );
}
