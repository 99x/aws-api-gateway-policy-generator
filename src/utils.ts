import {PolicyDocument, PolicyStatement} from './models';

export const createPolicyDocument =
    (policies: PolicyStatement[]): PolicyDocument => {
      const document: PolicyDocument = {Version: '2012-10-17', Statement: []};

      for (const policy of policies) {
        if (!policy.Action) policy.Action = 'execute-api:Invoke';
        if (!policy.Effect) policy.Effect = 'allow';

        document.Statement.push(policy);
      }

      return document;
    };