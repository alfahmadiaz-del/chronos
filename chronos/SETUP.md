# Chronos - Setup Guide

This guide provides detailed instructions for setting up Chronos, including the optional AWS backend.

## Local Setup (No AWS)

No setup is required for local-only use. Simply open `chronos/chronos.app/chronos.html` in your browser.

## AWS Backend Setup (Optional)

To enable multi-device sync, you can set up the AWS backend.

### 1. Prerequisites

*   An AWS account
*   AWS CLI installed and configured
*   Node.js and npm installed

### 2. Create AWS Resources

*   **Cognito User Pool:** For user authentication.
*   **Cognito Identity Pool:** To grant temporary AWS credentials to users.
*   **DynamoDB Table:** To store the data.
*   **API Gateway and Lambda:** To create a serverless API for data synchronization.

### 3. Configure the Application

Once you have created the AWS resources, you need to configure the Chronos app by setting the following global variables in `chronos.html`:

```javascript
window.__aws_region = 'your-aws-region';
window.__cognito_user_pool_id = 'your-user-pool-id';
window.__cognito_client_id = 'your-user-pool-client-id';
window.__identity_pool_id = 'your-identity-pool-id';
window.__api_endpoint = 'your-api-gateway-endpoint';
```

### 4. Deploy the Lambda Function

The `aws-backend-example.js` file contains a template for the Lambda function. You will need to modify this file with your AWS resource details and then deploy it to AWS Lambda.
