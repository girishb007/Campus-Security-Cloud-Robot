# Campus-Security-Robot

CMPE281 Project 1

University Name: http://www.sjsu.edu/

Course: Cloud Technologies

Professor: Jerry Gao

Student: Girish Bisane https://www.linkedin.com/in/girish-bisane/

# Demo - https://youtu.be/TDmwfJMus-4

# Project Introduction

This project provides the infrastructure parts and source code needed to install a highly available, scalable campus security robot to improve campus security. 
To provide all of the aforementioned services for a group of mobile robots, we have developed a cloud-based platform integrated with virtual robot environment (AWSRoboMaker/Webots) that will facilitate communication between the robots and a cloud server.



Cloud-Based System Infrastructure 
 
![CloudArchitecture](https://user-images.githubusercontent.com/33912085/207811173-25e5bc46-2564-4c9c-b974-8d30142b4662.jpg)


# Source code organization

Source code is orgnized into the following packages:

frontend contains the code in for all 14 components (Javascript)

backend contains the backend application server code (Java)

rdshandle contains the RDS/MongoDb thin wrapper

cachehandle lambda function for cache invalidation

webots contains the code for Robot Simulation






