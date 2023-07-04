package com.dan.fullStack.controller;

import com.dan.fullStack.exception.UserNotFoundException;
import com.dan.fullStack.model.User;
import com.dan.fullStack.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.nio.file.Path;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user")
    public User newUser (@RequestBody User newUser){
            return userRepository.save(newUser);
    }

    @GetMapping("/users")
    public List<User> allUsers(){
        return userRepository.findAll();
    }

    @GetMapping("/user/{id}")
    public User getUserById(@PathVariable Long id){
        return userRepository.findById(id).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/edituser/{id}")
    public User editUser(@RequestBody User newUser, @PathVariable Long id){
        return userRepository.findById(id)
                .map(user -> {
                    user.setUserName(newUser.getUserName());
                    user.setName(newUser.getName());
                    user.setName(newUser.getEmail());
                return userRepository.save(user);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @DeleteMapping("/deleteuser/{id}")
    public String deleteUser(@PathVariable Long id){
        if(!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }

         userRepository.deleteById(id);
        return "User with id "+ id + "has been delete success.";
    }
}
