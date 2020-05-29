const hubspot = require("@hubspot/api-client");

exports.main = async (context, send) => {
  const hubspotClient = new hubspot.Client({
    apiKey: "376e2161-5731-4a4a-94f5-51dff846bee5",
  });

  const myEmail = context.body.monemail;

  const contactObj = {
    properties: {
      email: myEmail,
      firstname: "Loïc",
      lastname: "BURDET-AULAS",
    },
  };

  try {
    // Creation de contact si non existant
    const createContactResponse = await hubspotClient.crm.contacts.basicApi.create(
      contactObj
    );
    send({
      body: { action: "create", result: createContactResponse.body },
      statusCode: 201,
    });
  } catch (err) {
    if (err.statusCode === 409) {
      err.response.body.correlationId;
      // Si contact existant on update
      const searchResponse = await hubspotClient.crm.contacts.searchApi.doSearch(
        {
          filterGroups: [
            {
              filters: [
                {
                  propertyName: "email",
                  operator: "EQ",
                  value: myEmail,
                },
              ],
            },
          ],
          limit: 1,
        }
      );
      const foundContact = searchResponse.body.results[0];
      if (!foundContact) {
        send({ body: { message: "WTF" }, statusCode: 500 });
      } else {
        const updateContactResponse = await hubspotClient.crm.contacts.basicApi.update(
          foundContact.id,
          {
            properties: {
              lastname: "BURDET-AULAS bis",
            },
          }
        );
        send({
          body: { action: "update", result: updateContactResponse.body },
          statusCode: 200,
        });
      }
    } else {
      console.log(Object.keys(err.response));
      send({
        body: {
          message: err.message,
          body: err.body,
          statusCode: err.statusCode,
          name: err.name,
          body: err.response.body,
        },
        statusCode: err.statusCode,
      });
    }
  }
};
