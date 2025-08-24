class Notification {
  send(message) {
    console.log(`Sending a generic notification: "${message}"`);
  }
}

class EmailNotification extends Notification {
  send(message) {
    console.log(`📧 Email sent: "${message}"`);
  }
}

class SMSNotification extends Notification {
  send(message) {
    console.log(`📱 SMS sent: "${message}"`);
  }
}

let userNotifications = [new EmailNotification(), new SMSNotification()];

userNotifications.forEach((notifier) =>
  notifier.send("Your package is out for delivery!")
);
