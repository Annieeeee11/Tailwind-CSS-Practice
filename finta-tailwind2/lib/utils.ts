/* clsx is a class name builder 
=> Accepts strings, objects, arrays conditions
=> It only joins class names
Eg => clsx("btn", isActive && "btn-active")

twMerge understands Tailwind classes
=> Detects conflicting Tailwind utilities
=> Keeps only the last valid class
=> Removes redundant classes
Eg => twMerge("bg-red-500 bg-blue-500") => "bg-blue-500"

clsx builds, twMerge cleans
*/

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}