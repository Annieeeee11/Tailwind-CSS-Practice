# CSS Practice: Transforms, Transitions, Groups, and Object Positioning

## Transform Properties

### Basic Transform
- `transform` - Enables CSS transforms on an element
- Required for 3D transforms and perspective effects
- Works with rotation, translation, and scale utilities

### 3D Rotations
- `rotate-x-{n}` - Rotates element around X-axis (horizontal)
  - Example: `rotate-x-10` rotates 10 degrees around X-axis
- `rotate-y-{n}` - Rotates element around Y-axis (vertical)
  - Example: `-rotate-y-20` rotates -20 degrees (negative direction)
- `rotate-z-{n}` - Rotates element around Z-axis (depth)
  - Example: `rotate-z-20` rotates 20 degrees around Z-axis

### 3D Translation
- `translate-z-{n}` - Moves element along Z-axis (toward/away from viewer)
  - Example: `translate-z-0` resets Z translation
  - Example: `translate-z-30` moves element 30 units forward in 3D space
- Creates depth effect when combined with perspective

### Perspective and 3D
- `perspective-distant` - Sets perspective distance for 3D transforms
- `transform-3d` - Enables 3D transform rendering
- Required for 3D rotation and translation effects to work properly

---

## Object Positioning

### Object Position
- `object-{position}` - Controls how image/video content is positioned within its container
  - Example: `object-top-left` - Positions content at top-left corner
  - Other options: `object-center`, `object-top`, `object-bottom`, etc.
- Works with `object-fit` to control how media fills its container

---

## Transitions

### Transition Properties
- `transition-all` - Applies transition to all animatable properties
- `duration-{n}` - Sets transition duration in milliseconds
  - Example: `duration-300` = 300ms transition
  - Common values: `duration-200`, `duration-300`, `duration-500`

### Easing Functions
- `ease-in-out` - Standard easing: slow start, fast middle, slow end
- `ease-[cubic-bezier(...)]` - Custom cubic-bezier easing function
  - Example: `ease-[cubic-bezier(0.25,0.1,0.25,1.0)]`
  - Allows precise control over animation timing curve
- Other built-in options: `ease-in`, `ease-out`, `ease-linear`

---

## Group Utilities

### Group Modifier
- `group` - Marks an element as a group container
- Allows child elements to respond to parent hover state
- Must be applied to parent element

### Group Hover
- `group-hover:{utility}` - Applies style when parent group is hovered
  - Example: `group-hover:scale-85` - Scales element when group is hovered
  - Example: `group-hover:rotate-x-0` - Resets rotation on group hover
- Works on any child element within the group

### Named Groups
- `group-{name}` - Creates a named group
  - Example: `group-anaya` - Creates a group named "anaya"
- `group-hover/{name}:{utility}` - Targets specific named group
  - Example: `group-hover/anaya:scale-110` - Only applies when "anaya" group is hovered
- Useful when multiple groups exist in the same component

---

## Common Patterns

### 3D Card Effect
```tsx
// Parent with perspective
<div className="perspective-distant transform-3d group">
  <img className="transform rotate-x-10 rotate-z-10 -rotate-y-10 translate-z-20 
                  group-hover:rotate-x-0 group-hover:rotate-z-0 group-hover:rotate-y-0 
                  transition-transform duration-300 ease-in-out" />
</div>
```

### Smooth Transitions
```tsx
<div className="transition-all duration-300 ease-in-out 
                group-hover:bg-neutral-200">
</div>
```

---

![Screenshot](public/image.png)
![Screenshot](public/image2.png)
![Screenshot](public/image3.png)