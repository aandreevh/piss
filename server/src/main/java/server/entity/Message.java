package server.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "message")
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    @JoinColumn(name = "sender")
    User sender;

    @ManyToOne
    @JoinColumn(name = "receiver")
    User receiver;

    String message;

    @Column
    @Temporal(TemporalType.TIMESTAMP)
    private Date created;
}
