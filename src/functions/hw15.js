'use strict';
export const UP = document.querySelector('.Up');
export const DOWN = document.querySelector('.Down');
export const TEXT = document.querySelector('.text');

export function* createIdGenerator() {
   let size = 0;
   while (true) {
      yield size++;
   };
};

export const idGenerator = createIdGenerator();


export const fontGenerator = newFontGenerator(14);

export function* newFontGenerator(size) {
   while (true) {
      document.querySelector('.text').style.fontSize = size + 'px';
      let action = yield size;

      if (action === 'up') {
         size += 2;

      } else if (action === 'down') {
         size -= 2;
      };

   };
}






