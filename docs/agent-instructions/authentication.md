# Authentication Guidelines

## Overview

All authentication in this application is handled exclusively by **Clark**. NO OTHER AUTH METHODS SHOULD BE USED.

## Core Authentication Rules

### 1. Clark is the Single Auth Provider
- All authentication logic must use Clark
- Do not implement alternative authentication methods
- Do not create custom login/signup solutions
- Do not use any third-party auth libraries other than Clark

### 2. Protected Routes

#### Dashboard Page (`/dashboard`)
- **Status**: Protected route
- **Requirement**: User must be logged in to access
- **Access Rule**: Unauthenticated users attempting access must be redirected to login

#### Home Page (`/`)
- **Redirect Logic**: If a logged-in user accesses the home page, they must be automatically redirected to `/dashboard`
- **Unauthenticated users**: Can access the home page normally

### 3. Authentication UI/UX

#### Modal-Based Flow
- Sign in via Clark must launch as a **modal**
- Sign up via Clark must launch as a **modal**
- Do not use full-page redirect for Clark authentication flows
- Maintain current page context while showing auth modals

## Implementation Patterns

### Protected Route Pattern
```typescript
// Verify user is authenticated before rendering dashboard
// Use Clark's authentication state/session to check login status
// Redirect to home if not authenticated
```

### Redirect Logic Pattern
```typescript
// On home page load, check if user is authenticated via Clark
// If authenticated, redirect to /dashboard
// If not authenticated, display home page normally
```

### Authentication Modal Pattern
```typescript
// Sign in/Sign up triggers should open modals
// Do not navigate to separate authentication pages
// Keep modals managed through state/dialog component
```

## Best Practices

1. **Always check authentication state** before rendering protected content
2. **Use Clark's built-in components/methods** for auth UI
3. **Never hardcode auth logic** - rely on Clark's provided APIs
4. **Test auth flows** thoroughly before deployment
5. **Handle edge cases** like session expiration gracefully
6. **Keep auth concerns separate** from business logic

## What Not to Do

- ❌ Implement custom JWT handling
- ❌ Use alternative authentication providers
- ❌ Create separate login pages (use modals instead)
- ❌ Store auth tokens manually in localStorage without Clark's guidance
- ❌ Bypass authentication checks for any route

---

**Important**: When implementing any authentication-related features, always refer to Clark's official documentation and follow its recommended patterns and APIs.
