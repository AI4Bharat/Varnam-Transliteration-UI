# Varnam API endpoints

- The `API_URL` has to be set in [config.js](/lib/config.js)
- Demo API URL: https://api.varnamproject.com/

## Transliteration Query

- Endpoint: `/tl/<lang_code>/<eng_word>`
- Demo: https://api.varnamproject.com/tl/hi/bharat
- Request Type: GET
- Response JSON Fields:
  - `success`: boolean
  - `error`: Error Type (if request failed)
  - `at`: DateTime of Response
  - `result`: Array of transliterations
  - `input`: English word sent via request

## Supported Languages Query

- Endpoint: `languages`
- Demo: https://api.varnamproject.com/languages
- Request Type: GET
- Response: Array of JSONs  
  JSON Fields:
  - `LangCode`: ISO Language Code
  - `Identifier`: Language ID
  - `DisplayName`: Language name
  - `Author`: Contributors for that language
  - `CompiledDate`: Model's last updated datetime
  - `IsStable`: boolean

## Reverse Transliteration Query

- Endpoint: `/rtl/<lang_code>/<input_word>`
- Demo: https://api.varnamproject.com/rtl/hi/%E0%A4%AD%E0%A4%BE%E0%A4%B0%E0%A4%A4
- Request Type: GET
- Response JSON Fields:
  - `success`: boolean
  - `error`: Error Type (if request failed)
  - `at`: DateTime of Response
  - `result`: Array of transliterations
  - `input`: Input word sent via request

## Learn Query

An endpoint to send a user-selected transliteration to the backend. (for fine-tuning the model or continuous learning)

- Endpoint: `/learn`
- Request Type: POST (JSON body)
- Request Fields in JSON:
  - `output`: Transliteration chosen by the user
  - `lang_code`: Language Code
  - `input`: Corresponding English word
  - `topk_index`: Suggestion Index that was chosen by user
