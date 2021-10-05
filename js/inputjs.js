let telLetter = document.querySelectorAll('.numberValidation');
let ipValidation = document.querySelectorAll('.ipValidation');
let pokupatel = document.querySelectorAll('.pokupatel-validation');
let idTovara = document.querySelectorAll('.idTovara');
let cenaTovara = document.querySelectorAll('.cenaTovara');
let firstLetterUpper = document.querySelectorAll('.firstLetterUpper');
let site = document.querySelectorAll('.site');
let find = document.querySelectorAll('.find');

let ppo = document.querySelectorAll('.ppo');

find.forEach((e) => {

    e.addEventListener('input', event => {
        if (event.inputType === 'insertFromPaste') { 
            let temp = parserText(e.value, 'find');
            e.value = temp[0];
        }
    })
    e.addEventListener('keyup', function (event) {
        let caretStart = e.selectionStart;
        let caretEnd = e.selectionEnd;
        let temp = parserText(e.value, 'find');
        e.value = temp[0];
        e.setSelectionRange(caretStart - temp[1], caretEnd - temp[1]);
    });



});

ppo.forEach((e) => {

    e.addEventListener('input', event => {
        if (event.inputType === 'insertFromPaste') { 
            let temp = parserText(e.value, 'find');
            e.value = temp[0];
        }
    })
    e.addEventListener('keyup', function (event) {
        let caretStart = e.selectionStart;
        let caretEnd = e.selectionEnd;
        let temp = parserText(e.value, 'find');
        e.value = temp[0];
        e.setSelectionRange(caretStart - temp[1], caretEnd - temp[1]);
    });



});

firstLetterUpper.forEach((e) => {

    e.addEventListener('input', event => {
        if (event.inputType === 'insertFromPaste') { 
            let temp = parserText(e.value, 'comment', e.dataset.count);
            e.value = temp[0];
        }
    })
    e.addEventListener('keyup', function (event) {
        let caretStart = e.selectionStart;
        let caretEnd = e.selectionEnd;
        let temp = parserText(e.value, 'comment', e.dataset.count);
        e.value = temp[0];
        e.setSelectionRange(caretStart - temp[1], caretEnd - temp[1]);
    });



});

site.forEach((e) => {
    e.addEventListener('input', event => {
        if (event.inputType === 'insertFromPaste') { 
            let temp = parserText(e.value, 'site');
            e.value = temp[0];
        }
    })
    e.addEventListener('keyup', function (event) {
        let caretStart = e.selectionStart;
        let caretEnd = e.selectionEnd;
        let temp = parserText(e.value, 'site');
        e.value = temp[0];
        e.setSelectionRange(caretStart - temp[1], caretEnd - temp[1]);
    });

});

pokupatel.forEach((e) => {
    e.addEventListener('input', event => {
        if (event.inputType === 'insertFromPaste') { 
            let temp = parserText(e.value, 'purchaser');
            e.value = temp[0];
        }
    })
    e.addEventListener('keyup', function (event) {
        let caretStart = e.selectionStart;
        let caretEnd = e.selectionEnd;
        let temp = parserText(e.value, 'purchaser');
        e.value = temp[0];
        e.setSelectionRange(caretStart - temp[1], caretEnd - temp[1]);
    });
});

cenaTovara.forEach((e) => {
    e.addEventListener('input', event => {
        if (event.inputType === 'insertFromPaste') { 
            let temp = parserText(e.value, 'price');
            e.value = temp[0];
        }
    })
    e.addEventListener('keyup', function (event) {
        let caretStart = e.selectionStart;
        let caretEnd = e.selectionEnd;
        let temp = parserText(e.value, 'price');
        e.value = temp[0];
        e.setSelectionRange(caretStart - temp[1], caretEnd - temp[1]);
    });
});
idTovara.forEach((e) => {
    e.addEventListener('input', event => {
        if (event.inputType === 'insertFromPaste') { 
            let temp = parserText(e.value, 'id');
            e.value = temp[0];
        }
    })
    e.addEventListener('keyup', function (event) {
        let caretStart = e.selectionStart;
        let caretEnd = e.selectionEnd;
        let temp = parserText(e.value, 'id');
        e.value = temp[0];
        e.setSelectionRange(caretStart - temp[1], caretEnd - temp[1]);
    });
});
ipValidation.forEach((e) => {
    e.addEventListener('input', event => {
        if (event.inputType === 'insertFromPaste') { 
            let temp = parserText(e.value, 'ip');

            e.value = temp[0];
        }
    })
    e.addEventListener('keyup', function (event) {
        let caretStart = e.selectionStart;
        let caretEnd = e.selectionEnd;
        let temp = parserText(e.value, 'ip');
        e.value = temp[0];
        e.setSelectionRange(caretStart - temp[1], caretEnd - temp[1]);
    });
});
telLetter.forEach((e) => {

    e.addEventListener('input', event => {
        if (event.inputType === 'insertFromPaste') { 
            let temp = parserText(e.value, 'phone', e.dataset.count);
            e.value = temp[0];
        }
    })
    e.addEventListener('keyup', function (event) {
        let caretStart = e.selectionStart;
        let caretEnd = e.selectionEnd;
        let temp = parserText(e.value, 'phone', e.dataset.count);
        e.value = temp[0];
        e.setSelectionRange(caretStart - temp[1], caretEnd - temp[1]);
    });

});

// function replaceAll(str, find, replace) {
//     return str.replace(new RegExp(find, 'g'), replace);
// }




function parserText(text, type, count) {
    let start = text.length;
    if (type === 'purchaser') {
        let parse = text.toLowerCase();
        let temp = parse.replace(/[^а-яёa-zA-ZЁА-Я "'-]/g, x => '').replace(/([ -]|^)[а-яёa-z]/g, x => x.toUpperCase())
            .replace(/( |-|')(?=\1)/g, x => "").replace(/"/g, x => "'").replace(/(?<=')\w/g, x => x.toLowerCase());
        return [temp.slice(0, 80), start - temp.length]
    } else if (type === 'phone') {
        let temp = text.replace(/[^0-9]/g, x => x = "")
        let len = temp.length;
        temp = temp.slice(0, count);
        return [temp, start - temp.length - (len - temp.length)]
    } else if (type === 'id') {
        let temp = text.replace(/[^0-9]/g, x => x = "")
        let len = temp.length;
        temp = temp.slice(0, 7);
        return [temp, start - temp.length - (len - temp.length)]
    } else if (type === 'ip') {
        let temp = text.replace(/[^0-9.,]/g, x => x = "").replace(/,/g, x => ".").replace(/(\.)(?=\1)/g, x => "")
        let len = temp.length;
        temp = temp.slice(0, 15);
        return [temp, start - temp.length - (len - temp.length)]
    }
    else if (type === 'price') {
        // let temp = text.replace(/[^0-9.,]/g, x=> x="").replace(/,/g, x=> ".").replace(/(\.)(?=\1)/g,x=> "").replace(/(?<=.*\..*)\./g, x=> "")
        let temp = text.replace(/[^0-9.,]/g, x => x = "").replace(/,/g, x => ".").replace(/(\.)(?=\1)/g, x => "").replace(/\.(?=.*\..*)/g, x => "")

        let len = temp.length;
        temp = temp.slice(0, 10);
        return [temp, start - temp.length - (len - temp.length)]
    } else if (type === 'comment') {

        let temp;
        if (text.match(/(^)[а-яёa-z]/g))
            temp = text[0].toUpperCase() + text.slice(1);
        else
            temp = text;
        if (count === '200') {
            temp = temp.replace(/( )(?=\1)/g, x => "")
        }
        let len = temp.length;
        temp = temp.slice(0, count);
        return [temp, start - temp.length - (len - temp.length)]
    } else if (type === 'site') {
        let temp = text.replace(/(^https?:\/\/|www.)/g, x => '');
        temp = temp.replace(/[^а-яёa-zA-ZЁА-Я0-9.\/%?=&+_-]/g, x => '')
        if (temp.match(/(^)[а-яёa-z]/g))
            temp = temp[0].toUpperCase() + temp.slice(1);
        else
            temp = temp;
        // temp = temp[0].toUpperCase() + temp.slice(1);
        return [temp.slice(0, 500), start - temp.length]
    } else if (type === 'find') {

        let temp;
        if (text.match(/(^)[а-яёa-z]/g))
            temp = text[0].toUpperCase() + text.slice(1);
        else
            temp = text;
       
        let len = temp.length;
        return [temp, start - temp.length - (len - temp.length)]
    }

}



// ^https?://

// function textLength(event, e, countInput, regExp) {
//     let caretStart;
//     let caretEnd;
//     caretStart = e.selectionStart;
//     caretEnd = e.selectionEnd;
//     if (event.keyCode !== 8 && event.keyCode !== 37 && event.keyCode !== 39 && event.keyCode !== 17 && !event.metaKey) {
//         console.log(e.value);
//         if (e.value.match(regExp, '')) {
//             console.log('t');
//             let count = e.value.match(regExp, '').filter(x => x != ',').length;
//             e.value = replaceAll(e.value, /[\s]+/, ' ').split(/[\s]/).map(word => {
//                 if (word != '') return word[0].toUpperCase() + word.substring(1)
//             }).join(' ');
//             e.value = e.value.split(/[-]+/).map(word => {
//                 if (word != '') return word[0].toUpperCase() + word.substring(1)
//             }).join('-');

//             let temp = e.value.replaceAll(',', '.').replaceAll('"', "'").replace(regExp, '');
//             temp = replaceAll(temp, /[\s]+/, ' ');

//             temp = temp.split(' ').map((x, i) => {
//                 let temp = x.toLowerCase();
//                 return temp[0].toUpperCase() + temp.slice(1);
//             }).join(' ');
//             console.log(temp.split('-'));
//             temp = temp.split('-').map(x => {
//                 if (x[0] === x[0].toLowerCase())
//                     return x[0].toUpperCase() + x.slice(1);
//                 else return x
//             }).join('-');
//             e.value = temp.slice(0, countInput);
//             e.setSelectionRange(caretStart - count, caretEnd - count);
//         } else if (e.value.length > countInput && caretStart > countInput) {
//             console.log('t1');

//             e.value = replaceAll(e.value, /[\s]+/, ' ').split(/[\s]/).map(word => {
//                 if (word != '') return word[0].toUpperCase() + word.substring(1)
//             }).join(' ');
//             e.value = e.value.split(/[-]+/).map(word => {
//                 if (word != '') return word[0].toUpperCase() + word.substring(1)
//             }).join('-');
//             let temp = e.value.replaceAll(',', '.').replace(regExp, '');
//             e.value = temp.slice(0, countInput);
//             e.setSelectionRange(caretStart, caretEnd);
//         } else if (e.value.length > countInput && caretStart <= countInput) {
//             console.log('t2');

//             e.value = replaceAll(e.value, /[\s]+/, ' ').split(/[\s]/).map(word => {
//                 if (word != '') return word[0].toUpperCase() + word.substring(1)
//             }).join(' ');
//             e.value = e.value.split(/[-]+/).map(word => {
//                 if (word != '') return word[0].toUpperCase() + word.substring(1)
//             }).join('-');
//             let temp = e.value.replaceAll(',', '.').replace(regExp, '');
//             e.value = temp.substr(0, caretStart) + temp.substr(caretStart + 1)
//             e.setSelectionRange(caretStart, caretEnd);
//         } else {
//             console.log('t3');
//             if (e.value[0].match(/[\s-]/, '')) {
//                 e.value = e.value.replace(/[\s-]/, '');
//             }
//             let start = e.value.length;
//             let count = 0;
//             let rep = e.value.match(/[\s]{2,}/);
//             let rep2 = e.value.match(/[-]{2,}/);
//             let rep3 = e.value.match(/[']{2,}/);

//             e.value = replaceAll(e.value, /[\s]+/, ' ').split(/[\s]/).map(word => {
//                 if (word != '') return word[0].toUpperCase() + word.substring(1)
//             }).join(' ');
//             if (rep !== null) {
//                 count = start - e.value.length;
//             }
//             e.value = e.value.split(/[-]+/).map(word => {
//                 if (word != '') return word[0].toUpperCase() + word.substring(1)
//             }).join('-');
//             if (rep2 !== null) {
//                 count = start - e.value.length;
//             }
//             e.value = e.value.split(/[']+/).map(word => {
//                 if (word != '') return word;
//             }).join("'");
//             if (rep3 !== null) {
//                 count = start - e.value.length;
//             }
//             e.value = e.value.replaceAll(',', '.').replaceAll('"', "'").replace(regExp, '');
//             e.setSelectionRange(caretStart - count, caretEnd - count);
//         }
//     }
//     if (event.keyCode === 8) {
//         let start = e.value.length;
//         let count = 0;
//         let rep = e.value.match(/[\s]{2,}/);
//         e.value = replaceAll(e.value, /[\s]+/, ' ').split(/[\s]/).map(word => {
//             if (word != '') return word[0].toUpperCase() + word.substring(1)
//         }).join(' ');
//         if (rep !== null) {
//             count = start - e.value.length;
//         }
//         e.value = e.value.split(' ').map((x, i) => {
//             let temp = x.toLowerCase();
//             return temp[0].toUpperCase() + temp.slice(1);
//         }).join(' ');
//         // console.log(temp.split('-'));
//         e.value = e.value.split('-').map(x => {
//             if (x[0] === x[0].toLowerCase())
//                 return x[0].toUpperCase() + x.slice(1);
//             else return x
//         }).join('-');
//         e.setSelectionRange(caretStart - count, caretEnd - count);
//     }
// };



