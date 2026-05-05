import type { NavigationProps } from "../Types/Types";

export default function Navigation({ children }: NavigationProps) {
  return <nav className="nav-bar">{children}</nav>;
}
