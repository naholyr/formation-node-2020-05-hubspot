const hubspot = require("@hubspot/api-client");

exports.main = async (content, send) => {
  const client = new hubspot.Client({
    apiKey: "376e2161-5731-4a4a-94f5-51dff846bee5",
  });
  const contacts = await client.crm.contacts.getAll(); // Promise<Array<Contact>>
  send({ body: contacts, statusCode: 200 });
};
