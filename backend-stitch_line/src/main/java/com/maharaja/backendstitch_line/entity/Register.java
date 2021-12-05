package com.maharaja.backendstitch_line.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * @auther Praneeth Geethanjana <geethanjana10@gmail.com>
 * @Since 12/4/2021
 */

@Document
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Register {
    @Id
    private String username;
    private String password;
    private String name;
    private int mobile_number;
    private String date_of_birth;
    private String gender;
    private String language;
}
