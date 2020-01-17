const BASE_URL = 'https://wagon-garage-api.herokuapp.com';

export const FETCH_DOGS = 'FETCH_DOGS';

export function fetchDogs(kennel){
  const url = `${BASE_URL}/${kennel}/cars`;
  const promise = fetch(url).then(r => r.json());

  return {
    type: FETCH_DOGS,
    payload: promise
  }
}
