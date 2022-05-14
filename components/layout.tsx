import Head from "next/head";
import styles from "./layout.module.css";

// A layout is a common element that allows you to
// reuse components (or a layout) across every page
// or per page
// https://nextjs.org/docs/basic-features/layouts

export default function Layout({ children }: any) {
  return (
    <>
      <Head>
        <title>Spectre Scaffold</title>
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  );
}
