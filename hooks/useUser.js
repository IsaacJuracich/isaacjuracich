import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

export default function useUser({
  redirectTo = false,
  redirectIfFound = false,
} = {}) {
  const router = useRouter();
  const { data: user, mutate: mutateUser } = useSWR("/api/user/sessionUser");

  useEffect(() => {
    if (!redirectTo || !user) return;

    if (
      (redirectTo && !redirectIfFound && !user?.isLoggedIn) ||
      (redirectIfFound && user?.isLoggedIn)
    ) {
      router.push(redirectTo);
    }
  }, [user, redirectIfFound, redirectTo]);

  return { user, mutateUser };
}
