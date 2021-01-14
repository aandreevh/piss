package server.repository;

import org.springframework.data.repository.CrudRepository;
import server.entity.Message;
import server.entity.User;

import java.util.List;

public interface MessageRepository extends CrudRepository<Message, Long> {

    List<Message> getAllBySenderAndReceiver(User sender,User receiver);
}
