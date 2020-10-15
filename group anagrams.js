// Sort Solution
function groupAnagrams(words) {
  const anagrams = {};
  for (const word of words) {
    const sortedWord = word.split('').sort().join('');
    if (anagrams[sortedWord]) {
      anagrams[sortedWord].push(word);
    } else {
      anagrams[sortedWord] = [word];
    }
  }
  return Object.values(anagrams);
}

// T: O(n * klogk)
// S: O(nk)
// Count Solution

function groupAnagrams(words) {
  const anagrams = {}
  for (const word of words) {
    let count = new Array(26).fill(0)
    for (const letter of word) {
      count[letter.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
    }
    if (anagrams[count]) {
      anagrams[count].push(word)
    } else {
      anagrams[count] = [word]
    }
  }
  return Object.values(anagrams)
}
// T: O(nk)
// S: O(nk)