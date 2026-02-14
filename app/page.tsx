'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link2, Zap, BarChart3, Lock } from 'lucide-react';

export default function Home() {
  const router = useRouter();
  const { isLoaded, isSignedIn } = useAuth();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.push('/dashboard');
    }
  }, [isLoaded, isSignedIn, router]);

  const features = [
    {
      icon: Link2,
      title: 'Shorten URLs',
      description: 'Convert long, unwieldy URLs into short, memorable links in seconds.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Instant redirects powered by optimized infrastructure for the best performance.'
    },
    {
      icon: BarChart3,
      title: 'Analytics',
      description: 'Track clicks, views, and engagement metrics for all your shortened links.'
    },
    {
      icon: Lock,
      title: 'Secure & Private',
      description: 'Your links are protected with advanced security and privacy controls.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-4 py-20 sm:py-32">
        <div className="text-center mb-20">
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Shorten Your Links,
            <span className="text-blue-600 block">Amplify Your Reach</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
            Create short, shareable links instantly. Track performance, boost engagement, and grow your audience with powerful analytics.
          </p>
          {isLoaded && !isSignedIn ? (
            <Button size="lg" asChild className="gap-2">
              <a href="/sign-up">Get Started Free</a>
            </Button>
          ) : isLoaded && isSignedIn ? (
            <Button size="lg" asChild className="gap-2">
              <a href="/dashboard">Go to Dashboard</a>
            </Button>
          ) : null}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-slate-200 dark:border-slate-800">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-slate-600 dark:text-slate-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-slate-900 dark:text-white">
              Ready to shorten your links?
            </CardTitle>
            <CardDescription className="text-lg text-slate-600 dark:text-slate-300 mt-2">
              Join thousands of users who are already making their links work harder.
            </CardDescription>
          </CardHeader>
        </Card>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-8 mt-20">
        <div className="max-w-6xl mx-auto px-4 text-center text-slate-600 dark:text-slate-400">
          <p>&copy; 2026 LinkShortener. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
