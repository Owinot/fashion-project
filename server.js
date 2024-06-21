const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

const mpesaConfig = {
    consumerKey: 'Gz1ntEXhd9ly1ZR7uE0bGzujDdZP9uRBdr6r0ONXL9EA2uyu',
    consumerSecret: 'OdZuU8Bgy97KqJWryEkrtvZGkciFtqTF7FYMAQPppC8cXWpPZrbKkq96fCWB6Hfi',
    shortcode: 'NA',
    lipaNaMpesaOnlineUrl: 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
    callbackUrl: ''
};

app.post('/api/mpesa/pay', async (req, res) => {
    const { phone, amount } = req.body;
    try {
        const tokenResponse = await axios.get('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest', {
            auth: {
                username: mpesaConfig.consumerKey,
                password: mpesaConfig.consumerSecret
            }
        });
        const token = tokenResponse.data.access_token;

        const stkPushResponse = await axios.post(mpesaConfig.lipaNaMpesaOnlineUrl, {
            BusinessShortCode: mpesaConfig.shortcode,
            Password: new Buffer.from(`${mpesaConfig.shortcode}${process.env.LIPA_NA_MPESA_PASSKEY}${new Date().toISOString().replace(/[-:]/g, '').slice(0, 14)}`).toString('base64'),
            Timestamp: new Date().toISOString().replace(/[-:]/g, '').slice(0, 14),
            TransactionType: 'CustomerPayBillOnline',
            Amount: amount,
            PartyA: phone,
            PartyB: mpesaConfig.shortcode,
            PhoneNumber: phone,
            CallBackURL: mpesaConfig.callbackUrl,
            AccountReference: 'Order123',
            TransactionDesc: 'Payment for order 123'
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        res.json({ success: true, message: 'Payment initiated', data: stkPushResponse.data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Payment failed', error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
