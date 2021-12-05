package com.maharaja.backendstitch_line.service.impl;

import com.maharaja.backendstitch_line.dto.ProgramDTO;
import com.maharaja.backendstitch_line.dto.RegisterDTO;
import com.maharaja.backendstitch_line.entity.Program;
import com.maharaja.backendstitch_line.entity.Register;
import com.maharaja.backendstitch_line.repo.RegisterRepo;
import com.maharaja.backendstitch_line.service.RegisterService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * @auther Praneeth Geethanjana <geethanjana10@gmail.com>
 * @Since 12/4/2021
 */

@Service
@Transactional
public class RegisterServiceImpl implements RegisterService {

    @Autowired
    private RegisterRepo registerRepo;

    @Autowired
    private ModelMapper mapper;
    @Override
    public boolean addRegister(RegisterDTO dto) {
        if (registerRepo.existsById(dto.getUsername())){
            throw new RuntimeException("Registration Already Exist");
        }
        registerRepo.save(mapper.map(dto, Register.class));
        return true;
    }

    @Override
    public boolean deleteRegister(String id) {
        registerRepo.deleteById(id);
        return true;
    }

    @Override
    public boolean updateRegister(RegisterDTO dto) {
        if(registerRepo.existsById(dto.getUsername())){
            registerRepo.save(mapper.map(dto,Register.class));
            return true;
        }
        return false;
    }

    @Override
    public RegisterDTO searchRegister(String id) {
        Optional<Register> register= registerRepo.findById(id);
        if(register.isPresent()){
            return mapper.map(register.get(), RegisterDTO.class);
        }
        return null;
    }

    @Override
    public ArrayList<RegisterDTO> getAllRegisters() {
        List<Register> all = registerRepo.findAll();
        return mapper.map(all, new TypeToken<ArrayList<RegisterDTO>>() {
        }.getType());
    }
}
