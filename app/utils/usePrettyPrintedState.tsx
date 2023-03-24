import { Dispatch, SetStateAction, useMemo, useState } from "react";

export function usePrettyPrintedState<T extends object>(
  label: string
): [JSX.Element, Dispatch<any>] {
  const [value, setValue] = useState<T>();
  const resultValue = useMemo(() => {
    return (
      <>
        {value && (
          <pre>
            {label ?? "Value"}:
            <br />
            {JSON.stringify(value, null, 2)}
          </pre>
        )}
      </>
    );
  }, [label, value]);
  return [resultValue, setValue];
}
