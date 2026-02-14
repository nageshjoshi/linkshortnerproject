'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const router = useRouter();
  const { isLoaded, isSignedIn } = useAuth();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.push('/dashboard');
    }
  }, [isLoaded, isSignedIn, router]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <Card className="w-full mt-8">
          <CardHeader>
            <CardTitle className="text-3xl">Get Started</CardTitle>
            <CardDescription>
              Welcome to the Link Shortener application
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <p className="text-base leading-relaxed">
              Looking for a starting point or more instructions? Head over to{" "}
              <a
                href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                className="font-medium underline hover:opacity-80"
              >
                Templates
              </a>{" "}
              or the{" "}
              <a
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                className="font-medium underline hover:opacity-80"
              >
                Learning
              </a>{" "}
              center.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild className="gap-2">
                <a
                  href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="dark:invert"
                    src="/vercel.svg"
                    alt="Vercel logomark"
                    width={16}
                    height={16}
                  />
                  Deploy Now
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Documentation
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
