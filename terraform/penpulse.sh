#!/bin/bash

# Update the system
sudo yum -y update

# Install Apache web server
sudo yum -y install httpd
sudo yum -y install mod_ssl

# Start Apache web server
sudo systemctl start httpd.service

# Enable Apache to start at boot
sudo systemctl enable httpd.service

sudo yum install git -y