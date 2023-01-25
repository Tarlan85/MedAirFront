const validateValue = (val) => {
    if(val < 0 || val > 100) return false
    else return true
}

module.exports = validateValue