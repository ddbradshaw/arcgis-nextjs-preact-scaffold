import { atom, selector } from 'recoil';

interface MapState {
  location: number[];
  zoom?: number;
}

export const mapData = atom({
  key: 'mapData', // unique ID (with respect to other atoms/selectors)
  default: <MapState>{
    location: [-118, 34],
    zoom: 12,
  },
});

export const getLocation = selector({
  key: 'locSelector',
  get: ({ get }) => get(mapData).location[0] + ', ' + get(mapData).location[1],
});
