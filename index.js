const list = document.querySelectorAll('.cell');
const board = document.querySelector('.board');
const count = document.querySelector('.counter');
let turn = 'white';
let counterWhite = 0;
let counterBlack = 0;

board.addEventListener('click', (e) => {
   const id = Number(e.target.parentElement.id) === 0 ? Number(e.target.id) : Number(e.target.parentElement.id);
   console.log(id);
   
   if (e.target.classList[0] === 'checker') {
      list.forEach((item) => {
         item.classList.remove('selected');
         item.classList.remove('can-move');
         item.classList.remove('can-delete');
      })
      e.target.parentElement.classList.add('selected');
      if (e.target.src.includes('white') && ((id >= 21 && id <= 24) || (id >= 5 && id <= 8) || (id >= 13 && id <= 16) || (id >= 29 && id <= 32))) {
         if (document.getElementById(`${id - 5}`) && document.getElementById(`${id - 5}`).innerHTML === '') document.getElementById(`${id - 5}`).classList.add('can-move');  
         if (document.getElementById(`${id - 4}`) && document.getElementById(`${id - 4}`).innerHTML === '') document.getElementById(`${id - 4}`).classList.add('can-move');
         if (document.getElementById(`${id - 5}`) && document.getElementById(`${id - 5}`).innerHTML.includes('black') && document.getElementById(`${id - 9}`)) {
            if (document.getElementById(`${id - 9}`).innerHTML === '') {
               document.getElementById(`${id - 9}`).classList.add('can-move');
               document.getElementById(`${id - 5}`).classList.add('can-delete');
            }
         } 
         if (document.getElementById(`${id - 4}`) && document.getElementById(`${id - 4}`).innerHTML.includes('black') && document.getElementById(`${id - 7}`)) {
            if (document.getElementById(`${id - 7}`).innerHTML === '') {
               document.getElementById(`${id - 7}`).classList.add('can-move');
               document.getElementById(`${id - 4}`).classList.add('can-delete');
            }
         }
         
         if (id === 4 || id === 12 || id === 20 || id === 28) {
            document.getElementById(`${id - 4}`) ? document.getElementById(`${id - 4}`).classList.remove('can-move') : -1;
         }
         if ((id === 5 || id === 13 || id === 21 || id === 29)) {            
            document.getElementById(`${id - 5}`) ? document.getElementById(`${id - 5}`).classList.remove('can-move') : -1;
            document.getElementById(`${id + 3}`) ? document.getElementById(`${id + 3}`).classList.remove('can-move') : -1;
         }
         if ((id === 8 || id === 16  || id === 24  || id === 32) && document.getElementById(`${id - 4}`).classList[2]) {
            if (document.getElementById(`${id - 4}`).classList[2].includes('can-delete')) {
               document.getElementById(`${id - 4}`).classList.remove('can-delete');
               document.getElementById(`${id - 7}`).classList.remove('can-move');
            }}
      }
      if (e.target.src.includes('white') && ((id >= 9 && id <= 12) || (id >= 1 && id <= 4) || (id >= 17 && id <= 20) || (id >= 25 && id <= 28))) {
         if (document.getElementById(`${id - 4}`) && document.getElementById(`${id - 4}`).innerHTML === '') document.getElementById(`${id - 4}`).classList.add('can-move');  
         if (document.getElementById(`${id - 3}`) && document.getElementById(`${id - 3}`).innerHTML === '') document.getElementById(`${id - 3}`).classList.add('can-move');
         if (document.getElementById(`${id - 4}`) && document.getElementById(`${id - 4}`).innerHTML.includes('black') && document.getElementById(`${id - 9}`)) {
            if (document.getElementById(`${id - 9}`).innerHTML === '') {
               document.getElementById(`${id - 9}`).classList.add('can-move');
               document.getElementById(`${id - 4}`).classList.add('can-delete');
            }
         } 
         if (document.getElementById(`${id - 3}`) && document.getElementById(`${id - 3}`).innerHTML.includes('black') && document.getElementById(`${id - 7}`)) {
            if (document.getElementById(`${id - 7}`).innerHTML === '') {
               document.getElementById(`${id - 7}`).classList.add('can-move');
               document.getElementById(`${id - 3}`).classList.add('can-delete');
            }
         } 
         //if (document.getElementById(`${id + 4}`) && document.getElementById(`${id + 4}`).innerHTML === '') document.getElementById(`${id + 4}`).classList.add('can-move');
         //if (document.getElementById(`${id + 5}`) && document.getElementById(`${id + 5}`).innerHTML === '') document.getElementById(`${id + 5}`).classList.add('can-move');
         if ((id === 4 || id === 12 || id === 20 || id === 28)) {
            document.getElementById(`${id - 3}`) ? document.getElementById(`${id - 3}`).classList.remove('can-move') : -1;
            document.getElementById(`${id + 5}`) ? document.getElementById(`${id + 5}`).classList.remove('can-move') : -1;
         }
         if (id === 5 || id === 13 || id === 21 || id === 29) {
            document.getElementById(`${id - 4}`) ? document.getElementById(`${id - 4}`).classList.remove('can-move') : -1;
         }
      }
      if (e.target.src.includes('black') && ((id >= 21 && id <= 24) || (id >= 5 && id <= 8) || (id >= 13 && id <= 16) || (id >= 29 && id <= 32))) {
         //if (document.getElementById(`${id - 4}`) && document.getElementById(`${id - 4}`).innerHTML === '') document.getElementById(`${id - 4}`).classList.add('can-move');  
         //if (document.getElementById(`${id - 5}`) && document.getElementById(`${id - 5}`).innerHTML === '') document.getElementById(`${id - 5}`).classList.add('can-move');
         if (document.getElementById(`${id + 3}`) && document.getElementById(`${id + 3}`).innerHTML === '') document.getElementById(`${id + 3}`).classList.add('can-move');
         if (document.getElementById(`${id + 4}`) && document.getElementById(`${id + 4}`).innerHTML === '') document.getElementById(`${id + 4}`).classList.add('can-move');
         if (document.getElementById(`${id + 3}`) && document.getElementById(`${id + 3}`).innerHTML.includes('white') && document.getElementById(`${id + 7}`).innerHTML === '') {
            document.getElementById(`${id + 7}`).classList.add('can-move');
            document.getElementById(`${id + 3}`).classList.add('can-delete');
         } 
         if (document.getElementById(`${id + 4}`) && document.getElementById(`${id + 4}`).innerHTML.includes('white') && document.getElementById(`${id + 9}`).innerHTML === '') {
            document.getElementById(`${id + 9}`).classList.add('can-move');
            document.getElementById(`${id + 4}`).classList.add('can-delete');
         } 
         if (id === 4 || id === 12 || id === 20 || id === 28) {
            document.getElementById(`${id - 4}`).classList.remove('can-move')
         }
         if (id === 5 || id === 13 || id === 21 || id === 29) {
            document.getElementById(`${id + 3}`).classList.remove('can-move')
         }
      }
      if (e.target.src.includes('black') && ((id >= 9 && id <= 12) || (id >= 1 && id <= 4) || (id >= 17 && id <= 20) || (id >= 25 && id <= 28))) {
         //if (document.getElementById(`${id - 4}`) && document.getElementById(`${id - 4}`).innerHTML === '') document.getElementById(`${id - 4}`).classList.add('can-move');  
         //if (document.getElementById(`${id - 3}`) && document.getElementById(`${id - 3}`).innerHTML === '') document.getElementById(`${id - 3}`).classList.add('can-move');
         if (document.getElementById(`${id + 4}`) && document.getElementById(`${id + 4}`).innerHTML === '') document.getElementById(`${id + 4}`).classList.add('can-move');
         if (document.getElementById(`${id + 5}`) && document.getElementById(`${id + 5}`).innerHTML === '') document.getElementById(`${id + 5}`).classList.add('can-move');
         if (document.getElementById(`${id + 4}`) && document.getElementById(`${id + 4}`).innerHTML.includes('white') && document.getElementById(`${id + 7}`).innerHTML === '') {
            document.getElementById(`${id + 4}`).classList.add('can-delete');
            document.getElementById(`${id + 7}`).classList.add('can-move');
         } 
         if (document.getElementById(`${id + 5}`) && document.getElementById(`${id + 5}`).innerHTML.includes('white') && document.getElementById(`${id + 9}`).innerHTML === '') {
            document.getElementById(`${id + 5}`).classList.add('can-delete');
            document.getElementById(`${id + 9}`).classList.add('can-move');
         } 
         if (id === 4 || id === 12 || id === 20 || id === 28) {
            document.getElementById(`${id + 5}`).classList.remove('can-move')
         }
         if (id === 5 || id === 13 || id === 21 || id === 29) {
            document.getElementById(`${id + 4}`).classList.remove('can-move')
         }
         if ((id === 1 || id === 9  || id === 17  || id === 25) && document.getElementById(`${id + 4}`).classList[2]) {
            if (document.getElementById(`${id + 4}`).classList[2].includes('can-delete')) {
               document.getElementById(`${id + 4}`).classList.remove('can-delete');
               document.getElementById(`${id + 7}`).classList.remove('can-move');
            }}
      }
   }
   if (e.target.classList[2] === 'can-move') {
      const img = document.createElement('img');
      document.querySelector('.selected').innerHTML.includes('white') ? img.src = './assets/img/white.png' : img.src = './assets/img/black.png';
      img.classList.add('checker');
      e.target.appendChild(img);
      if (((id >= 21 && id <= 24) || (id >= 5 && id <= 8) || (id >= 13 && id <= 16) || (id >= 29 && id <= 32))) {
         if (e.target.id == Number(document.querySelector('.selected').id) - 9) document.getElementById(`${document.querySelector('.selected').id - 5}`).innerHTML = '';
         if (e.target.id == Number(document.querySelector('.selected').id) - 7) document.getElementById(`${document.querySelector('.selected').id - 4}`).innerHTML = '';
         if (e.target.id == Number(document.querySelector('.selected').id) + 9) document.getElementById(`${Number(document.querySelector('.selected').id) + 4}`).innerHTML = '';
         if (e.target.id == Number(document.querySelector('.selected').id) + 7) document.getElementById(`${Number(document.querySelector('.selected').id) + 3}`).innerHTML = '';
      } else {
         if (e.target.id == Number(document.querySelector('.selected').id) - 9) document.getElementById(`${document.querySelector('.selected').id - 4}`).innerHTML = '';
         if (e.target.id == Number(document.querySelector('.selected').id) - 7) document.getElementById(`${document.querySelector('.selected').id - 3}`).innerHTML = '';
         if (e.target.id == Number(document.querySelector('.selected').id) + 9) document.getElementById(`${Number(document.querySelector('.selected').id) + 5}`).innerHTML = '';
         if (e.target.id == Number(document.querySelector('.selected').id) + 7) document.getElementById(`${Number(document.querySelector('.selected').id) + 4}`).innerHTML = '';
      }
      document.querySelector('.selected').innerHTML = '';
      document.querySelector('.selected').classList.remove('selected');
      list.forEach((item) => {
         item.classList.remove('selected');
         item.classList.remove('can-move');         
         if (item.classList[2] === 'can-delete') {
            item.classList.remove('can-delete');
         }
      })
   }
   list.forEach((item) => {
      if(item.innerHTML.includes('white') === true) counterWhite++
      if(item.innerHTML.includes('black') === true) counterBlack++
   })
   count.innerHTML = `White ${counterWhite} : ${counterBlack} Black`
   counterWhite = 0;
   counterBlack = 0
})


