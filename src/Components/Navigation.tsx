import type { NavigationProps } from "../Types/Types";
import Logo from "./Logo";

export default function Navigation({ children }: NavigationProps) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}
