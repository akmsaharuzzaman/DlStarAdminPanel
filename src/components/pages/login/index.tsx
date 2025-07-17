import { LoginForm } from "@/components/forms/login-form";
import { useLoginMutation } from "@/redux/api/auth.api";
import { setUser } from "@/redux/features/auth.slice";
import { useAppDispatch } from "@/redux/hooks";
import { LoginFormValues } from "@/schema/login-schema.zod";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function LoginPage() {
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // Replace this with your actual login logic (API call + redux dispatch)
  const handleLogin = async (values: LoginFormValues) => {
    // For demonstration, just logging the values

    try {
      // await dispatch(loginThunk(values));
      const response = await login(values).unwrap();
      // handle success (e.g., store token in localStorage, update redux state)
      // or call your API and handle redux state
      const user = response.result?.[0];
      const token = response.access_token;

      if (user && token) {
        dispatch(
          setUser({
            user: {
              id: user._id,
              name: user.username,
              email: user.email,
              role: user.userRole,
            },
            token,
          })
        );
      }

      // Redirect based on role
      if (user && user.userRole === "admin") {
        navigate("/");
      } else if (user) {
        navigate("/user-lists");
      }
      toast.success(response.message);
      // redirect after login
    } catch (error: unknown) {
      console.error("Login failed:", error);
      if (typeof error === "object" && error !== null && "message" in error) {
        toast.success(
          (error as { message?: string }).message || "Login failed"
        );
      } else {
        toast.error("Login failed");
      }
      // handle error (e.g., show notification)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with geometric pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-slate-900 to-purple-800">
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
          <LoginForm onSubmit={handleLogin} isLoading={isLoading} />
          {/* Forgot Password Link */}
          {/* // <div className="text-center mt-6">
          //   <a
          //     href="#"
          //     className="text-slate-400 hover:text-pink-400 text-sm transition-colors"
          //   >
          //     Forgot password?
          //   </a>
          // </div> */}
        </div>
      </div>
    </div>
  );
}
