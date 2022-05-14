import { useEffect, useRef } from 'react';
import styles from './webmap.module.css';
import ArcGISMap from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import { useRecoilState } from 'recoil';
import mapData from '../atoms/mapState';

const Mapper = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapState, setMapState] = useRecoilState(mapData);

  const mapView = useRef(new MapView({}));

  useEffect(() => {
    // INITIALIZE THE MAP
    // Bail if the map div isn't ready
    if (!mapRef.current) return;

    // Create the map
    const map = new ArcGISMap({
      basemap: 'gray-vector',
    });

    // Grab reference to the map view
    const view = mapView.current;
    if (view.map) return;

    // Hydrate the map view
    view.container = mapRef.current;
    view.map = map;
    view.zoom = 12;

    // Sample click listener
    view.on('click', function (event: __esri.ViewClickEvent) {
      setMapState({
        ...mapState,
        location: [event.mapPoint.longitude, event.mapPoint.latitude],
      });
    });
  }, [mapRef]);

  useEffect(() => {
    // LISTEN FOR MAP STATE CHANGES
    // Grab reference to the map view
    const view = mapView.current;

    // Update the map state
    view
      .goTo({
        center: mapState.location,
        zoom: 12,
      })
      .catch(function (error) {});
  }, [mapState.location]);

  return <div className={styles.container} ref={mapRef}></div>;
};

export default Mapper;
