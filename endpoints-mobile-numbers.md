# https://api.snapmint.com/v1/logins/send_otp
- payload -> {"mobile":"1234567890","type":"user","origin":"snap_checkout"}
- fetch("https://api.snapmint.com/v1/logins/send_otp", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9,hi;q=0.8,la;q=0.7",
    "authorization": "Bearer undefined",
    "content-type": "application/json; charset=UTF-8",
    "sec-ch-ua": "\"Chromium\";v=\"104\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"104\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "Referer": "https://emis.snapmint.com/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "{\"mobile\":\"1234567890\",\"type\":\"user\",\"origin\":\"snap_checkout\"}",
  "method": "POST"
});

# https://www.decathlon.in/api/login/sendotp
- payload -> {"param":"1234567890","source":1}
- fetch("https://www.decathlon.in/api/login/sendotp", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9,hi;q=0.8,la;q=0.7",
    "content-type": "application/json;charset=UTF-8",
    "sec-ch-ua": "\"Chromium\";v=\"104\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"104\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "cookie": "nlbi_1211515=XqBQQ8ON/376YmPGm3nl+gAAAAD3zGYMQ8xucYzj806KQp22; visid_incap_1211515=d9R0yEFhSgmmh1MzaQLCjEyV8mIAAAAAQUIPAAAAAAA413asduvC5amOTwS3rU+L; incap_ses_1523_1211515=pP97HVfBG1ZRz2yAqMgiFUyV8mIAAAAAtJX/KXNLQ6uENtFr3at1Bw==; pincodeTooltip=true; pincode=452001; city=Indore; state=Karnataka; location=location",
    "Referer": "https://www.decathlon.in/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "{\"param\":\"1234567890\",\"source\":1}",
  "method": "POST"
});

# https://www.acko.com/lp/new-bike/api/send_otp
- payload -> {"phone":"1234567890"}
- fetch("https://www.acko.com/lp/new-bike/api/send_otp", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9,hi;q=0.8,la;q=0.7",
    "content-type": "application/json",
    "custom-cookie": "trackerid=fOiX-fGUH5967ST_qntOhA; acko_visit=ExANe2IB6Q5rCJmf15-9xQ; AWSALB=jRlVE5C5Tm0w0xFJI+sBBru5ndf5/i32EwuFU0Uy9jsI50/S7aLtTgYxZDe7BEluMZnYE0KwqRkwZmFZYxPYqw8K1dhskI+WzmU3JkYF3VL3pKtyMGoU3wfBCZzu; AWSALBCORS=jRlVE5C5Tm0w0xFJI+sBBru5ndf5/i32EwuFU0Uy9jsI50/S7aLtTgYxZDe7BEluMZnYE0KwqRkwZmFZYxPYqw8K1dhskI+WzmU3JkYF3VL3pKtyMGoU3wfBCZzu",
    "sec-ch-ua": "\"Chromium\";v=\"104\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"104\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-landing-path": "/lp/new-bike",
    "x-landing-url": "https://www.acko.com/lp/new-bike/bike/checkout/details?proposal_id=MLhjPTzbTrGyjA1CBtz4MQ&step=details&flow=undefined",
    "cookie": "trackerid=fOiX-fGUH5967ST_qntOhA; acko_visit=ExANe2IB6Q5rCJmf15-9xQ; AWSALB=jRlVE5C5Tm0w0xFJI+sBBru5ndf5/i32EwuFU0Uy9jsI50/S7aLtTgYxZDe7BEluMZnYE0KwqRkwZmFZYxPYqw8K1dhskI+WzmU3JkYF3VL3pKtyMGoU3wfBCZzu; AWSALBCORS=jRlVE5C5Tm0w0xFJI+sBBru5ndf5/i32EwuFU0Uy9jsI50/S7aLtTgYxZDe7BEluMZnYE0KwqRkwZmFZYxPYqw8K1dhskI+WzmU3JkYF3VL3pKtyMGoU3wfBCZzu",
    "Referer": "https://www.acko.com/lp/new-bike/bike/checkout/details?proposal_id=MLhjPTzbTrGyjA1CBtz4MQ&step=details&flow=undefined",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "{\"phone\":\"1234567890\"}",
  "method": "POST"
});

# https://api.nnnow.com/d/apiV2/otp/generateOtp/v1/flash
- payload --> {"mobileNumber":"1234567890","otpTemplateId":"5b4e2e49b70e040008ffbcbe"}
- fetch("https://api.nnnow.com/d/apiV2/otp/generateOtp/v1/flash", {
  "headers": {
    "accept": "application/json",
    "accept-language": "en-US,en;q=0.9,hi;q=0.8,la;q=0.7",
    "bbversion": "v2",
    "clientsessionid": "1665439339693",
    "content-type": "application/json",
    "correlationid": "8d91e852-54e7-4653-bbd3-da4193b3c2e4",
    "module": "odin",
    "sec-ch-ua": "\"Chromium\";v=\"104\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"104\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "Referer": "https://www.nnnow.com/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "{\"mobileNumber\":\"1234567890\",\"otpTemplateId\":\"5b4e2e49b70e040008ffbcbe\"}",
  "method": "POST"
});

