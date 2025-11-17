class LoginPage {
    constructor(page) {
        this.page = page;
        // Better: Use labels or placeholders
        this.usernameInput = page.getByPlaceholder('email@example.com');
        this.passwordInput = page.getByPlaceholder('enter your passsword');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.errorMessage = page.getByText('*Email is required');
    }

async goTo(){
    await this.page.goto("https://rahulshettyacademy.com/client");
}
async login(username, password)
{
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await this.page.waitForLoadState('networkidle');
}
async getErrorMessage(){
  await this.errorMessage.waitFor({ state: 'visible', timeout: 5000 });
    const text = await this.errorMessage.textContent();
    return text.trim();
}
}
module.exports = {LoginPage};