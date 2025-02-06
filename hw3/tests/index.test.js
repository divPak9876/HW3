const fs = require('fs');
const $ = require('jquery');

test('test selectEvent', () => {
    // Read the index.html file
    var html = fs.readFileSync('public/index.html', 'utf8');
    expect(html).toEqual(expect.anything()); // Ensure file is read properly

    // Load the HTML into Jest's mock DOM
    document.body.innerHTML = html;

    // Verify the <h1> element contains the expected text
    expect($('h1').html()).toBe("Cheesecake Order Form");
});
