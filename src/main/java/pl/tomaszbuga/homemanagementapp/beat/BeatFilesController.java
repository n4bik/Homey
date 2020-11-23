package pl.tomaszbuga.homemanagementapp.beat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import pl.tomaszbuga.homemanagementapp.utils.ResponseMessage;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api/v1/beats")
public class BeatFilesController {

    @Autowired
    BeatFileUploaderService beatFileUploaderService;

    @PostMapping("/upload")
    public ResponseEntity<ResponseMessage> uploadFile(@RequestParam("file") MultipartFile file,
                                                      @RequestParam("beatName") String beatName,
                                                      @RequestParam("formatType") String formatType) {
        String message = "";

        try {
            beatFileUploaderService.saveFileInFolderBasedOnFormatType(file, beatName, formatType);
            message = "Uploaded the file successfully: " + file.getOriginalFilename();

            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(new ResponseMessage(message));
        } catch (Exception e) {
            message = "Could not upload the file: " + file.getOriginalFilename() + "!";

            return ResponseEntity
                    .status(HttpStatus.EXPECTATION_FAILED)
                    .body(new ResponseMessage(message));
        }
    }

    @GetMapping("/files")
    @ResponseBody
    public ResponseEntity<Resource> getFile(@RequestParam("beatName") String beatName,
                                            @RequestParam("formatType") String formatType) {
        Resource file = beatFileUploaderService.loadByNameAndFormat(beatName, formatType);

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION,
                        String.format("attachment; filename=\"%s\"", file.getFilename()))
                .body(file);
    }

    @DeleteMapping("/files")
    public void deleteFile(@RequestParam("beatName") String beatName,
                           @RequestParam("formatType") String formatType) {
        beatFileUploaderService.deleteByNameAndFormat(beatName, formatType);
    }
}
