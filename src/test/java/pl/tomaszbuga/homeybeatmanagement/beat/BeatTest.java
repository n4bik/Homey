package pl.tomaszbuga.homeybeatmanagement.beat;

import org.apache.commons.lang3.reflect.FieldUtils;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import java.time.LocalDate;

public class BeatTest {
    private final String beatName = "Test Beat Name";
    private final String creatorFirstName = "Test Creator First Name";
    private final String creatorLastName = "Test Creator Last Name";
    private final String description = "Test Description";
    private final String mp3TaggedUrl = "Test Mp3 Tagged Url";
    private final String mp3UntaggedUrl = "Test Mp3 Unagged Url";
    private final String wavTaggedUrl = "Test Wav Tagged Url";
    private final String wavUntaggedUrl = "Test Wav Unagged Url";
    private final LocalDate publishDate = LocalDate.now();
    private final LocalDate releaseDate = LocalDate.now();
    private final String squareCoverGfxUrl = "Test Square Cover Graphic URL";
    private final String youtubeThumbnailGfxUrl = "Test YouTube Thumbnail Graphic URL";
    private Beat beat;

    @BeforeMethod
    public void setUp() {
        beat = new Beat();
        beat.setBeatName(beatName);
        beat.setCreatorFirstName(creatorFirstName);
        beat.setCreatorLastName(creatorLastName);
        beat.setDescription(description);
        beat.setMp3TaggedUrl(mp3TaggedUrl);
        beat.setMp3UntaggedUrl(mp3UntaggedUrl);
        beat.setWavTaggedUrl(wavTaggedUrl);
        beat.setWavUntaggedUrl(wavUntaggedUrl);
        beat.setPublishDate(publishDate);
        beat.setReleaseDate(releaseDate);
        beat.setSquareCoverGfxUrl(squareCoverGfxUrl);
        beat.setYoutubeThumbnailGfxUrl(youtubeThumbnailGfxUrl);
    }

    @AfterMethod
    public void tearDown() {
    }

    @Test
    public void testGetBeatName() {
        Assert.assertEquals(
                beatName,
                beat.getBeatName(),
                String.format(
                        "Should be '%s', but is '%s'",
                        beatName,
                        beat.getBeatName()));
    }

    @Test
    public void testSetBeatName() {
        //Assign
        String newBeatName = beatName + " EDIT";
        //Act
        beat.setBeatName(newBeatName);
        //Assert
        Assert.assertEquals(
                newBeatName,
                beat.getBeatName(),
                String.format(
                        "Should be '%s', but is '%s'",
                        newBeatName,
                        beat.getBeatName()));
    }

    @Test
    public void testGetDescription() {
        Assert.assertEquals(
                description,
                beat.getDescription(),
                String.format(
                        "Should be '%s', but is '%s'",
                        description,
                        beat.getDescription()));
    }

    @Test
    public void testSetDescription() {
        //Assign
        String newDescription = description + " EDIT";
        //Act
        beat.setDescription(newDescription);
        //Assert
        Assert.assertEquals(
                newDescription,
                beat.getDescription(),
                String.format(
                        "Should be '%s', but is '%s'",
                        newDescription,
                        beat.getDescription()));
    }

    @Test
    public void testGetCreatorFirstName() {
        Assert.assertEquals(
                creatorFirstName,
                beat.getCreatorFirstName(),
                String.format(
                        "Should be '%s', but is '%s'",
                        creatorFirstName,
                        beat.getCreatorFirstName()));
    }

    @Test
    public void testSetCreatorFirstName() {
        //Assign
        String newCreatorFirstName = creatorFirstName + " EDIT";
        //Act
        beat.setCreatorFirstName(newCreatorFirstName);
        //Assert
        Assert.assertEquals(
                newCreatorFirstName,
                beat.getCreatorFirstName(),
                String.format(
                        "Should be '%s', but is '%s'",
                        newCreatorFirstName,
                        beat.getCreatorFirstName()));
    }

    @Test
    public void testGetCreatorLastName() {
        Assert.assertEquals(
                creatorLastName,
                beat.getCreatorLastName(),
                String.format(
                        "Should be '%s', but is '%s'",
                        creatorLastName,
                        beat.getCreatorLastName()));
    }

    @Test
    public void testSetCreatorLastName() {
        //Assign
        String newCreatorLastName = creatorLastName + " EDIT";
        //Act
        beat.setCreatorLastName(newCreatorLastName);
        //Assert
        Assert.assertEquals(
                newCreatorLastName,
                beat.getCreatorLastName(),
                String.format(
                        "Should be '%s', but is '%s'",
                        newCreatorLastName,
                        beat.getCreatorLastName()));
    }

    @Test
    public void testGetReleaseDate() {
        Assert.assertEquals(
                releaseDate,
                beat.getReleaseDate(),
                String.format(
                        "Should be '%s', but is '%s'",
                        releaseDate,
                        beat.getReleaseDate()));
    }

    @Test
    public void testSetReleaseDate() {
        //Assign
        LocalDate newReleaseDate = LocalDate.of(2020, 10, 20);
        //Act
        beat.setReleaseDate(newReleaseDate);
        //Assert
        Assert.assertEquals(
                newReleaseDate,
                beat.getReleaseDate(),
                String.format(
                        "Should be '%s', but is '%s'",
                        newReleaseDate,
                        beat.getReleaseDate()));
    }

    @Test
    public void testGetPublishDate() {
        Assert.assertEquals(
                publishDate,
                beat.getPublishDate(),
                String.format(
                        "Should be '%s', but is '%s'",
                        publishDate,
                        beat.getPublishDate()));
    }

    @Test
    public void testSetPublishDate() {
        //Assign
        LocalDate newPublishDate = LocalDate.of(2020, 10, 20);
        //Act
        beat.setPublishDate(newPublishDate);
        //Assert
        Assert.assertEquals(
                newPublishDate,
                beat.getPublishDate(),
                String.format(
                        "Should be '%s', but is '%s'",
                        newPublishDate,
                        beat.getPublishDate()));
    }

    @Test
    public void testGetSquareCoverGfxUrl() {
        Assert.assertEquals(
                squareCoverGfxUrl,
                beat.getSquareCoverGfxUrl(),
                String.format(
                        "Should be '%s', but is '%s'",
                        squareCoverGfxUrl,
                        beat.getSquareCoverGfxUrl()));
    }

    @Test
    public void testSetSquareCoverGfxUrl() {
        //Assign
        String newSquareCoverGfxUrl = squareCoverGfxUrl + " EDIT";
        //Act
        beat.setSquareCoverGfxUrl(newSquareCoverGfxUrl);
        //Assert
        Assert.assertEquals(
                newSquareCoverGfxUrl,
                beat.getSquareCoverGfxUrl(),
                String.format(
                        "Should be '%s', but is '%s'",
                        newSquareCoverGfxUrl,
                        beat.getSquareCoverGfxUrl()));
    }

    @Test
    public void testGetYoutubeThumbnailGfxUrl() {
        Assert.assertEquals(
                youtubeThumbnailGfxUrl,
                beat.getYoutubeThumbnailGfxUrl(),
                String.format(
                        "Should be '%s', but is '%s'",
                        youtubeThumbnailGfxUrl,
                        beat.getYoutubeThumbnailGfxUrl()));
    }

    @Test
    public void testSetYoutubeThumbnailGfxUrl() {
        //Assign
        String newYoutubeThumbnailGfxUrl = youtubeThumbnailGfxUrl + " EDIT";
        //Act
        beat.setYoutubeThumbnailGfxUrl(newYoutubeThumbnailGfxUrl);
        //Assert
        Assert.assertEquals(
                newYoutubeThumbnailGfxUrl,
                beat.getYoutubeThumbnailGfxUrl(),
                String.format(
                        "Should be '%s', but is '%s'",
                        newYoutubeThumbnailGfxUrl,
                        beat.getYoutubeThumbnailGfxUrl()));
    }

    @Test
    public void testGetMp3TaggedUrl() {
        Assert.assertEquals(
                mp3TaggedUrl,
                beat.getMp3TaggedUrl(),
                String.format(
                        "Should be '%s', but is '%s'",
                        mp3TaggedUrl,
                        beat.getMp3TaggedUrl()));
    }

    @Test
    public void testSetMp3TaggedUrl() {
        //Assign
        String newMp3TaggedUrl = mp3TaggedUrl + " EDIT";
        //Act
        beat.setMp3TaggedUrl(newMp3TaggedUrl);
        //Assert
        Assert.assertEquals(
                newMp3TaggedUrl,
                beat.getMp3TaggedUrl(),
                String.format(
                        "Should be '%s', but is '%s'",
                        newMp3TaggedUrl,
                        beat.getMp3TaggedUrl()));
    }

    @Test
    public void testGetMp3UntaggedUrl() {
        Assert.assertEquals(
                mp3UntaggedUrl,
                beat.getMp3UntaggedUrl(),
                String.format(
                        "Should be '%s', but is '%s'",
                        mp3UntaggedUrl,
                        beat.getMp3UntaggedUrl()));
    }

    @Test
    public void testSetMp3UntaggedUrl() {
        //Assign
        String newMp3UntaggedUrl = mp3UntaggedUrl + " EDIT";
        //Act
        beat.setMp3UntaggedUrl(newMp3UntaggedUrl);
        //Assert
        Assert.assertEquals(
                newMp3UntaggedUrl,
                beat.getMp3UntaggedUrl(),
                String.format(
                        "Should be '%s', but is '%s'",
                        newMp3UntaggedUrl,
                        beat.getMp3UntaggedUrl()));
    }

    @Test
    public void testGetWavTaggedUrl() {
        Assert.assertEquals(
                wavTaggedUrl,
                beat.getWavTaggedUrl(),
                String.format(
                        "Should be '%s', but is '%s'",
                        wavTaggedUrl,
                        beat.getWavTaggedUrl()));
    }

    @Test
    public void testSetWavTaggedUrl() {
        //Assign
        String newWavTaggedUrl = wavTaggedUrl + " EDIT";
        //Act
        beat.setWavTaggedUrl(newWavTaggedUrl);
        //Assert
        Assert.assertEquals(
                newWavTaggedUrl,
                beat.getWavTaggedUrl(),
                String.format(
                        "Should be '%s', but is '%s'",
                        newWavTaggedUrl,
                        beat.getWavTaggedUrl()));
    }

    @Test
    public void testGetWavUntaggedUrl() {
        Assert.assertEquals(
                wavUntaggedUrl,
                beat.getWavUntaggedUrl(),
                String.format(
                        "Should be '%s', but is '%s'",
                        wavUntaggedUrl,
                        beat.getWavUntaggedUrl()));
    }

    @Test
    public void testSetWavUntaggedUrl() {
        //Assign
        String newWavUntaggedUrl = wavUntaggedUrl + " EDIT";
        //Act
        beat.setWavUntaggedUrl(newWavUntaggedUrl);
        //Assert
        Assert.assertEquals(
                newWavUntaggedUrl,
                beat.getWavUntaggedUrl(),
                String.format(
                        "Should be '%s', but is '%s'",
                        newWavUntaggedUrl,
                        beat.getWavUntaggedUrl()));
    }

    @Test
    public void testGetId() {
        Long id = 1L;
        Beat beat = new Beat();

        try {
            //Using reflection for setting the Beat's ID, as there is
            //no setter for ID, as the field is generated automatically
            FieldUtils.writeField(beat, "id", id, true);
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        }

        Assert.assertEquals(
                id,
                beat.getId(),
                String.format(
                        "Should be '%s', but is '%s'",
                        id,
                        beat.getId()));
    }
}