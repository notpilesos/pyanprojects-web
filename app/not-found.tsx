import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center py-24 px-4">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-9xl font-bold text-primary">404</h1>
          <h2 className="mt-6 text-3xl font-bold">Page Not Found</h2>
          <p className="mt-4 text-muted-foreground">
            The requested page doesn&apos;t exist or has been removed.
            Please check the URL or return to the home page.
          </p>
          <div className="mt-10">
            <Link href="/">
              <Button size="lg">Back to Home</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 