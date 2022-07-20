import { hasAVowel } from "../utils/hasAVowel"
import hasLowerCase from "../utils/hasLowerCase";
import hasSpecialCharacer from "../utils/hasSpecialCharacter";
import hasUpperCase from "../utils/hasUpperCase.";
import isStrong from "../utils/isStrong";

interface WordDescriptionProps {
  wordToDescribe: string;
}

function WordDescription({ wordToDescribe }: WordDescriptionProps): JSX.Element {
  const hasAtLeastFiveCharacters = wordToDescribe.length > 5;
  const containsAVowel = hasAVowel(wordToDescribe);
  const hasTheLetterQ = wordToDescribe.toLowerCase().match('q');

  return (
    <ul>
      {hasAtLeastFiveCharacters && <li>Has at least five characters</li>}
      {containsAVowel && <li>Contains a vowel</li>}
      {hasTheLetterQ && <li>Contains the letter Q</li>}
      {hasUpperCase(wordToDescribe) && <li>Contains at least one uppercase letter</li>}
      {hasLowerCase(wordToDescribe) && <li>Contains at least one lowerCase letter</li>}
      {hasSpecialCharacer(wordToDescribe) && <li>Contains at least one special letter</li>}
      {isStrong(wordToDescribe) && <li><b>That a blimming strong password!!</b></li>}
    </ul>
  )
}

export default WordDescription