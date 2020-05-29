// https://hubspot-developers-16mzixv-7482495.hs-sites.com/_hcms/api/formation/glongchamp/contacts.js

const hubspot = require("@hubspot/api-client");

exports.main = async (context, send) => {
  const client = new hubspot.Client({
    apiKey: "376e2161-5731-4a4a-94f5-51dff846bee5",
  });
  const contacts = await client.crm.contacts.getAll();
  send({
    body: contacts,
    statusCode: 200,
  });
};
