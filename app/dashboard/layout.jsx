import AdminDashboard from "../components/Dashboard";

export default function DashboardLayout({ children }) {
  return (
    <>
      <AdminDashboard children={children} />
    </>
  );
}
