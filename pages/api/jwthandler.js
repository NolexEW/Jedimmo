const jwt = require('jsonwebtoken');
require('dotenv').config();

export function getUserIdFromToken(token) {
  try {
    return jwt(token).user.id;
  } catch (error) {
    // Gérer les erreurs de vérification du JWT (par exemple, jeton invalide, expiré, etc.)
    return error;
  }
}

export function isTokenValid(token) {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        // Gérer les erreurs de vérification du JWT (par exemple, jeton invalide, expiré, etc.)
        return error;
    }
}