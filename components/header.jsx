import { ModeToggle } from "./theme-toggle";

export default function Header() {
  return (
    <div className="flex justify-between items-center gap-4">
      <h1 className="border w-full p-3 rounded-md font-semibold text-xl">
        Bento Layout
      </h1>
      <ModeToggle />
    </div>
  );
}
