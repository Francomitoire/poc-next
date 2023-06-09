export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section style={{ padding: '10px'}}>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>dashboard navigation</nav>

      {children}
    </section>
  );
}
