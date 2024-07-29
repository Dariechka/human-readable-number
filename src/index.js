module.exports = function toReadable (number) {
  let result = [];

  function match10(n) {
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
  function match20(n) {
    switch(n) {
        case 10: return 'ten';
        case 11: return 'eleven';
        case 12: return 'twelve';
        case 13: return 'thirteen';
        case 14: return 'fourteen';
        case 15: return 'fifteen';
        case 16: return 'sixteen';
        case 17: return 'seventeen';
        case 18: return 'eightteen';
        case 19: return 'nineteen';
    }
  }

  if (number%100 >= 10 && number%100 < 20){
    result.push(match20(number%100));
  }
    const units = match10(number%10);
    result.push(units);

    const tenthsNumber = number%100;
    if (Math.floor(tenthsNumber/10) === 0) {
      return result.join(' ');
    } else {
    const tenths = match10(Math.floor(tenthsNumber/10)) + 'ty';
    result.unshift(tenths);
    }

    const hundredthsNumber = number%1000;
    if (Math.floor(hundredthsNumber/100) === 0) {
      return result.join(' ');
    } else {
    const hundredths = match10(Math.floor(hundredthsNumber/100)) + ' hundred';
    result.unshift(hundredths);
    }

    const thousandthsNumbers = number%10000;
    if (Math.floor(thousandthsNumbers/1000) === 0) {
      return result.join(' ');
    } else {
    let thousandths;
    if (Math.floor(thousandthsNumbers/1000) === 1){
      thousandths = match10(Math.floor(thousandthsNumbers/1000)) + ' thousand';
    } else {
      thousandths = match10(Math.floor(thousandthsNumbers/1000)) + ' thousands';
    }
    result.unshift(thousandths);
  }

  return result.join(' ');
}
