package com.javshop.service.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/system")
public class HealthCheckController {

    private final Logger log = LoggerFactory.getLogger(HealthCheckController.class);

    @RequestMapping("/healthcheck")
    public ResponseEntity<?> helthCheck() {
        return ResponseEntity.ok("Test Successfully!");
    }
}
