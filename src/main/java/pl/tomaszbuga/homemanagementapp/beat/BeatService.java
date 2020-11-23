package pl.tomaszbuga.homemanagementapp.beat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class BeatService {
    private final BeatRepository beatRepository;

    @Autowired
    public BeatService(BeatRepository beatRepository) {
        this.beatRepository = beatRepository;
    }

    public List<Beat> listOfBeats() {
        return beatRepository.findAll();
    }

    public void createBeat(Beat beat) {
        beatRepository.save(beat);
    }

    public void updateBeat(Beat beat) {
        beatRepository.save(beat);
    }

    public Beat getBeatById(Long id){
        return beatRepository.getOne(id);
    }

    public boolean findBeatByBeatName(String beatName){
        List<Beat> beats = listOfBeats();
        for (Beat beat : beats) {
            if (beat.getBeatName().equals(beatName)) {
                return true;
            };
        };
        return false;
    }

    public Beat getBeatByBeatName(String beatName){
        List<Beat> beats = listOfBeats();
        for (Beat beat : beats) {
            if (beat.getBeatName().equals(beatName)) {
                return beat;
            };
        };
        return null;
    }

    public void deleteBeatById(Long id){
        beatRepository.deleteById(id);
    }

    public void partialUpdatedBeat(Beat beat) {
        beatRepository.save(beat);
    }
}
