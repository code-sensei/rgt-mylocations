import { Category, LatLng, Location } from "./types";

export const DEFAULT_LOCATION: Location = { 
    name: '',
    address: '',
    category: {
      name: ''
    },
    coordinates: ''
}

export const DEFAULT_CATEGORY: Category = {
    name: ''
}

export const DEFAULT_LATLNG: LatLng = {
    lat: 0,
    lng: 0
}