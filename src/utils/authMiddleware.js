import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/backoffice/login"); // Redirect if no token
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  return isAuthenticated;
}
