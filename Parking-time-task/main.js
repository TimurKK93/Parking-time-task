// Parking task

const parkingTime = [

    { start: '11:34', end: '15:21' },
    { start: '11:34', end: '15:21' },
    { start: '11:34', end: '15:21' },
    { start: '11:34', end: '15:21' },
    { start: '11:34', end: '15:21' },
    { start: '11:34', end: '15:21' },
    { start: '11:34', end: '15:20' },
    { start: '10:34', end: '21:21' },
    { start: '09:02', end: '11:20' },
    { start: '09:02', end: '11:20' },
]

const arrNew = parkingTime.reduce((acc, curr) => {
    acc.push(curr.start, curr.end)
    return acc
}, []).reduce((acc, curr) => {
    acc[curr] = acc[curr] ? ++acc[curr] : 1
    return acc
}, {})

const values = Object.values(arrNew)
const sortNumbers = (a, b) => {
    if (a > b) {
        return 1;
    } else if (b > a) {
        return -1;
    } else {
        return 0;
    }
}
values.sort(sortNumbers)

const itog = values[values.length - 1]

const getKeyByValue = (object, value) => {
    return Object.keys(object).find(key => object[key] === value);
}


console.log('Максимальное кол-во машин на парковке ' + itog + ' в ' + getKeyByValue(arrNew, itog))
