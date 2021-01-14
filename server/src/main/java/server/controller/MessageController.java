package server.controller;

import lombok.NonNull;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import server.entity.Message;
import server.entity.User;
import server.service.MessageService;

import java.util.Collection;


@RestController
@RequestMapping("/message")
public class MessageController {
    final MessageService messageService;

    public MessageController(@NonNull MessageService messageSer) {
        this.messageService = messageSer;
    }

    @GetMapping("/{sender}/{receiver}")
    ResponseEntity<Collection<Message>>  getChat(@PathVariable User sender,
                                                 @PathVariable User receiver){
        return ResponseEntity.ok(messageService.getChat(sender,receiver));
    }

    @PostMapping("/{sender}/{receiver}")
    ResponseEntity<Void> sendChat(@PathVariable User sender,
                                  @PathVariable User receiver,
                                  @RequestBody String message){
            messageService.sendMessage(sender,receiver,message);

            return ResponseEntity
                    .noContent()
                    .build();
    }
}
