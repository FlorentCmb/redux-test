import translationToFr from './translationToFr.json'

const Translate = (text, language) => {
    switch (language) {
        case 'French':
            return translationToFr[text]
        case 'English':
        default:
            return text
    }
}

export default Translate