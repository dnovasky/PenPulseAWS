data "archive_file" "python_lambda_package" {
  type        = "zip"
  source_file = "${path.module}/lambdas/getAllPosts.py"
  output_path = "getAllPosts.zip"
}

resource "aws_lambda_function" "get_all_lambda_function" {
  function_name    = "getAllPosts"
  filename         = "getAllPosts.zip"
  source_code_hash = data.archive_file.python_lambda_package.output_base64sha256
  role             = aws_iam_role.lambda_dynamodb_role.arn
  runtime          = "python3.10"
  handler          = "getAllPosts.lambda_handler"
  timeout          = 10
}

resource "aws_lambda_function_url" "getAllPosts" {
  function_name      = aws_lambda_function.get_all_lambda_function.function_name
  authorization_type = "NONE"

  cors {
    allow_credentials = true
    allow_origins     = ["*"]
    allow_methods     = ["*"]
    allow_headers     = ["date", "keep-alive"]
    expose_headers    = ["keep-alive", "date"]
    max_age           = 86400
  }
}

output "lamda_url" {
  value = aws_lambda_function_url.getAllPosts.function_url
}