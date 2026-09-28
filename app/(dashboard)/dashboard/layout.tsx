import { DashboardNav } from "@/components/dashboard/DashboardNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container flex gap-8 py-8">
      <aside className="hidden w-56 shrink-0 md:block">
        <DashboardNav />
      </aside>
      <main className="min-w-0 flex-1">{children}</main>
    </div>
  );
}
