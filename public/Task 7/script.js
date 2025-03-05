"use strict";
const ENDPOINT = './NBA.json';
fetch(ENDPOINT)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error loading JSON:', error));
