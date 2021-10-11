export function getQuote() {
        return fetch('https://api.quotable.io/random')
            .then(data => data.json())
}
