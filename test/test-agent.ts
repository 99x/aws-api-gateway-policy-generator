import {PolicyGenerator} from '../src';

function testPolicyDocument() {
  const policyMap = {
    'GenerateDocument': [
      {'Resource': 'test resource'},
      {'Effect': 'deny', 'Resource': 'denied resource'}
    ],
    'SomeOther': [{'Resource': 'should not come'}]
  };

  const generator = new PolicyGenerator(policyMap);

  const claims = ['GenerateDocument', 'SomeOther'];
  const doc = generator.generatePolicyDocument(claims);

  console.log(doc);
}


testPolicyDocument();
