# CSS Practice: Arbitrary Values, Grids, Flexbox, and Dark Mode

## Dark Mode

### `prefers-color-scheme` Media Query
- Detects user's system color scheme preference (light/dark)
- Used with `window.matchMedia("(prefers-color-scheme: dark)")` in JavaScript
- Allows apps to automatically match system theme

### Tailwind Dark Mode Variant
- Use `dark:` prefix to apply styles only in dark mode
- Example: `dark:bg-neutral-950`, `dark:text-white`, `dark:border-neutral-800`
- Requires dark class on parent element (usually `<html>` or root)
- Can be configured to use `prefers-color-scheme` directly or class-based toggle

### Custom Dark Variant Setup
```css
@custom-variant dark (&:where(.dark, .dark *));
```
- Custom variant that applies to `.dark` class and all its children
- Allows nested dark mode styling

---

## Grid Layout

### Basic Grid
- `grid` - Creates a grid container
- Divides section into columns and rows
- Grid container takes all items inside as children and places them accordingly

### Grid Columns
- `grid-cols-{n}` - Defines how many equal columns the grid has
  - Example: `grid-cols-3` creates 3 equal columns
- `grid-cols-1 lg:grid-cols-2` - Responsive: 1 column on mobile, 2 on large screens

### Column Spanning
- `col-span-{n}` - How many columns a child element spans
  - Example: `col-span-1` spans 1 column, `col-span-2` spans 2 columns
  - `lg:col-span-2` - Spans 2 columns on large screens only
- Total span should not exceed total columns (unless using auto-fit/auto-fill)

### Grid Dividers
- `divide-x` - Vertical dividers between columns
- `divide-y` - Horizontal dividers between rows
- `divide-neutral-200` - Color of the dividers

### Grid Gaps
- `gap-{size}` - Space between grid items
  - Example: `gap-4`, `gap-10`

---

## Flexbox

### Flex Container
- `flex` - Creates a flex container
- Children become flex items arranged in a row by default

### Flex Direction
- `flex-col` - Stack items vertically (column direction)
- Default is `flex-row` (horizontal)

### Alignment
- `items-center` - Align items vertically (cross-axis) to center
- `items-start` - Align items to start
- `justify-center` - Align items horizontally (main-axis) to center
- `justify-start` - Align to start
- `justify-end` - Align to end
- `justify-between` - Space items with space between

### Spacing
- `gap-{size}` - Space between flex items
  - Example: `gap-2`, `gap-4`

### Auto Margins
- `ml-auto` - Margin left auto (pushes item to right)
- `mr-auto` - Margin right auto (pushes item to left)
- Useful for aligning items to opposite ends

### Flex Properties
- `shrink-0` - Prevents item from shrinking
- `w-fit` - Width fits content

---

## Arbitrary Values

### Syntax
- Anything between `[]` is an arbitrary value
- Allows custom CSS values not in Tailwind's default scale
- Format: `[property:value]` or `[value]` (for shorthand properties)

### Examples
- `[background-color:green]` - Custom background color
- `bg-[radial-gradient(...)]` - Custom gradient
- `bg-[size:10px_10px]` - Custom background size
- `w-[calc(100%-4rem)]` - Calculated width
- `text-[#ff0000]` - Custom hex color

### Use Cases
- Custom colors not in Tailwind palette
- Complex CSS functions (calc, gradients, etc.)
- One-off values not worth adding to config

---

## Placeholder Styling

### Input Placeholders
- `placeholder-{color}` - Placeholder text color
  - Example: `placeholder-neutral-600`

---

![Screenshot](public/image.png)