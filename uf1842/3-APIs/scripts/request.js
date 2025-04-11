async function getPuzzle(wordCount) {
    let hiddenSentence = "Buena Suerte";
    let url = `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`;
    
    const response = await fetch(url);
    const json = await response.json();
    hiddenSentence = json.puzzle;

    return hiddenSentence;
}
