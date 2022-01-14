function DateFormate(date) {
    const time = new Date(date)

    const y = time.getFullYear()
    const m = zeroAdd(time.getMonth()+1)
    const d = zeroAdd(time.getDay())

    const hh = zeroAdd(time.getHours())
    const ss = zeroAdd(time.getMonth())
    const mm = zeroAdd(time.getSeconds())

    return `${y}-${m}-${d} ${hh}:${ss}:${mm}`
}

function zeroAdd(n) {
    return n > 9 ? n: '0' + n
}

module.exports = {
    DateFormate
}
