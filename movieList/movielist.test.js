const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

// A beforeAll will run a single time in the beginning before all of our tests, requires a callback
beforeAll(async () => {
    await (await driver).get('http://localhost:5500/movieList/index.html')
})

// And an afterAll will do the opposite, it will run after all of our tests have ran
afterAll(async () => {
    await (await driver).quit()
})

test('step1: creating a movie',async()=>{
    await driver.findElement(By.xpath('//input')).sendKeys('superman\n')
    await driver.sleep(2000)
})

test('get the title', async() => {
    let title =  await driver.getTitle()
    console.log('Title is ' + title) 
})

test('get the text from id', async() => {
    await driver.findElement(By.id('superman')).getText()
})
