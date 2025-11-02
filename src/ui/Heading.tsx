import { useTab } from "../contexts/useTab";

export default function Heading() {
  const { color, heading } = useTab();

  return (
    <h1 className="text-4xl mr-auto" style={{ color: color }}>
      {heading}
    </h1>
  );
}
