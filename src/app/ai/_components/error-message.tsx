export default function ErrorMessage({ error }: { error: Error | null }) {
  return (
    <>
      {error ? (
        <p className="mt-2 rounded-lg bg-red-100 py-1 text-center text-red-600">{error.message}</p>
      ) : (
        ""
      )}
    </>
  );
}
