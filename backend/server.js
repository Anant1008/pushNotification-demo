const webpush = require('web-push');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json())
    // console.log(webpush.generateVAPIDKeys());

publicKey = 'BKv_D04AF4MHDYIObhlDaMJgTOZxdk7IXgTYvdXUHoO5z9s_uQEQQwwuhrSxx83NVBxtZcNzlElaM7gqIqQxr-0';
privateKey = 'e6XN9uXJUkPBSzbzCRyN5xNX0Xc6_E4zden4L2NOS1M';

// // const sub = {
// //     endpoint: "https://fcm.googleapis.com/fcm/send/c7VbJcxTkrQ:APA91bGc8KNQ0GwE5i4WX2OEydQBl7BbFyvN7EoMyck50fiRJPcbz5I3pfsqhmlOf09L9QqK23tgxd9Ee7xm0syqjyNyBauzc3LQTBgxR5nyBOO4HDbb3qr30BOf2vDTCNUDmQ5igiZG",
// //     expirationTime: null,
// //     keys: {
// //         p256dh: "BG_kODxWB9r3SXFbcnz8HmtlijO2beI9dCV8TfUDpgw8R6uN-c6LdqURM5LhjPPcGah6pqkHiShz-pJcpxdYpro",
// //         auth: "Nu4pNUL8rcifwehxwdHLlg"
// //     }
// // }

webpush.setVapidDetails('mailto:example@yourdomain.org', publicKey, privateKey);



app.post('/api/notification/subscribe', (req, res, next) => {
    const payload = {
        notification: {
            data: "any",
            title: "Anant sent one notification",
            body: "lorem lapsum",
            vibrate: [100, 50, 100],
        },
    };
    console.log(req.body);
    webpush.sendNotification(req.body, JSON.stringify(payload));
    res.json({ msg: "Notification sent" });
});

app.listen(3000, () => {
    console.log('server started...!!!');
})