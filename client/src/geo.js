
import AWS from 'aws-sdk/dist/aws-sdk-react-native.js'

AWS.config.region = 'us-west-2'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-west-2:3319d034-4bd8-42c3-9624-069f42118ab3',
});

// Make the call to obtain credentials
AWS.config.credentials.get(async function(){

  // Credentials will be available when this function is called.
  // var accessKeyId = AWS.config.credentials.accessKeyId;
  // var secretAccessKey = AWS.config.credentials.secretAccessKey;
  // var sessionToken = AWS.config.credentials.sessionToken;
  console.log('AWS.config.credentials=', AWS.config.credentials)

const location = new AWS.Location();

// rsp.Results contains search results for geocoding
const rsp = await location.searchPlaceIndexForText({
   IndexName: "Test2Index",
   Text: "Omaha, NE",
   FilterCountries: ["USA"],
   BiasPosition: [41.316043398734365, -96.14937867767621]
}).promise();

console.log('rsp.Results=', rsp.Results)

});

// let credentials = AWS.config.credentials
// console.log('credentials=', credentials)