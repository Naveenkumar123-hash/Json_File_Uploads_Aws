const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async () => {
    try {
        const params = {
            Bucket: 'myjson-bucket-123' 
        };

        const s3Objects = await s3.listObjectsV2(params).promise();
        const allData = [];

        for (const object of s3Objects.Contents) {
            const data = await s3.getObject({
                Bucket: params.Bucket,
                Key: object.Key,
            }).promise();

            allData.push(JSON.parse(data.Body.toString()));
        }

        return {
            statusCode: 200,
            body: JSON.stringify(allData.flat()),
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: err.message })
        };
    }
};
