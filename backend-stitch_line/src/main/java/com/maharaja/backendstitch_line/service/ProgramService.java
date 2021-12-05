package com.maharaja.backendstitch_line.service;

import com.maharaja.backendstitch_line.dto.ProgramDTO;
import java.util.ArrayList;

/**
 * @auther Praneeth Geethanjana <geethanjana10@gmail.com>
 * @Since 12/4/2021
 */

public interface ProgramService {

        boolean addProgram(ProgramDTO dto);

        boolean deleteProgram(String id);

        boolean updateProgram(ProgramDTO dto);

        ProgramDTO searchProgram(String id);

        ArrayList<ProgramDTO>  getAllPrograms();

}
