# Set the base image to AdoptOpenJDK 17 with Alpine JRE
FROM eclipse-temurin:17-jdk-alpine

# Create a volume mount point at '/tmp' inside the container
VOLUME /tmp

# Copy all the JAR files from the 'target' directory of the local build context into the image
COPY target/*.jar app.jar

# Set the command to be executed when the container starts
# Here, we use 'java' to run the 'app.jar' file, making it the entry point for the application
ENTRYPOINT ["java", "-jar", "app.jar"]

# Expose port 8082 for the application to listen on when running inside the container
EXPOSE 8082

