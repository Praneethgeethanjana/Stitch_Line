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
public class Program {
        @Id
        private String program_id;
        private String name;
        private String start_date;
        private String end_date;

}
