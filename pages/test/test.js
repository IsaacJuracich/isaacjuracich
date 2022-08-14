import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";

export default function Alldatas() {
  const { query, isReady } = useRouter();
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // fetch
    // setData(data);
    setLoading(false);
  }, [isReady]);

  if (isLoading || !data)
    return (
      <div className={styles.container}>
        <main className={styles.main}></main>
      </div>
    );

  return (
    <div className={styles.container}>
      <main className={styles.main}></main>
    </div>
  );
}
