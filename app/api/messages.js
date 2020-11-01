import client from './client';

const contactSeller = (messageInfo) => client.post('/messages', messageInfo);

export default {
    contactSeller
}