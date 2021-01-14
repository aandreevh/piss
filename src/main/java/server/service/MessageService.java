package server.service;

import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import server.entity.Message;
import server.entity.User;
import server.repository.MessageRepository;

import java.util.Collection;
import java.util.Date;

@Service
public class MessageService {

    @Autowired
    MessageRepository repository;

    public Message sendMessage(@NonNull User sender,
                               @NonNull User receiver,
                               String message){
        var msg = new Message(0,sender,receiver,message,new Date());

        return repository.save(msg);
    }

    public Collection<Message> getChat(@NonNull User sender,
                                           @NonNull User receiver){
            return repository.getAllBySenderAndReceiver(sender,receiver);
    }
}
