const hasUpperCase = (str: string): boolean => {
    if (str.length === 0) {return false}
    const uppercaseRegex = /[A-Z]/g
    const matchesArray = Array.from(str.matchAll(uppercaseRegex))
    console.log(matchesArray)
    return matchesArray.length > 0 ? true : false
}

export default hasUpperCase