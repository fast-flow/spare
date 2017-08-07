const extend = require("extend")
module.exports = function set (defaultSettings, userSettings) {
    let empty
    if (Array.isArray(defaultSettings)) {
        empty = []
    }
    else {
        empty = {}
    }
    let copy = extend(true, empty, defaultSettings)
    return extend(true, copy, userSettings)
}
