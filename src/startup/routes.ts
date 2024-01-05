import express from 'express';

import { createNewUser, signin} from '../handlers/users'
import listingsType from '../routes/listingsType';
import country from '../routes/countries';
import state from '../routes/states';
import city from '../routes/cities';
import location from '../routes/listingsLocation';
import propType from '../routes/propertiesType';
import listings from '../routes/listings';
import clients from '../routes/clients';

import users from '../routes/users';
import { sendSMS } from '../handlers/sms';

export default (app) => {
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
    app.use('/api', listings);
    app.use('/api', users);
    app.use('/api', listingsType);
    app.use('/api', propType)
    app.use('/api', country)
    app.use('/api', state);
    app.use('/api', city);
    app.use('/api', location);
    app.use('/api', clients);
    app.use('/sms', sendSMS);
    app.use('/user', createNewUser);
    app.use('/signin', signin)
  
}