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
