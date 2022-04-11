package stepDefinition;

import cucumber.api.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import pageObjects.NopAddCustomersPage;
import pageObjects.nopCommerceLoginPage;
import pageObjects.searchCustomerPage;

public class nopCommerceLoginSteps_TC_001 extends baseClass
{


    @Given("^User Launch chrome browser$")
    public void user_Launch_chrome_browser() throws Throwable {
        System.setProperty("webdriver.chrome.driver",System.getProperty("user.dir")+"//Drivers/chromedriver.exe");
        driver=new ChromeDriver();
        lp=new nopCommerceLoginPage(driver);
        driver.manage().window().maximize();

    }

    @When("^User open Url \"([^\"]*)\"$")
    public void user_open_Url(String url) throws Throwable {
        driver.get(url);

    }

    @When("^ser Enter Email as \"([^\"]*)\" and password as \"([^\"]*)\"$")
    public void ser_Enter_Email_as_and_password_as(String email, String password) throws Throwable {
      lp.setTxtEmail(email);
      lp.setTxtPassword(password);
    }

    @When("^Click On Login$")
    public void click_On_Login() throws Throwable {
       lp.setBtnClick();
    }

    @Then("^Page Title Should Be \"([^\"]*)\"$")
    public void page_Title_Should_Be(String title) throws Throwable {
         if(driver.getPageSource().contains("Login was unsuccessful")){
             driver.close();
             Assert.assertTrue(false);
         }else {
             Assert.assertEquals(title,driver.getTitle());
         }
    }

    @When("^User Click on Logout link$")
    public void user_Click_on_Logout_link() throws Throwable {
      lp.setLkClick();
      Thread.sleep(3000);
    }

    @Then("^close browser$")
    public void close_browser() throws Throwable {
        driver.quit();

    }
    @Then("^user can view dashboard$")
    public void user_can_view_dashboard() throws Throwable {
        addCust=new NopAddCustomersPage(driver);
        Assert.assertEquals("Dashboard / nopCommerce administration",addCust.getPageTitle());

    }

    @When("^user Click on customer menu$")
    public void user_Click_on_customer_menu() throws Throwable {
        Thread.sleep(3000);
        addCust.LnkCustomersMenu();
    }

    @When("^Click On Customers menu item$")
    public void click_On_Customers_menu_item() throws Throwable {
        Thread.sleep(2000);
        addCust.LnkCustomersMenuitem();

    }

    @When("^Click on Add new button$")
    public void click_on_Add_new_customer_page() throws Throwable {
        Thread.sleep(2000);
        addCust.BtnAddnew();
    }
    @Then("^User can view add new customer page$")
    public void User_can_view_add_new_customer_page(){
        Assert.assertEquals("Add a new customer / nopCommerce administration",addCust.getPageTitle());
    }

    @When("^user enter customer info$")
    public void user_enter_customer_info() throws Throwable {
        String email=randomeemail()+"@gmail.com";
        addCust.setTxtEmail(email);
        addCust.setTxtPassword("vinod1234");
        addCust.setTxtFname("vinod");
        addCust.setTxtLname("nasina");
        addCust.setTxtDob("07/07/1994");
        addCust.setTxtCompany("vinod software");
        addCust.RdTaxex();
        addCust.setTxtNewsletter("Test store 2");
        Thread.sleep(5000);
        addCust.setTxtCustomerroles("Guests");
        Thread.sleep(5000);
        addCust.setDrpmgrVendor("Vendor 2");
        addCust.setTxtAdminComment("This is for testing..........");
    }

    @When("^Click on Save button$")
    public void click_on_Save_button() throws Throwable {
        addCust.ClickSave();
    }

    @Then("^User can view conformation message \"([^\"]*)\"$")
    public void user_can_view_conformation_message(String msg) throws Throwable {
        Assert.assertTrue(driver.findElement(By.tagName("body")).getText().contains("The new customer has been added successfully."));
    }
    @When("^Enter Customer email$")
    public void enter_Customer_email() throws Throwable {
        scp=new searchCustomerPage(driver);
        scp.setTxtemail("victoria_victoria@nopCommerce.com");
    }

    @When("^Click on Search Button$")
    public void click_on_Search_Button() throws Throwable {
       scp.ClickSearch();
        Thread.sleep(3000);


    }

    @Then("^User Should Found Email in the Search table$")
    public void user_Should_Found_Email_in_the_Search_table() throws Throwable {
       boolean status= scp.searchcustomerByEmail("victoria_victoria@nopCommerce.com");
       Assert.assertEquals(true,status);
    }

    @When("^Enter customer first name$")
    public void enter_customer_first_name() throws Throwable {
        scp=new searchCustomerPage(driver);
        scp.setTxtFname("Victoria");
    }

    @When("^Enter customer last Name$")
    public void enter_customer_last_Name() throws Throwable {
        scp.setTxtLname("Terces");
    }

    @Then("^User Should Found name in the Search table$")
    public void user_Should_Found_name_in_the_Search_table() throws Throwable {
          boolean status=scp.searchcustomerByEmail("Victoria Terces");
          Assert.assertEquals(true,status);
    }
}
