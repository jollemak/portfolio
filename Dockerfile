# Build stage
FROM golang:1.21-alpine AS builder

WORKDIR /app

# Copy go mod and sum files
COPY go.mod ./

# Download all dependencies
RUN go mod download

# Copy the source code and static files
COPY . .

# Build the application
RUN CGO_ENABLED=0 GOOS=linux go build -o portfolio

# Final stage
FROM alpine:latest

WORKDIR /app

# Install CA certificates for HTTPS
RUN apk --no-cache add ca-certificates

# Copy binary and assets from builder
COPY --from=builder /app/portfolio .
COPY --from=builder /app/static ./static
COPY --from=builder /app/templates ./templates

# Use PORT environment variable (required by fly.io)
ENV PORT=8080

# Expose the port
EXPOSE 8080

# Command to run the executable
CMD ["./portfolio"]