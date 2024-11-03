"use strict";
var _a;
function highlightForbiddenWords(text, forbiddenWords) {
    let updatedText = text;
    for (let word of forbiddenWords) {
        const regex = new RegExp(`\\b${word}\\b`, 'gi');
        updatedText = updatedText.replace(regex, `<del>${word}</del>`);
    }
    return updatedText;
}
(_a = document.getElementById('checkButton')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    const text = document.getElementById('text').value;
    const forbiddenWordsInput = document.getElementById('forbiddenWords').value;
    const forbiddenWords = forbiddenWordsInput.split(',').map(word => word.trim());
    const result = highlightForbiddenWords(text, forbiddenWords);
    document.getElementById('result').innerHTML = result;
});
