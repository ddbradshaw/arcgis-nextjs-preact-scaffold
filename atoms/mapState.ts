import { atom, useRecoilState } from "recoil";

interface MapState {
  location?: number[];
  zoom?: number;
}

const mapData = atom({
  key: "mapData", // unique ID (with respect to other atoms/selectors)
  default: <MapState>{ location: [-118, 34], zoom: 12 },
});

export default mapData;
