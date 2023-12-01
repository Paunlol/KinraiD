
import { getValues } from 'js/Script.js';

let getEaten = document.getElementById('eatenKacl');
let getTotal = document.getElementById('totalKacl');

showKacl();

function showKacl() {
    const { Eaten, Total } = getValues();

    getEaten.innerHTML = `${Eaten} <span class="text-xs">kcal</span>`;
    getTotal.innerHTML = `${Total} <span class="text-xs">kcal</span>`;
}
