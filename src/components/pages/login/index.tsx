import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const [email, setEmail] = useState("onu.live.official@gmail.com");
  const [password, setPassword] = useState("••••••");

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with geometric pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-slate-900 to-purple-800">
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="grid"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        {/* Additional geometric lines */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent rotate-45"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent -rotate-45"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-px bg-gradient-to-r from-transparent via-pink-400/20 to-transparent rotate-12"></div>
        </div>
      </div>

      {/* Login Form */}
      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="bg-slate-800/40 backdrop-blur-sm rounded-lg p-8 border border-slate-700/50">
          {/* Logo/Brand */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-pink-400 mb-4">Onulive</h1>
            <p className="text-slate-300 text-sm leading-relaxed">
              Enter your email address and password to
              <br />
              access admin panel.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-400 text-sm">
                Email address
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white border-slate-300 text-slate-900 placeholder:text-slate-500 focus:border-pink-400 focus:ring-pink-400"
                placeholder="Email address"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-slate-400 text-sm">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white border-slate-300 text-slate-900 placeholder:text-slate-500 focus:border-pink-400 focus:ring-pink-400"
                placeholder="Password"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 mt-6"
            >
              Sign In
            </Button>
          </form>

          {/* Forgot Password Link */}
          <div className="text-center mt-6">
            <a
              href="#"
              className="text-slate-400 hover:text-pink-400 text-sm transition-colors"
            >
              Forgot password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
