const hasSpecialCharacer = (str: string): boolean => {
    if (str.length === 0) {return false}
    const specialCharRegex = /[?!]/g
    const matchesArray = Array.from(str.matchAll(specialCharRegex))
    return matchesArray.length > 0 ? true : false
}

export default hasSpecialCharacer