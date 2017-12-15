import { Validator } from 'cognito-jwt-token-validator';
import { PolicyGenerator } from '../src/index';

const policyMap = require('./policy-map.json');

const validator = new Validator(process.env.iss, process.env.aud, false);
const generator = new PolicyGenerator(policyMap);

export const authorize = async (event, context, cb) => {
  const token = event.authorizationToken;

  if (!token) {
    return cb('Missing authorization token');
  }

  try {
    const { sub } = await validator.validate(token);

    // some db operation to obtain the claims associated with the user.
    const claims = ['UpdateUser'];

    const policyDocument = generator.generatePolicyDocument(claims);

    const response = {
      principalId: sub,
      policyDocument
    };

    console.log('Authorization successful. Sending policy document: ');
    console.log(JSON.stringify(response, null, 2));
    cb(null, response);
  } catch (err) {
    console.log('An error occurred while authorizing: ');
    console.log(err);
    cb(err);
  }
};

export const hello = (event, context, cb) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  cb(null, response);
}
