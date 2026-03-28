import NotificationSettings from "../components/NotificationSettings";

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-6 text-slate-900">
      <div className="mx-auto flex max-w-4xl flex-col gap-6">
        <header className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Build / Full-Stack</p>
          <h1 className="mt-2 text-3xl font-semibold">Notification Preferences</h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">All users receive the same notifications. Add notification preference storage, APIs, a settings page, and correct load/update behavior across the stack.</p>
        </header>
      <NotificationSettings />
      </div>
    </main>
  );
}
