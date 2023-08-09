import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";
import ImageItem from "./image-item";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "transparent";
  children: ReactNode;
}

const Button = ({ children, variant = "primary", ...props }: ButtonProps) => {
  const buttonClass = clsx(
    'uppercase px-6 py-4 flex text-sm font-normal items-center gap-3',
    variant === "primary" && "bg-primary text-background flex-row-reverse",
    variant === "secondary" && "bg-secondary text-white",
    variant === "transparent" && "bg-transparent text-white"
  );

  const icon = variant === 'primary' ? '/play-icon.svg' : '/arrow-icon.svg'
      
  return (
    <button
      className={buttonClass}
      {...props}
    >
      {children}
      <ImageItem src={icon} alt="icon button" variant="auto" />
    </button>
  );
};

export default Button;
