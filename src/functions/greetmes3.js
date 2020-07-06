
// whenever there is image upload there is lamda function triggered 
const greeting = {
    "en": "Hello",
    "fr": "Bonjour",
    "hi": "Namaste",
    "es": "Hola",
    "pt": "Olá",
    "ur": "Assalamo aleikum",
	"it": "Ciao",
    "de": "Hallo" 
}

exports.handler = async (event) => {
    let name = "amar";
    let lang = "hi";
    let message = `${greeting[lang] ? greeting[lang] : greeting['en'] } ${name}`;
    let response = {
        message: message
    }
    console.log(JSON.stringify(response));

    return {
        statusCode: 200,
        body: JSON.stringify(response)
    }
}