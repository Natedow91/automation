const {Builder, Capabilities} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const { By } = require('selenium-webdriver')

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5501/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

const addMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('The Batman');
    await driver.findElement(By.xpath('//button[text()="Add"]')).click();
    
    const movie = await driver.findElement(By.xpath('//li'));

    expect(movie.isDisplayed()).toBeTruthy();
}

const crossOff = async driver => {
    await driver.findElement(By.xpath('//span')).click();
}

const reCrossOff = async driver => {
    await driver.findElement(By.xpath('//span')).click();
}

const deleteMovie = async driver => {
    await driver.findElement(By.xpath('//button[@id="TheBatman"]')).click();
}

test('add a movie to the list', async () => {
    await addMovie(driver);
    await driver.sleep(2000);
})


test('cross off the movie name', async () => {
    await crossOff(driver);
    await driver.sleep(2000);
})

test('delete the cross off from the movie name', async () => {
    await reCrossOff(driver);
    await driver.sleep(2000);
})

test('delete the movie name', async () => {
    await deleteMovie(driver);
    await driver.sleep(2000);
})


