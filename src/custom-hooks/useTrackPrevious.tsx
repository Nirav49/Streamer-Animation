import { useEffect, useRef } from "react";

type Props = {
  children: JSX.Element;
};

const useTrackPrevious = (value: Props) => {
  const prevChildrenRef = useRef<{} | null>(null);

  useEffect(() => {
    prevChildrenRef.current = value;
  }, [value]);

  return prevChildrenRef.current;
};

export default useTrackPrevious;
