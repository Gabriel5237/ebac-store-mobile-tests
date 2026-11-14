
import { driver } from '@wdio/globals'

describe('Navegação no aplicativo EBAC iOS', () => {
    it('Deve tocar na aba Profile', async () => {

        const { width, height } = await driver.getWindowSize()

        console.log('Largura:', width)
        console.log('Altura:', height)

        const x = Math.round(width * 0.87)
        const y = Math.round(height * 0.91)

        console.log('Tocando nas coordenadas:', x, y)

        await driver.executeScript('mobile: tap', [{ x, y }])

        await driver.pause(2000)
    })
})
