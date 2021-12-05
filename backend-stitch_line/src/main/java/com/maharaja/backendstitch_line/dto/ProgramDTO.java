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
public class ProgramDTO {
        private String program_id;
        private String name;
        private String start_date;
        private String end_date;

}
