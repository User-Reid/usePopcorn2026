import type { ErrorMessageProps } from "../Types/Types";

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <p>
      <span>📛{message}</span>
    </p>
  );
}
