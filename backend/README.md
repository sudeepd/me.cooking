# User management

## Core ideas and metaphors
### Users and groups:
Users are human entities that signup and signin. To start with, there are 2 personas : An interviewer, and company person
Groups are logical grouping of human entities. To start with, a company is a group. Later on, an interview panel will be a group etc
Both users and groups are resources, and are associated with free form attributes


### Onboarding
User onboarding:
Allow user to sign up:
1. User reaches a signup UI from somewhere (referral/ direct nav/ any other… called the signup source)
2. User uses signup UI ( just user name and credentials , activates account)
3. User logs in and gets dropped to a landing page

Note:
 *User credentials should be entirely managed by external identity solution*
 *User onboarding is an entirely front end operation*
 *Use idp webhooks to receive notification for user lifecycle events*

### Backend :

/users is a rest resource with CRUD operations

/users resource has free form name value attributes that can added and modified in create and update operations. The names and schemas for values come from an external service

/users resource can be queried and filtered for attributes 

/groups is a rest resource with CRUD operations

/groups resource has free form name value attributes that can added and modified in create and update operations. The names and schemas for values come from an external service

/groups resource can be queried and filtered for attributes 

/schemas is a service that provides schemas for different entities

