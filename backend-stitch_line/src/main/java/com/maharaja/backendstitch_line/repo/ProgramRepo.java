package com.maharaja.backendstitch_line.repo;

import com.maharaja.backendstitch_line.entity.Program;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/**
 * @auther Praneeth Geethanjana <geethanjana10@gmail.com>
 * @Since 12/4/2021
 */

@Repository
public interface ProgramRepo extends MongoRepository<Program,String> {
}
