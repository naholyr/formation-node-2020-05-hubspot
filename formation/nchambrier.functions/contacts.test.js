const { main } = require("./contacts");

const mockResult = { data: "fake data" };

jest.mock("@hubspot/api-client", () => {
  return {
    Client: function() {
      return {
        crm: {
          contacts: {
            getAll: () => {
              return mockResult;
            },
          },
        },
      };
    },
  };
});

test("Contacts", async () => {
  const send = jest.fn();
  await main(
    {
      secrets: {
        NCHAMBRIER_API_KEY: "on s'en fout",
      },
    },
    send
  );
  expect(send).toHaveBeenCalledTimes(1);
  expect(send.mock.calls[0][0]).toEqual({
    statusCode: 200,
    body: mockResult,
  });
});
