const hubspot = require("@hubspot/api-client");
const debug = require("debug")("contacts");

exports.main = async (context, send) => {
  console.log("env", process.env.DEBUG);
  debug(context);
  const client = new hubspot.Client({
    apiKey: context.secrets.NCHAMBRIER_API_KEY,
  });
  const contacts = await client.crm.contacts.getAll(); // Promise<Array<Contact>>
  send({ body: contacts, statusCode: 200 });
};
