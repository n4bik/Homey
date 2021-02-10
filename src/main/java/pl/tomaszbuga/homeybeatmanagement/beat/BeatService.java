package pl.tomaszbuga.homeybeatmanagement.beat;

import java.util.List;

public interface BeatService {
    public List<Beat> listOfBeats();
    public void createBeat(Beat beat);
    public void updateBeat(Beat beat);
    public Beat getBeatById(Long id);
    public boolean findBeatByBeatName(String beatName);
    public Beat getBeatByBeatName(String beatName);
    public void deleteBeatById(Long id);
    public void partialUpdatedBeat(Beat beat);
}
