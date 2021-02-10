package pl.tomaszbuga.homeybeatmanagement.beat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BeatServiceImpl implements BeatService {
    private final BeatRepository beatRepository;

    @Autowired
    public BeatServiceImpl(BeatRepository beatRepository) {
        this.beatRepository = beatRepository;
    }

    @Override
    public List<Beat> listOfBeats() {
        return beatRepository.findAll();
    }

    @Override
    public void createBeat(Beat beat) {
        beatRepository.save(beat);
    }

    @Override
    public void updateBeat(Beat beat) {
        beatRepository.save(beat);
    }

    @Override
    public Beat getBeatById(Long id){
        return beatRepository.getOne(id);
    }

    @Override
    public boolean findBeatByBeatName(String beatName){
        List<Beat> beats = listOfBeats();
        for (Beat beat : beats) {
            if (beat.getBeatName().equals(beatName)) {
                return true;
            };
        };
        return false;
    }

    @Override
    public Beat getBeatByBeatName(String beatName){
        List<Beat> beats = listOfBeats();
        for (Beat beat : beats) {
            if (beat.getBeatName().equals(beatName)) {
                return beat;
            };
        };
        return null;
    }

    @Override
    public void deleteBeatById(Long id){
        beatRepository.deleteById(id);
    }

    @Override
    public void partialUpdatedBeat(Beat beat) {
        beatRepository.save(beat);
    }
}
