package pl.tomaszbuga.homemanagementapp.beat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.FileSystemUtils;
import org.springframework.web.multipart.MultipartFile;
import pl.tomaszbuga.homemanagementapp.utils.FileUploaderService;

import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.stream.Stream;

@Service
public class BeatFileUploaderService implements FileUploaderService {

    private final Path root = Paths.get("storage");
    private BeatService beatService;

    @Autowired
    public BeatFileUploaderService(BeatService beatService){
        this.beatService = beatService;
    }

    @Override
    public void init() {
        try {
            Files.createDirectory(root);
        } catch (IOException e) {
            throw new RuntimeException("Could not initialize folder for upload!");
        }
    }

    @Override
    public void save(MultipartFile file) {
        try {
            Files.copy(file.getInputStream(), root.resolve(file.getOriginalFilename()));
        } catch (Exception e) {
            throw new RuntimeException("Could not store the file. Error: " + e.getMessage());
        }
    }

    public void saveFileInFolderBasedOnFormatType(MultipartFile multipartFile, String beatName, String formatType) {
        try {
            Beat beat = beatService.getBeatByBeatName(beatName);
            String uploadDir = root + "/" + beatName + "/" + formatType;
            Path uploadPath = Paths.get(uploadDir);

            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }

            if (beat != null) {
                switch (formatType) {
                    case "mp3T":
                        beat.setMp3TaggedUrl(uploadDir + "/" + multipartFile.getOriginalFilename());
                        break;
                    case "mp3U":
                        beat.setMp3UntaggedUrl(uploadDir + "/" + multipartFile.getOriginalFilename());
                        break;
                    case "wavT":
                        beat.setWavTaggedUrl(uploadDir + "/" + multipartFile.getOriginalFilename());
                        break;
                    case "wavU":
                        beat.setWavUntaggedUrl(uploadDir + "/" + multipartFile.getOriginalFilename());
                        break;
                    case "imgY":
                        beat.setYoutubeThumbnailGfxUrl(uploadDir + "/" + multipartFile.getOriginalFilename());
                        break;
                    case "imgS":
                        beat.setSquareCoverGfxUrl(uploadDir + "/" + multipartFile.getOriginalFilename());
                        break;
                }
                beatService.updateBeat(beat);
            }

            try (InputStream inputStream = multipartFile.getInputStream()) {
                Path filePath = uploadPath.resolve(multipartFile.getOriginalFilename());
                Files.copy(inputStream, filePath, StandardCopyOption.REPLACE_EXISTING);
            } catch (IOException ex) {
                throw new IOException("Could not save the file: " + beatName);
            }

        } catch (Exception e) {
            throw new RuntimeException("Could not save the file. Error: " + e.getMessage());
        }
    }

    public Resource loadByNameAndFormat(String filename, String formatType) {
        try {
            Beat beat = beatService.getBeatByBeatName(filename);
            String beatUrl = "";

            switch (formatType) {
                case "mp3T":
                    beatUrl = beat.getMp3TaggedUrl();
                    break;
                case "mp3U":
                    beatUrl = beat.getMp3UntaggedUrl();
                    break;
                case "wavT":
                    beatUrl = beat.getWavTaggedUrl();
                    break;
                case "wavU":
                    beatUrl = beat.getWavUntaggedUrl();
                    break;
                case "imgY":
                    beatUrl = beat.getYoutubeThumbnailGfxUrl();
                    break;
                case "imgS":
                    beatUrl = beat.getSquareCoverGfxUrl();
                    break;
            }

            Path filePath = Paths.get(beatUrl);
            Resource resource = new UrlResource(filePath.toUri());

            if (resource.exists() || resource.isReadable()) {
                return resource;
            } else {
                throw new RuntimeException("Could not read the file!");
            }
        } catch (MalformedURLException e) {
            throw new RuntimeException("Error: " + e.getMessage());
        }
    }

    @Override
    public Resource load(String filename) {
        try {
            Beat beat = beatService.getBeatByBeatName(filename);
            String beatUrl = root + beat.getMp3TaggedUrl();
            Path filePath = Paths.get(beatUrl);
            Resource resource = new UrlResource(filePath.toUri());

            if (resource.exists() || resource.isReadable()) {
                return resource;
            } else {
                throw new RuntimeException("Could not read the file!");
            }
        } catch (MalformedURLException e) {
            throw new RuntimeException("Error: " + e.getMessage());
        }
    }

    @Override
    public void deleteByNameAndFormat(String beatName, String formatType) {
        Beat beat = beatService.getBeatByBeatName(beatName);
        clearUrlForFormatType(formatType, beat);
        beatService.updateBeat(beat);

        String fileDir = root + "/" + beatName + "/" + formatType + "/";
        Path filePath = Paths.get(fileDir);

        FileSystemUtils.deleteRecursively(filePath.toFile());
    }

    private void clearUrlForFormatType(String formatType, Beat beat) {
        switch (formatType) {
            case "mp3T":
                beat.setMp3TaggedUrl(null);
                break;
            case "mp3U":
                beat.setMp3UntaggedUrl(null);
                break;
            case "wavT":
                beat.setWavTaggedUrl(null);
                break;
            case "wavU":
                beat.setWavUntaggedUrl(null);
                break;
            case "imgY":
                beat.setYoutubeThumbnailGfxUrl(null);
                break;
            case "imgS":
                beat.setSquareCoverGfxUrl(null);
                break;
        }
    }

    @Override
    public void deleteAll() {
        FileSystemUtils.deleteRecursively(root.toFile());
    }

    @Override
    public Stream<Path> loadAll() {
        try {
            return Files
                    .walk(this.root, 1)
                    .filter(path -> !path.equals(this.root))
                    .map(this.root::relativize);
        } catch (IOException e) {
            throw new RuntimeException("Could not load the files!");
        }
    }
}