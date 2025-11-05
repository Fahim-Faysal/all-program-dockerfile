## 🧰 Common Programming Languages & Build Tools for DevOps

| Language | Dependency Tool | Common Base Image | Build Cmd | Run Cmd | Notes |
|-----------|-----------------|------------------|------------|----------|-------|
| **Python** | `pip / requirements.txt` | `python:3.x-slim` | `pip install` | `python app.py` | Simple, light, common in ML |
| **Node.js** | `npm / package.json` | `node:alpine` | `npm install` | `node app.js` | Large ecosystem, microservices |
| **Java** | `Maven / Gradle` | `openjdk / eclipse-temurin` | `mvn package` | `java -jar` | Enterprise, use multi-stage |
| **Go** | `go mod` | `golang:alpine` | `go build` | `./binary` | Small, fast binaries |
| **PHP** | `composer.json` | `php:apache` | `composer install` | `php -S` | Often used with MySQL |
| **.NET** | `dotnet CLI` | `mcr.microsoft.com/dotnet` | `dotnet publish` | `dotnet app.dll` | Great for enterprise apps |
