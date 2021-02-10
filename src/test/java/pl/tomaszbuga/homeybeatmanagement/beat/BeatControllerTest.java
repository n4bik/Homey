package pl.tomaszbuga.homeybeatmanagement.beat;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import java.util.Arrays;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(BeatController.class)
public class BeatControllerTest {

    @Autowired
    private ObjectMapper objectMapper;
    private MockMvc mockMvc;

    @InjectMocks
    private BeatController beatController;

    @Mock
    private BeatService beatService;

    private final String baseUrl = "/api/v1/beats";
    private final String urlWithId = String.format("%s/44", baseUrl);

    @BeforeClass
    public void setup() {
        MockitoAnnotations.initMocks(this);
        objectMapper = new ObjectMapper();
        this.mockMvc = MockMvcBuilders
                .standaloneSetup(beatController)
                .build();
    }

    @Test
    public void testListOfBeats() throws Exception {
        Beat beat = new Beat();
        when(beatService.listOfBeats())
                .thenReturn(Arrays.asList(beat));
        mockMvc.perform(get(baseUrl))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(content().json("[" + beat.toString() + "]"));
    }

    @Test
    public void testCreateBeat() throws Exception {
        Beat beat = new Beat();
        mockMvc.perform(post(baseUrl)
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(beat)))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(status().isCreated());
    }

    @Test
    public void testGetBeatById() throws Exception {
        Beat beat = new Beat();
        when(beatService.getBeatById(44L)).thenReturn(beat);
        mockMvc.perform(get(urlWithId)
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(status().isOk())
                .andExpect(content().json(beat.toString()));
    }

    @Test
    public void testDeleteBeatById() throws Exception {
        mockMvc.perform(delete(urlWithId)
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(status().isOk());
    }

    @Test
    public void testPatchUpdateBeat() throws Exception {
        Beat beat = new Beat();

        mockMvc.perform(patch(urlWithId)
                .contentType(MediaType.APPLICATION_JSON)
                .content(beat.toString()))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(status().isNoContent());
    }
}