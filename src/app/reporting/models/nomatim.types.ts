export interface SearchCommon {
  format: OutputFormat;
  addressdetails?: 0 | 1;
  extratags?: 0 | 1;
  namedetails?: 0 | 1;
  'accept-language'?: string;
  countrycodes?: string | string[];
  exclude_place_ids?: string | string[];
  limit?: number;
  viewbox?: { x1: number, y1: number, x2: number, y2: number },
  bounded?: 0 | 1;
  email?: string;
  dedupe?: 0 | 1;
  debug?: 0 | 1;
}

export interface SearchQuery extends SearchCommon {
  q: string;
}

export interface SearchStructured extends SearchCommon {
  street?: string;
  city?: string;
  county?: string;
  state?: string;
  country?: string;
  postalcode?: string;
}

export type Search = SearchQuery | SearchStructured;
export type OutputFormat = 'xml' | 'json' | 'jsonv2' | 'geojson' | 'geocodejson';

export interface Result {
  place_id: number;
  licence: string;
  osm_type: string;
  osm_id: number;
  boundingbox: string[4];
  lat: string;
  lon: string;
  display_name: string;
  class: string;
  type: string;
  importance: number;
  address?: Address;
  extratags?: any;
  namedetails?: any;
  mapUrl?: string;
}

export interface Address {
  house_number: string;
  road: string;
  city_district: string;
  town: string;
  county: string;
  state: string;
  postcode: string;
  country: string;
  country_code: string;
}

export interface ReverseCommon {
  format?: OutputFormat;
  addressdetails?: 0 | 1;
  extratags?: 0 | 1;
  namedetails?: 0 | 1;
  'accept-language'?: string;
  zoom?: 0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18;
  email?: string;
}

export interface ReverseCoords extends ReverseCommon {
  lat: number;
  lon: number;
}

export interface ReverseType {
  osm_type: 'N' | 'W' | 'R';
  osm_id: number;
}

export type Reverse = ReverseCoords | ReverseType;
