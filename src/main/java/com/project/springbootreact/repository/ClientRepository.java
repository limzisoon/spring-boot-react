package com.project.springbootreact.repository;

import com.project.springbootreact.domain.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Long> {
}
