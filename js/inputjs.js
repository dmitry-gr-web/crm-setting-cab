let telLetter = document.querySelectorAll('.numberValidation');
let ipValidation = document.querySelectorAll('.ipValidation');
let pokupatel = document.querySelectorAll('.pokupatel-validation');
let idTovara = document.querySelectorAll('.idTovara');
let cenaTovara = document.querySelectorAll('.cenaTovara');
let firstLetterUpper = document.querySelectorAll('.firstLetterUpper');
firstLetterUpper.forEach((e) => {
    e.addEventListener('keyup', function(event) {
        let caretStart = e.selectionStart;
        let caretEnd = e.selectionEnd;
        if (event.keyCode !== 8 && event.keyCode !== 37 && event.keyCode !== 39) {
            e.value = e.value.charAt(0).toUpperCase() + e.value.slice(1);
            e.setSelectionRange(caretStart, caretEnd);
        }
    });
});
pokupatel.forEach((e) => {
    e.addEventListener('keyup', function(event) {
        textLength(event, e, parseInt(e.dataset.count), /[^A-Za-zА-Яа-я- '"]/g);
    });
});

cenaTovara.forEach((e) => {
    e.addEventListener('keyup', function(event) {
        textLength(event, e, parseInt(e.dataset.count), /[^0-9.]/g);
    });
});
idTovara.forEach((e) => {
    e.addEventListener('keyup', function(event) {
        textLength(event, e, parseInt(e.dataset.count), /[^0-9]/g);
    });
});
ipValidation.forEach((e) => {
    e.addEventListener('keyup', function(event) {
        textLength(event, e, parseInt(e.dataset.count), /[^0-9.]/g);
    });
});
telLetter.forEach((e) => {
    e.addEventListener('keyup', function(event) {
        textLength(event, e, parseInt(e.dataset.count), /[^0-9]/g);
    });

});

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

function textLength(event, e, countInput, regExp) {
    let caretStart;
    let caretEnd;
    caretStart = e.selectionStart;
    caretEnd = e.selectionEnd;
    if (event.keyCode !== 8 && event.keyCode !== 37 && event.keyCode !== 39 && event.keyCode !== 17 && !event.metaKey) {
        console.log(e.value);
        if (e.value.match(regExp, '')) {
            console.log('t');
            let count = e.value.match(regExp, '').filter(x => x != ',').length;
            e.value = replaceAll(e.value, /[\s]+/, ' ').split(/[\s]/).map(word => {
                if (word != '') return word[0].toUpperCase() + word.substring(1)
            }).join(' ');
            e.value = e.value.split(/[-]+/).map(word => {
                if (word != '') return word[0].toUpperCase() + word.substring(1)
            }).join('-');

            let temp = e.value.replaceAll(',', '.').replaceAll('"', "'").replace(regExp, '');
            temp = replaceAll(temp, /[\s]+/, ' ');

            temp = temp.split(' ').map((x, i) => {
                let temp = x.toLowerCase();
                return temp[0].toUpperCase() + temp.slice(1);
            }).join(' ');
            console.log(temp.split('-'));
            temp = temp.split('-').map(x => {
                if (x[0] === x[0].toLowerCase())
                    return x[0].toUpperCase() + x.slice(1);
                else return x
            }).join('-');
            e.value = temp.slice(0, countInput);
            e.setSelectionRange(caretStart - count, caretEnd - count);
        } else if (e.value.length > countInput && caretStart > countInput) {
            console.log('t1');

            e.value = replaceAll(e.value, /[\s]+/, ' ').split(/[\s]/).map(word => {
                if (word != '') return word[0].toUpperCase() + word.substring(1)
            }).join(' ');
            e.value = e.value.split(/[-]+/).map(word => {
                if (word != '') return word[0].toUpperCase() + word.substring(1)
            }).join('-');
            let temp = e.value.replaceAll(',', '.').replace(regExp, '');
            e.value = temp.slice(0, countInput);
            e.setSelectionRange(caretStart, caretEnd);
        } else if (e.value.length > countInput && caretStart <= countInput) {
            console.log('t2');

            e.value = replaceAll(e.value, /[\s]+/, ' ').split(/[\s]/).map(word => {
                if (word != '') return word[0].toUpperCase() + word.substring(1)
            }).join(' ');
            e.value = e.value.split(/[-]+/).map(word => {
                if (word != '') return word[0].toUpperCase() + word.substring(1)
            }).join('-');
            let temp = e.value.replaceAll(',', '.').replace(regExp, '');
            e.value = temp.substr(0, caretStart) + temp.substr(caretStart + 1)
            e.setSelectionRange(caretStart, caretEnd);
        } else {
            console.log('t3');
            if (e.value[0].match(/[\s-]/, '')) {
                e.value = e.value.replace(/[\s-]/, '');
            }
            let start = e.value.length;
            let count = 0;
            let rep = e.value.match(/[\s]{2,}/);
            let rep2 = e.value.match(/[-]{2,}/);
            let rep3 = e.value.match(/[']{2,}/);

            e.value = replaceAll(e.value, /[\s]+/, ' ').split(/[\s]/).map(word => {
                if (word != '') return word[0].toUpperCase() + word.substring(1)
            }).join(' ');
            if (rep !== null) {
                count = start - e.value.length;
            }
            e.value = e.value.split(/[-]+/).map(word => {
                if (word != '') return word[0].toUpperCase() + word.substring(1)
            }).join('-');
            if (rep2 !== null) {
                count = start - e.value.length;
            }
            e.value = e.value.split(/[']+/).map(word => {
                if (word != '') return word;
            }).join("'");
            if (rep3 !== null) {
                count = start - e.value.length;
            }
            e.value = e.value.replaceAll(',', '.').replaceAll('"', "'").replace(regExp, '');
            e.setSelectionRange(caretStart - count, caretEnd - count);
        }
    }
    if (event.keyCode === 8) {
        let start = e.value.length;
        let count = 0;
        let rep = e.value.match(/[\s]{2,}/);
        e.value = replaceAll(e.value, /[\s]+/, ' ').split(/[\s]/).map(word => {
            if (word != '') return word[0].toUpperCase() + word.substring(1)
        }).join(' ');
        if (rep !== null) {
            count = start - e.value.length;
        }
        e.value = e.value.split(' ').map((x, i) => {
            let temp = x.toLowerCase();
            return temp[0].toUpperCase() + temp.slice(1);
        }).join(' ');
        // console.log(temp.split('-'));
        e.value = e.value.split('-').map(x => {
            if (x[0] === x[0].toLowerCase())
                return x[0].toUpperCase() + x.slice(1);
            else return x
        }).join('-');
        e.setSelectionRange(caretStart - count, caretEnd - count);
    }
};