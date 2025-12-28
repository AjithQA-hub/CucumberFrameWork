$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/SampleFB.feature");
formatter.feature({
  "name": "To validate the account creation of fb application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Feature1"
    }
  ]
});
formatter.scenario({
  "name": "To create new account",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "To launch the browser and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "FbRegistration.to_launch_the_browser_and_maximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To launch url of fb application",
  "keyword": "When "
});
formatter.match({
  "location": "FbRegistration.to_launch_url_of_fb_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the create new account button",
  "keyword": "And "
});
formatter.match({
  "location": "FbRegistration.to_click_the_create_new_account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass the firstname in firstname text box",
  "rows": [
    {
      "cells": [
        "firstname1",
        "Samuel"
      ]
    },
    {
      "cells": [
        "firstname2",
        "janani"
      ]
    },
    {
      "cells": [
        "firstname3",
        "Nathiya"
      ]
    },
    {
      "cells": [
        "firstname4",
        "Ajith"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FbRegistration.to_pass_the_firstname_in_firstname_text_box(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass the secondname in secondname text box",
  "keyword": "And "
});
formatter.match({
  "location": "FbRegistration.to_pass_the_secondname_in_secondname_text_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass mobileno or email in email text box",
  "rows": [
    {
      "cells": [
        "password1",
        "password2",
        "password3"
      ]
    },
    {
      "cells": [
        "ajith!2233",
        "ajith123422@#",
        "9#003486"
      ]
    },
    {
      "cells": [
        "ajithnathiya@234",
        "900348765@",
        "bbasjsx"
      ]
    },
    {
      "cells": [
        "jhcuisdhi",
        "jsjsadhshsd",
        "jsfhu#45dshh"
      ]
    },
    {
      "cells": [
        "kasdjashds",
        "jsadhuisdh",
        "hdsa6$dga"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FbRegistration.to_pass_mobileno_or_email_in_email_text_box(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To create new password using new password text box",
  "keyword": "And "
});
formatter.match({
  "location": "FbRegistration.to_create_new_password_using_new_password_text_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To close the chrome browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FbRegistration.to_close_the_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
});