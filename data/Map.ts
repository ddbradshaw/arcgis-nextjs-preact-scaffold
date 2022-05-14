import ArcGISMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";

interface Map {
  view?: MapView;
  map?: ArcGISMap;
}

const m: Map = {};

export function initialize(container: HTMLDivElement | null) {
  if (!container) return;

  const map = new ArcGISMap({
    basemap: "gray-vector",
  });

  const view = new MapView({
    container,
    map,
    zoom: 10,
    center: [-118, 34],
  });

  m.map = map;
  m.view = view;

  // return () => {
  //   m.view?.destroy();
  // };
}

export function zoomTo(coords: number[]) {
  console.log("ZOOM");
  // m.view?.goTo({
  //   center: coords,
  //   zoom: 12,
  // });
}
