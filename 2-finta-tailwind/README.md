# Finta clone using Tailwind

# Concepts

## Spacing Utilities

### Padding
- `p-{size}` - All sides
- `px-{size}` - Horizontal (left/right)
- `py-{size}` - Vertical (top/bottom)
- `pt-{size}`, `pb-{size}`, `pl-{size}`, `pr-{size}` - Individual sides

### Margin
- `m-{size}` - All sides
- `mx-auto` - Horizontal auto (centering)
- `my-{size}` - Vertical margin

---

## Borders & Rounded Corners

### Borders
- `border` - All sides
- `border-x` - Left and right only
- `border-y` - Top and bottom only
- `border-{color}` - Border color (e.g., `border-neutral-200`)

### Border Radius
- `rounded` - All corners
- `rounded-{size}` - Specific radius (e.g., `rounded-md`, `rounded-lg`)
- `rounded-full` - Perfect circle/pill shape
- `rounded-tr-{size}` - Top-right only
- `rounded-tl-{size}` - Top-left only
- `rounded-br-{size}` - Bottom-right only
- `rounded-bl-{size}` - Bottom-left only

---

## Size Utilities

### Width & Height
- `w-full` - Full width (100%)
- `w-fit` - Fit content width
- `h-full` - Full height (100%)
- `h-screen` - Full viewport height
- `min-h-screen` - Minimum full viewport height
- `max-w-{size}` - Maximum width (e.g., `max-w-7xl`)

### Size Shorthand
- `size-{n}` - Sets both width and height to same value
  - Example: `size-6` = `w-6 h-6`
- `size-8` = 2rem (32px)

---

## Transitions & Animations

### Transitions
- `transition-all` - Transition all properties
- `transition-{property}` - Transition specific property
- `duration-{time}` - Transition duration (e.g., `duration-300` = 300ms)

### Transforms
- `scale-{value}` - Scale transform (e.g., `scale-100`, `scale-0`)
- `rotate-{degrees}` - Rotation (e.g., `rotate-45`)

### Combining with Dark Mode
- `dark:scale-0 scale-100` - Scale 100% in light, 0% in dark
- `dark:rotate-45` - Rotate 45deg in dark mode

---

## Backgrounds & Gradients

### Background Colors
- `bg-{color}` - Background color
- `bg-white`, `bg-gray-100`, `bg-neutral-200`, etc.

### Gradients
- `bg-gradient-r` - Gradient from left to right
- `from-{color} to-{color}` - Gradient colors
  - Example: `bg-gradient-r from-blue-500 to-purple-500`

### Background Patterns
- `bg-[radial-gradient(...)]` - Custom radial gradient pattern
- `bg-[size:10px_10px]` - Background pattern size

---

## Text Utilities

### Text Size
- `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, etc.

### Text Color
- `text-{color}` - Text color
- `text-white`, `text-black`, `text-neutral-400`, etc.

### Text Alignment
- `text-center`, `text-left`, `text-right`

### Font Weight
- `font-medium`, `font-bold`, etc.

### Letter Spacing
- `tracking-tight` - Tighter letter spacing

---

## Custom Masks

### Mask Utilities
- `mask-radial-from-{percentage}` - Radial mask from specific percentage
  - Example: `mask-radial-from-40%` - Radial mask starting at 40%

---

## Z-Index

### Stacking Order
- `z-{value}` - Z-index value
  - Example: `z-20` - Higher stacking order

---

## Overflow

### Overflow Control
- `overflow-hidden` - Hide overflow content
- `overflow-auto` - Show scrollbars when needed
- `overflow-visible` - Show overflow (default)

---

## Positioning

### Position Types
- `relative` - Relative positioning
- `absolute` - Absolute positioning (relative to nearest positioned ancestor)
- `fixed` - Fixed to viewport
- `sticky` - Sticky positioning

### Inset Utilities
- `inset-0` - `top: 0; right: 0; bottom: 0; left: 0;`
- `inset-x-0` - Left and right 0
- `inset-y-0` - Top and bottom 0
- `top-{size}`, `right-{size}`, `bottom-{size}`, `left-{size}` - Individual positioning

---

![Screenshot](public/image.png)