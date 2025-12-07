package org.stepdefinition;

import org.base.BaseClass;
import org.pojo.FbLoginPojo;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FbLogin2 extends BaseClass {
	
	FbLoginPojo f;
	
	@Given("User has to launch the browser and maximize the window")
	public void user_has_to_launch_the_browser_and_maximize_the_window() {
	   launchBrowser();
	   windowMaximize();
	}

	@When("User has to hit the facebook url")
	public void user_has_to_hit_the_facebook_url() {
	   launchUrl("https://en-gb.facebook.com/");
	}

	@When("User has to pass the data {string} in email field")
	public void user_has_to_pass_the_data_in_email_field(String email) {
	    f=new FbLoginPojo();
	    passText(email, f.getEmail());
	}

	@When("User has to pass the data {string} in password field")
	public void user_has_to_pass_the_data_in_password_field(String pass) {
	    f=new FbLoginPojo();
	    passText(pass, f.getPassword());
	}

	@When("User has to click the login button")
	public void user_has_to_click_the_login_button() {
	    f=new FbLoginPojo();
	    clickBtn(f.getLoginBtn());
	}

	@Then("User has to close the browser")
	public void user_has_to_close_the_browser() {
		closeEntireBrowser();
	}




}
