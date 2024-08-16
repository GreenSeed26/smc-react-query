import { Lock, Mail } from "lucide-react";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function LoginPage() {
  return (
    <section className="flex h-dvh w-full items-center justify-center">
      <form
        action=""
        className="flex w-[400px] flex-col gap-3 rounded-lg border bg-white px-8 py-4 shadow-md"
      >
        <h1 className="text-2xl font-bold">Sign In</h1>
        <div className="relative">
          <Mail className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            className="h-10 w-full rounded-lg border py-2 pl-10 pr-2 text-sm outline-none"
            type="text"
            name="email"
            placeholder="Email"
            autoComplete="email"
          />
        </div>

        <div className="relative">
          <Lock className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            className="h-10 w-full rounded-lg border py-2 pl-10 pr-2 text-sm outline-none"
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="current-password"
          />
        </div>
        <button className="h-10 w-full rounded-lg border bg-slate-700 text-white transition-colors hover:bg-slate-600">
          Login
        </button>

        <div className="flex items-center gap-2">
          <div className="h-px w-full bg-slate-200"></div>
          <span>or</span>
          <div className="h-px w-full bg-slate-200"></div>
        </div>

        <span className="text-center text-xs font-semibold">Sign in with</span>

        <div className="flex flex-col gap-2">
          <button className="flex h-10 w-full items-center justify-center rounded-lg bg-sky-600 text-white transition-colors hover:bg-sky-700">
            <span className="flex items-center gap-2">
              <FaFacebook size={30} />
              Facebook
            </span>
          </button>
          <button className="flex h-10 w-full items-center justify-center rounded-lg border bg-white text-black transition-colors hover:bg-gray-100">
            <span className="flex items-center gap-2">
              <FcGoogle size={30} />
              Google
            </span>
          </button>
        </div>
      </form>
    </section>
  );
}

export default LoginPage;
