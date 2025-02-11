const loginPage = require("../../pageobjects/loginpage.js");

describe("Login", () => {
  it("should not login with an invalid login", async () => {
    await loginPage.open();
    await loginPage.login("terror_user", "secret_sauce!");
    const errorMessageText = await loginPage.errorMessageText;

    expect(errorMessageText).toContain(
      "Username and password do not match any user in this service"
    );
  });
});
