"use client";

import { ActionTinyButton } from "@/components/buttons/action-tiny-buttons";

import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-sm p-8 space-y-6">
        {/* Logo / Title */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-sm text-gray-500">
            Please select how you want to access your account.
          </p>
        </div>

        {/* Login Options */}
        <div className="space-y-4">
          <Link to="/login/admin-login" className="block">
            <ActionTinyButton className="w-full py-6 text-base font-medium">
              Admin Login User
            </ActionTinyButton>
          </Link>

          <Link to="/login/portal-login" className="block">
            <ActionTinyButton
              variant="secondary"
              className="w-full py-6 text-base font-medium border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              Portal Login User
            </ActionTinyButton>
          </Link>
        </div>

        {/* Footer Note */}
        <p className="text-xs text-center text-gray-400">
          Choose the login method that applies to your role.
        </p>
      </div>
    </div>
  );
}
