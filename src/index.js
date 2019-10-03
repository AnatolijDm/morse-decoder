const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const array = [...expr];
    const letters = [];
    const items = array.length / 10;
    let a = 0;
    array.forEach(item => {
      letters.push([]);
        if (letters[a].length < 9 ) {
           letters[a] += item;
        } else {
          letters[a] += item;
          a++;
        };    
      });
      const lett = []
      letters.forEach(item => {
        if ( item && item.length === 10 ) {
        const ltr = item.replace(/10/g, '.').replace(/11/g, '-').replace(/0/g, '');

        for (const sign in MORSE_TABLE) {
          if (ltr === sign) lett.push(MORSE_TABLE[sign]);
        };
	if (ltr === '**********') lett.push(' ');
        };
    })
    return lett.join('');
}

module.exports = {
    decode
}