export interface MapboxDirectionRes {
  routes: Route[];
  waypoints: Waypoint[];
  code: string;
  uuid: string;
}

export interface Route {
  geometry: Geometry;
  legs: Leg[];
  weight_name: string;
  weight: number;
  duration: number;
  distance: number;
}

interface Geometry {
  coordinates: Array<number[]>;
  type: string;
}

interface Leg {
  summary: string;
  weight: number;
  duration: number;
  steps: any[];
  distance: number;
}

interface Waypoint {
  distance: number;
  name: string;
  location: number[];
}
