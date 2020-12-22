package pl.tomaszbuga.homeybeatmanagement.beat;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.mockito.InjectMocks;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(BeatController.class)
public class BeatControllerTest {

    @Autowired
    private ObjectMapper objectMapper;

    @InjectMocks
    private BeatController beatController;

    private MockMvc mockMvc;
    private Beat beat;
    private final String baseUrl = "/api/v1/beats";
    private final String urlWithId = String.format("%s/44", baseUrl);

    @BeforeClass
    public void setup() {
        beat = new Beat();
        MockitoAnnotations.initMocks(this);
        objectMapper = new ObjectMapper();
        this.mockMvc = MockMvcBuilders
                .standaloneSetup(beatController).build();
    }

    @Test
    public void testListOfBeats() throws Exception {
        mockMvc.perform(get(baseUrl))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(content().json("[]"));
    }

    @Test
    public void testCreateBeat() throws Exception {
        mockMvc.perform(post(baseUrl)
                .contentType("application/json")
                .content(objectMapper.writeValueAsString(beat)))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(status().isCreated());
    }

    @Test
    public void testGetBeatById() throws Exception {
        mockMvc.perform(get(urlWithId)
                .contentType("application/json"))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(status().isOk());
    }

    @Test
    public void testDeleteBeatById() throws Exception {
        mockMvc.perform(delete(urlWithId)
                .contentType("application/json"))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(status().isOk());
    }

    /**
     * Test mocks beat service, therefore, as there is no beat available
     * should throw Exception
     * @throws Exception
     */
    @Test
    public void testPatchUpdateBeatShouldReturn404() throws Exception {
        mockMvc.perform(patch(urlWithId)
                .contentType("application/json")
                .content(objectMapper.writeValueAsString(beat)))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(status().isNotFound());
    }
}