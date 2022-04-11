package pageObjects;

import net.bytebuddy.asm.Advice;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class nopCommerceLoginPage {
    public WebDriver ldriver;

    public nopCommerceLoginPage(WebDriver rdriver){
        ldriver=rdriver;
        PageFactory.initElements(rdriver, this);
    }
   @FindBy(id = "Email")
    @CacheLookup
    WebElement txtEmail;

    @FindBy(id = "Password")
    @CacheLookup
    WebElement txtPassword;

    @FindBy(tagName = "button")
    @CacheLookup
    WebElement btnClick;

    @FindBy(xpath = "//a[contains(text(),'Logout')]")
    @CacheLookup
    WebElement lkClick;

    public void setTxtEmail(String email) {
        txtEmail.clear();
        txtEmail.sendKeys(email);
    }

    public void setTxtPassword(String pwd) {
        txtPassword.clear();
        txtPassword.sendKeys(pwd);
    }

    public void setBtnClick() {
        btnClick.click();
    }

    public void setLkClick() {
        lkClick.click();
    }
}
