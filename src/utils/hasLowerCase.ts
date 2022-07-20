const hasLowerCase = (str: string): boolean => {
    if (str.length === 0) {return false}
    const lowercaseRegex = /[a-z]/g
    const matchesArray = Array.from(str.matchAll(lowercaseRegex))
    return matchesArray.length > 0 ? true : false
}

export default hasLowerCase