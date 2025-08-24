class Notification {
  send(message) {
    console.log(`[Notification] ${message}`);
  }
}

class EmailNotification extends Notification {
  send(message) {
    console.log(`📧 Email sent to user: "${message}"`);
  }
}

class SMSNotification extends Notification {
  send(message) {
    console.log(`📱 SMS sent to user: "${message}"`);
  }
}

class PushNotification extends Notification {
  send(message) {
    console.log(`🔔 Push notification sent to user: "${message}"`);
  }
}

function notifyAll(users, notification) {
  users.forEach((user) =>
    notification.send(`Hello, ${user}! Your account is ready.`)
  );
}

let registeredUsers = ["Mr A", "Mr B", "Mr C"];

notifyAll(registeredUsers, new EmailNotification());
notifyAll(registeredUsers, new SMSNotification());
notifyAll(registeredUsers, new PushNotification());
