const fs = require('fs');
const path = require('path');

// Middleware para generar reportes
const loggerMiddleware = (req, res, next) => {
  const logMessage = `[${new Date().toISOString()}] Ruta consultada: ${req.method} ${req.url}\n`;

  // Escribe el log en un archivo
  const logFilePath = path.join(__dirname, 'reportes.log');
  fs.appendFile(logFilePath, logMessage, (err) => {
    if (err) {
      console.error("Error escribiendo el reporte:", err);
    }
  });

  console.log(logMessage.trim()); // También mostrar en consola
  next(); // Continua con la siguiente función middleware o ruta
};

module.exports = {loggerMiddleware}