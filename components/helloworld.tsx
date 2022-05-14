import styles from "./helloworld.module.css";
import mapData from "../atoms/mapState";
import { useRecoilState } from "recoil";

const HelloWorld = () => {
  const [mapState, setMapState] = useRecoilState(mapData);

  const clickHandler = () => {
    setMapState({ ...mapState, location: [-119, 34] });
  };

  const clickHandler2 = () => {
    setMapState({ ...mapState, zoom: 13 });
  };

  return (
    <div className={styles.container}>
      Hello World <button onClick={clickHandler}>Click me</button>{" "}
      <button onClick={clickHandler2}>Test</button>
    </div>
  );
};

export default HelloWorld;
