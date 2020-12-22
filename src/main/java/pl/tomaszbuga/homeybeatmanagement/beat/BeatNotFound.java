package pl.tomaszbuga.homeybeatmanagement.beat;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class BeatNotFound extends Exception {
    public BeatNotFound()  {
        super("Beat not found!");
    }

    public BeatNotFound(String message) {
        super(message);
    }
}
