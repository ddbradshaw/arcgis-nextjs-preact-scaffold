import styles from './helloworld.module.css';
import mapData from '../atoms/mapState';
import { useRecoilState } from 'recoil';

const HelloWorld = () => {
  const [mapState, setMapState] = useRecoilState(mapData);

  const clickHandler = () => {
    setMapState({ ...mapState, location: [-117.9, 34] });
  };

  return (
    <div className={styles.container}>
      Hello World <button onClick={clickHandler}>Click me</button>
      <div>
        {mapState.location[0]}, {mapState.location[1]}
      </div>
    </div>
  );
};

export default HelloWorld;
