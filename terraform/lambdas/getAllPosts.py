import json
import boto3
from boto3.dynamodb.conditions import Key, Attr

# Initialize the DynamoDB resource
dynamodb = boto3.resource('dynamodb')

def lambda_handler(event, context):
    # Specify the table
    table = dynamodb.Table('blog-table')
    
    try:
        # Scan the entire table to get all items (not optimal for large datasets)
        response = table.scan()
        
        # Extract the items (posts) from the response
        items = response.get('Items', [])
        
        # Return a successful response with the blog posts
        return {
            'statusCode': 200,
            'body': items
        }
    
    except Exception as e:
        # In case of an error, return a failure response
        return {
            'statusCode': 500,
            'body': json.dumps(f"Error retrieving posts: {str(e)}")
        }