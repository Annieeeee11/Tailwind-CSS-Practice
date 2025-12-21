# Responsive Design Practice

## Tailwind Concepts Revised

- Styling goes from **left to right** which takes the styling of **mobile to desktop**

### Standard Tailwind Breakpoints

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🎨 Custom Theme

- We can define custom utilities in `globals.css` using the `@theme` block

```css
@theme {
  --shadow-acc: 
    0px 2px 3px -1px rgba(0, 0, 0, 0.1),
    0px 1px 0px 0px rgba(25, 28, 33, 0.02),
    0px 0px 0px 1px rgba(25, 28, 33, 0.08);
}
```

Usage: `shadow-acc` class

### Custom Breakpoints

You can add custom breakpoints in `globals.css`:

```css
@theme {
  --breakpoint-3xl: 2000px;
}
```

Usage: `3xl:flex-col` (applies at 2000px and above)

## 💡 Practical Example

```tsx
// Mobile-first: base styles apply to mobile, then override for larger screens
<div className="flex-col md:flex-row lg:gap-8">
  {/* 
    Mobile: flex-col (default)
    md (768px+): flex-row
    lg (1024px+): gap-8 added
  */}
</div>

// Hide/show based on screen size
<div className="hidden md:flex">
  {/* Hidden on mobile, visible from md breakpoint and up */}
</div>
```

## 📝 Notes

- Breakpoint styles override base styles only at their specified screen size and above
- Use Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`, `3xl:`) to apply styles conditionally
- If you apply styling for `lg` and there's no styling for smaller breakpoints, the base styles will remain the same

![Screenshot](./public/image.png)
![Screenshot](./public/image2.png)