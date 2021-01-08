console.log("Converting resume from PDF to DOCX")

const fs = require("fs")
const CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client')
const defaultClient = CloudmersiveConvertApiClient.ApiClient.instance
// Configure API key authorization: Apikey
const Apikey = defaultClient.authentications['Apikey']

require("dotenv").config({
  path: `.env`,
})

Apikey.apiKey = process.env['CLOUDMERSIVE']

// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
// Apikey.apiKeyPrefix = 'Token'
const apiInstance = new CloudmersiveConvertApiClient.ConvertDocumentApi()

// File | Input file to perform the operation on.
// const inputFile = "../static/resume.pdf"
var inputFile = fs.readFileSync(__dirname + "/../static/resume.pdf")

// TODO Promisify and integrate with gatsby-node.js
apiInstance.convertDocumentPdfToDocx(inputFile, (error, data, response) => {
  if (error) {
    console.error(error)
  } else {
    const {statusCode} = response
    if(statusCode.toString().startsWith(2)){
      fs.writeFileSync(__dirname + "/../static/resume.docx", data)
      console.log("DOCX Conversion Successful")
    } else {
      console.log(response)
    }
  }
})

/**
 * // TODO cache result of the api request inside .cache once netlify plugin for cacheing is enabled
 * Then via https://docs.netlify.com/configure-builds/build-hooks/ when the jsonresume is updated
 * i will add a regenerate_resume_doc env to trigger updating the cached resume.
 */
