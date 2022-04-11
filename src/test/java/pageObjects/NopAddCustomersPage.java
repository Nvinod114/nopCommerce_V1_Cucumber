package pageObjects;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class NopAddCustomersPage {
    public WebDriver ldriver;
    public NopAddCustomersPage(WebDriver rdriver){
        ldriver=rdriver;
        PageFactory.initElements(ldriver,this);
    }
    public String getPageTitle(){
        return ldriver.getTitle();
    }
    @FindBy(xpath = "(//li[@class='nav-item has-treeview']/following-sibling::li)[2]")
    @CacheLookup
    WebElement lnkCustomersMenu;
    public void LnkCustomersMenu(){
        lnkCustomersMenu.click();
    }
    @FindBy(xpath = "(//a[@class='nav-link'])[22]")
    @CacheLookup
            WebElement lnkCustomersMenuitem;
    public void LnkCustomersMenuitem() {
        lnkCustomersMenuitem.click();
    }



    @FindBy(xpath = "//a[@class='btn btn-primary']")
    @CacheLookup
    WebElement btnAddnew;

    public void BtnAddnew() {
        btnAddnew.click();
    }

    @FindBy(id = "Email")
    @CacheLookup
            WebElement txtEmail;

    public void setTxtEmail(String Email) {
        txtEmail.sendKeys(Email);
    }

    @FindBy(id = "Password")
    @CacheLookup
    WebElement txtPassword;

    public void setTxtPassword(String Password) {
        txtPassword.sendKeys(Password);
    }

    @FindBy(id = "FirstName")
    @CacheLookup
            WebElement txtFname;

    public void setTxtFname(String Fname) {
        txtFname.sendKeys(Fname);
    }

    @FindBy(id = "LastName")
    @CacheLookup
    WebElement txtLname;

    public void setTxtLname(String Lname) {
        txtLname.sendKeys(Lname);
    }

    @FindBy(id = "Gender_Male")
    @CacheLookup
            WebElement rdmGender;
    @FindBy(id = "Gender_Female")
    @CacheLookup
    WebElement rdfGender;

    public void setRdGender(String gender) {
        if(gender.equals("Male")){
            rdmGender.click();
        }else if(gender.equals("Female")){
            rdfGender.click();
        }else{
            rdmGender.click();
        }

    }
    @FindBy(id = "DateOfBirth")
    @CacheLookup
    WebElement txtDob;

    public void setTxtDob(String dob) {
        txtDob.sendKeys(dob);

    }
    @FindBy(id = "Company")
    @CacheLookup
            WebElement txtCompany;

    public void setTxtCompany(String Company) {
        txtCompany.sendKeys(Company);
    }
    @FindBy(name = "IsTaxExempt")
    @CacheLookup
    WebElement rdTaxex;

    public void RdTaxex() {
       rdTaxex.click();
    }

    @FindBy(xpath = "(//div[@role='listbox'])[1]")
    @CacheLookup
            WebElement txtNewsletter;
    @FindBy(xpath = "(//li[text()='Your store name']")
    @CacheLookup
    WebElement listStroename;
    @FindBy(xpath = "//li[text()='Test store 2']")
    @CacheLookup
            WebElement listTestStore;

    public void setTxtNewsletter(String Role) {
        txtNewsletter.click();
        WebElement listitem;
        if(Role.equals("Your store name")){
            listitem=listStroename;
        }else if(Role.equals("Test store 2")){
            listitem=listTestStore;
        }else{
            listitem=listStroename;
        }

        JavascriptExecutor js= (JavascriptExecutor) ldriver;
        js.executeScript("arguments[0].click();",listitem);
        listitem.click();
    }

    @FindBy(xpath = "(//input[@role='listbox'])[2]")
    @CacheLookup
    WebElement txtCustomerroles;
    @FindBy(xpath = "//li[text()='Forum Moderators']")
    @CacheLookup
    WebElement txtForumM;
    @FindBy(xpath = "//li[text()='Administrators']")
    @CacheLookup
            WebElement listAdministrators;
    @FindBy(xpath = "//li[text()='Guests']")
    @CacheLookup
    WebElement listGuests;
    @FindBy(xpath = "//li[text()='Registered']")
    @CacheLookup
            WebElement listRegistered;
    @FindBy(xpath = "//li[text()='Vendors']")
    @CacheLookup
    WebElement listVendors;

    public void setTxtCustomerroles(String role) {
        txtCustomerroles.click();
        WebElement listitem1;
        if(role.equals("Forum Moderators"))
        {
           listitem1=txtForumM;
        }else if(role.equals("Administrators")){
            listitem1=listAdministrators;
        }else if(role.equals("Guests")){
            listitem1=listGuests;
        }else if(role.equals("Registered")){
            listitem1=listRegistered;
        }else if(role.equals("Vendors")){
            listitem1=listVendors;
        }
        else
        {
            listitem1=listRegistered;
        }
        listitem1.click();
        JavascriptExecutor js= (JavascriptExecutor) ldriver;
        js.executeScript("arguments[0].click();",listitem1);
    }
    @FindBy(id = "VendorId")
    @CacheLookup
            WebElement drpmgrVendor;

    public void setDrpmgrVendor(String value) {
        Select drp=new Select(drpmgrVendor);
        drp.selectByVisibleText(value);
    }
    @FindBy(id = "AdminComment")
    @CacheLookup
    WebElement txtAdminComment;

    public void setTxtAdminComment(String Comment) {
       txtAdminComment.sendKeys(Comment);
    }
    @FindBy(name = "save")
    @CacheLookup
    WebElement clickSave;

    public void ClickSave(){
        clickSave.click();
    }
}
