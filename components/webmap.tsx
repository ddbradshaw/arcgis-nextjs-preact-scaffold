import { useEffect, useRef } from "react";
import styles from "./webmap.module.css";
import ArcGISMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import { useRecoilState } from "recoil";
import mapData from "../atoms/mapState";

const WebMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapState, setMapState] = useRecoilState(mapData);

  const mapView = useRef(new MapView({}));

  useEffect(() => {
    // INITIALIZE THE MAP
    if (!mapRef.current) return;

    const map = new ArcGISMap({
      basemap: "gray-vector",
    });

    const view = mapView.current;
    view.container = mapRef.current;
    view.map = map;
    view.zoom = 12;
  }, [mapRef]);

  useEffect(() => {
    // LISTEN FOR MAP STATE ERRORS
    const view = mapView.current;
    view
      .goTo({
        center: mapState.location,
        zoom: 12,
      })
      .catch(function (error) {
        // Swallow error
      });
  }, [mapState.location]);

  return <div className={styles.container} ref={mapRef}></div>;
};

export default WebMap;
