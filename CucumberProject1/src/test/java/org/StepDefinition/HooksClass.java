package org.StepDefinition;

import org.base.BaseClass;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class HooksClass extends BaseClass {
	
	@Before(order=1)
	//precondition
	private void precondition2() {
		launchBrowser();
		System.out.println("launch the browser");
	}
	@Before(order=2)
	private void precondition1() {
		windowMaximize();
		System.out.println("Maxmize the window");
	}
	@Before(order=3,value="@Sanity")
	private void precondition3() {
		System.out.println("Precondition3");
	}
	
	@After(order=5,value="@Sanity")
	//post Condition
	private void postcondition1() {
		System.out.println("Take Screenshot of Scenarios");
	}
	@After(order=4)
	private void postcondition2() {
		closeEntireBrowser();
		System.out.println("close the Browser");
	}

}
