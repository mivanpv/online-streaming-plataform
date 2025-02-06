package com.example.demo.controller;

import com.example.demo.model.MovieTransaction;
import com.example.demo.service.MovieTransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/transactions")
public class MovieTransactionController {

    @Autowired
    private MovieTransactionService service;

    // Endpoint para guardar una nueva transacción (renta o compra)
    @PostMapping("/save")
    public MovieTransaction saveTransaction(@RequestParam String userId,
                                            @RequestParam String movieId,
                                            @RequestParam String transactionType) throws IOException {
        return service.saveTransaction(userId, movieId, transactionType);
    }

    // Endpoint para obtener todas las transacciones
    @GetMapping("/all")
    public List<MovieTransaction> getAllTransactions() throws IOException {
        return service.getAllTransactions();
    }

    // Endpoint para buscar transacciones por usuario
    @GetMapping("/user/{userId}")
    public List<MovieTransaction> getTransactionsByUser(@PathVariable String userId) throws IOException {
        return service.getTransactionsByUser(userId);
    }

    // Endpoint para buscar una transacción por ID
    @GetMapping("/{id}")
    public Optional<MovieTransaction> getTransactionById(@PathVariable String id) throws IOException {
        return service.getTransactionById(id);
    }
}
