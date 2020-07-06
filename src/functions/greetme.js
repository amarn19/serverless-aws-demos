
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
    let name = event.pathParameters.name;
    let {lang, ...info} = event.queryStringParameters || {};

    let message = `${greeting[lang] ? greeting[lang] : greeting['en'] } ${name}`;
    let response = {
        message: message,
        info: info
    }

    return {
        statusCode: 200,
        headers:{
            "Access-Control-Allow-Origin":"*"
        },
        body: JSON.stringify(response)
    }
}