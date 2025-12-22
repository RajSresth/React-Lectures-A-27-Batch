import { verifyAccessToken } from "../utils/token.js";

export const auth = (req, res, next) => {
  const accessToken =
    req.headers["authorization"]?.split(" ")[1] || req.cookie?.accessToken;
  console.log("accessToken:", accessToken);

  if (!accessToken) {
    return res.status(401).json({
      success: false,
      msg: "Unauthorized User, Please Login",
    });
  }
  try {
    const decoded = verifyAccessToken(
      accessToken,
      process.env.JWT_SECRET_ACCESS_KEY
    );

    console.log("decoded:", decoded);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Internal Server Erro",
    });
  }
};
