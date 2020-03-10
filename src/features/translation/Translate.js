import translationToFr from './translationToFr.json'

const Translate = (text, language) => {
    switch (language) {
        case 'fr':
            return translationToFr[text]
        default:
            return text
    }
}

export default Translate