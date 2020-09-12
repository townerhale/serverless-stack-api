import AWS from "aws-sdk";

const client = new AWS.DynamoDB.DocumentClient();
//Use the promise form of the DynamoDB methods, which are a method for managing
//asynchronous code that serves as an alternative to the standard callback function syntax.
export default {
    get : (params) => client.get(params).promise(),
    put : (params) => client.put(params).promise(),
    query : (params) => client.query(params).promise(),
    update: (params) => client.update(params).promise(),
    delete: (params) => client.delete(params).promise(),
};