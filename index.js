const list = document.querySelectorAll('.cell');
const board = document.querySelector('.board');
const count = document.querySelector('.counter');
const restart = document.querySelector('.restart');
let counterWhite = 0;
let counterBlack = 0;

board.addEventListener('click', (e) => {
   const id = Number(e.target.parentElement.id) === 0 ? Number(e.target.id) : Number(e.target.parentElement.id);
   const diag1 = [document.getElementById('21'), document.getElementById('25'), document.getElementById('30')];
   const diag2 = [document.getElementById('13'), document.getElementById('17'), document.getElementById('22'), document.getElementById('26'), document.getElementById('31')];
   const diag3 = [document.getElementById('5'), document.getElementById('9'), document.getElementById('14'), document.getElementById('18'), document.getElementById('23'), document.getElementById('27'), document.getElementById('32')];
   const diag4 = [document.getElementById('1'), document.getElementById('6'), document.getElementById('10'), document.getElementById('15'), document.getElementById('19'), document.getElementById('24'), document.getElementById('28')];
   const diag5 = [document.getElementById('2'), document.getElementById('7'), document.getElementById('11'), document.getElementById('16'), document.getElementById('20')];
   const diag6 = [document.getElementById('3'), document.getElementById('8'), document.getElementById('12')];
   const diag7 = [document.getElementById('5'), document.getElementById('1')];
   const diag8 = [document.getElementById('13'), document.getElementById('9'), document.getElementById('6'), document.getElementById('2')];
   const diag9 = [document.getElementById('21'), document.getElementById('17'), document.getElementById('14'), document.getElementById('10'), document.getElementById('7'), document.getElementById('3')];
   const diag10 = [document.getElementById('29'), document.getElementById('25'), document.getElementById('22'), document.getElementById('18'), document.getElementById('15'), document.getElementById('11'), document.getElementById('8'), document.getElementById('4')];
   const diag11 = [document.getElementById('30'), document.getElementById('26'), document.getElementById('23'), document.getElementById('19'), document.getElementById('16'), document.getElementById('12')];
   const diag12 = [document.getElementById('31'), document.getElementById('27'), document.getElementById('24'), document.getElementById('20')];
   const diag13 = [document.getElementById('32'), document.getElementById('28')];
   const arr = [diag1, diag2, diag3, diag4, diag5, diag6, diag7, diag8, diag9, diag10, diag11, diag12, diag13]
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
         if (document.getElementById(`${id - 4}`) && document.getElementById(`${id - 4}`).innerHTML.includes('blac') && document.getElementById(`${id - 7}`)) {
            if (document.getElementById(`${id - 7}`).innerHTML === '') {
               document.getElementById(`${id - 7}`).classList.add('can-move');
               document.getElementById(`${id - 4}`).classList.add('can-delete');
            }
         }
         if (document.getElementById(`${id + 3}`) && document.getElementById(`${id + 3}`).innerHTML.includes('blac') && document.getElementById(`${id + 7}`)) {
            if (document.getElementById(`${id + 7}`).innerHTML === '') {
               document.getElementById(`${id + 7}`).classList.add('can-move');
               document.getElementById(`${id + 3}`).classList.add('can-delete');
            }
         }
         if (document.getElementById(`${id + 4}`) && document.getElementById(`${id + 4}`).innerHTML.includes('blac') && document.getElementById(`${id + 9}`)) {
            if (document.getElementById(`${id + 9}`).innerHTML === '') {
               document.getElementById(`${id + 9}`).classList.add('can-move');
               document.getElementById(`${id + 4}`).classList.add('can-delete');
            }
         }
         if (id === 4 || id === 12 || id === 20 || id === 28) {
            document.getElementById(`${id - 4}`) ? document.getElementById(`${id - 4}`).classList.remove('can-move') : -1;
         }
         if ((id === 5 || id === 13 || id === 21 || id === 29)) {            
            document.getElementById(`${id - 5}`) ? document.getElementById(`${id - 5}`).classList.remove('can-move') : -1;
            document.getElementById(`${id + 3}`) ? document.getElementById(`${id + 3}`).classList.remove('can-move') : -1;
            if (document.getElementById(`${id - 5}`)) {
               if (document.getElementById(`${id - 5}`).classList[2]) {
                  if(document.getElementById(`${id - 5}`).classList[2].includes('can-delete')) {
                     document.getElementById(`${id - 5}`).classList.remove('can-delete');
                     document.getElementById(`${id - 9}`).classList.remove('can-move');
                  }
               }
            }
         }
         if ((id === 8 || id === 16  || id === 24  || id === 32) && document.getElementById(`${id - 4}`).classList[2]) {
            if (document.getElementById(`${id - 4}`).classList[2].includes('can-delete')) {
               document.getElementById(`${id - 4}`).classList.remove('can-delete');
               document.getElementById(`${id - 7}`).classList.remove('can-move');
            }
         }
         if (id === 8 || id === 16  || id === 24  || id === 32) {
            if (document.getElementById(`${id + 4}`).classList[2]) {
               document.getElementById(`${id + 4}`).classList.remove('can-delete');
               document.getElementById(`${id + 9}`).classList.remove('can-move');
            }
         }
      }
      if (e.target.src.includes('white') && ((id >= 9 && id <= 12) || (id >= 1 && id <= 4) || (id >= 17 && id <= 20) || (id >= 25 && id <= 28))) {
         if (document.getElementById(`${id - 4}`) && document.getElementById(`${id - 4}`).innerHTML === '') document.getElementById(`${id - 4}`).classList.add('can-move');  
         if (document.getElementById(`${id - 3}`) && document.getElementById(`${id - 3}`).innerHTML === '') document.getElementById(`${id - 3}`).classList.add('can-move');
         if (document.getElementById(`${id - 4}`) && document.getElementById(`${id - 4}`).innerHTML.includes('blac') && document.getElementById(`${id - 9}`)) {
            if (document.getElementById(`${id - 9}`).innerHTML === '') {
               document.getElementById(`${id - 9}`).classList.add('can-move');
               document.getElementById(`${id - 4}`).classList.add('can-delete');
            }
         } 
         if (document.getElementById(`${id - 3}`) && document.getElementById(`${id - 3}`).innerHTML.includes('blac') && document.getElementById(`${id - 7}`)) {
            if (document.getElementById(`${id - 7}`).innerHTML === '') {
               document.getElementById(`${id - 7}`).classList.add('can-move');
               document.getElementById(`${id - 3}`).classList.add('can-delete');
            }
         }
         if (document.getElementById(`${id + 4}`) && document.getElementById(`${id + 4}`).innerHTML.includes('blac') && document.getElementById(`${id + 7}`)) {
            if (document.getElementById(`${id + 7}`).innerHTML === '') {
               document.getElementById(`${id + 7}`).classList.add('can-move');
               document.getElementById(`${id + 4}`).classList.add('can-delete');
            }
         }
         if (document.getElementById(`${id + 5}`) && document.getElementById(`${id + 5}`).innerHTML.includes('blac') && document.getElementById(`${id + 9}`)) {
            if (document.getElementById(`${id + 9}`).innerHTML === '') {
               document.getElementById(`${id + 9}`).classList.add('can-move');
               document.getElementById(`${id + 5}`).classList.add('can-delete');
            }
         }
         if ((id === 4 || id === 12 || id === 20 || id === 28)) {
            document.getElementById(`${id - 3}`) ? document.getElementById(`${id - 3}`).classList.remove('can-move') : -1;
            document.getElementById(`${id + 5}`) ? document.getElementById(`${id + 5}`).classList.remove('can-move') : -1;
         }
         if (id === 5 || id === 13 || id === 21 || id === 29) {
            document.getElementById(`${id - 4}`) ? document.getElementById(`${id - 4}`).classList.remove('can-move') : -1;
         }
         if (id === 1 || id === 9 || id === 17 || id === 25) {
            if (document.getElementById(`${id - 4}`).classList[2]) {
               if (document.getElementById(`${id - 4}`).classList[2].includes('can-delete'))
               document.getElementById(`${id - 4}`).classList.remove('can-delete');
               document.getElementById(`${id - 9}`) ? document.getElementById(`${id - 9}`).classList.remove('can-move') : -1;
            }
         }
         if (id === 9 || id === 17 || id === 25) {
            if (document.getElementById(`${id + 4}`).classList[2]) {
               document.getElementById(`${id + 4}`).classList.remove('can-delete');
               document.getElementById(`${id + 7}`) ? document.getElementById(`${id + 7}`).classList.remove('can-move') : -1;
            }
         }
      }
      if (e.target.src.includes('black') && ((id >= 21 && id <= 24) || (id >= 5 && id <= 8) || (id >= 13 && id <= 16) || (id >= 29 && id <= 32))) {
         if (document.getElementById(`${id + 3}`) && document.getElementById(`${id + 3}`).innerHTML === '') document.getElementById(`${id + 3}`).classList.add('can-move');
         if (document.getElementById(`${id + 4}`) && document.getElementById(`${id + 4}`).innerHTML === '') document.getElementById(`${id + 4}`).classList.add('can-move');
         if (document.getElementById(`${id + 3}`) && document.getElementById(`${id + 3}`).innerHTML.includes('whit') && document.getElementById(`${id + 7}`)) {
            if ( document.getElementById(`${id + 7}`).innerHTML === '') {
               document.getElementById(`${id + 7}`).classList.add('can-move');
               document.getElementById(`${id + 3}`).classList.add('can-delete');
            }
         } 
         if (document.getElementById(`${id + 4}`) && document.getElementById(`${id + 4}`).innerHTML.includes('whit') && document.getElementById(`${id + 9}`)) {
            if (document.getElementById(`${id + 9}`).innerHTML === '') {
               document.getElementById(`${id + 9}`).classList.add('can-move');
               document.getElementById(`${id + 4}`).classList.add('can-delete');
            }
         }
         if (document.getElementById(`${id - 4}`) && document.getElementById(`${id - 4}`).innerHTML.includes('whit') && document.getElementById(`${id - 7}`)) {
            if (document.getElementById(`${id - 7}`).innerHTML === '') {
               document.getElementById(`${id - 7}`).classList.add('can-move');
               document.getElementById(`${id - 4}`).classList.add('can-delete');
            }
         } 
         if (document.getElementById(`${id - 5}`) && document.getElementById(`${id - 5}`).innerHTML.includes('whit') && document.getElementById(`${id - 9}`).innerHTML === '') {
            if (document.getElementById(`${id - 9}`).innerHTML === '') {
               document.getElementById(`${id - 9}`).classList.add('can-move');
               document.getElementById(`${id - 5}`).classList.add('can-delete');
            }
         }         
         if (id === 4 || id === 12 || id === 20 || id === 28) {
            document.getElementById(`${id - 4}`).classList.remove('can-move')
         }
         if (id === 5 || id === 13 || id === 21 || id === 29) {
            document.getElementById(`${id + 3}`).classList.remove('can-move')
         }
         if ((id === 8 || id === 16  || id === 24  || id === 32) && document.getElementById(`${id + 4}`).classList[2]) {
            if (document.getElementById(`${id + 4}`).classList[2].includes('can-delete')) {
               document.getElementById(`${id + 4}`).classList.remove('can-delete');
               document.getElementById(`${id + 9}`).classList.remove('can-move');
            }}
      }
      if (e.target.src.includes('black') && ((id >= 9 && id <= 12) || (id >= 1 && id <= 4) || (id >= 17 && id <= 20) || (id >= 25 && id <= 28))) {
         if (document.getElementById(`${id + 4}`) && document.getElementById(`${id + 4}`).innerHTML === '') document.getElementById(`${id + 4}`).classList.add('can-move');
         if (document.getElementById(`${id + 5}`) && document.getElementById(`${id + 5}`).innerHTML === '') document.getElementById(`${id + 5}`).classList.add('can-move');
         if (document.getElementById(`${id + 4}`) && document.getElementById(`${id + 4}`).innerHTML.includes('whit') && document.getElementById(`${id + 7}`)) {
            if ( document.getElementById(`${id + 7}`).innerHTML === '') {
               document.getElementById(`${id + 4}`).classList.add('can-delete');
               document.getElementById(`${id + 7}`).classList.add('can-move');
            }
         } 
         if (document.getElementById(`${id + 5}`) && document.getElementById(`${id + 5}`).innerHTML.includes('whit') && document.getElementById(`${id + 9}`)) {
            if (document.getElementById(`${id + 9}`).innerHTML === '') {
               document.getElementById(`${id + 5}`).classList.add('can-delete');
               document.getElementById(`${id + 9}`).classList.add('can-move');
            }
         }
         if (document.getElementById(`${id - 3}`) && document.getElementById(`${id - 3}`).innerHTML.includes('whit') && document.getElementById(`${id - 7}`)) {
            if (document.getElementById(`${id - 7}`).innerHTML === '') {
               document.getElementById(`${id - 7}`).classList.add('can-move');
               document.getElementById(`${id - 3}`).classList.add('can-delete');
            }
         } 
         if (document.getElementById(`${id - 4}`) && document.getElementById(`${id - 4}`).innerHTML.includes('whit') && document.getElementById(`${id - 9}`)) {
            if (document.getElementById(`${id - 9}`).innerHTML === '') {
               document.getElementById(`${id - 9}`).classList.add('can-move');
               document.getElementById(`${id - 4}`).classList.add('can-delete');
            }
         } 
         if (id === 4 || id === 12 || id === 20 || id === 28) {
            document.getElementById(`${id + 5}`).classList.remove('can-move');
            if (document.getElementById(`${id + 5}`).classList[2]) {               
               document.getElementById(`${id + 5}`).classList.remove('can-delete');
               document.getElementById(`${id + 9}`).classList.remove('can-move');
            }
         }
         if (id === 5 || id === 13 || id === 21 || id === 29) {
            document.getElementById(`${id + 4}`).classList.remove('can-move');
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
      if (document.querySelector('.selected').innerHTML.includes('whitD')) img.src = './assets/img/whitD.png';
      if (document.querySelector('.selected').innerHTML.includes('blacD')) img.src = './assets/img/blacD.png';
      if (document.querySelector('.selected').innerHTML.includes('black')) img.src = './assets/img/black.png';
      if (document.querySelector('.selected').innerHTML.includes('white')) img.src = './assets/img/white.png';
      if (document.querySelector('.selected').innerHTML.includes('whitD') || document.querySelector('.selected').innerHTML.includes('blacD')) {
         img.classList.add('checkerD');
         e.target.appendChild(img);
      } else {
         img.classList.add('checker');
         e.target.appendChild(img);
      }
      if (document.querySelector('.selected').innerHTML.includes('white') || document.querySelector('.selected').innerHTML.includes('black')) {
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
      } else {
         arr.map(item => {
            if (item.includes(document.querySelector('.selected')) && item.includes(e.target)) {
               const indexI = item.indexOf(document.querySelector('.can-delete'));
               const indexS = item.indexOf(document.querySelector('.selected'));
               const indexE = item.indexOf(e.target);
               item.map(i => {
                  if (indexS < indexI && indexI < indexE) {
                     if (i.classList[2] && i.classList[2].includes('can-delete')) i.innerHTML = '';
                  } else {
                     if (indexS > indexI && indexI > indexE) {
                        if (i.classList[2] && i.classList[2].includes('can-delete')) i.innerHTML = '';
                     }
                  }
               })
            }
         })
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
   if ((id === 1 || id === 2 || id === 3|| id === 4) && e.target.innerHTML.includes('white')) e.target.innerHTML = '<img src="./assets/img/whitD.png" alt="img" class="checkerD">';
   if ((id === 29 || id === 30 || id === 31|| id === 32) && e.target.innerHTML.includes('black')) e.target.innerHTML = '<img src="./assets/img/blacD.png" alt="img" class="checkerD">';
   if (e.target.classList[0] === 'checkerD') {
      list.forEach((item) => {
         item.classList.remove('selected');
         item.classList.remove('can-move');
         item.classList.remove('can-delete');
      })
      e.target.parentElement.classList.add('selected');
      e.target.parentElement.classList.remove('can-move');
      if (e.target.src.includes('whitD')) {
         arr.map(item => {
            if (item.includes(document.querySelector('.selected'))) {
               item.forEach(i => {
                  if (i.innerHTML == '') {
                     i.classList.add('can-move');                                 
                  }
               })
               item.forEach(i => {
                  if (i.innerHTML.includes('white')) {
                     const indexI = item.indexOf(i);
                     const indexS = item.indexOf(document.querySelector('.selected'));
                     if (indexI < indexS) {
                        for (let i = 0; i < indexI; i++) {
                           item[i].classList.remove('can-move')
                        }
                     } else {
                        for (let i = indexI; i <= item.length - 1; i++) {
                           item[i].classList.remove('can-move')
                        }
                     }             
                  }
                  if (i.innerHTML.includes('black')) {
                     const indexI = item.indexOf(i);
                     const indexS = item.indexOf(document.querySelector('.selected'));
                     if (indexI < indexS) {
                        const lowerI = indexI - 1;
                        if (item[lowerI] && item[lowerI].innerHTML == '') item[indexI].classList.add('can-delete')              
                     } else {
                        const lowerI = indexI + 1;
                        if (item[lowerI] && item[lowerI].innerHTML == '') item[indexI].classList.add('can-delete')   
                     } 
                  }
               })
            }
         })
      }
      if (e.target.src.includes('blacD')) {
         arr.map(item => {
            if (item.includes(document.querySelector('.selected'))) {
               item.forEach(i => {
                  if (i.innerHTML == '') {
                     i.classList.add('can-move');                                 
                  }
               })
               item.forEach(i => {
                  if (i.innerHTML.includes('black')) {
                     const indexI = item.indexOf(i);
                     const indexS = item.indexOf(document.querySelector('.selected'));
                     if (indexI < indexS) {
                        for (let i = 0; i < indexI; i++) {
                           item[i].classList.remove('can-move')
                        }
                     } else {
                        for (let i = indexI; i <= item.length - 1; i++) {
                           item[i].classList.remove('can-move')
                        }
                     }             
                  }
                  if (i.innerHTML.includes('white')) {
                     const indexI = item.indexOf(i);
                     const indexS = item.indexOf(document.querySelector('.selected'));
                     if (indexI < indexS) {
                        const lowerI = indexI - 1;
                        if (item[lowerI] && item[lowerI].innerHTML == '') item[indexI].classList.add('can-delete')              
                     } else {
                        const lowerI = indexI + 1;
                        if (item[lowerI] && item[lowerI].innerHTML == '') item[indexI].classList.add('can-delete')   
                     } 
                  }
               })
            }
         })
      }
   }
   list.forEach((item) => {
      if(item.innerHTML.includes('white') === true || item.innerHTML.includes('whitD') === true) counterWhite++
      if(item.innerHTML.includes('black') === true || item.innerHTML.includes('blacD') === true) counterBlack++
   })
   count.innerHTML = `White ${counterWhite} : ${counterBlack} Black`
   counterWhite = 0;
   counterBlack = 0;
})
restart.addEventListener('click', () => {
   count.innerHTML = `White 12 : 12 Black`;
   list.forEach((item) => {
      item.innerHTML = '';
      item.classList.remove('selected', 'can-move', 'can-delete');
   })
   for (let i = 1; i < list.length; i += 1) {
      if (list[i].classList[1].includes('grey') && i < 24) list[i].innerHTML = '<img src="./assets/img/black.png" alt="img" class="checker">'
      if (list[i].classList[1].includes('grey') && i >= 40 ) list[i].innerHTML = '<img src="./assets/img/white.png" alt="img" class="checker">'
   }
})
