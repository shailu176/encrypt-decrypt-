function caesarShift(text, key) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let c = text[i];
        if (c.match(/[a-z]/i)) {
            const code = text.charCodeAt(i);
            let base = (code >= 65 && code <= 90) ? 65 : 97;
            let shifted = ((code - base + key) % 26 + 26) % 26 + base;
            result += String.fromCharCode(shifted);
        } else {
            result += c;
        }
    }
    return result;
}

function processCipher() {
    const mode = document.getElementById('mode').value;
    const message = document.getElementById('message').value;
    let key = parseInt(document.getElementById('key').value);
    if (isNaN(key) || key < 1 || key > 25) {
        alert("Please enter a valid key between 1 and 25.");
        return;
    }

    if (mode === 'decrypt') {
        key = -key;
    }

    const output = caesarShift(message, key);
    document.getElementById('output').textContent = output;
}
