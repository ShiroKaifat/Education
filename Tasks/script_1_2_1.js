let result1 = filterFunc1(mass);
let result2 = filterFunc2(mass1, 4);
let result3 = filterFunc3(mass2, 4);
let mass = [6, 4, 8, -2, 6, 8, -1, 7, 8, 8,
    -9, 3, 5];
filterFunc1 = (mass) => {
    let newArr = [];

    mass.forEach(value => {

        if (value > 0) {
            newArr.push(value);
        }
    });
    return newArr;
}
let mass1 = [6, 4, 8, -2, 6, 8, -1, 7, 8, 8,
    -9, 3, 5];
filterFunc2 = (mass1, value1) => {
    let newArr = [];

    mass1.forEach(value => {

        if (value > value1) {
            newArr.push(value);
        }
    });
    return newArr;
}
let mass2 = [6, 4, 8, -2, 6, 8, -1, 7, 8, 8,
    -9, 3, 5];
filterFunc3 = (mass2, value1) => {
    let newArr = [];

    mass.forEach(value => {

        if (value > value1) {
            newArr.push(value);
        } else  {
            newArr.push(null)
        }
    });
    return newArr;
}
let str = 'Lorem ipsum dolor sit amet, ' +
    'consectetur adipiscing elit. Fusce ' +
    'commodo sem lacus, rhoncus mattis lacus' +
    ' rhoncus in. Morbi fringilla molestie ' +
    'purus ut laoreet. Aliquam semper magna ' +
    'nec vulputate vestibulum. Suspendisse ' +
    'interdum fermentum enim vel bibendum. ' +
    'Praesent sit amet magna a felis ' +
    'hendrerit blandit at nec turpis. ' +
    'Pellentesque eu lectus ut orci commodo ' +
    'maximus. Mauris imperdiet aliquam nisi ' +
    'nec sagittis. In dictum nunc a eros ' +
    'fermentum, nec dignissim libero laoreet.' +
    ' Morbi sit amet tellus at tellus maximus ' +
    'volutpat. Sed vel magna nec odio ' +
    'pulvinar auctor. Nullam venenatis quam ' +
    'quam, at vestibulum nibh varius vitae. ' +
    'In viverra erat quis turpis efficitur, ' +
    'euismod rutrum dui imperdiet. ' +
    'Suspendisse lobortis euismod elit at ' +
    'tempus. Aenean vehicula suscipit ligula' +
    ' nec rhoncus. Etiam vitae porttitor nunc,' +
    ' sed placerat nunc.';

function testfunction(string1) {
    console.log('string1', string1 +
        'test function');
    console.log('text' + 'string' +
    'output');
}