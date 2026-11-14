
import { $ } from '@wdio/globals'

class LoginPage {

    get email() {
        return $(
            '-ios predicate string:label == "Email" OR name == "Email" OR value == "Email"'
        )
    }

    get password() {
        return $(
            '-ios predicate string:label == "Password" OR name == "Password" OR value == "Password"'
        )
    }

    get btnLogin() {
        return $(
            '-ios predicate string:label == "Login" OR name == "Login"'
        )
    }

    async login(email, password) {
        await this.email.waitForDisplayed()
        await this.email.setValue(email)

        await this.password.waitForDisplayed()
        await this.password.setValue(password)

        await this.btnLogin.waitForDisplayed()
        await this.btnLogin.click()
    }
}

export default new LoginPage()
