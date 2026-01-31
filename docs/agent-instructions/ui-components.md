# UI Components Guidelines

## Overview

All UI elements in this application use **Shadcn UI**. Do not create any custom components. Always use Shadcn UI components.

## Core Rules

### 1. Use Shadcn UI Components Only
- All buttons, inputs, dialogs, cards, and other UI elements must come from Shadcn UI
- Do not build custom component wrappers unless absolutely necessary for business logic
- Leverage Shadcn UI's pre-built, accessible components

### 2. No Custom Components for UI
- ❌ Do not create custom button components
- ❌ Do not create custom input/form components
- ❌ Do not create custom dialog/modal components
- ✅ Use Shadcn UI's existing components directly or compose them

### 3. Component Composition
- Use Shadcn UI components as building blocks
- Compose multiple Shadcn components to create layouts
- Keep component logic separate from UI presentation
- Use React composition patterns with Shadcn UI

## Common Shadcn UI Components

For this project, commonly used components include:
- `Button`
- `Input`
- `Dialog` / `Modal`
- `Card`
- `Form`
- `Label`
- `Alert`
- `Toast`
- And other Shadcn UI components as needed

## Implementation Pattern

```typescript
// ✅ Correct: Use Shadcn UI directly
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export function MyComponent() {
  return (
    <Dialog>
      <DialogContent>
        <Button>Click me</Button>
      </DialogContent>
    </Dialog>
  )
}

// ❌ Incorrect: Creating custom components
export function CustomButton() {
  return <button className="custom-btn">Click me</button>
}
```

## Styling with Shadcn UI

- Use Shadcn UI's built-in theming (Tailwind CSS)
- Apply Tailwind classes to customize Shadcn components
- Follow Shadcn UI's design system and component APIs
- Do not override component styles with custom CSS unless necessary

## When to Create Wrapper Components

Create a wrapper component ONLY when:
- You need to encapsulate business logic alongside UI
- Multiple Shadcn components form a reusable feature block
- You're creating a domain-specific component (e.g., `LinkCard`, `UserProfile`)

Example:
```typescript
// ✅ Acceptable: Business logic wrapper using Shadcn UI
export function LinkCard({ link }: { link: Link }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{link.title}</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Shadcn UI components inside */}
      </CardContent>
    </Card>
  )
}
```

## Best Practices

1. **Check Shadcn UI docs** before building anything custom
2. **Use semantic HTML** - Shadcn components handle this automatically
3. **Maintain accessibility** - Shadcn components are built with a11y in mind
4. **Keep components focused** - One responsibility per component
5. **Reuse Shadcn components** - Don't duplicate component logic

---

**Reference**: [Shadcn UI Documentation](https://ui.shadcn.com)
