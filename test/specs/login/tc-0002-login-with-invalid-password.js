const loginTestPage = require("../../pageobjects/02-logintestpage.js");

describe("Login", () => {
  it("should not login with an invalid password", async () => {
    await loginTestPage.open();
    await loginTestPage.login("error_user", "secret_sauce!");
    const errorMessageText = await loginTestPage.errorMessage.getText();

    expect(errorMessageText).toContain(
      "Username and password do not match any user in this service"
    );
  });
});
