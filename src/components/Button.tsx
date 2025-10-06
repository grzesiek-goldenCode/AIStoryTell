import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Button({ children }: Props) {
  return (
    <button className="bg-amber-300 rounded-s-sm m-2 p-2 hover:bg-amber-400 hover:shadow-2xl font-cinzel ">
      {children}
    </button>
  );
}
