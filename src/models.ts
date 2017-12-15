export interface PolicyMap { [key: string]: PolicyStatement[]; }

export interface PolicyDocument {
  Version: string;
  Statement: PolicyStatement[];
}

export interface PolicyStatement {
  Action?: string;
  Effect?: string;
  Resource?: string;
}
