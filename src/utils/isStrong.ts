import hasLowerCase from "./hasLowerCase"
import hasSpecialCharacer from "./hasSpecialCharacter"
import hasUpperCase from "./hasUpperCase."

const isStrong = (password: string): boolean => {
    if (!(password.length >= 7)) {return false}
    if (!hasUpperCase(password)) {return false}
    if (!hasLowerCase(password)) {return false}
    if (!hasSpecialCharacer(password)) {return false}
    return true
}

export default isStrong