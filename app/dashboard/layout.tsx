import Link from "next/link";

const dashboardRoutes = [
  {
    label: "Settings",
    to: "/dashboard/settings",
  },
  {
    label: "User",
    to: "/dashboard/user",
  },
  {
    label: "Posts",
    to: "/dashboard/posts",
  },
];

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section style={{ padding: "10px" }}>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
          backgroundColor: "#0d1b30",
          color: "#ffffff",
        }}
      >
        <h3>Dashboard Navigation</h3>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            gap: "10px",
          }}
        >
          {dashboardRoutes.map((route, index) => (
            <li key={index}>
              <Link href={route.to}>{route.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {children}
    </section>
  );
}
