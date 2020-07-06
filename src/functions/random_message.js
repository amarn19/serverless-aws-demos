var messages = [
    "aws",
    "serverless",
    "lamda",
    "dynamodb",
    "api gateway",
    "iam roles",
    "step functions",
    "docker"
    ];
exports.handler = async (event) => {
    let message = messages[Math.floor(Math.random()*8)];
    // TODO implement
    console.log("logging message");
    console.warn("test warn");
    console.info("info message");
    console.error("test error message");
    return message;
};
