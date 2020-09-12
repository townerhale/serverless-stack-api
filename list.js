import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";
 //This is pretty much the same as our get.js except we only pass in the userId in the DynamoDB query call
 //This api returns a list of all the notes a user has
export const main = handler(async (event, context) => {
    const params = {
        TableName: process.env.tableName,
        // 'KeyConditionExpression' defines the condition
        // for the query
        // - 'userId = :userId': only return items with
        //matching 'userId'
        // partition key
        // 'ExpressionAttributeValues' defines the value in
        // the condition
        // - ':userId': defines 'userId' to be Identity
        // Pool identity id
        // of the authenticated user

        KeyConditionExpression: "userId = :userId",
        ExpressionAttributeValues: {
            ":userId":
    event.requestContext.identity.cognitoIdentityId
    }
 };
    const result = await dynamoDb.query(params);
 // Return the matching list of items in response body
    return result.Items;
});