package com.maharaja.backendstitch_line.controller;

import com.maharaja.backendstitch_line.dto.ProgramDTO;
import com.maharaja.backendstitch_line.service.ProgramService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * @auther Praneeth Geethanjana <geethanjana10@gmail.com>
 * @Since 12/4/2021
 */

@RestController
@RequestMapping(value = "/api/v1/service/program")
@CrossOrigin
public class ProgramController {

    @Autowired
    private ProgramService service;

    @PostMapping
    public ResponseEntity saveProgram(@RequestBody ProgramDTO dto)throws Exception{
        return ResponseEntity.ok(service.addProgram(dto));
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity deleteProgram(@PathVariable String id) throws Exception{
        return ResponseEntity.ok(service.deleteProgram(id));
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity searchProgram(@PathVariable String id) throws Exception{
        return ResponseEntity.ok(service.searchProgram(id));
    }

    @PutMapping
    public ResponseEntity updateProgram(@RequestBody ProgramDTO dto) throws Exception{
        return ResponseEntity.ok(service.updateProgram(dto));
    }

    @GetMapping
    public ResponseEntity getAllPrograms() throws Exception{
        return ResponseEntity.ok(service.getAllPrograms());
    }
}
