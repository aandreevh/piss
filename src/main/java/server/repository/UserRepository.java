package server.repository;

import org.springframework.data.repository.CrudRepository;
import server.entity.User;

public interface UserRepository extends CrudRepository<User, Long> {
}
