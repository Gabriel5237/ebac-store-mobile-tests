
import { $ } from '@wdio/globals'

class ProfilePage {

    async profileName(name) {
        const profile = await $(
            `-ios predicate string:label == "${name}" OR name == "${name}"`
        )

        await profile.waitForDisplayed()

        return profile
    }
}

export default new ProfilePage()
