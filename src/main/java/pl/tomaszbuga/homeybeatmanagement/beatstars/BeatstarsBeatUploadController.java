package pl.tomaszbuga.homeybeatmanagement.beatstars;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/beatstars")
public class BeatstarsBeatUploadController {

    @Value("${beatstars.username}")
    private String beatstarsUsername;

    @Value("${beatstars.password}")
    private String beatstarsPassword;

    private final BeatstarsBeatUploadService beatstarsBeatUploadService;

    @Autowired
    public BeatstarsBeatUploadController(BeatstarsBeatUploadService beatstarsBeatUploadService) {
        this.beatstarsBeatUploadService = beatstarsBeatUploadService;
    }

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public void runBeatstars() {
        beatstarsBeatUploadService
                .openLoginPage()
                .fillUsernameField(beatstarsUsername)
                .fillPasswordField(beatstarsPassword)
                .signIn()
                /*.verifyDashboardPageLoaded()*/
                .clickUploadButton()
                .clickUploadNewButton();
    }
}
