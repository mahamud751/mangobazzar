import { clsx } from "clsx";

export function cn(...inputs) {
  return clsx(inputs);
}

export const cleanName = (name) => {
  if (!name) {
    return "";
  }

  return name.trim().replace(/\s+/g, " ").replace(/\s/g, "-");
};
