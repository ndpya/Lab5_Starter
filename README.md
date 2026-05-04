# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

## 1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

You would not a unit test to test the "message" feature of a messaging application. This feature should be split into multiple (categories of) unit tests, for instance, one that checks that a user can write a message, another that checks if the message can be sent succesfully, another if the reciever is able to recieve the message, and other tests for any edge cases. 

## 2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes, you would use a unit test to test the "max message length" feature of a messaging application since this feature is a small portion of the application and is contained within the main input component (without impacting other large components).