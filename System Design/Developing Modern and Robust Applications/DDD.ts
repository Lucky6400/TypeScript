/* 
Domain Driver Design 

DDD represents an approach to software development that allows us to translate complex domain business logic into software components that match their meaning and purpose. It's a way that we can design applications that speak the same language as the problems they are solving.

The core focus of DDD circles around answering questions such as how do you organize business logic? or how can you manage complexity when the application grows over time? Those are valid questions, and the answers are not definite.

A central pattern in DDD is the bounded context. This is a concept that represents a logical boundary between the separate sub-domains of the organization. Think of it as boxes that contain all the information on a particular domain, such as the user authentication domain, the logistics domain, and the shopping cart domain. For example, in a shopping cart domain, the relevant entities are Cart, Cart Item, Shipping, Price, Adjustment, and so on.

The building blocks of DDD are related to having a clear and ubiquitous language. This is a common vocabulary that we define so that when we are talking to stakeholders and domain experts, they have the same understanding. For example, when we are in the domain of financial trading, an instrument represents an asset that can be traded or seen as a package of capital that may be traded. In a different domain, an instrument could represent something completely different.
*/


/* 
Entities:
Entities represent objects that are a part of the domain and stored in a persistence layer. 

Value Objects:
These represent an object that has a particular meaning in the context of the domain and for which we want to perform certain checks. These most of the time are properties of entities.

Domain Events:
Indicators of something that has happened in a domain. Examples: Sending confirmation mail when user is registered. When a post model is saved, send a message to PostSocialService to promote it on social media.
*/