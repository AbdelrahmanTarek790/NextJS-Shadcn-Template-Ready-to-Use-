# NextJS Shadcn Template - Ready to Use

A production-ready Next.js template with shadcn/ui, Tailwind CSS, TypeScript, authentication, and comprehensive testing setup.

## ✨ Features

- 🚀 **Next.js 15** with App Router and TypeScript
- 🎨 **Tailwind CSS** with shadcn/ui components
- 🔐 **Authentication** with context and protected routes
- 🌐 **API Integration** with Axios and SWR
- 🧪 **Testing** with Jest and React Testing Library
- ⚡ **Error Boundaries** with toast notifications
- 📱 **Responsive Design** with dark mode support
- 🔧 **ESLint** configuration for code quality

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/AbdelrahmanTarek790/NextJS-Shadcn-Template-Ready-to-Use-.git

# Navigate to project directory
cd NextJS-Shadcn-Template-Ready-to-Use-

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 🧪 Demo Credentials

```
Email: demo@example.com
Password: demo
```

## 📋 Available Scripts

| Command | Description | Expected Time |
|---------|-------------|---------------|
| `npm run dev` | Start development server | ~1 second |
| `npm run build` | Build for production | ~1-2 seconds |
| `npm start` | Start production server | Instant |
| `npm run lint` | Run ESLint | ~5 seconds |
| `npm test` | Run test suite | ~1-2 seconds |
| `npm run test:watch` | Run tests in watch mode | ~1-2 seconds |

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles with Tailwind
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx           # Home page with authentication
├── components/
│   ├── ui/                # shadcn/ui components
│   │   ├── button.tsx     # Button component with variants
│   │   ├── card.tsx       # Card components
│   │   ├── input.tsx      # Input component
│   │   └── label.tsx      # Label component
│   ├── auth/              # Authentication components
│   │   ├── login-form.tsx # Login form with validation
│   │   └── protected-route.tsx # Route protection
│   └── error-boundary.tsx # Global error handling
├── contexts/
│   └── auth-context.tsx   # Authentication context
├── hooks/
│   └── use-api.ts         # API hooks with SWR
├── lib/
│   ├── api.ts             # Axios configuration
│   └── utils.ts           # Utility functions
└── __tests__/             # Test files
    ├── button.test.tsx    # Button component tests
    └── auth-context.test.tsx # Auth context tests
```

## 🔧 Technology Stack

### Core
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and better DX
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful and accessible components

### State Management & API
- **React Context** - Authentication state management
- **Axios** - HTTP client with interceptors
- **SWR** - Data fetching with caching and revalidation

### Testing & Quality
- **Jest** - Testing framework
- **React Testing Library** - Component testing utilities
- **ESLint** - Code linting and formatting

### UI & UX
- **react-hot-toast** - Toast notifications
- **Lucide React** - Beautiful icons
- **Class Variance Authority** - Component variants

## 🔐 Authentication

The template includes a complete authentication system:

- **Context-based** state management
- **Protected routes** with automatic redirects
- **Local storage** token persistence
- **Login/logout** with toast notifications
- **Demo credentials** for testing

## 🌐 API Integration

Ready-to-use API setup:

- **Axios instance** with request/response interceptors
- **SWR hooks** for efficient data fetching
- **Error handling** with automatic token refresh
- **TypeScript** interfaces for type safety

## 🧪 Testing

Comprehensive testing setup:

- **Unit tests** for components
- **Integration tests** for authentication
- **Mocked dependencies** (localStorage, toast)
- **Coverage** for critical paths

## 🎨 Styling

Modern styling approach:

- **Tailwind CSS** with custom design tokens
- **CSS variables** for theming
- **Dark mode** support
- **Responsive design** breakpoints
- **Component variants** with CVA

## 🚀 Deployment

Deploy easily on any platform:

```bash
# Build the application
npm run build

# Start production server
npm start
```

Recommended platforms:
- **Vercel** (zero-config deployment)
- **Netlify** 
- **Railway**
- **Any Node.js hosting**

## 📝 Development Guidelines

### Before Committing
```bash
npm run lint    # Check code quality
npm run test    # Run test suite
npm run build   # Verify build works
```

### Adding Components
1. Create in `src/components/ui/` for reusable components
2. Follow shadcn/ui patterns with `forwardRef`
3. Use `cn()` utility for className merging
4. Add TypeScript interfaces
5. Write tests

### API Integration
1. Use `useApi<Type>()` for GET requests
2. Use `useApiPost()`, `useApiPut()`, `useApiDelete()` for mutations
3. Handle errors with toast notifications
4. Add loading states

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Radix UI](https://www.radix-ui.com/) - Primitive components
