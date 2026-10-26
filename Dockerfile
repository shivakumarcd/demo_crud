# Use Java 21 with development tools to build the application.
FROM eclipse-temurin:21-jdk AS build

# Create and use this folder inside the temporary build container.
WORKDIR /workspace

# Copy the Gradle build files and Gradle wrapper into the container.
COPY gradlew settings.gradle build.gradle ./

# Copy the Gradle wrapper support files into the container.
COPY gradle ./gradle

# Download the project dependencies before copying source code.
# This helps Docker reuse this step during future builds.
RUN ./gradlew --no-daemon dependencies

# Copy the Java application source code into the container.
COPY src ./src

# Build the Spring Boot application and create its JAR file.
RUN ./gradlew --no-daemon bootJar

# Start a new, smaller image containing only Java needed to run the app.
FROM eclipse-temurin:21-jre

# Create and use this folder inside the final container.
WORKDIR /app

# Copy the JAR created by the build stage into the final image.
COPY --from=build /workspace/build/libs/*.jar app.jar

# Document that the application listens on port 8080 inside the container.
# This does not connect the container port to your computer automatically.
EXPOSE 8080

# Start the Spring Boot application when the container starts.
ENTRYPOINT ["java", "-jar", "app.jar"]
