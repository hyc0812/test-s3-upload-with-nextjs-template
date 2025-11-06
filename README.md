This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

Add S3 policy:

```bash
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicUploadAndRead",
      "Effect": "Allow",
      "Principal": "*",
      "Action": ["s3:PutObject", "s3:GetObject"],
      "Resource": "arn:aws:s3:::my-test-upload-bucket-yong-01/*"
    }
  ]
}
```


Go to your bucket → Permissions → CORS configuration

Click Edit and paste this exact JSON:

```bash

[
  {
    "AllowedHeaders": ["*"],
    "AllowedMethods": ["PUT", "GET", "POST"],
    "AllowedOrigins": ["*"],
    "ExposeHeaders": ["ETag"]
  }
]

```

