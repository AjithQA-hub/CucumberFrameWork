package org.pojo;

import org.base.BaseClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SignINPojo extends BaseClass{
	
	public SignINPojo() {
		PageFactory.initElements(driver, this);
	}
	@FindBy(xpath="//a[text()='Create new account']")
	private WebElement createNewAcc;
	
	@FindBy(xpath="(//input[@type='text'])[2]")
	private WebElement FirstNametxtBox;
	
	@FindBy(name="lastname")
	private WebElement SecondNametxtBox;
	
	@FindBy(name="reg_email__")
	private WebElement MobileorEmailtxtBox;
	
	@FindBy(name="reg_passwd__")
	private WebElement PasswordtxtBox;

	public WebElement getCreateNewAcc() {
		return createNewAcc;
	}

	public WebElement getFirstNametxtBox() {
		return FirstNametxtBox;
	}

	public WebElement getSecondNametxtBox() {
		return SecondNametxtBox;
	}

	public WebElement getMobileorEmailtxtBox() {
		return MobileorEmailtxtBox;
	}

	public WebElement getPasswordtxtBox() {
		return PasswordtxtBox;
	}

}
