import Image from "next/image";
import { getBranding } from "@/lib/branding";
import AuthThemeToggle from "./theme-toggle";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const branding = await getBranding();
  const bgImage = branding.loginBgImageUrl ?? "/DJI_0070-scaled.jpg";
  const tagline =
    branding.loginTagline ??
    "Securely manage, track, and retrieve university documents and records with full audit trail compliance.";

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Panel — Hidden on mobile */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <Image
          src={bgImage}
          alt={`${branding.orgName} background`}
          fill
          sizes="50vw"
          className="object-cover"
          priority
          // Unoptimized when the URL is fully qualified (admin-supplied) since
          // it may not be on a Next.js-known host.
          unoptimized={/^https?:\/\//i.test(bgImage)}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, color-mix(in srgb, var(--karu-green) 80%, transparent), color-mix(in srgb, black 50%, transparent), color-mix(in srgb, var(--karu-green) 60%, transparent))`,
          }}
        />
        <div
          className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full blur-3xl"
          style={{ background: "color-mix(in srgb, var(--karu-gold) 10%, transparent)" }}
        />
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

        <div className="relative z-10 flex flex-col justify-between p-8 xl:p-10 w-full h-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src={branding.logoUrl ?? "/karu-logo-v2.png"}
              alt={`${branding.orgName} Logo`}
              width={200}
              height={80}
              className="w-[200px] h-auto drop-shadow-lg"
              priority
              unoptimized={
                !!branding.logoUrl && /^https?:\/\//i.test(branding.logoUrl)
              }
            />
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col justify-center max-w-md py-6">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 backdrop-blur-sm animate-fade-in">
              <span
                className="h-1.5 w-1.5 rounded-full animate-pulse"
                style={{ background: "var(--karu-gold)" }}
              />
              <span className="text-xs font-medium text-white/90">
                Document Management
              </span>
            </div>

            <h1 className="text-3xl xl:text-4xl font-bold text-white leading-tight mb-4 animate-fade-in delay-200">
              {branding.orgName}{" "}
              <span style={{ color: "var(--karu-gold)" }}>EDRMS</span>
            </h1>
            <p className="text-sm text-white/70 leading-relaxed mb-6 animate-fade-in delay-300">
              {tagline}
            </p>

            <ul className="space-y-3">
              {[
                "Document classification & retention policies",
                "Automated workflow approvals",
                "Complete audit trail & compliance",
                "Student portal integration",
              ].map((text, i) => (
                <li
                  key={text}
                  className="flex items-center gap-2.5 animate-fade-in"
                  style={{ animationDelay: `${500 + i * 150}ms` }}
                >
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-md bg-white/10 backdrop-blur-sm border border-white/10">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-3 h-3"
                      style={{ color: "var(--karu-gold)" }}
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="text-white/90 text-sm font-medium">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 pt-4 border-t border-white/10 flex-shrink-0">
            <div>
              <p className="text-xl font-bold text-white">15+</p>
              <p className="text-[10px] text-white/50">Years of Excellence</p>
            </div>
            <div className="h-6 w-px bg-white/10" />
            <div>
              <p className="text-xl font-bold text-white">10,000+</p>
              <p className="text-[10px] text-white/50">Students Served</p>
            </div>
            <div className="h-6 w-px bg-white/10" />
            <div>
              <p className="text-xl font-bold text-white">6</p>
              <p className="text-[10px] text-white/50">Schools</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel — Form area */}
      <div className="relative w-full lg:w-1/2 overflow-y-auto bg-background text-foreground">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 80% 20%, color-mix(in srgb, var(--karu-green) 5%, transparent), transparent 50%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 20% 80%, color-mix(in srgb, var(--karu-gold) 5%, transparent), transparent 50%)",
          }}
        />

        {/* Theme toggle */}
        <div className="absolute top-4 right-4 z-10 sm:top-6 sm:right-6">
          <AuthThemeToggle />
        </div>

        <div className="relative min-h-screen lg:min-h-0 lg:h-full flex items-center justify-center px-4 py-6 sm:py-8 lg:py-6 sm:px-8 lg:px-12">
          <div className="w-full max-w-lg lg:max-w-xl">{children}</div>
        </div>
      </div>
    </div>
  );
}
