package com.example.demo.service;

import co.elastic.clients.elasticsearch.ElasticsearchClient;
import co.elastic.clients.elasticsearch.core.GetResponse;
import co.elastic.clients.elasticsearch.core.IndexResponse;
import co.elastic.clients.elasticsearch.core.SearchResponse;
import co.elastic.clients.elasticsearch.core.search.Hit;
import com.example.demo.model.MovieTransaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class MovieTransactionService {

    private final ElasticsearchClient client;
    private static final String INDEX_NAME = "rentas_compras";

    @Autowired
    public MovieTransactionService(ElasticsearchClient client) {
        this.client = client;
    }

    // Guardar una nueva transacción (renta o compra)
    public MovieTransaction saveTransaction(String userId, String movieId, String transactionType) throws IOException {
        MovieTransaction transaction = new MovieTransaction(userId, movieId, transactionType, LocalDateTime.now());
        // Si el ID no está seteado, se asigna en el constructor (ya lo hacemos)
        IndexResponse response = client.index(i -> i
                .index(INDEX_NAME)
                .id(transaction.getId())
                .document(transaction)
        );
        System.out.println("Documento guardado con ID: " + response.id());
        return transaction;
    }

    // Obtener todas las transacciones
    public List<MovieTransaction> getAllTransactions() throws IOException {
        SearchResponse<MovieTransaction> response = client.search(s -> s
                        .index(INDEX_NAME),
                MovieTransaction.class
        );

        return response.hits().hits().stream()
                .map(Hit::source)
                .collect(Collectors.toList());
    }

    // Buscar transacciones por usuario
    public List<MovieTransaction> getTransactionsByUser(String userId) throws IOException {
        SearchResponse<MovieTransaction> response = client.search(s -> s
                        .index(INDEX_NAME)
                        .query(q -> q.term(t -> t.field("userId").value(userId))),
                MovieTransaction.class
        );

        return response.hits().hits().stream()
                .map(Hit::source)
                .collect(Collectors.toList());
    }

    // Buscar una transacción por ID
    public Optional<MovieTransaction> getTransactionById(String id) throws IOException {
        GetResponse<MovieTransaction> response = client.get(g -> g
                        .index(INDEX_NAME)
                        .id(id),
                MovieTransaction.class
        );

        return response.found() ? Optional.of(response.source()) : Optional.empty();
    }

    // Podrías agregar métodos para eliminar o actualizar si es necesario.
}
