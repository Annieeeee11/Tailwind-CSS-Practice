# CSS Practice: @apply Directive, Custom Classes, and JavaScript in JSX

## @apply Directive

### What is @apply?

- `@apply` - Tailwind directive that allows you to apply utility classes inside CSS
- Used in CSS files (like `globals.css`) to create custom component classes
- Combines multiple Tailwind utilities into reusable classes

### Syntax

```css
.custom-class {
  @apply utility1 utility2 utility3;
}
```

---

### Overlay Pattern

```css
.overlay {
  @apply after:content-[''] after:absolute after:bg-black 
        after:opacity-0 after:w-full after:h-full after:inset-0 
        hover:after:opacity-90 after:transition-all after:duration-200;
}
```

---

## JavaScript Expressions in JSX

### Template Expressions

- Use `{}` to embed JavaScript expressions in JSX
- Can perform string operations, calculations, conditionals
- Evaluated at render time

### String Manipulation

- `{href?.split("https://")[1]}` - Extracts domain from URL
  - `split("https://")` - Splits string at "https://"
  - `[1]` - Gets second part (after "https://")
  - `?.` - Optional chaining (safe if href is undefined)
- Example: `"https://tailwindcss.com"` → `"tailwindcss.com"`

### Common Patterns

```tsx
{
  /* Conditional rendering */
}
{
  isVisible && <div>Content</div>;
}

{
  /* String operations */
}
{
  name?.toUpperCase();
}
{
  url?.split("/").pop();
}

{
  /* Calculations */
}
{
  items.length > 0 && <p>{items.length} items</p>;
}
```

---

![Screenshot](public/image.png)
