module.exports = (app) => {
    const users = require('../controllers/usersController.js');
    const notification = require('../controllers/notificationController.js');

    // Create a new Note
    app.post('/users/signup', users.create);

    // Retrieve all Notes
    app.post('/users/login', users.login);

    // Send Notification Using twilio
    app.post('/users/notification', notification.SendNotification);
    
    // Retrieve a single Note with noteId
   // app.get('/signup/:noteId', users.findOne);

    // Update a Note with noteId
    //app.put('/signup/:noteId', users.update);

    // Delete a Note with noteId
    //app.delete('/signup/:noteId', users.delete);
}