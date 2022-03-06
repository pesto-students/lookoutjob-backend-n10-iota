
module.exports = {
  sendSqs(MessageBody){
// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');
// Set the region we will be using
AWS.config.update({region: 'southeast-1'});
// Create SQS service client
const sqs = new AWS.SQS({apiVersion: '2012-11-05'});
// Replace with your account id and the queue name you setup
const accountId = '228817558217';
const queueName = 'timeline';
// Setup the sendMessage parameter object
const params = {
  MessageBody: JSON.stringify(
    MessageBody
  ),
  QueueUrl:'https://sqs.ap-southeast-1.amazonaws.com/228817558217/timeline'
};
sqs.sendMessage(params, (err, data) => {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Successfully added message", data.MessageId);
  }
});





  },
  
};