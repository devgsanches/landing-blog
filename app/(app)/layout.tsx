import { Navbar } from "./_components/Navbar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col min-h-screen text-gray-100"><Navbar />{children}</div>
}
