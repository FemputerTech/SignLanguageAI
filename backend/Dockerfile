# Use Google Cloud SDK's container as the base image
FROM python:3.11-slim

# Specify my e-mail address as the maintainer of the container image
LABEL maintainer="mleicht@pdx.edu"

# Set the working directory of the container to /app
WORKDIR /app

# Copy the contents of the current directory into the container directory /app
COPY . /app

# Install the Python packages specified by requirements.txt into the container
RUN apt update -y && apt install -y python3-pip && pip3 install -r requirements.txt

# Set the parameters to the program
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]