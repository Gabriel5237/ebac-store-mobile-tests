
import { $ } from '@wdio/globals'

class HomePage {

    async openMenu(menu) {
        const menuButton = await $(`~tab-${menu}`)

        await menuButton.waitForDisplayed()
        await menuButton.click()
    }

    async search() {
        const searchButton = await $(
            '-ios predicate string:label CONTAINS "Search Products" OR name CONTAINS "Search Products"'
        )

        await searchButton.waitForDisplayed()
        await searchButton.click()
    }
}

export default new HomePage()
