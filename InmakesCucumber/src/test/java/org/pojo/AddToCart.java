package org.pojo;

import org.base.BaseClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AddToCart extends BaseClass {
	
	public AddToCart(){
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(xpath="(//div[@class='pR h48 br8 dTc vM c3 bgL wsN bxs'])[1]")
	private WebElement men;
	
	@FindBy(id="women_category")
	private WebElement women;
	
	@FindBy(xpath="(//div[@class='fs14 p48 pR'])[2]")
	private WebElement Dress;

	@FindBy(id="18024243")
	private WebElement FirstPhoto;
	
	@FindBy(id="size_28327886")
	private WebElement size;
	
	@FindBy(xpath="//div[@class='h48 bs avail selectSize bgL br4 p12 cF taC fwB gtm-atc bxs hbxs ']")
	private WebElement AddToCart;
	
	public WebElement getMen() {
		return men;
	}

	public WebElement getWomen() {
		return women;
	}

	public WebElement getDress() {
		return Dress;
	}

	public WebElement getFirstPhoto() {
		return FirstPhoto;
	}

	public WebElement getSize() {
		return size;
	}

	public WebElement getAddToCart() {
		return AddToCart;
	}

	
	

}
