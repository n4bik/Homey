package pl.tomaszbuga.homeybeatmanagement.beat;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class BeatAlreadyExists extends Exception {
    public BeatAlreadyExists()  {
        super("Beat with such name already exists!");
    }

    public BeatAlreadyExists(String message) {
        super(message);
    }
}
