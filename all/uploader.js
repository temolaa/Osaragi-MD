
let axios = require('axios')
let BodyForm = require('form-data')
let { fromBuffer } = require('file-type')
let fetch = require('node-fetch')
let fs = require('fs')
let cheerio = require('cheerio')


async function TelegraPh(input) {
    try {
        const form = new BodyForm();
        form.append("fileToUpload", fs.createReadStream(input));
        form.append("reqtype", "fileupload");

        const res = await fetch("https://catbox.moe/user/api.php", {
            method: "POST",
            body: form,
        });

        const data = await res.text();
        return data;
    } catch (e) {
        console.error('Error:', e.message);
        throw e;
    }
}

module.exports = { TelegraPh }
