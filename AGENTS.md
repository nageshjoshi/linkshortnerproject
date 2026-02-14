# LLM Agent Instructions

This document serves as the central reference for LLM agents working on this Link Shortener project. Detailed guidelines are organized in separate documentation files located in the `/docs` directory.

## Quick Reference

- **Project Type**: Next.js 14+ TypeScript Application
- **Primary Language**: TypeScript
- **Package Manager**: npm/yarn
- **Database**: Drizzle ORM with PostgreSQL
- **Styling**: Tailwind CSS
- **Linting**: ESLint + Prettier

## Core Instructions

⚠️ **CRITICAL**: Before generating ANY code, you MUST read the relevant individual instruction files in the `/docs/agent-instructions/` directory. This is non-negotiable and essential for maintaining project standards and consistency.

### 1. Code Quality & Standards
Refer to [Code Standards](./docs/agent-instructions/code-standards.md) for detailed guidelines on:
- TypeScript best practices
- Code formatting and style
- Documentation requirements
- Testing standards

### 2. Project Structure
Refer to [Project Structure](./docs/agent-instructions/project-structure.md) for:
- Directory organization
- File naming conventions
- Module organization

### 3. Development Workflow
Refer to [Development Workflow](./docs/agent-instructions/development-workflow.md) for:
- Git branching strategy
- Commit conventions
- Pull request guidelines
- Development environment setup

### 4. Component Development
Refer to [Component Development](./docs/agent-instructions/component-development.md) for:
- React component best practices
- State management
- Props patterns
- Composition guidelines

### 5. UI Components
Refer to [UI Components](./docs/agent-instructions/ui-components.md) for:
- Shadcn UI component usage
- Component composition patterns
- Styling guidelines
- Custom component restrictions

### 6. Database & API
Refer to [Database & API](./docs/agent-instructions/database-api.md) for:
- Schema conventions
- API endpoint guidelines
- Data validation
- Error handling

### 7. Performance & Security
Refer to [Performance & Security](./docs/agent-instructions/performance-security.md) for:
- Performance optimization
- Security best practices
- Environmental variables

### 8. Authentication
Refer to [Authentication](./docs/agent-instructions/authentication.md) for:
- Clark authentication provider
- Protected routes
- Login/signup UI patterns
- Authentication workflows

## Before You Start

⚠️ **MUST DO FIRST**: Read the relevant instruction files in `/docs/agent-instructions/` based on the task at hand.

1. **MANDATORY**: Identify and read the relevant documentation file(s) from `/docs/agent-instructions/` for your specific task
2. Read this AGENTS.md file and understand the project structure
3. Ensure your development environment is properly configured
4. Check existing code in the project for patterns and conventions
5. Run tests before making any changes

## When in Doubt

- **First**: Review the relevant documentation file in `/docs/agent-instructions/`
- Check existing code in the same directory for patterns
- Prioritize type safety and clarity
- Write tests for new functionality
- Reach out through project management tools for clarification

---

**Last Updated**: January 31, 2026
