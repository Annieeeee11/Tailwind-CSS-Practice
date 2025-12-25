# CSS Practice: SVG Concepts and Motion Animations

## SVG Basics

### SVG Element
- `<svg>` - Root SVG element
- `width` and `height` - Dimensions of SVG
- `viewBox` - Defines coordinate system and aspect ratio
  - Example: `viewBox="0 0 24 24"` - 24x24 coordinate system
- `xmlns` - XML namespace declaration
  - Example: `xmlns="http://www.w3.org/2000/svg"`

### Fill Property
- `fill` - Color that fills the shape
- `fill="currentColor"` - Uses current text color (inherits from parent)
  - Allows SVG to match text color via Tailwind classes
  - Example: `className="text-neutral-500"` with `fill="currentColor"`
- `fill="none"` - No fill (transparent)

### Stroke Property
- `stroke` - Color of the outline/border
- `stroke="var(--color-neutral-200)"` - Uses CSS variable
- `strokeLinecap="round"` - Rounded line endings
- Can be styled with Tailwind: `className="stroke-red-500"`

### Path Element
- `<path>` - Defines complex shapes using path data
- `d` attribute - Path data string defining the shape
- Most flexible SVG element for custom shapes

---

## Stroke Dasharray

### stroke-dasharray
- `stroke-dasharray` - Creates dashed/dotted stroke pattern
- Format: `stroke-dasharray="dash-length gap-length"`
  - Example: `stroke-dasharray="5 5"` - 5px dash, 5px gap
  - Example: `stroke-dasharray="10 5 2 5"` - Multiple dash/gap pairs
- Used for animated line drawing effects
- Combined with `stroke-dashoffset` for animation

### Animated Line Drawing
```tsx
// CSS animation approach
<path 
  stroke-dasharray="100" 
  stroke-dashoffset="100"
  className="animate-[draw_2s_ease-in-out_forwards]"
/>
```

---

## Tailwind Classes on SVG

### Styling SVG with Tailwind
- Apply Tailwind classes directly to SVG elements
- `className="text-neutral-500"` - Works with `fill="currentColor"`
- `className="stroke-red-500"` - Direct stroke color
- `className="size-2"` - Size utilities work on SVG
- All standard Tailwind utilities can be applied

### Example
```tsx
<svg 
  fill="currentColor" 
  className="text-neutral-500 size-2"
>
  <path d="..." />
</svg>
```

---

## Motion (Framer Motion)

### Motion SVG
- `motion.svg` - Animated SVG wrapper from `motion/react`
- Enables animations on SVG elements
- Import: `import { motion } from "motion/react"`

### Motion Path
- `motion.path` - Animated path element
- Supports variants and transitions
- Can animate position, rotation, scale, etc.

### Motion Variants
- `variants` prop - Defines animation states
- `animate` state - Active animation
- Example:
```tsx
<motion.path
  variants={{
    animate: {
      x: [0, -5, 5, 0],  // Keyframe array
      rotate: [0, 10, -10, 0]
    }
  }}
  transition={{
    duration: 1,
    ease: "easeInOut"
  }}
/>
```

### Motion Linear Gradient
- `motion.linearGradient` - Animated gradient
- Can animate gradient position for moving effects
- Example:
```tsx
<motion.linearGradient
  id="gradient"
  initial={{ x1: "0%", x2: "10%" }}
  animate={{ x1: "90%", x2: "100%" }}
  transition={{
    duration: 2,
    repeat: Infinity,
    repeatType: "loop",
    ease: "linear"
  }}
>
  <stop stopColor="var(--color-neutral-200)" />
  <stop offset="0.33" stopColor="#F17463" />
  <stop offset="1" stopColor="var(--color-neutral-200)" />
</motion.linearGradient>
```

### Motion Triggers
- `whileHover="animate"` - Triggers animation on hover
- Applied to parent container
- Child elements with matching variant name animate

---

## SVG Gradients

### Linear Gradient
- `<linearGradient>` - Creates linear color gradient
- `id` - Unique identifier for referencing
- `gradientUnits="userSpaceOnUse"` - Uses SVG coordinate system
- `<stop>` - Defines color stops
  - `offset` - Position along gradient (0-1 or percentage)
  - `stopColor` - Color at that position

### Using Gradients
- Reference via `stroke="url(#gradient-id)"` or `fill="url(#gradient-id)"`
- Can be animated with Motion for moving gradient effects

---

## Common Patterns

### SVG with CurrentColor
```tsx
<svg fill="currentColor" className="text-neutral-500">
  <path d="..." />
</svg>
```

### Animated SVG Icon
```tsx
<motion.div whileHover="animate">
  <motion.svg fill="currentColor">
    <motion.path
      variants={{
        animate: { x: [0, -5, 5, 0] }
      }}
      transition={{ duration: 1 }}
    />
  </motion.svg>
</motion.div>
```

### Animated Gradient Line
```tsx
<svg>
  <line stroke="url(#gradient-id)" />
  <defs>
    <motion.linearGradient
      id="gradient-id"
      animate={{ x1: "0%", x2: "100%" }}
      transition={{ repeat: Infinity }}
    >
      <stop stopColor="transparent" />
      <stop offset="0.5" stopColor="#F17463" />
      <stop offset="1" stopColor="transparent" />
    </motion.linearGradient>
  </defs>
</svg>
```

### Stroke Animation Pattern
```tsx
// Using stroke-dasharray for drawing effect
<path
  stroke-dasharray="100"
  stroke-dashoffset="100"
  className="animate-[draw_2s_forwards]"
/>
```

---

<video controls>
  <source src="/videoo.mov" type="video/quicktime">
</video>
