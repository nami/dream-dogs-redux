const BASE_URL = 'https://wagon-garage-api.herokuapp.com';

export function fetchDogs(kennel){
  const url = `${BASE_URL}/${kennel}/cars`;
  const promise = fetch(url).then(r => r.json());

  return {
    type: 'FETCH_DOGS',
    payload: promise
  }
}

export function createPost(kennel, dog, callback) {
  const url = `${BASE_URL}/${kennel}/cars`;
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dog)
  }).then(r => r.json())
    .then(() => callback());


  return {
    type: 'POST_CREATED',
    payload: promise 
  };
}

export function fetchPost(id) {
  const promise = fetch(`${BASE_URL}/cars/${id}`)
    .then(response => response.json());

  return {
    type: "FETCH_POST",
    payload: promise
  }
}

export function removeDog(back, dog) {
  const url = `${BASE_URL}/cars/${dog.id}`;
  fetch(url, { method: 'DELETE' })
    .then(r => r.json())
    .then(() => back.push(""));

  return {
    type: 'REMOVE_DOG',
    payload: dog
  };
}


