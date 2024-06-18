package com.example.demo;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import java.io.IOException;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class HomeController implements HomeApi {

  @Override
  public HelloDto uploadContent(@Valid HelloUploadDto uploadDto)
      throws IOException {
    var fileBytes = uploadDto.file.getBytes();
    return new HelloDto(uploadDto.title, fileBytes);
  }

  public record HelloDto(String title, byte[] file) {}

  public record HelloUploadDto(@NotNull String title, MultipartFile file) {}
}
