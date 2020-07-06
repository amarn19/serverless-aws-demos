exports.handler = async (event) => {
    let {username, password} = event.input;
    let operation = event.operation;
    let result="Login Unsuccessfully";
    if(username==="amar"&&password==="amar"&&operation==="login"){
        result = "login successfully"
    }
    const response = {
        statusCode: 200,
        body: JSON.stringify(result)
    };
    return response;
};