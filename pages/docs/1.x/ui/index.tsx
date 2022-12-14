import { useEffect } from "react";
import { useRouter } from "next/router";

// Current URL is '/'
function Page() {
  const router = useRouter();

  useEffect(() => {
    // Always do navigations after the first render
    router.push("/1.0.x", undefined);
  }, []);

  useEffect(() => {
    // The counter changed!
  }, [router.query.counter]);
}

export default Page;
