package com.maharaja.backendstitch_line.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @auther Praneeth Geethanjana <geethanjana10@gmail.com>
 * @Since 12/4/2021
 */

@NoArgsConstructor
@AllArgsConstructor
@Data
public class RegisterDTO {
    private String username;
    private String password;
    private String name;
    private int mobile_number;
    private String date_of_birth;
    private String gender;
    private String language;
}
