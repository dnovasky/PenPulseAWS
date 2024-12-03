resource "aws_dynamodb_table" "blog_table" {
  name           = "blog-table"
  billing_mode   = "PROVISIONED"
  write_capacity = 10
  read_capacity  = 10
  hash_key       = "post_id"
  range_key      = "author"

  attribute {
    name = "post_id"
    type = "S"
  }

  attribute {
    name = "author"
    type = "S"
  }

  attribute {
    name = "title"
    type = "S"
  }

  attribute {
    name = "body"
    type = "S"
  }

  attribute {
    name = "timestamp"
    type = "S"
  }

  attribute {
    name = "category"
    type = "S"
  }

  attribute {
    name = "imageUrl"
    type = "S"
  }

  attribute {
    name = "likes"
    type = "N"
  }

  attribute {
    name = "featured"
    type = "S"
  }

  global_secondary_index {
    name            = "CategoryIndex"
    hash_key        = "category"
    projection_type = "ALL"

    # Optional write and read capacity settings if not using PAY_PER_REQUEST
    write_capacity = 5
    read_capacity  = 5
  }

  global_secondary_index {
    name            = "PublishedDateIndex"
    hash_key        = "timestamp"
    projection_type = "ALL"

    # Optional write and read capacity settings if not using PAY_PER_REQUEST
    write_capacity = 5
    read_capacity  = 5
  }

  global_secondary_index {
    name            = "TitleIndex"
    hash_key        = "title"
    projection_type = "ALL"

    # Optional write and read capacity settings if not using PAY_PER_REQUEST
    write_capacity = 5
    read_capacity  = 5
  }

    global_secondary_index {
    name            = "BodyIndex"
    hash_key        = "body"
    projection_type = "ALL"

    # Optional write and read capacity settings if not using PAY_PER_REQUEST
    write_capacity = 5
    read_capacity  = 5
  }

  global_secondary_index {
    name            = "featuredIndex"
    hash_key        = "featured"
    projection_type = "ALL"

    # Optional write and read capacity settings if not using PAY_PER_REQUEST
    write_capacity = 5
    read_capacity  = 5
  }

  global_secondary_index {
    name            = "LikeIndex"
    hash_key        = "likes"
    projection_type = "ALL"

    # Optional write and read capacity settings if not using PAY_PER_REQUEST
    write_capacity = 5
    read_capacity  = 5
  }

  global_secondary_index {
    name            = "urlIndex"
    hash_key        = "imageUrl"
    projection_type = "ALL"

    # Optional write and read capacity settings if not using PAY_PER_REQUEST
    write_capacity = 5
    read_capacity  = 5
  }

  tags = {
    Name        = "BlogDynamoDBTable"
    Environment = "Production"
  }
}

# Trigger a local script (AWS CLI or Python) to insert data after table creation
resource "null_resource" "load_data" {
  provisioner "local-exec" {
    command = "aws dynamodb batch-write-item --request-items fileb://batch-write-blog.json"
  }

  # Ensure it only runs after the DynamoDB table is created
  depends_on = [aws_dynamodb_table.blog_table]
}