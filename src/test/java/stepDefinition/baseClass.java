package stepDefinition;

import org.apache.commons.lang.RandomStringUtils;
import org.openqa.selenium.WebDriver;
import pageObjects.NopAddCustomersPage;
import pageObjects.nopCommerceLoginPage;
import pageObjects.searchCustomerPage;

public class baseClass {
    public nopCommerceLoginPage lp;
    public WebDriver driver;
    public NopAddCustomersPage addCust;
    public searchCustomerPage scp;

    public static String randomeemail(){
        String generatedstring= RandomStringUtils.randomAlphabetic(5);
        return generatedstring;
    }
}
