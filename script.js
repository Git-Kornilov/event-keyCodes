'use strict';

const insert = document.getElementById('insert');

document.addEventListener('keydown', e => {
  insert.innerHTML = `
  <div class="key">
        ${e.key !== ' ' ? e.key : 'Space'}
        <small>event.key</small>
      </div>

      <div class="key">
        ${e.keyCode}
        <small>event.keyCode</small>
      </div>

      <div class="key">
       ${e.code}
        <small>event.code</small>
      </div>
  `;
});
