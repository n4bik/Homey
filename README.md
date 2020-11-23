# Homey - The Ultimate Beatmaking & Home Management System

### Author: Tomasz Buga

Greetings Everyone!

This is official repository of the Homey project. 
Homey's an application for the beatmakers that enables upload 
of the finished music to every major site (at least I hope so, 
as this is the core functionality). 

It's still in the early development phase.

**Technology stack 💪 :**

*Back End:*
  - Java 8
  - Spring Framework (Spring Boot)
  - SQLite 3
  - Tests are using:
    - TestNG (for Unit Tests)
    - JUnit (for Integration tests, as I've encountered issues with proper configuration of TestNG with the Spring Boot & IntelliJ)
  
*Front End:*
  - Angular
  - Bootstrap

Backend is MVC and it's serving data via API to the separate layer of UI.
Also for the API documentation I've implemented the Swagger (available at http://localhost:8080/swagger-ui/)

## Selenium Tests

I've created Test Suite with Selenium (Java) that can be found here: 
https://github.com/n4bik/HomeySelenium

## So how the hell get this to work?

*Project requires:
Apache Maven
& node.js*

**Also needs the knowledge how to configure simple SQLite3 database (or any other DB really, if you are familiar with the Spring Boot's application.properties database settings)**

I'm using macOS, so here's how to do it via terminal:
0. (Protip) Hit CMD + Space and search for "terminal" via Spotlight, it's the quickest way I know to run stuff
1. Go to Homey root directory
2. Type (without quotemarks) "sqlite3 hms.db"
3. Copy the content from the file hms-boot.sql from FamilyManagementSystem/sql
4. Paste it into terminal window
5. Hit return key
6. Voila! The tables are created and basic data populated.

**After getting database set, we can get the party started!**

**Backend run:**
1. Open Terminal
2. Go to FamilyManagementSystem root directory
3. Type (without quotemarks) "mvn clean install" and run, so everything would refresh
4. Type (without quotemarks) "mvn spring-boot:run -Drun.arguments=--debug" for a debug run on the http://localhost:8080
5. Voila! Backend should be up by now!

**Frontend run:**
1. Open Terminal
2. Go to FamilyManagementSystem/ui directory
3. Type (without quotemarks) "npm install" and run, so everything would install
4. Type (without quotemarks) "npm start" to launch app on the http://localhost:4200
5. Voila! Frontend should be up by now!

In case of any questions, please feel free to write to: kontakt [at] tomaszbuga.pl
