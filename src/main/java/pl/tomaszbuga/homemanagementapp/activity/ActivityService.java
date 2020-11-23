package pl.tomaszbuga.homemanagementapp.activity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

@Service
public class ActivityService {
    private final ActivityRepository activityRepository;
    private LocalDate date = LocalDate.now();

    @Autowired
    public ActivityService(ActivityRepository activityRepository) {
        this.activityRepository = activityRepository;
    }
    public List<Activity> listOfActivities() {
        return activityRepository.findAll();
    }

    public void createActivity(Activity activity) {
        activityRepository.save(activity);
    }

    public Activity getActivityById(Long id){
        return activityRepository.getOne(id);
    }

    public void deleteActivityById(Long id){
        activityRepository.deleteById(id);
    }

    public void setActivityAsDone(Long id) {
        Activity activity = activityRepository.getOne(id);
        activity.setDone(true);
        activity.setCompletionDate(Date.valueOf(date));
        activityRepository.save(activity);
    }
}
