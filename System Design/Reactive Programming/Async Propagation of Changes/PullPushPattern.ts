/*
The push-pull pattern is a hybrid way of detecting changes and propagating them to the consumer. Instead of the producer sending the message with the data itself using the observer pattern, it sends a message containing the endpoint or the path that the consumer needs to pull to get the latest data. This pattern is used when the producer cannot send large payloads to the client on account of security or performance concerns. It will instead instruct the consumer to query a different source, which the producer has updated consistently.


                      Consumer--| 
producer --> push --> Consumer--|--> pull --> Collector Service
   |                  Consumer--|                      |
   |                                                   |
   |----------------------------------------------->Storage      
   
   
The Producer first updates Storage with new data and pushes messages to Consumers. Then, given those notifications, the consumers pull data from the Collector Service, which knows how to query the data from storage. The main benefit of this asynchronous communication flow is that the whole process is lightweight, and it can alleviate the responsibilities of the producer having to store the messages for consumers. You will find this pattern is used extensively where the consumer does not know anything about the producer but needs to access some information somehow.
*/