const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event) => {
    try {
        const body = JSON.parse(event.body);

        if (!Array.isArray(body) && typeof body !== 'object') {
            throw new Error('Invalid JSON data. Expected an object or an array of objects.');
        }

        const params = {
            Bucket: 'myjson-bucket-123',  
            Key: `file-${Date.now()}.json`, 
            Body: JSON.stringify(body),
            ContentType: 'application/json'
        };

        const data = await s3.putObject(params).promise();

        return {
            statusCode: 200,
            body: JSON.stringify({
                e_tag: data.ETag,
                url: `https://${params.Bucket}.s3.amazonaws.com/${params.Key}`
            })
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: err.message })
        };
    }
};
