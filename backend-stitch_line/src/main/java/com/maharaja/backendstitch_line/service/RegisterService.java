package com.maharaja.backendstitch_line.service;

import com.maharaja.backendstitch_line.dto.RegisterDTO;

import java.util.ArrayList;

/**
 * @auther Praneeth Geethanjana <geethanjana10@gmail.com>
 * @Since 12/4/2021
 */
public interface RegisterService {

        boolean addRegister(RegisterDTO dto);

        boolean deleteRegister(String id);

        boolean updateRegister(RegisterDTO dto);

        RegisterDTO searchRegister(String id);

        ArrayList<RegisterDTO> getAllRegisters();
}
