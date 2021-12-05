package com.maharaja.backendstitch_line.service.impl;

import com.maharaja.backendstitch_line.entity.Register;
import com.maharaja.backendstitch_line.repo.RegisterRepo;
import com.maharaja.backendstitch_line.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

/**
 * @auther Praneeth Geethanjana <geethanjana10@gmail.com>
 * @Since 12/4/2021
 */

@Service
@Transactional
public class LoginServiceImpl implements LoginService {

    @Autowired
    private RegisterRepo registerRepo;

    enum user_result{ADMINNOTFOUND,ADMINDETAILWRONG,ADMINDETAILRIGHT}


    @Override
    public Enum loginUser(String username, String password) {
        Optional<Register> login = registerRepo.findById(username);
        if (login.isPresent()){
            Register adminResult = login.get();
            if (adminResult.getPassword().equals(password.trim())){
                return user_result.ADMINDETAILRIGHT;
            }else {
                return user_result.ADMINDETAILWRONG;
            }
        }
        return user_result.ADMINNOTFOUND;
    }
}
