// Basic English to Braille mapping
const brailleMap: { [key: string]: string } = {
  'a': '⠁', 'b': '⠃', 'c': '⠉', 'd': '⠙', 'e': '⠑',
  'f': '⠋', 'g': '⠛', 'h': '⠓', 'i': '⠊', 'j': '⠚',
  'k': '⠅', 'l': '⠇', 'm': '⠍', 'n': '⠝', 'o': '⠕',
  'p': '⠏', 'q': '⠟', 'r': '⠗', 's': '⠎', 't': '⠞',
  'u': '⠥', 'v': '⠧', 'w': '⠺', 'x': '⠭', 'y': '⠽',
  'z': '⠵', ' ': '⠀', '.': '⠲', ',': '⠂', '!': '⠖',
  '?': '⠦', '"': '⠴', "'": '⠄', '-': '⠤', 
};

export const convertToBraille = (text: string): string => {
  if (!text) return '';
  
  return text
    .toLowerCase()
    .split('')
    .map(char => brailleMap[char] || char)
    .join('');
};