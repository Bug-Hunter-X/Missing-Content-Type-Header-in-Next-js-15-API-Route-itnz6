# Missing Content-Type Header in Next.js 15 API Route

This repository demonstrates a common error in Next.js 15 API routes: the missing `Content-Type` header.  This can lead to unexpected behavior on the client-side, especially when fetching JSON data.

**Problem:**

When an API route doesn't explicitly set the `Content-Type` header, the client might receive the response with an unexpected `Content-Type`, causing parsing errors or incorrect handling of the data.

**Solution:**

Always explicitly set the `Content-Type` header in your API route responses, especially when returning JSON.  This ensures the client correctly interprets the data and avoids unexpected errors.

This repository includes a sample `pages/api/hello.js` file illustrating both the problematic and corrected code.