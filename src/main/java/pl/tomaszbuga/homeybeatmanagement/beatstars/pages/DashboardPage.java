package pl.tomaszbuga.homeybeatmanagement.beatstars.pages;

import com.codeborne.selenide.SelenideElement;

import static com.codeborne.selenide.Selenide.$x;

public class DashboardPage {
    private SelenideElement
            uploadButton = $x("//button[@class='mat-menu-trigger btn-upload ng-star-inserted']"),
            uploadNewButton = $x("//span[contains(text(), 'Upload new')]");

    public DashboardPage clickUploadButton() {
        uploadButton.click();
        return this;
    }

    public DashboardPage clickUploadNewButton() {
        uploadNewButton.click();
        return this;
    }
}
