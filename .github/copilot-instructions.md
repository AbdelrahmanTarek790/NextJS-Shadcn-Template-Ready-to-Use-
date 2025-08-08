# NextJS Shadcn Template - Coding Instructions

**ALWAYS follow these instructions first and fallback to additional search and context gathering only when the information in these instructions is incomplete or found to be in error.**

## Project Overview

NextJS Shadcn Template is a production-ready web application starter built with Next.js 15, Tailwind CSS, shadcn/ui components, TypeScript, and comprehensive authentication, error handling, and testing infrastructure.

## Core Stack
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v3 with shadcn/ui components
- **Language**: TypeScript with strict type checking
- **Authentication**: Context-based auth with protected routes
- **HTTP Client**: Axios with SWR for data fetching
- **Testing**: Jest + React Testing Library
- **Error Handling**: Error boundaries with toast notifications
- **Linting**: ESLint with Next.js configuration

## Development Commands

### Build and Run
```bash
# Install dependencies
npm install

# Start development server - NEVER CANCEL, ready in ~1 second
npm run dev
# Timeout: Set to 30+ seconds for initial startup

# Build for production - NEVER CANCEL, takes ~1-2 seconds  
npm run build
# Timeout: Set to 60+ seconds to be safe

# Start production server
npm run start

# Run tests - NEVER CANCEL, takes ~1-2 seconds
npm test
# Timeout: Set to 30+ seconds

# Watch mode for tests
npm run test:watch

# Lint code - takes ~5 seconds
npm run lint
```

### CRITICAL TIMING EXPECTATIONS
- **Build Time**: 1-2 seconds - NEVER CANCEL, set 60+ second timeout
- **Dev Server Startup**: ~1 second - NEVER CANCEL, set 30+ second timeout  
- **Test Suite**: 1-2 seconds - NEVER CANCEL, set 30+ second timeout
- **Linting**: ~5 seconds - set 30+ second timeout

## Validation Scenarios

### MANDATORY: Complete Login Flow Testing
After any authentication-related changes, ALWAYS test this complete scenario:
1. Start dev server: `npm run dev`
2. Open http://localhost:3000
3. Verify login form appears with demo credentials shown
4. Enter: email `demo@example.com`, password `demo`
5. Click Login button
6. Verify successful login toast appears
7. Verify main dashboard shows with user name "Demo User"
8. Click Logout button
9. Verify logout toast appears and returns to login form

### MANDATORY: Component Functionality Testing
After UI component changes, ALWAYS test:
1. All button variants render correctly (Primary, Secondary, Outline, Ghost)
2. Card components display with proper spacing and shadows
3. Forms accept input and show validation states
4. Toast notifications appear for success/error states

### MANDATORY: Build Validation
ALWAYS run these steps before committing:
1. `npm run build` - must complete successfully in 1-2 seconds
2. `npm run lint` - must pass with no errors
3. `npm test` - all tests must pass in 1-2 seconds

## Project Structure

### Key Directories
```
src/
├── app/                 # Next.js App Router pages
├── components/          # Reusable React components
│   ├── ui/             # shadcn/ui components (Button, Card, Input, etc.)
│   └── auth/           # Authentication components
├── contexts/           # React context providers (auth)
├── hooks/              # Custom React hooks (API calls)
└── lib/                # Utilities and configurations
```

### Authentication System
- **Context**: `src/contexts/auth-context.tsx` - Central auth state management
- **Components**: `src/components/auth/` - Login form and protected routes
- **Demo Credentials**: email: `demo@example.com`, password: `demo`
- **Local Storage**: Auth token stored as `auth-token`

### API Integration
- **HTTP Client**: `src/lib/api.ts` - Axios instance with interceptors
- **Custom Hooks**: `src/hooks/use-api.ts` - SWR-based data fetching hooks
- **Endpoints**: Uses `/api` prefix by default (configurable via NEXT_PUBLIC_API_URL)

### Component System
- **Base Components**: `src/components/ui/` - shadcn/ui components
- **Variants**: Button (default, secondary, outline, ghost), Card, Input, Label
- **Styling**: Tailwind CSS with custom design tokens
- **Theme**: Light/dark mode support with CSS variables

## Common Development Tasks

### Adding New Components
1. Create component in `src/components/ui/` if reusable
2. Follow shadcn/ui patterns with forwardRef and displayName
3. Use `cn()` utility from `src/lib/utils.ts` for className merging
4. Add TypeScript interfaces for props
5. Write tests in `__tests__/` directory

### API Integration
1. Use `useApi<Type>()` hook for GET requests
2. Use `useApiPost()`, `useApiPut()`, `useApiDelete()` for mutations
3. Handle errors with try/catch and toast notifications
4. Add loading states with `isLoading` from hooks

### Authentication Changes
1. Modify `src/contexts/auth-context.tsx` for auth logic
2. Update `src/components/auth/protected-route.tsx` for route protection
3. ALWAYS test complete login/logout flow as described above

### Styling Changes
1. Use Tailwind utility classes
2. Reference design tokens in `src/app/globals.css`
3. Test both light and dark themes
4. Verify responsive breakpoints (sm, md, lg, xl)

## Error Handling
- **Boundaries**: Global error boundary in layout catches component errors
- **Notifications**: react-hot-toast for user feedback
- **API Errors**: Automatic handling in Axios interceptors
- **Development**: Error details shown in dev mode only

## Testing Strategy
- **Unit Tests**: Components and utilities
- **Integration Tests**: Authentication flow and API hooks
- **Coverage**: Focus on critical paths (auth, API, core components)
- **Mocking**: localStorage, react-hot-toast, and external APIs

## Environment Variables
```bash
# Optional - API base URL (defaults to /api)
NEXT_PUBLIC_API_URL=https://your-api.com

# Next.js built-in
NODE_ENV=development|production
```

## Troubleshooting

### Common Issues
1. **Build fails**: Check TypeScript errors with `npm run lint`
2. **Tests fail**: Verify mocks are properly set up
3. **Auth not working**: Check localStorage and demo credentials
4. **Styles not applying**: Verify Tailwind config and CSS imports

### Network Issues
- **Google Fonts blocked**: Template uses system fonts as fallback
- **shadcn/ui install fails**: Components are manually included
- **API calls fail**: Check Axios configuration and CORS settings

## Performance Notes
- **Bundle Size**: Optimized with tree shaking and code splitting
- **Images**: Use Next.js Image component for optimization
- **Fonts**: System fonts used to avoid external dependencies
- **Caching**: SWR provides client-side caching for API calls

## Deployment
Template is ready for deployment on:
- Vercel (recommended)
- Netlify
- Any Node.js hosting platform

ALWAYS run `npm run build && npm run lint && npm test` before deployment.