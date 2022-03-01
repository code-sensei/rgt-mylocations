export interface Category {
    name: string;
}

export interface Location {
    name: string;
    address: string;
    category: Category;
    coordinates: string;
}

export interface LatLng {
    lat: number;
    lng: number;
}