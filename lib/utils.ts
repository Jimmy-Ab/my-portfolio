import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Calculates years of professional experience starting from August 2019.
 * Returns the floor of the elapsed years (e.g. 7).
 */
export function getExperienceYears(): number {
  const startDate = new Date(2019, 7, 1); // August 2019
  const now = new Date();
  const diffInMilliseconds = now.getTime() - startDate.getTime();
  const diffInYears = diffInMilliseconds / (1000 * 60 * 60 * 24 * 365.2425);
  return Math.max(5, Math.floor(diffInYears));
}
