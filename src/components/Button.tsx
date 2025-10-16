import { ReactNode } from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

// Universal button component, need children with content / element

export default function Button({ children, ...props }: Props) {
  return (
    <button
      {...props}
      className="bg-amber-300 rounded-s-sm m-2 p-2 hover:bg-amber-400 hover:shadow-2xl font-cinzel sparkle-btn  relative "
    >
      {children}
    </button>
  );
}
