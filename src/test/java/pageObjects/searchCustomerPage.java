package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.WaitHelper;

import java.util.List;

public class searchCustomerPage {
    public WebDriver ldriver;
    WaitHelper waithelper;
    public searchCustomerPage(WebDriver rdriver){
        ldriver=rdriver;
        PageFactory.initElements(ldriver,this);
        waithelper=new WaitHelper(ldriver);
    }
    @FindBy(id = "SearchEmail")
    @CacheLookup
    WebElement txtemail;
    public void setTxtemail(String email){
        waithelper.WaitforElement(txtemail,50);
        txtemail.clear();
        txtemail.sendKeys(email);
    }
    @FindBy(id = "SearchFirstName")
    @CacheLookup
            WebElement txtFname;
    public void setTxtFname(String fname){
        waithelper.WaitforElement(txtFname,50);
        txtFname.clear();
        txtFname.sendKeys(fname);
    }
    @FindBy(id = "SearchLastName")
    @CacheLookup
    WebElement txtLname;
    public void setTxtLname(String lname){
        waithelper.WaitforElement(txtLname,50);
        txtLname.sendKeys(lname);
    }
    @FindBy(id = "SearchMonthOfBirth")
    @CacheLookup
            WebElement drpdobMonth;
    @FindBy(id = "SearchDayOfBirth")
    @CacheLookup
    WebElement drpdobDay;
    @FindBy(id = "SearchCompany")
    @CacheLookup
    WebElement txtCompany;
    @FindBy(id = "SearchIpAddress")
    @CacheLookup
    WebElement txtIpAdress;
    @FindBy(xpath = "//div[@class='k-multiselect-wrap k-floatwrap']")
    @CacheLookup
            WebElement txtCustomerroles;
    @FindBy(xpath = "//li[contains(text(),'Administrators')]")
    @CacheLookup
    WebElement listAdministrators;
    @FindBy(xpath = "//li[contains(text(),'Forum Moderators')]")
    @CacheLookup
    WebElement listForum;
    @FindBy(xpath = "//li[contains(text(),'Guests')]")
    @CacheLookup
    WebElement listGuests;
    @FindBy(xpath = "//li[contains(text(),'Registered')]")
    @CacheLookup
            WebElement listRegistered;
    @FindBy(xpath = "//li[contains(text(),'Vendors')]")
    @CacheLookup
    WebElement listVendors;
    @FindBy(id = "search-customers")
    @CacheLookup
    WebElement clickSearch;
    public void ClickSearch(){
        clickSearch.click();
        waithelper.WaitforElement(clickSearch,50);
    }
    @FindBy(xpath = "//table[@role='grid']")
    @CacheLookup
    WebElement tblSresults;
    @FindBy(xpath = "//table[@id='customers-grid']")
    @CacheLookup
            WebElement table;
    @FindBy(xpath = "//table[@id='customers-grid']//tbody/tr")
    @CacheLookup
    List<WebElement> tableRows;
    public int getnoOfRows(){
        return(tableRows.size());
    }
    @FindBy(xpath = "//table[@id='customers-grid']//tbody/tr/td")
    @CacheLookup
    List<WebElement> tableCols;
    public int getnoOfCols(){
        return(tableCols.size());
    }
    public boolean searchcustomerByEmail(String email){
        boolean flag=false;
        for (int i=1;i<=getnoOfRows();i++){
            String emilid=table.findElement(By.xpath("//table[@id='customers-grid']//tbody/tr["+i+"]/td[2]")).getText();
            System.out.println(emilid);

            if (emilid.equals(email)){
                flag=true;
            }
        }
        return flag;
    }
    public boolean searchcustomerByName(String name){
        boolean flag=false;
        for (int i=1;i<=getnoOfRows();i++){
            String emilid=table.findElement(By.xpath("//table[@id='customers-grid']//tbody/tr["+i+"]/td[3]")).getText();
            String names[]=name.split("");

            if (names[0].equals("Victoria") && names[1].equals("Terces")){
                flag=true;
            }
        }
        return flag;
    }
}
