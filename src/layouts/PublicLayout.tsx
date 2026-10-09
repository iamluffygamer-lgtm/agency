import { PublicNavbar } from "@/components/navbar/PublicNavbar"
import { Outlet } from "react-router-dom"

export default function PublicLayout() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <PublicNavbar />
      <main className="flex-1"><Outlet /></main>
      <footer className="border-t py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Agency Inc. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
