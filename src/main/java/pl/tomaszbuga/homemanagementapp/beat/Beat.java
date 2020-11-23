package pl.tomaszbuga.homemanagementapp.beat;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Beat {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String beatName;
    private String description;
    private String creatorFirstName;
    private String creatorLastName;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDate releaseDate;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDate publishDate;

    private String squareCoverGfxUrl;
    private String youtubeThumbnailGfxUrl;
    private String mp3TaggedUrl;
    private String mp3UntaggedUrl;
    private String wavTaggedUrl;
    private String wavUntaggedUrl;

    public String getBeatName() {
        return beatName;
    }

    public void setBeatName(String beatName) {
        this.beatName = beatName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCreatorFirstName() {
        return creatorFirstName;
    }

    public void setCreatorFirstName(String creatorFirstName) {
        this.creatorFirstName = creatorFirstName;
    }

    public String getCreatorLastName() {
        return creatorLastName;
    }

    public void setCreatorLastName(String creatorLastName) {
        this.creatorLastName = creatorLastName;
    }

    public LocalDate getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(LocalDate releaseDate) {
        this.releaseDate = releaseDate;
    }

    public LocalDate getPublishDate() {
        return publishDate;
    }

    public void setPublishDate(LocalDate publishDate) {
        this.publishDate = publishDate;
    }

    public String getSquareCoverGfxUrl() {
        return squareCoverGfxUrl;
    }

    public void setSquareCoverGfxUrl(String squareCoverGfxUrl) {
        this.squareCoverGfxUrl = squareCoverGfxUrl;
    }

    public String getYoutubeThumbnailGfxUrl() {
        return youtubeThumbnailGfxUrl;
    }

    public void setYoutubeThumbnailGfxUrl(String youtubeThumbnailGfxUrl) {
        this.youtubeThumbnailGfxUrl = youtubeThumbnailGfxUrl;
    }

    public String getMp3TaggedUrl() {
        return mp3TaggedUrl;
    }

    public void setMp3TaggedUrl(String mp3TaggedUrl) {
        this.mp3TaggedUrl = mp3TaggedUrl;
    }

    public String getMp3UntaggedUrl() {
        return mp3UntaggedUrl;
    }

    public void setMp3UntaggedUrl(String mp3UntaggedUrl) {
        this.mp3UntaggedUrl = mp3UntaggedUrl;
    }

    public String getWavTaggedUrl() {
        return wavTaggedUrl;
    }

    public void setWavTaggedUrl(String wavTaggedUrl) {
        this.wavTaggedUrl = wavTaggedUrl;
    }

    public String getWavUntaggedUrl() {
        return wavUntaggedUrl;
    }

    public void setWavUntaggedUrl(String wavUntaggedUrl) {
        this.wavUntaggedUrl = wavUntaggedUrl;
    }

    public Long getId() {
        return id;
    }

}
