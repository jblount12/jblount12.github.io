const urlParams = new URLSearchParams(window.location.search);
const q = urlParams.get('q');
let d = 'No definition found for ' + q;



document.write(q + ' was received');