# Cloud Formation
Used to model and set up AWS resources.  Create a template describing AWS resources and CloudFormation will provision and configure them.
## Template
### Properties
- `AWSTemplateFormateVersion` *optional*
- `Description` *optional*
- `Metadata` *optional*
- `Parameters` *optional* : Allows custom values each time a stack is created or updated.
- `Rules` *optional*: Validates parameter or a combination of parameters during stack creation or update.
- `Mappings` *optional*
- `Conditions` *optional*
- `Transform` *optional*
- `Resources` *required* : Declares AWS resources to include in the stack
- `Outputs` *optional* : Declares output values to import to other stacks, return in response, or view on the AWS CloudFormation