/* exported titleCase */
function titleCase(string) {
  const wordArray = string.toLowerCase().split(' ');
  const titleCase = [];
  if (wordArray[0].includes('javascript')) {
    titleCase.push('JavaScript:');
  }
  titleCase.push(
    wordArray[0].charAt(0).toUpperCase() + wordArray[0].slice(1).toLowerCase()
  );

  for (let i = 1; i < wordArray.length; i++) {
    switch (wordArray[i]) {
      case 'and':
      case 'or':
      case 'nor':
      case 'but':
      case 'a':
      case 'an':
      case 'the':
      case 'as':
      case 'at':
      case 'by':
      case 'for':
      case 'in':
      case 'of':
      case 'on':
      case 'per':
      case 'to':
        titleCase.push(wordArray[i].toLowerCase());
        break;
      case 'javascript':
        titleCase.push('JavaScript');
        break;
      case 'javascript:':
        titleCase.push('JavaScript:');
        break;
      case 'api':
        titleCase.push('API');
        break;
      default:
        titleCase.push(
          wordArray[i].charAt(0).toUpperCase() +
            wordArray[i].slice(1).toLowerCase()
        );
    }
    if (wordArray[i - 1].includes(':')) {
      titleCase.splice(
        i,
        2,
        wordArray[i].charAt(0).toUpperCase() +
          wordArray[i].slice(1).toLowerCase()
      );
    }
    if (wordArray[i].includes('-')) {
      const hyphenArray = wordArray[i].split('-');
      const titleCaseHyphen = [];
      for (let i = 0; i < hyphenArray.length; i++) {
        titleCaseHyphen.push(
          hyphenArray[i].charAt(0).toUpperCase() +
            hyphenArray[i].slice(1).toLowerCase()
        );
      }
      titleCase.splice(i, 2, titleCaseHyphen.join('-'));
    }
  }
  return titleCase.join(' ');
}
