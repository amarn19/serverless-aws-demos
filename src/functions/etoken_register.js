exports.handler = async (event) => {
    let {username, password} = event.input;
    let operation = event.operation;
    let result = "Registration unsuccessfull";
    if(operation==="register"){
      result="registered successfully";
    }
    const response = {
        statusCode: 200,
        headers:{
            "Access-Control-Allow-Origin":"*"
        },
        body: JSON.stringify(result)
    };
    return response;
};