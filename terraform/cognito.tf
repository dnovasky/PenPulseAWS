# Cognito User Pool
resource "aws_cognito_user_pool" "penpulse-users" {
  name = "pen-pulse-user-pool"

  auto_verified_attributes = ["email"]

  password_policy {
    minimum_length    = 8
    require_lowercase = true
    require_uppercase = true
    require_numbers   = true
    require_symbols   = false
  }
}

# Cognito User Pool Client
resource "aws_cognito_user_pool_client" "pen-pulse_client" {
  name            = "pen-pulse-client"
  user_pool_id    = aws_cognito_user_pool.penpulse-users.id
  generate_secret = false

  allowed_oauth_flows          = ["code", "implicit"]
  allowed_oauth_scopes         = ["email", "openid", "profile"]
  supported_identity_providers = ["COGNITO"]

  callback_urls = ["https://${aws_instance.pen_pulse.public_ip}"]
  logout_urls   = ["https://${aws_instance.pen_pulse.public_dns}/logout"]

  allowed_oauth_flows_user_pool_client = true

  depends_on = [ aws_instance.pen_pulse ]
}

# Hosted UI Domain
resource "aws_cognito_user_pool_domain" "pen-pulse_domain" {
  domain       = "pen-pulse-auth-domain" # Must be unique
  user_pool_id = aws_cognito_user_pool.penpulse-users.id
}

output "userPoolId" {
  value = aws_cognito_user_pool.penpulse-users.id
}

output "clientId" {
  value = aws_cognito_user_pool_client.pen-pulse_client.id
}