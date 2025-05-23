import { useEffect, useState } from "react";
import Loader from "../components/loader/loader";

export function LoaderWrapper({ children }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Do all setup logic here (e.g., Firebase init, auth check)
    const startApp = async () => {
      // Simulate async startup
      await new Promise(resolve => setTimeout(resolve, 1500));
      setReady(true);
    };

    startApp();
  }, []);

  return ready ? children : <Loader/>;
}
