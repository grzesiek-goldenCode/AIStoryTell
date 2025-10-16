import Button from "./Button";

export default function ErrorMessage({
  message,
  onRetry,
}: {
  message: string;
  onRetry: () => void;
}) {
  return (
    <div className="flex flex-col justify-center  items-center h-[80vh] w-full">
      <div className="p-6 w-full text-center bg-red-50 border border-red-200 rounded-xl">
        <p className="text-red-600 mb-4">{message}</p>
        <Button onClick={() => onRetry()}>Spróbuj ponownie</Button>
      </div>
    </div>
  );
}
