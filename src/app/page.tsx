"use client"
import { useAuthStore } from "@/app/store/auth";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import ProfilePage from "./timeOff/page";

export default function MainPage() {
  const accessToken = useAuthStore((state) => state.accessToken);
  const refreshAuthToken = useAuthStore((state) => state.refreshAuthToken);
  const setAccessToken = useAuthStore((state) => state.setAccessToken);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');

    if (token && !accessToken) {
      setAccessToken(token);
    }

    if (accessToken || token) {
      refreshAuthToken();
    } else {
      router.push("/login");
    }
  }, [accessToken, router, refreshAuthToken, setAccessToken]);

  return <div><ProfilePage /></div>;
}
