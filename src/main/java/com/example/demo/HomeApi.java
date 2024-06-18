package com.example.demo;

import java.io.IOException;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;
import static org.springframework.http.MediaType.MULTIPART_FORM_DATA_VALUE;

import com.example.demo.HomeController.HelloDto;
import com.example.demo.HomeController.HelloUploadDto;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Tag(name = "Hello World Api", description = "This is a test api")
@RequestMapping("api/hello")
public interface HomeApi {

  @Operation(summary = "Upload new content", description = "Upload test content")
  @PostMapping(produces = APPLICATION_JSON_VALUE, consumes = MULTIPART_FORM_DATA_VALUE)
  HelloDto uploadContent(HelloUploadDto contentUploadDto) throws IOException;
}
