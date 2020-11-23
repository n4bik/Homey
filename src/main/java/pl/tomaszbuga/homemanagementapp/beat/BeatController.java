package pl.tomaszbuga.homemanagementapp.beat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/beats")
public class BeatController {
    private final BeatService beatService;

    private final String beatName = "beatName";
    private final String creatorFirstName = "creatorFirstName";
    private final String creatorLastName = "creatorLastName";
    private final String description = "description";
    private final String mp3TaggedUrl = "mp3TaggedUrl";
    private final String mp3UntaggedUrl = "mp3UntaggedUrl";
    private final String wavTaggedUrl = "wavTaggedUrl";
    private final String wavUntaggedUrl = "wavUntaggedUrl";
    private final String publishDate = "publishDate";
    private final String releaseDate = "releaseDate";
    private final String squareCoverGfxUrl = "squareCoverGfxUrl";
    private final String youtubeThumbnailGfxUrl = "youtubeThumbnailGfxUrl";

    private final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy[-]MM[-]dd'T'HH[:]mm[:]ss.SSSX");
    private LocalDate date;

    @Autowired
    public BeatController(BeatService beatService){
        this.beatService = beatService;
    }

    @GetMapping
    public List<Beat> listOfBeats() {
        return beatService.listOfBeats();
    }

    //TODO: Reasearch if should retrun ID in post message (disabled by default @ Spring REST)
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(value = HttpStatus.CREATED, reason = "Beat created!")
    public ResponseEntity<Void> createBeat(@RequestBody Beat beat) throws BeatAlreadyExists {
        if (!beatService.findBeatByBeatName(beat.getBeatName())){
            beatService.createBeat(beat);
            return ResponseEntity.created(URI.create(String.format("/beats/%d", beat.getId()))).build();
        } else {
            throw new BeatAlreadyExists(String.format("Beat with name %s already exists!", beat.getBeatName()));
        }
    }

    @GetMapping("/{id}")
    public Beat getBeatById(@PathVariable("id") Long id){
        return beatService.getBeatById(id);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBeatById(@PathVariable("id") Long id){
        beatService.deleteBeatById(id);
        return ResponseEntity.ok().build();
    }

    @PatchMapping("/{id}")
    @ResponseStatus(value = HttpStatus.NO_CONTENT, reason = "Beat details partial updated!")
    public void updateBeat(@RequestBody Map<String, String> updates, @PathVariable Long id) throws BeatNotFound {
        Beat beat = beatService.getBeatById(id);
        if (beat == null) {
            throw new BeatNotFound(String.format("Beat with ID %d don't exists!", id));
        }
        partialUpdate(beat, updates);
    }

    private void partialUpdate(Beat beat, Map<String, String> updates) {
        updates.forEach((key, value) -> {
            if (value != null) {
                switch (key) {
                    case beatName:
                        beat.setBeatName(value);
                        break;
                    case description:
                        beat.setDescription(value);
                        break;
                    case creatorFirstName:
                        beat.setCreatorFirstName(value);
                        break;
                    case creatorLastName:
                        beat.setCreatorLastName(value);
                        break;
                    case releaseDate:
                        date = LocalDate.parse(value, formatter);
                        beat.setReleaseDate(date);
                        break;
                    case publishDate:
                        date = LocalDate.parse(value, formatter);
                        beat.setPublishDate(date);
                        break;
                    case squareCoverGfxUrl:
                        beat.setSquareCoverGfxUrl(value);
                        break;
                    case youtubeThumbnailGfxUrl:
                        beat.setYoutubeThumbnailGfxUrl(value);
                        break;
                    case mp3TaggedUrl:
                        beat.setMp3TaggedUrl(value);
                        break;
                    case mp3UntaggedUrl:
                        beat.setMp3UntaggedUrl(value);
                        break;
                    case wavTaggedUrl:
                        beat.setWavTaggedUrl(value);
                        break;
                    case wavUntaggedUrl:
                        beat.setWavUntaggedUrl(value);
                        break;
                }
            }
        });
        beatService.partialUpdatedBeat(beat);
    }
}
