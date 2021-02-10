package pl.tomaszbuga.homeybeatmanagement.beatstars;

import org.apache.hc.core5.net.URIBuilder;
import org.springframework.stereotype.Service;
import pl.tomaszbuga.homeybeatmanagement.beatstars.pages.LoginPage;

import static com.codeborne.selenide.Selenide.open;

@Service
public class BeatstarsBeatUploadService {

    public LoginPage openLoginPage() {
        open(generateOauthUrl());
        return new LoginPage();
    }

    private String generateOauthUrl() {
        return new URIBuilder()
                .setScheme("https")
                .setHost("oauth.beatstars.com")
                .addParameter("app", "WEB_MARKETPLACE")
                .addParameter("version", "3.3.2234")
                .addParameter("origin", "https://www.beatstars.com/")
                .addParameter("send_callback", "true")
                .addParameter("t", "dark-theme")
                .toString();
    }
}