import styles from './helloworld.module.css';
import { mapData, getLocation } from '../atoms/mapState';
import { useSetRecoilState, useRecoilValue } from 'recoil';

const HelloWorld = () => {
  const setMapState = useSetRecoilState(mapData);
  const location = useRecoilValue(getLocation);

  const clickHandler = () => {
    setMapState((mapState) => ({ ...mapState, location: [-117.9, 34] }));
  };

  return (
    <div className={styles.container}>
      Hello World <button onClick={clickHandler}>Click me</button>
      <div>{location}</div>
    </div>
  );
};

export default HelloWorld;
