package pl.tomaszbuga.homeybeatmanagement.activity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/activities")
public class ActivityController {
    private final ActivityService activityService;

    @Autowired
    public ActivityController(ActivityService activityService){
        this.activityService = activityService;
    }

    @GetMapping
    public List<Activity> listOfActivities() {
        return activityService.listOfActivities();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public void createActivity(@RequestBody Activity activity){
        activityService.createActivity(activity);
    }

    @GetMapping("/{id}")
    public Activity getActivityById(@PathVariable("id") Long id){
        return activityService.getActivityById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteActivityById(@PathVariable("id") Long id){
        activityService.deleteActivityById(id);
    }

    @PutMapping("/{id}")
    public void setActivityAsDone(@PathVariable("id") Long id) {
        activityService.setActivityAsDone(id);
    }
}
