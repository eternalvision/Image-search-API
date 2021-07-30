export const API_KEY = '22714133-87c7cc427dfc460d08f350db1';
export const API_URL = 'https://pixabay.com/api/';
export let HREF = document.URL.split('?');
if (HREF[1]) {
    let string = decodeURI(HREF[1].split('=')[1]).trim();
    HREF[1] = string.split('#')[0];
    HREF[2] = HREF[1].split('+').join(' ');
}