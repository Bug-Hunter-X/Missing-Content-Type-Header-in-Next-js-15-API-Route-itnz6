```javascript
// pages/api/hello.js
export default function handler(req, res) {
  // Add the following line to fix the bug
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({ name: 'John Doe' });
}