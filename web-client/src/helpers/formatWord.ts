// only the first letter is capitalized
export const transformFirstLetter = (word: string) => {
    const transformedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    return transformedWord;
  };