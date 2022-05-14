import dynamic from 'next/dynamic';
const WebMap = dynamic(() => import('../components/webmap'), {
  ssr: false,
});
import styles from '../styles/Home.module.css';
//import WebMap from "../components/webmap";
import { NextPage } from 'next';
import HelloWorld from '../components/helloworld';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <WebMap />
      <HelloWorld />
    </div>
  );
};

export default Home;
