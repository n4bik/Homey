package pl.tomaszbuga.homemanagementapp.utils;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Path;
import java.util.stream.Stream;

public interface FileUploaderService {

    void init();

    void save(MultipartFile file);

    Resource load(String fileName);

    void deleteAll();

    void deleteByNameAndFormat(String fileName, String formatType);

    Stream<Path> loadAll();
}