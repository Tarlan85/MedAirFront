

export function keysToLowerCase(obj) {
    if (obj) {
        var keys = Object.keys(obj);
        var n = keys.length;
        while (n--) {
            var key = keys[n]; // "cache" it, for less lookups to the array
            if (key !== key.toLowerCase()) {
                // might already be in its lower case version
                obj[key.toLowerCase()] = obj[key]; // swap the value to a new lower case key
                delete obj[key]; // delete the old key
            }
        }
        return obj;
    } else return null;
}