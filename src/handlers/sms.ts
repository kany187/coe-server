const accountSid = process.env.NEXT_PUBLIC_TWILIO_ACCOUNT_SID;
const authToken = process.env.NEXT_PUBLIC_TWILIO_ACCOUNT_TOKEN
const client = require('twilio')(accountSid, authToken);

export const sendSMS = async (req, res) => {

    if(!req.body.phoneNumber)
        return res.send('Missing phone number ')
    
    const message = await client.messages.create({
        body: 'Hello from Congo-Estate. Thank you for your interest. An agent will be in touch with you very soon.',
        from: '+18444290913',
        to: req.body.phoneNumber, 
    })

    res.json({data: message})
}