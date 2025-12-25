# CSS Practice: Pseudo-classes, Pseudo-elements, and State Modifiers

## Pseudo-classes
- ![DOC](https://tailwindcss.com/docs/hover-focus-and-other-states)

### Interactive States
- `hover:{utility}` - Applies style when element is hovered
  - Example: `hover:bg-neutral-700` - Changes background on hover
  - Example: `hover:-translate-y-0.5` - Moves element up slightly on hover
- `focus:{utility}` - Applies style when element receives focus
  - Example: `focus:outline-none` - Removes default outline
  - Example: `focus:ring-2 focus:ring-gray-300` - Adds focus ring
  - Example: `focus:bg-gray-100` - Changes background when focused
- `active:{utility}` - Applies style when element is actively being clicked/pressed
  - Example: `active:scale-98` - Slightly scales down when clicked
  - Useful for button press feedback

### Form States
- `invalid:{utility}` - Applies style when form input is invalid
  - Example: `invalid:border-red-500` - Red border for invalid inputs
  - Example: `invalid:shadow-none` - Removes shadow on invalid state
- `disabled:{utility}` - Applies style when element is disabled
  - Example: `disabled:opacity-50` - Reduces opacity when disabled
  - Example: `disabled:cursor-not-allowed` - Changes cursor to not-allowed

---

## Pseudo-elements

### ::after Pseudo-element
- `after:{utility}` - Styles the ::after pseudo-element
- `after:content-[""]` - Required to make ::after visible (empty content)
- `after:content-['*']` - Adds asterisk content (e.g., for required fields)
- `after:absolute` - Positions ::after absolutely
- `after:inset-0` - Makes ::after cover entire parent
- `after:-skew-2` - Applies skew transform to ::after
- `after:transition-all` - Animates ::after changes
- `after:duration-200` - Transition duration for ::after

### ::before Pseudo-element
- `before:{utility}` - Styles the ::before pseudo-element
- Similar syntax to `after:` but creates element before content
- `before:content-[""]` - Required to make ::before visible

### ::placeholder Pseudo-element
- `placeholder:{utility}` - Styles input placeholder text
  - Example: `placeholder:text-neutral-300` - Placeholder text color
  - Only works on input/textarea elements

### ::selection Pseudo-element
- `selection:{utility}` - Styles selected text
  - Example: `selection:bg-blue-500 selection:text-white`
  - Applies when user selects/highlights text

---

## Transform: Skew

### Skew Transform
- `skew-{n}` - Skews element along X-axis
  - Example: `skew-2` - Skews 2 degrees
  - Example: `-skew-2` - Skews -2 degrees (opposite direction)
- `skew-x-{n}` - Explicitly skews along X-axis
- `skew-y-{n}` - Skews along Y-axis
- Creates slanted/distorted effect
- Often used with pseudo-elements for decorative effects

---

## Backdrop Utilities

### Backdrop Blur
- `backdrop-blur-{size}` - Applies blur effect to backdrop behind element
  - Example: `backdrop-blur-[0.5px]` - Custom blur amount
  - Example: `backdrop-blur-sm`, `backdrop-blur-md`, `backdrop-blur-lg`
- Creates frosted glass effect
- Element must be semi-transparent for effect to be visible

### Other Backdrop Utilities
- `backdrop-brightness-{value}` - Adjusts backdrop brightness
- `backdrop-contrast-{value}` - Adjusts backdrop contrast
- `backdrop-saturate-{value}` - Adjusts backdrop saturation

---

## Has Selector

### Has Pseudo-class
- `has-{selector}:{utility}` - Applies style when element contains matching child
  - Example: `has-invalid:bg-red-50` - Parent gets red background if it contains invalid input
  - Example: `has-[input:invalid]:bg-red-50` - More specific selector
- Useful for styling parent based on child state
- Modern CSS feature, well-supported in Tailwind

---

![Screenshot](public/image.png)