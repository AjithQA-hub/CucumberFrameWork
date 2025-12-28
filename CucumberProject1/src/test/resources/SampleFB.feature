@Feature1
Feature: To validate the account creation of fb application

@Sanity
Scenario: To create new account
Given To launch the browser and maximize the window
When To launch url of fb application
And To click the create new account button

# One dimensional map data
And To pass the firstname in firstname text box
#Key				value
|firstname1|Samuel|
|firstname2|janani|
|firstname3|Nathiya|
|firstname4|Ajith|

And To pass the secondname in secondname text box
#Two dimensional map data
And To pass mobileno or email in email text box
|password1|password2|password3|
|ajith!2233|ajith123422@#|9#003486|
|ajithnathiya@234|900348765@|bbasjsx|
|jhcuisdhi|jsjsadhshsd|jsfhu#45dshh|
|kasdjashds|jsadhuisdh|hdsa6$dga|

And To create new password using new password text box
Then To close the chrome browser