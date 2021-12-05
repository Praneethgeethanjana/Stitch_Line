package com.maharaja.backendstitch_line.service.impl;

import com.maharaja.backendstitch_line.dto.ProgramDTO;
import com.maharaja.backendstitch_line.entity.Program;
import com.maharaja.backendstitch_line.repo.ProgramRepo;
import com.maharaja.backendstitch_line.service.ProgramService;
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
public class ProgramServiceImpl implements ProgramService {

    @Autowired
    private ProgramRepo programRepo;

    @Autowired
    private ModelMapper mapper;

    @Override
    public boolean addProgram(ProgramDTO dto) {
        if (programRepo.existsById(dto.getProgram_id())){
            throw new RuntimeException("Program Already Exist");
        }
        programRepo.save(mapper.map(dto, Program.class));
        return true;
    }

    @Override
    public boolean deleteProgram(String id) {
        programRepo.deleteById(id);
        return true;
    }

    @Override
    public boolean updateProgram(ProgramDTO dto) {
        if(programRepo.existsById(dto.getProgram_id())){
            programRepo.save(mapper.map(dto,Program.class));
            return true;
        }
        return false;
    }

    @Override
    public ProgramDTO searchProgram(String id) {
        Optional<Program> program= programRepo.findById(id);
        if(program.isPresent()){
            return mapper.map(program.get(),ProgramDTO.class);
        }
        return null;
    }

    @Override
    public ArrayList<ProgramDTO> getAllPrograms() {
        List<Program> all = programRepo.findAll();
        return mapper.map(all, new TypeToken<ArrayList<ProgramDTO>>() {
        }.getType());
    }
}
