package org.StepDefinition;

import io.cucumber.datatable.*;

import java.util.List;
import java.util.Map;

import org.base.BaseClass;
import org.pojo.SignINPojo;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FbRegistration extends BaseClass{
	
	SignINPojo s;
	@Given("To launch the browser and maximize the window")
	public void to_launch_the_browser_and_maximize_the_window() {
		launchBrowser();
		windowMaximize();
	}

	@When("To launch url of fb application")
	public void to_launch_url_of_fb_application() {
		launchUrl("https://www.facebook.com/");
	}
	
	@When("To click the create new account button")
	public void to_click_the_create_new_account_button() {
		 s=new SignINPojo();
		  clickBtn(s.getCreateNewAcc());
	}

	@When("To pass the firstname in firstname text box")
	public void to_pass_the_firstname_in_firstname_text_box(DataTable d) throws InterruptedException {
		Thread.sleep(3000);
		Map<String, String> m=d.asMap(String.class, String.class);
	  s=new SignINPojo();
	  passText(m.get("firstname3"), s.getFirstNametxtBox());
	  
	}

	@When("To pass the secondname in secondname text box")
	public void to_pass_the_secondname_in_secondname_text_box() {
		s=new SignINPojo();
		passText("V", s.getSecondNametxtBox());
	}

	@When("To pass mobileno or email in email text box")
	public void to_pass_mobileno_or_email_in_email_text_box(DataTable d) {

		List<Map<String, String>> m = d.asMaps();
		s=new SignINPojo();
		passText(m.get(1).get("password1"), s.getMobileorEmailtxtBox());
	}

	@When("To create new password using new password text box")
	public void to_create_new_password_using_new_password_text_box() {
		s=new SignINPojo();
		passText("Ajith!123", s.getPasswordtxtBox());
	}

	@Then("To close the chrome browser")
	public void to_close_the_chrome_browser() {
	   closeEntireBrowser();
	}



}
