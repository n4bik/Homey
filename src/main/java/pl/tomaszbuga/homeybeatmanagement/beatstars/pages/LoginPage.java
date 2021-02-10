package pl.tomaszbuga.homeybeatmanagement.beatstars.pages;

import com.codeborne.selenide.SelenideElement;

import static com.codeborne.selenide.Selenide.$x;

public class LoginPage {
    private SelenideElement
            usernameField = $x("//input[@placeholder='Type your email or username']"),
            passwordField = $x("//input[@placeholder='Type your password']"),
            signInButton = $x("//button[@class='action-element primary']");

    public LoginPage fillUsernameField(String username) {
        usernameField.setValue(username);
        return this;
    }

    public LoginPage fillPasswordField(String password) {
        passwordField.setValue(password);
        return this;
    }

    public DashboardPage signIn() {
        signInButton.click();
        return new DashboardPage();
    }
}
