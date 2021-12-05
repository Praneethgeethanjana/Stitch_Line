package com.maharaja.backendstitch_line.controller;

import com.maharaja.backendstitch_line.dto.RegisterDTO;
import com.maharaja.backendstitch_line.service.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * @auther Praneeth Geethanjana <geethanjana10@gmail.com>
 * @Since 12/4/2021
 */

@RestController
@RequestMapping(value = "/api/v1/service/register")
@CrossOrigin
public class RegisterController {

    @Autowired
    private RegisterService service;

    @PostMapping
    public ResponseEntity saveRegister(@RequestBody RegisterDTO dto) throws Exception{
        return ResponseEntity.ok(service.addRegister(dto));
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity deleteRegister(@PathVariable String id) throws Exception{
        return ResponseEntity.ok(service.deleteRegister(id));
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity searchRegister(@PathVariable String id) throws Exception{
        return ResponseEntity.ok(service.searchRegister(id));
    }

    @PutMapping
    public ResponseEntity updateRegister(@RequestBody RegisterDTO dto) throws Exception{
        return ResponseEntity.ok(service.updateRegister(dto));
    }

    @GetMapping
    public ResponseEntity getAllRegisters() throws Exception{
        return ResponseEntity.ok(service.getAllRegisters());
    }

}
