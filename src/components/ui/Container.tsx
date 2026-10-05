import clsx from "clsx";

export default function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={clsx("mx-auto w-full max-w-[1400px] px-5 md:px-10", className)}>{children}</div>;
}
