class Logger {
  log(message) {
    console.log(`[Default] ${message}`);
  }
}

class ConsoleLogger extends Logger {
  log(message) {
    console.log(`📢 Console Log: "${message}"`);
  }
}

class FileLogger extends Logger {
  log(message) {
    console.log(`📝 Writing to File: "${message}"`);
  }
}

class DatabaseLogger extends Logger {
  log(message) {
    console.log(`💾 Saving to Database: "${message}"`);
  }
}

function logSystemEvent(logger, message) {
  logger.log(message);
}

logSystemEvent(new ConsoleLogger(), "User 'Admin' logged in.");
logSystemEvent(new FileLogger(), "Backup process initiated.");
logSystemEvent(new DatabaseLogger(), "Error: Transaction failed.");
