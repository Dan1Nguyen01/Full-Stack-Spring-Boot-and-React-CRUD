package com.dan.fullStack.repository;

import com.dan.fullStack.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
