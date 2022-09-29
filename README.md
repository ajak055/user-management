# user-management

This service provides complete crud operation for a given User. 

It has 4 API's
    Create User
    Fetch User
    Update User
    Delete User

The  micro service uses mysql database to store user record.
Schema name: usermanagement
Table name: user

API details are available in swagger.

To deploy in Kubernetes, the necessary yaml files are aleady present in deploy directory.

Pre-requisites 
  1. MYSQL DB (version 8)
  2. Install schema.sql (to create schema, table and attributes)
  3. K8s cluster (if we need to run it as kubernetes services) 
