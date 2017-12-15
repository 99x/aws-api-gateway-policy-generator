import * as Logger from 'debug';

import {PolicyDocument, PolicyMap, PolicyStatement} from './models';
import {createPolicyDocument} from './utils';

const debug = Logger('aws-api-gateway-policy-generator');

export class PolicyGenerator {
  constructor(private policyMap: PolicyMap) {}

  generatePolicyDocument(claims: string[]) {
    debug('Generating policy document.');
    debug('Claims: ' + JSON.stringify(claims));

    const policies: PolicyStatement[] = [];
    for (const claim of claims) {
      if (this.policyMap[claim]) {
        for (const policy of this.policyMap[claim]) {
          policies.push(policy);
        }
      }
    }
    const document = createPolicyDocument(policies);
    debug('Policy document generated.');
    return document;
  }
}

export {PolicyMap, PolicyStatement, PolicyDocument};