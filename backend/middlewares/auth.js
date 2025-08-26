import jwt from "jsonwebtoken";
const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.json({ success: false, message: "Access dinied. Login Again" });
  }
  try {
    const decoded_token = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded_token.id;

    next();
  } catch (error) {
    console.error(error);
    res.jspn({
      success: false,
      message: "Server Error. PLease Try Again",
    });
  }
};

export { authMiddleware };
