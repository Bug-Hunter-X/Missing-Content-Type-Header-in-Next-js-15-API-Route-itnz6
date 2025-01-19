```javascript
// pages/api/hello.js
export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({ name: 'John Doe' });
}
```