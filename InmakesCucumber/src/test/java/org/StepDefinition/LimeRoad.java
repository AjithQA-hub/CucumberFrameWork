package org.StepDefinition;

import org.base.BaseClass;
import org.pojo.AddToCart;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class LimeRoad extends BaseClass{
	
	@Given("To launch the chrome browser and maximize window")
	public void to_launch_the_chrome_browser_and_maximize_window() {
	   launchBrowser();
	   windowMaximize();
	}

	@When("To launch the url of limeroad application")
	public void to_launch_the_url_of_limeroad_application() {
		launchUrl("https://www.limeroad.com/"); 
	}

	@When("To click the shop men")
	public void to_click_the_shop_men() {
	   AddToCart A=new AddToCart();
	   clickBtn(A.getMen());
	}

	@When("To mouseover the women")
	public void to_mouseover_the_women() throws InterruptedException {
		AddToCart A=new AddToCart();
		Thread.sleep(3000);
		moveTheCursor(A.getWomen()); 
	}

	@When("To click the Dresses")
	public void to_click_the_Dresses() throws InterruptedException {
		AddToCart A=new AddToCart();
		Thread.sleep(3000);
		clickBtn(A.getDress());
	}

	@When("To click the first product")
	public void to_click_the_first_product() {
		AddToCart A=new AddToCart();
		clickBtn(A.getFirstPhoto());
	}

	@When("To click the size S")
	public void to_click_the_size_S() {
		AddToCart A=new AddToCart();
		clickBtn(A.getSize());
	}

	@When("To click add to cart")
	public void to_click_add_to_cart() {
		AddToCart A=new AddToCart();
		clickBtn(A.getAddToCart());
	   
	}
	

}
