package pl.tomaszbuga.homeybeatmanagement.beat;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import net.minidev.json.JSONObject;
import org.apache.commons.lang3.RandomStringUtils;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import static io.restassured.RestAssured.*;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class BeatControllerIntegrationTest {

    @LocalServerPort
    private int port;

    private HttpHeaders headers;
    private final String baseUrl = "/api/v1/beats";

    @Before
    public void setUp() {
        headers = new HttpHeaders();

        RestAssured.baseURI = "http://localhost";
        RestAssured.port = port;

        headers.setContentType(MediaType.APPLICATION_JSON);
    }

    @Test
    public void verifyThatUserCanGetListOfAllBeats() {
        get(baseUrl).then()
                .assertThat().statusCode(200);
    }

    /**
     * Checks if the User can add beat to the list and verifies it
     * with the GET call
     */
    @Test
    public void verifyThatUserCanAddBeatToTheList() {
        JSONObject beatJsonObject = generateBeat();
        String beatName = (String) beatJsonObject.get("beatName");

        given().headers(headers)
                .contentType(ContentType.JSON)
                .body(beatJsonObject)
                .post(baseUrl)
                .then()
                .assertThat().statusCode(201);

        get(createUrlWithBeatId(beatName))
                .then()
                .assertThat().statusCode(200);
    }

    @Test
    public void verifyThatUserCannotAddBeatWithIdToTheList() {
        JSONObject beatJsonObject = generateBeatWithId();
        String beatName = (String) beatJsonObject.get("beatName");

        given().headers(headers)
                .contentType(ContentType.JSON)
                .body(beatJsonObject)
                .post(baseUrl)
                .then()
                .assertThat().statusCode(500);

        get(createUrlWithBeatId(beatName))
                .then()
                .assertThat().statusCode(400);
    }

    @Test
    public void verifyThatUserCanFindBeatById() {
        JSONObject beatJsonObject = generateBeat();
        String beatName = (String) beatJsonObject.get("beatName");
        /*
        Create beat to get (later in test)
         */
        given().headers(headers)
                .contentType(ContentType.JSON)
                .body(beatJsonObject)
                .post(baseUrl);

        get(createUrlWithBeatId(beatName))
                .then()
                .assertThat().statusCode(200);
    }

    @Test
    public void verifyThatUserCanRemoveBeatById() {
        JSONObject beatJsonObject = generateBeat();
        String beatName = (String) beatJsonObject.get("beatName");

        /*
        Create beat to remove (later in test)
         */
        given().headers(headers)
                .contentType(ContentType.JSON)
                .body(beatJsonObject)
                .post(baseUrl);

        delete(createUrlWithBeatId(beatName))
                .then()
                .assertThat().statusCode(200);
    }

    private Map<String, String> getBeats() {
        Response response;
        List<String> beatNames;
        List<String> ids;
        Map<String, String> beats = new HashMap<>();

        response = get(baseUrl);

        beatNames = response.jsonPath().getList("beatName");
        ids = response.jsonPath().getList("id");

        for (int i = 0; i < beatNames.size(); i++) {
            beats.put(ids.get(i), beatNames.get(i));
        }

        return beats;
    }

    /**
     * Method creates URL based on the base URL and beatID value.
     * BeatID value is set to "noSuchBeat" by default, so it
     * won't return any valid URL in case of an empty Optional.
     *
     * @param beatName
     * @return
     */
    private String createUrlWithBeatId(String beatName) {
        String beatId = "noSuchBeat";
        Map<String, String> beats = getBeats();

        Optional<Map.Entry<String, String>> beatEntry = beats.entrySet()
                .stream()
                .filter(beat -> beat.getValue().equals(beatName))
                .findFirst();

        if (beatEntry.isPresent())
            beatId = String.valueOf(beatEntry.get().getKey());

        return baseUrl + "/" + beatId;
    }

    private JSONObject generateBeatWithId() {
        String generatedString = RandomStringUtils.randomAlphabetic(10);
        JSONObject beatJsonObject = new JSONObject();

        beatJsonObject.put("id", 1);
        beatJsonObject.put("beatName", generatedString);
        beatJsonObject.put("description", generatedString + " - Beat Description");
        beatJsonObject.put("creatorFirstName", "Tomasz");
        beatJsonObject.put("creatorLastName", "Buga");

        return beatJsonObject;
    }

    private JSONObject generateBeat() {
        String generatedString = RandomStringUtils.randomAlphabetic(10);
        JSONObject beatJsonObject = new JSONObject();

        beatJsonObject.put("beatName", generatedString);
        beatJsonObject.put("description", generatedString + " - Beat Description");
        beatJsonObject.put("creatorFirstName", "Tomasz");
        beatJsonObject.put("creatorLastName", "Buga");

        return beatJsonObject;
    }
}