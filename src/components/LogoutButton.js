import { useRouter } from "next/router";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    router.push("/backoffice/login");
  };

  return <button onClick={handleLogout}>Logout</button>;
}
