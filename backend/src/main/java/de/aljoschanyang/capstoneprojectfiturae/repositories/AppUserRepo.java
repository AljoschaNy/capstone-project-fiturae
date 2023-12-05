package de.aljoschanyang.capstoneprojectfiturae.repositories;

import de.aljoschanyang.capstoneprojectfiturae.models.AppUser;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AppUserRepo extends MongoRepository<AppUser, String> {
    Optional<AppUser> findByEmail(String email);
}
