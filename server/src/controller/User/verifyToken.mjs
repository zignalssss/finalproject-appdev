export const verifyToken = (req, res) => {
    const { cookie } = req.body;
    // Perform verification logic, maybe decrypt and validate the cookie
    // For simplicity, let's assume the cookie is just the user ID
    if (cookie) {
      // If verification succeeds, send success and userId
      res.json({ success: true, userId: cookie });
    } else {
      // If verification fails, send failure
      res.json({ success: false });
    }
  }
