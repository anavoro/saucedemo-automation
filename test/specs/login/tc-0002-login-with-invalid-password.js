const loginPage = require("../../pageobjects/loginpage.js");

describe("Login", () => {
  it("should not login with an invalid password", async () => {
    await loginPage.open();
    await loginPage.login("error_user", "secret_sauce!");
    const errorMessageText = await loginPage.errorMessage.getText();

    expect(errorMessageText).toContain(
      "Username and password do not match any user in this service"
    );
  });
});
