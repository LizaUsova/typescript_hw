function highlightForbiddenWords(text: string, forbiddenWords: string[]): string {
    let updatedText = text;

    for (let word of forbiddenWords) {
        const regex = new RegExp(`\\b${word}\\b`, 'gi');
        updatedText = updatedText.replace(regex, `<del>${word}</del>`);
    }

    return updatedText;
}

document.getElementById('checkButton')?.addEventListener('click', function() {
    const text = (document.getElementById('text') as HTMLInputElement).value;
    const forbiddenWordsInput = (document.getElementById('forbiddenWords') as HTMLInputElement).value;
    const forbiddenWords = forbiddenWordsInput.split(',').map(word => word.trim());

    const result = highlightForbiddenWords(text, forbiddenWords);
    document.getElementById('result')!.innerHTML = result;
});
