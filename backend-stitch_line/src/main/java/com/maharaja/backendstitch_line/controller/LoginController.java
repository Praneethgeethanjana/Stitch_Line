package com.maharaja.backendstitch_line.controller;

import com.maharaja.backendstitch_line.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * @auther Praneeth Geethanjana <geethanjana10@gmail.com>
 * @Since 12/4/2021
 */

@RestController
@RequestMapping("/login")
@CrossOrigin("*")
public class LoginController {

    @Autowired
    private LoginService loginService;



    @PostMapping("/user/{username}/{password}")
    public ResponseEntity loginUser(@PathVariable String username, @PathVariable String password){

        return ResponseEntity.ok(loginService.loginUser(username,password));

    }
}
