# AWS-API-Gateway-Policy-Generator

It is a simple tool that can be used with a custom authorizer to generate policy documents.
You have to feed a dictionary of policy statements keyed by unique names (called claims).
When a set of claims are fed to the generator, it in turn generates a policy document by attaching policy statements linked with the claims.

The Policy statements in the policy map are standard Amazon policy documents.

## Sample Policy Map

```javascript

const policyMap = {
    'CreateUser': [
        {'Resource': 'test resource'},
        {'Resource': 'denied resource', 'Effect': 'deny'},
        {'Resource': 'another resource', 'Action': 'execute-api:Invoke'}
    ],
    'UpdateUser': [
        {'Resource': 'some other resource'}
    ]
};

```

## Installation

```bash
npm install aws-api-gateway-policy-generator --save
```
## Usage

```javascript

const policyMap = {
    'CreateUser': [
        {'Resource': 'test resource'},
        {'Resource': 'denied resource', 'Effect': 'deny'},
        {'Resource': 'another resource', 'Action': 'execute-api:Invoke'}
    ],
    'UpdateUser': [
        {'Resource': 'some other resource'}
    ]
};

const generator = new PolicyGenerator(policyMap);

const claims = ['CreateUser', 'SomeOther'];
const document = generator.generatePolicyDocument(claims);

```

Refer the demo/ directory for a complete implementation.

## Contributing