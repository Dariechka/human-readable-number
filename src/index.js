module.exports = function toReadable(number) {
  let result = [];

  function match(n) {
    switch(n) {
        case 0: return 'zero';
        case 1: return 'one';
        case 2: return 'two';
        case 3: return 'three';
        case 4: return 'four';
        case 5: return 'five';
        case 6: return 'six';
        case 7: return 'seven';
        case 8: return 'eight';
        case 9: return 'nine';
    }
  }

  function matchTenths(n) {
    switch(n) {
        case 0: return 'zero';
        case 3: return 'thirt';
        case 4: return 'fourt';
        case 5: return 'fift';
        case 6: return 'sixt';
        case 7: return 'sevent';
        case 8: return 'eight';
        case 9: return 'ninet';
    }
  }

  if (number === 0) return 'zero';
  if (Math.floor(number%100/10) === 1){
    if (number%10 === 0){
      result.push('ten');
    } else if (number%10 === 1) {
      result.push('eleven');
    } else if (number%10 === 2) {
      result.push('twelve');
    } else {
      result.push(matchTenths(number%10) + 'een');
    }
  } else {
    const units = match(number%10);
    if (units !== 'zero') {
      result.push(units);
    }
    if (Math.floor(number%100/10) === 2) {
      result.unshift('twenty');
    } else {
      const tenths = matchTenths(Math.floor(number%100/10));
      if (tenths !== 'zero') {
        result.unshift(tenths + 'y');
      }
    }
  }

  const hundredths = match(Math.floor(number/ 100));
  if (hundredths !== 'zero'){
    result.unshift(hundredths + ' hundred');
  }

  result = result.filter(item => item !== 'undefinedy')
  .map(item => (item === 'fourty') ? 'forty' : item);

  return result.join(' ');
}
