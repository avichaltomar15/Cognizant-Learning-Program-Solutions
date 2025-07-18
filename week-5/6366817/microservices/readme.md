# Week 5 – Spring Boot Microservices Project

## Folder Naming

This `week-5/6366817/` folder follows the project instruction that requires naming the project folder using the **employee ID**.  
**6366817** is my unique Superset ID (used as employee identifier for assessment submission).

---

### How to Run

Each microservice is a standalone Maven project. Build and run them separately:
Account Service

cd 6366817/microservices/account
mvn clean package
java -jar target/account-0.0.1-SNAPSHOT.jar

Loan Service

cd 6366817/microservices/loan
mvn clean package
java -jar target/loan-0.0.1-SNAPSHOT.jar

### Project Overview

This folder contains two independent **Spring Boot REST microservices** developed using Maven:

### 1. Account Microservice

- **Path**: `6366817/microservices/account/`
- **Port**: `8080`
- **Endpoint**:  
- **Sample URL**:  
[http://localhost:8080/accounts/00987987973432](http://localhost:8080/accounts/00987987973432)

- **Sample Output**:
```json
{
  "number": "00987987973432",
  "type": "savings",
  "balance": 234343
}
```

### 2. Loan Microservice
Sample URL:
http://localhost:8081/loans/H00987987972342

Sample Output:
```
{
  "number": "H00987987972342",
  "type": "car",
  "loan": 400000,
  "emi": 3258,
  "tenure": 18
}
```
