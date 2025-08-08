"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/auth-context"
import { ProtectedRoute } from "@/components/auth/protected-route"

function HomePage() {
  const { user, logout } = useAuth()
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">NextJS Shadcn Template</h1>
          <p className="text-xl text-muted-foreground">
            Ready-to-use template with Next.js, Tailwind CSS, and shadcn/ui
          </p>
        </div>
        {user && (
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Welcome back,</p>
            <p className="font-semibold">{user.name}</p>
            <Button variant="outline" size="sm" onClick={logout} className="mt-2">
              Logout
            </Button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>🚀 Next.js 15</CardTitle>
            <CardDescription>
              Latest Next.js with App Router and TypeScript support
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Built-in SSR, SSG, and API routes with excellent developer experience.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>🎨 Tailwind CSS</CardTitle>
            <CardDescription>
              Utility-first CSS framework with custom design system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Pre-configured with custom colors, spacing, and responsive breakpoints.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>📦 shadcn/ui</CardTitle>
            <CardDescription>
              Beautiful and accessible component library
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Copy-paste components built with Radix UI and Tailwind CSS.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>🔒 Authentication</CardTitle>
            <CardDescription>
              Built-in auth context and protected routes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Ready-to-use authentication system with context providers.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>🌐 API Integration</CardTitle>
            <CardDescription>
              Axios and SWR for efficient data fetching
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Custom hooks for SSR/CSR with error handling and caching.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>🧪 Testing Ready</CardTitle>
            <CardDescription>
              Jest and React Testing Library setup
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Pre-configured testing environment with example tests.</p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Component Showcase</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button>Primary Button</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <ProtectedRoute>
      <HomePage />
    </ProtectedRoute>
  )
}
